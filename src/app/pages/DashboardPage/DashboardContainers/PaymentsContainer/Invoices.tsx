import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import { Box } from "@material-ui/core";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { Drawer } from "app/components/Drawer";
import { H2 } from "app/components/Typography/Typography";
import { invoiceTable } from "./helper";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import OrderDetailsDrawer from "../SignleShipmentContainer/OrderDetailsDrawer";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";
import { DateComponent } from './InvoiceStyle';
import moment from "moment";

const InvoicesContainer = ({ path: string }) => {
  const [invoiceData, setInvoiceData] = useState<any>([]);
  const [invoicePdf, setInvoicePdf] = useState<any>("");
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<any>("");
  const [checkboxData, setCheckboxData] = useState<any>("");

  // const [selectedOrderId, setSelectedOrderId] = useState("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newMultiplePdf, setNewMultiplePdf] = useState<any>(["https://pickups-staging.s3.ca-central-1.amazonaws.com/Invoice_1162.pdf",
  "https://pickups-staging.s3.ca-central-1.amazonaws.com/Invoice_1149.pdf"]);

  const [fromDate, setFromDate] = useState<string | null>("");
  const [toDate, setToDate] = useState<string | null>("");

  const [fromDateOpen, setFromDateOpen] = useState(false);
  const [toDateOpen, setToDateOpen] = useState(false);

  const setDate = (name, value) => {
    console.log(value);
    if (name === 'fromDate') {
      setFieldValue('fromDate', moment(value).format('L'));
    }
    else if (name === "toDate") {
      setFieldValue('toDate', moment(value).format('L'));
    }
  }

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "orderDetails") {
      return "Order Details";
    } else {
      return "";
    }
  };

  const openInvoiceDrawer = (pdfUrl: string,type: any, id: any) => {
    // if (type === "invoice") {
    //   setSelectedInvoiceId(id);
    // } 
    // else if (type === "orderDetails") {
      setInvoicePdf(pdfUrl);
      setSelectedInvoiceId(id);
      // setSelectedOrderId(id);
    // }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const downloadAll = () => {
    // setMultiplePdf(
     const multiplePdf = invoiceData.filter((invoice, index)=> checkboxData.includes(index)).map((inv) => inv.invoicePdf);
      console.log(multiplePdf);
      newMultiplePdf.map(url => {
        // window.open(url);
        console.log(url);
        let link:any = document.createElement("a");
        link.download = `${[url.split("/").length-1]}`
        console.log(link,"link")
        link.href = url;
        document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
     })
  } 

  // useEffect(() => {
  //   // if (multiplePdf) {
  //     newMultiplePdf.forEach(url => {
  //       console.log(url)
  //       var link:any = document.createElement("a");
  //       link.download = `${[url.split("/").length-1]}`;
  //       link.href = url;
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //    })
  //   // }
  // })

  const tableTop = () => {
    return (
      <InvoiceTableTop>
        <p>
          {invoiceData.length} Invoices <span>&nbsp;(0 Selected)</span>
        </p>
        <div>
          <Button
            size="large"
            secondary
            label="Download Selected"
            onClick={() => {downloadAll()}}
          />
        </div>
      </InvoiceTableTop>
    );
  };

  const getInvoiceListData = async (values?: object) => {
    console.log(values);
    let urlParams = "";
    if (values) {
      urlParams += "?";
      let tempLen = Object.entries(values).length;
      console.log(tempLen);
      Object.entries(values).forEach(
        ([key, value], index) =>
          (urlParams += value
            ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
            : "")
      );
    }
    console.log(urlParams);
    const res: any = await getInvoiceList(urlParams);
    if (!res.error) {
      const InvoiceList = res.response.data.data.list;
      // setInvoiceData(dummy);
      setInvoiceData(InvoiceList);
    }
  };

  useEffect(() => {
    getInvoiceListData();
  }, []);

  const { values, handleChange, errors, touched, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        invoiceNumber: "",
        fromDate: "",
        toDate: "",
      },
      onSubmit: (values) => getInvoiceListData(values),
    });

  useEffect(() => {
    console.log(values)
  }, [values]);

  return (
    <ModuleContainer>
      <H2 title="Invoices" />
      <InvoicesWrapper>
      <div className="invoice_number_div">
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
      </div>
        {/* <Input
          id="fromDate"
          name="fromDate"
          initValue={values.fromDate}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.fromDate && errors.fromDate}
          label="From Date"
          placeholder="YYYY-MM-DD"
          type="mask"
          maskProps={{
            mask: "9999-99-99",
            maskPlaceholder: null,
          }}
        />
         */}
      <Box display="flex" flexDirection="column">
        <p>From Date</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateComponent>
            <DatePicker
                // label="06/06/2021"
                value={values.fromDate || null}
                onChange={(val) => setDate('fromDate', val)}
                open={fromDateOpen}
                onOpen={() => setFromDateOpen(true)}
                onClose={() => setFromDateOpen(false)}
                disablePast
                renderInput={(params) => (
                  <TextField
                      style={{ width: '100%' }}
                      label="From Date"
                      placeholder={"e.g 06/06/2021"}
                      {...params}
                      onClick={() => setFromDateOpen(true)}
                      defaultValue={""}
                      InputLabelProps={{ shrink: false }} 
                  />
                )}
            />
          </DateComponent>
          </LocalizationProvider>
      </Box>

        {/* <Input
          id="toDate"
          name="toDate"
          initValue={values.toDate}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.toDate && errors.toDate}
          label="To Date"
          placeholder="YYYY-MM-DD"
          type="mask"
          maskProps={{
            mask: "9999-99-99",
            maskPlaceholder: null,
          }}
        /> */}
        <Box display="flex" flexDirection="column">
          <p>To Date</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateComponent>
            <DatePicker
              // label="06/06/2021"
              value={values.toDate || null}
              onChange={(val) => setDate('toDate',val)}
              open={toDateOpen}
              onOpen={() => setToDateOpen(true)}
              onClose={() => setToDateOpen(false)}
              disablePast
              renderInput={(params) => (
                <TextField
                    style={{ width: '100%' }}
                    label="To Date"
                    placeholder={"e.g 06/06/2021"}
                    {...params}
                    onClick={() => setToDateOpen(true)}
                    defaultValue={""}
                    InputLabelProps={{ shrink: false }} 
                />
              )}
            />
          </DateComponent>
          </LocalizationProvider>
        </Box>
        <div className="search-btn-wrapper">
          <Button label="Search" onClick={handleSubmit} />
        </div>
      </InvoicesWrapper>
      <Table
        data={invoiceTable(invoiceData, openInvoiceDrawer)}
        tableTop={tableTop()}
        dataChecked = {(data: any) => {
          setCheckboxData(data);
        }}
        showCheckbox
        showPagination
        perPageRows={10}
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
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} invoicePdf={invoicePdf} />
        ) : drawerType === "orderDetails" ? (
          <OrderDetailsDrawer
            orderId={selectedInvoiceId}
            setDrawerOpen={setDrawerOpen}
            invoicePdf={invoicePdf}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default InvoicesContainer;
