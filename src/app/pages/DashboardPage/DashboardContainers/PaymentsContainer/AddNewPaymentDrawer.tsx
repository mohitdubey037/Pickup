import { useEffect, useState, createRef } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@material-ui/core";
import ReactToPdf from "react-to-pdf";
import { useBarcode } from "react-barcodes";
import { Divider } from "@mui/material";

import { Button } from "app/components/Buttons";
import { DrawerHeading, Para } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { LineDivider } from "app/components/CommonCss/CommonCss";
import { getOrderDetails } from "services/PaymentServices";
import { Illustration } from "../../../../assets/Images/index";
import { DrawerHeaderBox, InvoiceDetailsBox } from "./style";
import InvoiceDrawerSkeleton from "./InvoiceDrawerSkeleton";

interface OrderDetails {
  billTo: string;
  category: string;
  destinationCount: string;
  invoiceCreatedAt: string;
  invoiceNumber: string;
  lastFourDigits: string;
  shipmentCount: number;
  total: number;
  shipmentItemMapping: any;
  invoicePdf: string;
}

const ref: any = createRef();
const options = {
  orientation: "landscape",
  // unit: "in",
  format: "a4",
};

const BarCodeItem = ({ barcodeValue }) => {
  const { inputRef } = useBarcode({
    value: barcodeValue,
    options: {
      // background: "lightblue",
      // width: 1,
      displayValue: false,
    },
  });
  return <svg ref={inputRef} />;
};

function AddNewPaymentDrawer(props) {
  const { invoiceId } = props;

  const [ordersArray, setOrdersArray] = useState<string[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(); 
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = (await getOrderDetails(invoiceId)) as any;
      if (res?.error == null) {
        let data = res?.response?.data?.data;
        let tempArray: string[] = [];
        Object.keys(data?.shipmentItemMapping).forEach((key) => {
          data?.shipmentItemMapping[key].forEach((item) => {
            let itemId: string = key + "I" + item?.itemId;
            tempArray.push(itemId);
          });
          setOrdersArray(tempArray);
        });
        setOrderDetails(data);
        setLoading(false);
      }
    })();
  }, []);

  const invoiceDownload = () => {
    let link: any = document.createElement("a");
    link.download = `Invoice_${invoiceId}.pdf`;
    link.href = orderDetails?.invoicePdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>

{loading ? (
        <InvoiceDrawerSkeleton />
      ) : (
        <>
      <DrawerHeaderBox>
        <img className="imageStyle" src={Illustration} alt="" />
        {createPortal(
          <div
            className="bodyClass"
            ref={ref}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Invoice No. {invoiceId}</h1>
            {ordersArray.length > 0 ? (
              <div
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  alignItems: "space-around",
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "50px 50px",
                }}
              >
                {ordersArray.map((item, index) => {
                  return <BarCodeItem key={index} barcodeValue={item} />;
                })}
              </div>
            ) : null}
          </div>,
          document.body
        )}
        <Modal id="portalModal" open={false}>
          <div
            className="bodyClass"
            ref={ref}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Invoice No. {invoiceId}</h1>
            {ordersArray.length > 0 ? (
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  // display: "flex",
                  // flexWrap: "wrap",
                  justifyContent: "space-around",
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: 20,
                }}
              >
                {ordersArray.map((item, index) => {
                  return <BarCodeItem key={index} barcodeValue={item} />;
                })}
              </div>
            ) : null}
          </div>
        </Modal>

        <DrawerHeading title="Paid" className="title" />
        <Para text="Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel. Integer a ornare nisi." />

        <Divider className="divider" />
      </DrawerHeaderBox>

      <Button
        label="Download Invoice Details"
        secondary
        style={{ marginBottom: "16px" }}
        disabled={!orderDetails?.invoicePdf}
        onClick={invoiceDownload}
      />
      <ReactToPdf
        targetRef={ref}
        filename={`Shipping_Label_${invoiceId}.pdf`}
        options={options}
      >
        {({ toPdf }) => (
          <Button label="Download Shipping Label" secondary onClick={toPdf} />
        )}
      </ReactToPdf>

      <InvoiceDetailsBox>
        <Flex justifyContent="space-between" bottom={16} top={32}>
          <Flex>
            <Para text="Bill to" className="label" />
            <Para text={orderDetails?.billTo} className="value" />
          </Flex>
          <Flex justifyContent="flex-end">
            <Para text="Invoice Date" className="label" />
            <Para text={orderDetails?.invoiceCreatedAt} className="value" />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Para text="Invoice Number" className="label" />
          <Para text={orderDetails?.invoiceNumber} className="value" />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Order Count" className="label" />
          <Para text={orderDetails?.shipmentCount} className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Category" className="label" />
          <Para text={orderDetails?.category} className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Destination Count" className="label" />
          <Para text={orderDetails?.destinationCount} className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Invoice Amount" className="label" />
          <Para text={`$${orderDetails?.total.toFixed(2)}`} className="value" />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={40}>
          <Para text="Payment Detail" className="label" />
          <Para text={orderDetails?.lastFourDigits} className="value" />
        </Flex>
      </InvoiceDetailsBox>
      </>
      )}
    </>
  );
}

export default AddNewPaymentDrawer;
