import React, {useEffect, useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Typography } from "@material-ui/core";
import { Flex } from '../../../../components/Input/style'
import { Drawer } from "app/components/Drawer";
import AddCardForm from "./AddCardForm";
import { addInsuranceService, addNewCardService, confirmPaymentInDrawer, confirmPaymentService, getInsuranceService, removeInsuranceService } from "services/PaymentServices";
import InvoiceDetails from "./InvoiceDetails";
import CreditDebitCardHolder from "./CreditDebitCardHolder";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import { Button } from "app/components/Buttons";
import { showToast } from "utils";

import { CardType } from "../../../../../types"

interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

// eslint-disable-next-line unused-imports/no-unused-vars
function ShipmentSummary({ path }: { path: string }) {

    const dispatch = useDispatch()

    const invoiceId = useSelector(
        (state: {
            singleShipment: { invoiceId };
        }) => state.singleShipment.invoiceId
    );
    
    const paymentCards = useSelector(
        (state: {
            paymentCard: { paymentCardsData };
        }) => state.paymentCard.paymentCardsData
    );
    
    const addNewCardResponse = useSelector(
        (state: {
            paymentCard: { addNewCardResponse };
        }) => state.paymentCard.addNewCardResponse
    );

    const loading = useSelector((
        state: { globalState: { showLoader } }) => {
        return state.globalState.showLoader;
    });

    const [selectedCard, setSelectedCard] = useState<CardType>({})
    const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
        insuranceAmount: 0,
        taxesOfAllShipments: 0,
        subTotalOfAllShipments: 0,
        total: 0,
    })
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const redirectBack = () => {
        navigate?.("/dashboard/charter-shipment/single-shipment");
    }

    useEffect(() => {
        (async () => {
            if(!invoiceId){
                redirectBack();
                return
            }
            const res: {response:any, error:any} = await getInsuranceService(invoiceId)
            if(!res.error){
                setInvoiceData(res.response.data.data)
            }
        })()
    }, [invoiceId])

    useEffect(() => {
        console.log("addNewCardResponse", addNewCardResponse)
    }, [addNewCardResponse])
    
    useEffect(() => {
        return () => {
            dispatch(actions.addNewCardResponse(null))
        }
    }, [dispatch])

    const insuranceHandler = async (event) => {
        if(event.target.checked){
            const res: {response:any, error:any} = await addInsuranceService(invoiceId)
            if(!res.error){
                setInvoiceData(res.response.data.data)
            }
        }else{
            const res: {response:any, error:any} = await removeInsuranceService(invoiceId)
            if(!res.error){
                setInvoiceData(res.response.data.data)
            }
        }
    }

    const addNewCardHandler = async (values) => {
        const body = {
            "name": values.nameOnCard,
            "number": values.cardNumber,
            "expiry_month": values.expiryDate.split("/")[0],
            "expiry_year": values.expiryDate.split("/")[1],
            "cvd": values.cvc
        }
        if(values.saveCard){
            dispatch(actions.addNewCard(body));
        }

        const data = {
            amount: invoiceData.subTotalOfAllShipments,
            body: {
                name: values.nameOnCard,
                number: values.cardNumber,
                expiryMonth: values.expiryDate.split("/")[0],
                expiryYear: values.expiryDate.split("/")[1],
                cvd: values.cvc,
                complete: true,
            }
        }

        const res: { response: any, error: any } = await confirmPaymentInDrawer(data);
        // if(!res.error){
            console.log("Res", res)
        // }
    };

    const paymentHandler = async () => {
        if(Object.keys(selectedCard).length === 0){
            showToast("Please select a card or add one", "error")
            return false
        }
        const data = {
            profileId : paymentCards.customer_code,
            cardId : selectedCard.card_id,
            amount : invoiceData.subTotalOfAllShipments,
        }
        const res: { response: any, error: any } = await confirmPaymentService(data, invoiceId);
        console.log("res", res)
    };

    const onBackHandler = () => {

    };

    return (
        <ModuleContainer>
            <div>
                <h1>Payment</h1>
            </div>
            
            <InvoiceDetails
                invoiceData={invoiceData}
                insuranceHandler={insuranceHandler}
            />

            <Flex justifyContent="space-between" style={{ alignItems: 'center', maxHeight: '60px' }}>
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
                <div style={{ cursor: "pointer" }} onClick={() => setShowDrawer(!showDrawer)}>
                    <Typography
                        style={{
                            fontWeight: 500,
                            fontSize: 14,
                            paddingTop: 15,
                            paddingBottom: 15,
                            color: '#1B8AF0'
                        }}
                    >
                        + <u>Add New Payment</u>
                    </Typography>
                </div>
            </Flex>
            
            <CreditDebitCardHolder
                // debitCardDetails={paymentCards?.card}
                creditCardDetails={paymentCards?.card}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
            />

            <Flex justifyContent="flex-end">
                <Button
                    style={{ width: 190, marginRight: 20 }}
                    secondary
                    label="Back"
                    onClick={onBackHandler}
                />
                <Button
                    style={{ width: 190 }}
                    label="Confirm Payment"
                    // disabled={!(isValid)}
                    onClick={paymentHandler}
                    showLoader={loading}
                />
            </Flex>

            <Drawer
                open={showDrawer}
                title="Add New Payment"
                setDrawerOpen={(flag) => setShowDrawer(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddCardForm
                    title="Payment Details"
                    setDrawerOpen={setShowDrawer} 
                    enableSave
                    submitButtonLabel="Add New Payment"
                    saveAction={addNewCardHandler}
                />
            </Drawer>
        </ModuleContainer>
    );
}

export default ShipmentSummary;
