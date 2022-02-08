import { useEffect, useState, createRef } from "react";
import { createPortal } from "react-dom";
import { Typography, Modal } from "@material-ui/core";

import ReactToPdf from "react-to-pdf";
import { Button } from "app/components/Buttons";
import { Illustration } from "../../../../assets/Images/index";
import { useBarcode } from "react-barcodes";
import { getOrderDetails } from "services/PaymentServices";
import { Box, Divider } from "@mui/material";
import { DrawerTitle } from "app/components/Typography/style";
import { DrawerHeading, Para } from "app/components/Typography/Typography";
import { DrawerHeaderBox, InvoiceDetailsBox } from "./style";
import { Flex } from "app/components/Input/style";
import { LineDivider } from "app/components/CommonCss/CommonCss";

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
  const { invoicePdf } = props;
  console.log(invoicePdf);

  const [ordersArray, setOrdersArray] = useState<string[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>();

  useEffect(() => {
    (async () => {
      const res = (await getOrderDetails(invoiceId)) as any;
      console.log("resData", res);
      if (res?.error == null) {
        let data = res?.response?.data?.data;
        console.log(data);
        let tempArray: string[] = [];
        Object.keys(data?.shipmentItemMapping).map(function (key, index) {
          // console.log(data?.shipmentItemMapping[key]);
          data?.shipmentItemMapping[key].map((item) => {
            let itemId: string = key + "I" + item?.itemId;
            // console.log(itemId);
            tempArray.push(itemId);
          });
          setOrdersArray(tempArray);
        });
        setOrderDetails(data);
      }

      // });
    })();
  }, []);

  console.log(ordersArray);

  return (
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

        <DrawerHeading title="Paid Sucessfully" className="title" />
        <Para
          text="Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel.
                Integer a ornare nisi."
        />

        <Divider className="divider" />
      </DrawerHeaderBox>

      <a href={invoicePdf ? invoicePdf : orderDetails?.invoicePdf}>
        <Button
          label="Download Invoice Details"
          secondary
          style={{ marginBottom: "16px" }}
        />
      </a>
      <ReactToPdf
        targetRef={ref}
        filename={`${orderDetails?.billTo}_${invoiceId}.pdf`}
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
            <Para text={orderDetails?.billTo} className="value"  />
          </Flex>
          <Flex justifyContent="flex-end">
            <Para text="Invoice Date"  className="label"  />
            <Para text={orderDetails?.invoiceCreatedAt} className="value"  />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Para text="Invoice Number" className="label"  />
          <Para text={orderDetails?.invoiceNumber} className="value"  />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Shipment Count" className="label"  />
          <Para text={orderDetails?.shipmentCount} className="value"  />
        </Flex>

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Category" className="label"  />
          <Para text={orderDetails?.category} className="value"  />
        </Flex>

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Destination count" className="label"  />
          <Para text={orderDetails?.destinationCount} className="value"  />
        </Flex>

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Invoice Amount" className="label"  />
          <Para text={orderDetails?.total} className="value"  />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={40}>
          <Para text="Payment Detail" className="label"  />
          <Para text={orderDetails?.lastFourDigits} className="value"  />
        </Flex>
      </InvoiceDetailsBox>
    </>
  );
}

export default AddNewPaymentDrawer;
