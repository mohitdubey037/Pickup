import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Grid } from "@mui/material";
import moment from "moment";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { Drawer } from "app/components/Drawer";
import { H2, H3, H5 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { invoiceTable } from "./helper";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import OrderItemDetailsDrawer from "../SignleShipmentContainer/OrderItemDetailsDrawer";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import { SearchTableTop } from "../SearchContainer/style";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/system";
import { FilterFlexBox } from "./style";

const InvoicesContainer = ({ path: string }) => {
  const [invoiceData, setInvoiceData] = useState<any>([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<any>("");
  const [checkboxData, setCheckboxData] = useState<any>("");

  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newMultiplePdf, setNewMultiplePdf] = useState<any>([
    "https://pickups-staging.s3.ca-central-1.amazonaws.com/Invoice_1162.pdf",
    "https://pickups-staging.s3.ca-central-1.amazonaws.com/Invoice_1149.pdf",
  ]);

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(10);

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "orderDetails") {
      return "Order Details";
    } else {
      return "";
    }
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type === "invoice" || type === "orderDetails") {
      setSelectedInvoiceId(id);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const downloadAll = () => {
    // setMultiplePdf(
    const multiplePdf = invoiceData
      .filter((invoice, index) => checkboxData.includes(index))
      .map((inv) => inv.invoicePdf);
      newMultiplePdf.map((url) => {
      // window.open(url);
      let link: any = document.createElement("a");
      link.download = `${[url.split("/").length - 1]}`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      // document.body.removeChild(link);
    });
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex alignItems="center">
          <H3 text={`${invoiceData.length} Invoices`} className="heading" />
          <H5 text="(0 Selected)" className="spanlabel" />
        </Flex>
        <Button
          size="small"
          secondary
          label="Download Selected"
          onClick={() => {
            downloadAll();
          }}
          disabled
        />
      </SearchTableTop>
    );
  };

  useEffect(() => {
    getInvoiceListData();
  }, []);

  // useEffect(() => {
  //   console.log(invoiceData, page, totalPages, setTotalPages);
  // },[invoiceData, page, totalPages, setTotalPages])

  const getInvoiceListData = async (values?: object) => {
    let urlParams = "";
    if (values) {
      values["fromDate"] = values["fromDate"]
        ? moment(values["fromDate"]).format("YYYY-MM-DD")
        : "";
      values["toDate"] = values["toDate"]
        ? moment(values["toDate"]).format("YYYY-MM-DD")
        : "";
      urlParams += "?";
      let tempLen = Object.entries(values).length;
      Object.entries(values).forEach(
        ([key, value], index) =>
          (urlParams += value
            ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
            : "")
      );
    }
    getSearchInvoiceListData(urlParams);
  };

  const getSearchInvoiceListData = async (url?:any) => {
    const res = (await getInvoiceList(url)) as any;
    console.log(res);
    if (!res?.error) {
      const InvoiceList = res.response.data.data.list;
      console.log(InvoiceList);
      setInvoiceData(InvoiceList);
      setPage(res.response.data.data.pageMetaData.page - 1) 
      setTotalPages(res.response.data.data.pageMetaData.totalPages);
      setTotalData(res.response.data.data.pageMetaData.total);
    }
    else if (!res.error) {
      const InvoiceList = res;
      setInvoiceData(InvoiceList);
    }
  };

  const getSearchPaginatedData = async (page) => {
    if (page === 0) {
      getInvoiceListData();
    }
    else {
      const res = (await getInvoiceList('',page+1, 10)) as any;
      if (!res?.error) {
        const InvoiceList = res.response.data.data.list;
        console.log(InvoiceList);
        setPage(page);
        setInvoiceData(InvoiceList);
      }
      else if (!res.error) {
        const InvoiceList = res;
        setInvoiceData(InvoiceList);
      }
    }
  }


  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      invoiceNumber: "",
      fromDate: "",
      toDate: "",
    },
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
            placeholder="eg. 123,321"
          />
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <DatePickerInput
            label="From Date"
            maxDate={new Date()}
            placeholder={"e.g 06/06/2021"}
            value={values.fromDate || null}
            onChange={(val) => setFieldValue("fromDate", val)}
          />
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <DatePickerInput
            label="To Date"
            maxDate={new Date()}
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

      <Table
        data={invoiceTable(invoiceData, openInvoiceDrawer)}
        tableTop={tableTop()}
        dataChecked={(data: any) => {
          console.log('hiii');
          setCheckboxData(data);
        }}
        paginationData = {(page) => getSearchPaginatedData(page)}
        showCheckbox
        showPagination
        perPageRows={10}
        page={page}
        totalData = {totalData}
        totalPage = {totalPages}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        {drawerType === "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType === "orderDetails" ? (
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
