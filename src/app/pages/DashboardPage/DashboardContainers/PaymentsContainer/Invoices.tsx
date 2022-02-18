import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Grid } from "@mui/material";
import moment from "moment";
import { Box } from "@mui/system";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { TableNew } from "app/components/Table";
import { Drawer } from "app/components/Drawer";
import { H2, H3, H5 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { getInvoiceData, invoiceColoumns } from "./helper";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import OrderItemDetailsDrawer from "../SignleShipmentContainer/OrderItemDetailsDrawer";
import {
  getInvoiceList,
  getMultipleInvoicesPdf,
} from "../../../../../services/PaymentServices/index";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { SearchTableTop } from "../SearchContainer/style";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { FilterFlexBox } from "./style";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";

const initialValues = {
  invoiceNumber: "",
  fromDate: "",
  toDate: "",
};

const InvoicesContainer = ({ path: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [invoiceData, setInvoiceData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [downloading, setDownloading] = useState<boolean>(false)
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
    setDownloading(true)
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
    setDownloading(false)
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex alignItems="center">
          <H3 text={`${pagination.count} Invoices`} className="heading" />
          <H5
            text={`(${selectedRows.length} Selected)`}
            className="spanlabel"
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
    let urlParams = "",
      rest = values !== undefined ? values : prevValues;
    let params: any = {
      ...rest,
      page: page !== undefined ? page + 1 : pagination.page + 1,
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
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: (values) => getInvoiceListData(values),
  });

  return (
    <ModuleContainer>
      <H2 title="Invoices" />

      <Box mt={3} mb={2}>
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
              minDate={moment(values.fromDate).add(1, "days").toDate()}
              placeholder={"e.g 06/06/2021"}
              value={values.toDate || null}
              onChange={(val) => setFieldValue("toDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={3} lg={2}>
            <FilterFlexBox>
              <Button label="Search" onClick={handleSubmit} size="small" />
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>

      {loading ? (
        <TableSkeleton />
      ) : invoiceData?.length > 0 ? (
        <TableNew
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
        <NullState message="No Records Found" />
      )}

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        {drawerType === "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
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
