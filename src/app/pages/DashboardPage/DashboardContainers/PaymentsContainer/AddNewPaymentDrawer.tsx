import { useEffect, useState, createRef } from "react";
import { createPortal } from "react-dom";
import { Typography, Modal } from "@material-ui/core";

import ReactToPdf from "react-to-pdf";
import { Button } from "app/components/Buttons";
import { Illustration } from "../../../../assets/Images/index";
import { useBarcode } from "react-barcodes";
import { getOrderDetails } from "services/PaymentServices";

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

function AddNewPaymentDrawer({ invoiceId }) {

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
        <div>
            <img
                style={{ paddingLeft: 200 }}
                className="imageStyle"
                src={Illustration}
                alt=""
            />
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
                                // height: "100vh",
                                // display: "flex",
                                // flexWrap: "wrap",
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

            <Typography style={{ fontWeight: 700, paddingTop: 15, paddingLeft: 200 }}>
                Paid Sucessfully
            </Typography>
            <Typography
                style={{ textAlign: "center", display: "flex", fontWeight: 400 }}
            >
                {" "}
                Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel.
                Integer a ornare nisi.
            </Typography>
            <hr />
            <div style={{ paddingTop: 20, justifyContent: "space-between" }}>
                <Button label="Download Invoice Details" secondary />
                <div style={{ paddingTop: 20 }} />
                <ReactToPdf
                    targetRef={ref}
                    filename={`${orderDetails?.billTo}_${invoiceId}.pdf`}
                    options={options}
                >
                    {({ toPdf }) => (
                        <Button label="Download Shipping Label" secondary onClick={toPdf} />
                    )}
                </ReactToPdf>
            </div>
            <div style={{ paddingTop: 30, display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                    <Typography style={{ fontWeight: 500 }}>Bill to</Typography>
                    <Typography style={{ paddingLeft: 20 }}>
                        {" "}
                        {orderDetails?.billTo}
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "50%",
                        justifyContent: "flex-end",
                    }}
                >
                    <Typography style={{}}>Invoice Date</Typography>
                    <Typography style={{ paddingLeft: 20 }}>
                        {orderDetails?.invoiceCreatedAt}
                    </Typography>
                </div>
            </div>
            <div style={{ paddingTop: 20, display: "flex", flexDirection: "row" }}>
                <Typography>Invoice Number</Typography>
                <Typography style={{ paddingLeft: 20 }}>
                    {orderDetails?.invoiceNumber}
                </Typography>
            </div>
            <hr />
            <div
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Typography>Shipment Count</Typography>
                <Typography>{orderDetails?.shipmentCount}</Typography>
            </div>
            <div
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Typography>Category</Typography>
                <Typography>{orderDetails?.category}</Typography>
            </div>
            <div
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Typography>Destination count</Typography>
                <Typography>{orderDetails?.destinationCount}</Typography>
            </div>
            <div
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Typography>Invoice Amount</Typography>
                <Typography>${orderDetails?.total}</Typography>
            </div>
            <hr />
            <div style={{ justifyContent: "space-between", display: "flex" }}>
                <Typography>Payment Detail</Typography>
                <Typography>{orderDetails?.lastFourDigits}</Typography>
            </div>
        </div>
    );
}

export default AddNewPaymentDrawer;
