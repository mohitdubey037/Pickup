import React, { useEffect, useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Typography } from "@material-ui/core";
import { Checkbox } from "app/components/Checkbox";
import { InsuranceIcon } from "../../../../assets/Icons/index";
import { Link } from "app/components/Link";
import { Accordion } from "app/components/Accordion";

import PaymentCardList from "app/components/PaymentCardList";
import { addInsuranceHandler, creditCardDetails, debitCardDetails, removeInsuranceHandler, getInsuranceHandler } from "./helper";
import { Flex } from '../../../../components/Input/style'
interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

function ShipmentSummary({ path: string }) {

    const [selectedCard, setSelectedCard] = useState({})
    const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
        insuranceAmount: 0,
        taxesOfAllShipments: 0,
        subTotalOfAllShipments: 0,
        total: 0,
    })

    useEffect(() => {
        (async () => {
            const res = await getInsuranceHandler("182")
            console.log("getInsuranceHandler", res)
            setInvoiceData(res.data.data)
        })()
    }, [])

    const insuranceHandler = async (event) => {
        if(event.target.checked){
            // const res = await addInsuranceHandler(orderId)
            const res = await addInsuranceHandler("182")
            setInvoiceData(res.data.data)
            console.log('addInsuranceHandler', res)
        }else{
            // const res = await removeInsuranceHandler(orderId)
            const res = await removeInsuranceHandler("182")
            setInvoiceData(res.data.data)
            console.log('removeInsuranceHandler', res)
        }
    }

    return (
        <ModuleContainer>
            <div>
                <h1>Payment</h1>
            </div>
            <Typography
                component="h2"
                style={{ fontWeight: 500, fontSize: 18, paddingBottom: 27 }}
            >
                Shipment Summary
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: 400,
                            flex: 1,
                            textAlign: "left",
                            paddingBottom: 12,
                        }}
                    >
                        Subtotal
                    </span>
                    <span>{invoiceData.subTotalOfAllShipments}</span>
                </div>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            flex: 1,
                            fontSize: 14,
                            fontWeight: 400,
                            textAlign: "left",
                            paddingBottom: 15,
                        }}
                    >
                        Taxes(HST)
                    </span>
                    <span>{invoiceData.taxesOfAllShipments}</span>
                </div>
                <Flex>
                    <Flex>
                        <span style={{ padding: "0px 10px 0px 0px" }}>
                            <Checkbox onChange={(e) => insuranceHandler(e)} label="Add Insurance" />
                        </span>
                        <span style={{ display: "flex" }}>
                            <img src={InsuranceIcon} alt="InsuranceIcon" />
                        </span>
                    </Flex>
                        {invoiceData.insuranceAmount}
                </Flex>
                <div
                    style={{
                        textDecoration: "underline",
                        display: "flex",
                        paddingBottom: 28,
                    }}
                >
                    <Link to="" style={{ color: "#1B8AF0", paddingLeft: 28 }}>
                        Check our Terms & Conditions
                    </Link>
                </div>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            flex: 1,
                            fontWeight: 700,
                            fontSize: 14,
                            textAlign: "left",
                        }}
                    >
                        Total
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{invoiceData.total}</span>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <Typography
                style={{
                    fontWeight: 500,
                    fontSize: 18,
                    paddingTop: 15,
                    paddingBottom: 15,
                }}
            >
                Payment Details
            </Typography>
            <Typography style={{ paddingBottom: 10 }}>
                Saved cards and accounts
            </Typography>
            <Accordion title="Credit Card (4)">
                <PaymentCardList cards={creditCardDetails} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            </Accordion>
            <Accordion title="Debit Card (4)">
                <PaymentCardList cards={debitCardDetails} selectedCard={selectedCard}  setSelectedCard={setSelectedCard}/>
            </Accordion>
        </ModuleContainer>
    );
}

export default ShipmentSummary;
