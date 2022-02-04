import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { Drawer } from "app/components/Drawer";
import { H2 } from "app/components/Typography/Typography";
import { invoiceTable } from "./helper";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import OrderItemDetailsDrawer from "../SignleShipmentContainer/OrderItemDetailsDrawer";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";

const InvoicesContainer = ({ path: string }) => {
  const [invoiceData, setInvoiceData] = useState<any>([]);
  const [invoicePdf, setInvoicePdf] = useState<any>("");
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<any>("");
  // const [selectedOrderId, setSelectedOrderId] = useState("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const dummy = [
  //   {
  //     "invoiceCreatedAt": '2022-01-01',
  //     "shipmentCount": '1012',
  //     "shippedBy": 'mohit dubey',
  //     "total": "1",
  //     "invoiceNumber": '1012',
  //     "invoiceId": '1013'
  //   },
  //   {
  //     "invoiceCreatedAt": '2022-01-01',
  //     "shipmentCount": '1012',
  //     "shippedBy": 'mohit dubey',
  //     "total": "1",
  //     "invoiceNumber": '1012',
  //     "invoiceId": '1013'
  //   }
  // ]

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "orderDetails") {
      return "Order Details";
    } else {
      return "";
    }
  };

  // useEffect(() => {
  //   console.log(selectedInvoiceId, 'invoiceId');
  // },[selectedInvoiceId])

  const openInvoiceDrawer = (pdfUrl: string,type: any, id: any) => {
    console.log(id);
    console.log(type);
    console.log(pdfUrl);
    // console.log(type);
    // console.log(id);
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
            onClick={() => {}}
          />
        </div>
      </InvoiceTableTop>
    );
  };

  const getInvoiceListData = async (values?: object) => {
    let urlParams = "";
    if (values) {
      urlParams += "?";
      let tempLen = Object.entries(values).length;
      Object.entries(values).forEach(
        ([key, value], index) =>
          (urlParams += value
            ? `${key}=${value}${index === tempLen - 1}`
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

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
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
      <InvoicesWrapper>
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
        <Input
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
        <Input
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
        />
        <div className="search-btn-wrapper">
          <Button label="Search" onClick={handleSubmit} />
        </div>
      </InvoicesWrapper>
      <Table
        data={invoiceTable(invoiceData, openInvoiceDrawer)}
        tableTop={tableTop()}
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
          <OrderItemDetailsDrawer
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
