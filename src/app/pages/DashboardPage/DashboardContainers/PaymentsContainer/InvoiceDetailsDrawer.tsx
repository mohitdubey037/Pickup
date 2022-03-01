import { useEffect, useState, createRef } from "react";
import { navigate } from "@reach/router";
import { createPortal } from "react-dom";
import { useBarcode } from "react-barcodes";
import { Divider } from "@mui/material";
import html2pdf from "html2pdf.js";
import moment from "moment";

import { Button } from "app/components/Buttons";
import { DrawerHeading, Para } from "app/components/Typography/Typography";
import { Flex, LineDivider } from "app/components/CommonCss/CommonCss";
import CustomTooltip from "app/components/Tooltip/CustomTooltip";
import { getInvoiceDetails } from "services/PaymentServices";
import { Illustration } from "../../../../assets/Images/index";
import { DrawerHeaderBox, InvoiceDetailsBox } from "./style";
import InvoiceDrawerSkeleton from "./InvoiceDrawerSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";

interface InvoiceDetails {
  billTo: string;
  category: string[];
  destinationCount: string;
  invoiceCreatedAt: string;
  invoiceNumber: string;
  lastFourDigits: string;
  shipmentCount: number;
  total: number;
  shipmentItemMapping: any;
  invoicePdf: string;
  isPayment: boolean;
  orderIdList: number[];
}

const ref: any = createRef();

const BarCodeItem = ({ barcodeValue }) => {
  const { inputRef } = useBarcode({
    value: barcodeValue,
    options: {
      height: 94,
      width: 1.46,
      // displayValue: false,
    },
  });
  return <svg ref={inputRef} />;
};

function InvoiceDetailsDrawer({ invoiceId }: any) {
  const dispatch = useDispatch();

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });

  const [ordersArray, setOrdersArray] = useState<string[]>([]);
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetails>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isCompletePayment, setIsCompletePayment] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = (await getInvoiceDetails(invoiceId)) as any;
      if (res?.error == null) {
        let data = res?.response?.data?.data;
        let tempArray: string[] = [];
        Object.keys(data?.shipmentItemMapping).forEach((key) => {
          data?.shipmentItemMapping[key].forEach((item) => {
            let itemId: string = key + "I" + item?.itemId;
            tempArray.push(itemId);
          });
        });
        setOrdersArray(tempArray);
        setInvoiceDetails(data);
        setLoading(false);
      }
    })();
  }, []);

  const shippingLabelDownload = () => {
    var opt = {
      filename: `Shipping_Label_${invoiceId}.pdf`,
    };
    html2pdf().set(opt).from(ref.current).save();
  };

  const invoiceDownload = () => {
    let link: any = document.createElement("a");
    link.download = `Invoice_${invoiceId}.pdf`;
    link.href = invoiceDetails?.invoicePdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (orderIds?.length > 0 && isCompletePayment) {
      navigate("/dashboard/charter-shipment/order-summary");
    }
  }, [orderIds, isCompletePayment]);

  const completeOrderPayment = () => {
    setIsCompletePayment(true);
    dispatch(actions.setShipmentOrderIds(invoiceDetails?.orderIdList));
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
              <div id="print-container" ref={ref}>
                <h4 style={{ textAlign: "center" }}>Invoice No. {invoiceId}</h4>
                {ordersArray.length > 0 ? (
                  <div
                    style={{
                      width: "100%",
                      justifyContent: "space-around",
                      alignItems: "space-around",
                      display: "grid",
                      gridTemplateColumns: "auto auto auto",
                      gap: "50px 50px",
                      marginTop: "-15px",
                    }}
                  >
                    {ordersArray.map((item, index) => {
                      return <BarCodeItem key={index} barcodeValue={item} />;
                    })}
                  </div>
                ) : null}
              </div>,
              document.getElementById("print-root") as HTMLElement
            )}

            <DrawerHeading
              title={
                invoiceDetails?.isPayment
                  ? "Paid Successfully"
                  : "Payment Pending"
              }
              className={`title ${!invoiceDetails?.isPayment && "title-sec"}`}
            />
            <Para text="Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel. Integer a ornare nisi." />

            <Divider className="divider" />
          </DrawerHeaderBox>

          {invoiceDetails?.isPayment ? (
            <>
              <Button
                label="Download Invoice Details"
                secondary
                style={{ marginBottom: "16px" }}
                disabled={!invoiceDetails?.invoicePdf}
                onClick={invoiceDownload}
              />
              <Button
                label="Download Shipping Label"
                secondary
                onClick={shippingLabelDownload}
              />
            </>
          ) : (
            <Button
              label="Complete Payment"
              onClick={completeOrderPayment}
              disabled={
                !(invoiceDetails && invoiceDetails.orderIdList.length > 0)
              }
            />
          )}

          <InvoiceDetailsBox>
            <Flex justifyContent="space-between" bottom={16} top={32}>
              <Flex>
                <Para text="Bill to" className="label" />
                <Para text={invoiceDetails?.billTo} className="value" />
              </Flex>
              <Flex justifyContent="flex-end">
                <Para text="Invoice Date" className="label" />
                <Para
                  text={moment(invoiceDetails?.invoiceCreatedAt).format(
                    "DD/MM/YYYY"
                  )}
                  className="value"
                />
              </Flex>
            </Flex>
            <Flex justifyContent="space-between">
              <Para text="Invoice Number" className="label" />
              <Para text={invoiceDetails?.invoiceNumber} className="value" />
            </Flex>

            <LineDivider />

            <Flex justifyContent="space-between" bottom={16}>
              <Para text="Order Count" className="label" />
              <Para text={invoiceDetails?.shipmentCount} className="value" />
            </Flex>
            <Flex justifyContent="space-between" bottom={16}>
              <Para text="Category" className="label" />
              {invoiceDetails?.category &&
              invoiceDetails?.category.length > 1 ? (
                <CustomTooltip
                  text={invoiceDetails?.category.join(", ")}
                  content={
                    <Para
                      text={`${invoiceDetails?.category[0]}, etc...`}
                      className="value"
                    />
                  }
                />
              ) : (
                <Para text={invoiceDetails?.category} className="value" />
              )}
            </Flex>
            <Flex justifyContent="space-between" bottom={16}>
              <Para text="Destination Count" className="label" />
              <Para text={invoiceDetails?.destinationCount} className="value" />
            </Flex>
            <Flex justifyContent="space-between" bottom={16}>
              <Para text="Invoice Amount" className="label" />
              <Para
                text={`$${invoiceDetails?.total.toFixed(2)}`}
                className="value"
              />
            </Flex>

            <LineDivider />

            <Flex justifyContent="space-between" bottom={40}>
              <Para text="Payment Detail" className="label" />
              <Para
                text={invoiceDetails?.lastFourDigits || "-"}
                className="value"
              />
            </Flex>
          </InvoiceDetailsBox>
        </>
      )}
    </>
  );
}

export default InvoiceDetailsDrawer;
