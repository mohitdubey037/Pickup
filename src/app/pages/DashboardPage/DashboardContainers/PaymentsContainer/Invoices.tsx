import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Grid, Box } from "@mui/material";
import moment from "moment";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { Drawer } from "app/components/Drawer";
import { H2, H3, H5 } from "app/components/Typography/Typography";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import TableSkeleton from "app/components/Table/TableSkeleton";
import SelectNew from "app/components/Select/SelectNew";
import NullState from "app/components/NullState/NullState";
import { Flex, SearchTableTop } from "app/components/CommonCss/CommonCss";
import {
  getInvoiceList,
  getMultipleInvoicesPdf,
} from "services/PaymentServices";
import { getInvoiceData, invoiceColoumns } from "./helper";
import InvoiceDetailsDrawer from "./InvoiceDetailsDrawer";
import OrderItemDetailsDrawer from "../SignleShipmentContainer/OrderItemDetailsDrawer";
import { FilterFlexBox } from "./style";
import { PAYMENT_STATUS } from "../../../../../constants";

const initialValues = {
  invoiceNumber: "",
  fromDate: "",
  toDate: "",
  isPayment: "",
};

const InvoicesContainer = ({ path }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [invoiceData, setInvoiceData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [prevValues, setPrevValues] = useState<any>(initialValues);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });
  const [sorting, setSorting] = useState({
    field: "invoiceCreatedAt",
    type: "desc",
  });

  const [selectedInvoiceId, setSelectedInvoiceId] = useState<any>("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "orderItemDetails") {
      return "Order Details";
    } else {
      return "";
    }
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type === "invoice" || type === "orderItemDetails") {
      setSelectedInvoiceId(id);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const downloadAll = async () => {
    setDownloading(true);
    const invoiceIds = invoiceData
      .filter((item, idx) => selectedRows.includes(idx))
      .map((inv) => inv.invoiceId);
    const res = (await getMultipleInvoicesPdf(invoiceIds)) as any;
    if (res?.error === null) {
      const blob = new Blob([res.response.data], {
        type: "application/x-rar-compressed",
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `Invoices_${moment().format("YYYYMMDD_HHmmss")}.rar`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setDownloading(false);
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex alignItems="center">
          <H3 text={`${pagination.count} Invoices`} className="heading" />
          <H5
            text={`(${selectedRows.length} Selected)`}
            className="spanlabel"
            ml={8}
            mt={4}
          />
        </Flex>
        <Button
          size="medium"
          secondary
          label="Download Selected"
          disabled={selectedRows.length === 0 || downloading}
          onClick={downloadAll}
          showLoader={downloading}
        />
      </SearchTableTop>
    );
  };

  useEffect(() => {
    getInvoiceListData();
  }, []);

  const getInvoiceListData = async (
    values?: object,
    page?: number,
    sort?: { field: string; type: string }
  ) => {
    setLoading(true);
    let urlParams = "",
      rest = values !== undefined ? values : prevValues;
    let params: any = {
      ...rest,
      page:
        values !== undefined
          ? 1
          : page !== undefined
          ? page + 1
          : pagination.page + 1,
      chunk: 10,
      sortingField: sort !== undefined ? sort.field : sorting.field,
      sortingType: sort !== undefined ? sort.type : sorting.type,
    };
    if (values) {
      setPrevValues(values);
    } else {
      resetForm({ values: prevValues });
    }
    if (sort) {
      setSorting({
        field: sort.field,
        type: sort.type,
      });
    }
    params["fromDate"] = params["fromDate"]
      ? moment(params["fromDate"]).format("YYYY-MM-DD")
      : "";
    params["toDate"] = params["toDate"]
      ? moment(params["toDate"]).format("YYYY-MM-DD")
      : "";
    let tempLen = Object.entries(params).length;
    Object.entries(params).forEach(
      ([key, value], index) =>
        (urlParams += value
          ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
          : "")
    );
    const res = (await getInvoiceList(urlParams)) as any;
    if (res?.error === null) {
      const data = res.response.data.data;
      setInvoiceData(data.list);
      setPagination({
        count: data.pageMetaData.total,
        page: data.pageMetaData.page - 1,
      });
    } else {
      setInvoiceData([]);
    }
    setLoading(false);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    resetForm,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: (values) => getInvoiceListData(values),
  });

  return (
    <ModuleContainer>
      <H2 title="Invoices" />

      <Box mt={4} mb={2}>
        <GridContainer container spacing={2}>
          <Grid item xs={6} sm={3} lg={2}>
            <Input
              id="invoiceNumber"
              name="invoiceNumber"
              initValue={values.invoiceNumber}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.invoiceNumber && errors.invoiceNumber}
              label="Invoice Number"
              placeholder="eg. 1234"
            />
          </Grid>
          <Grid item xs={6} sm={3} lg={2}>
            <DatePickerInput
              label="From Date"
              maxDate={
                values.toDate
                  ? moment(values.toDate).subtract(1, "days").toDate()
                  : new Date()
              }
              placeholder={"e.g 06/06/2021"}
              value={values.fromDate || null}
              onChange={(val) => setFieldValue("fromDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={3} lg={2}>
            <DatePickerInput
              label="To Date"
              maxDate={new Date()}
              minDate={
                !values.fromDate
                  ? null
                  : moment(values.fromDate).add(1, "days").toDate()
              }
              placeholder={"e.g 06/06/2021"}
              value={values.toDate || null}
              onChange={(val) => setFieldValue("toDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={3} lg={2}>
            <SelectNew
              name="isPayment"
              label="Status"
              placeholder="Select Invoice Status"
              options={PAYMENT_STATUS}
              value={values.isPayment}
              onChange={handleChange}
              allowEmpty
            />
          </Grid>
          <Grid item xs={6} sm={3} lg={2}>
            <FilterFlexBox>
              <Button
                label="Search"
                onClick={handleSubmit}
                size="small"
                disabled={loading}
              />
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>

      {loading && invoiceData?.length === 0 ? (
        <TableSkeleton />
      ) : invoiceData?.length > 0 ? (
        <Table
          loading={loading}
          tableTop={tableTop()}
          coloumns={invoiceColoumns}
          data={getInvoiceData(invoiceData, openInvoiceDrawer)}
          showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getInvoiceListData(undefined, page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getInvoiceListData(undefined, undefined, { field, type })
          }
        />
      ) : (
        <NullState />
      )}

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={setDrawerOpen}
        closeIcon
      >
        {drawerType === "invoice" ? (
          <InvoiceDetailsDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType === "orderItemDetails" ? (
          <OrderItemDetailsDrawer
            orderId={selectedInvoiceId}
            setDrawerOpen={setDrawerOpen}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default InvoicesContainer;
