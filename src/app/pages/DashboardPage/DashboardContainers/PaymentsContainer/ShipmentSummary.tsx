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
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";

interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

// eslint-disable-next-line unused-imports/no-unused-vars
function ShipmentSummary({ path }: { path: string }) {

    const dispatch = useDispatch()

    const invoiceId = useSelector((state: { singleShipment: { invoiceId }}) => state.singleShipment.invoiceId);
    const paymentCards = useSelector((state: {paymentCard: { paymentCardsData }}) => state.paymentCard.paymentCardsData);
    const addNewCardResponse = useSelector((state: { paymentCard: { addNewCardResponse } }) => state.paymentCard.addNewCardResponse );
    const loading = useSelector(( state: { globalState: { showLoader } }) => ( state.globalState.showLoader));

    const [showAddCard, setShowAddCard] = useState<boolean>(false)
    const [showInvoiceDrawer, setShowInvoiceDrawer] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardType>({})
    const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
        insuranceAmount: 0,
        taxesOfAllShipments: 0,
        subTotalOfAllShipments: 0,
        total: 0,
    });

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
        return () => {
            dispatch(actions.addNewCardResponse(null))
        }
    }, [dispatch])

    function redirectBack(){
        navigate?.("/dashboard/charter-shipment/single-shipment", {replace: true});
    }

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
        
        if(values.saveCard){
            const body = {
                "name": values.nameOnCard,
                "number": values.cardNumber,
                "expiry_month": values.expiryDate.split("/")[0],
                "expiry_year": values.expiryDate.split("/")[1],
                "cvd": values.cvc
            }
            dispatch(actions.addNewCard(body));
        }

        const data = {
            orderId: String(invoiceId),
            amount: invoiceData.subTotalOfAllShipments,
            card: {
                name: values.nameOnCard,
                number: values.cardNumber,
                expiryMonth: values.expiryDate.split("/")[0],
                expiryYear: values.expiryDate.split("/")[1],
                cvd: values.cvc,
                complete: true,
            }
        }
        const res: { response: any, error: any } = await confirmPaymentInDrawer(data);
        if(!res.error){
            showToast("Payment successful", "success");
            setShowInvoiceDrawer(true);
        }else{
            showToast((res.error?.message || "Oops! Something went wrong!"), "error");
        }
    };

    const paymentHandler = async () => {
        if(Object.keys(selectedCard).length === 0){
            showToast("Please select a card or add one", "error")
            return;
        }
        const data = {
            profileId : paymentCards.customer_code,
            cardId : selectedCard.card_id,
            amount : (invoiceData.total - invoiceData.insuranceAmount),
            // amount : (invoiceData.subTotalOfAllShipments),
        }
        const res: { response: any, error: any } = await confirmPaymentService(data, invoiceId);
        if(!res.error){
            showToast("Payment successful", "success");
            setShowInvoiceDrawer(true);
        }else{
            showToast((res.error?.message || "Oops! Something went wrong!"), "error");
        }
    };

    const onInvoiceDrawerClose = (flag:boolean  ) => {
        setShowInvoiceDrawer(flag);
        navigate("/dashboard/search-shipment", { replace: true });
    };

    const onBackHandler = () => {
        navigate?.("/dashboard/charter-shipment/shipment-summary");
    }

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
                <div style={{ cursor: "pointer" }} onClick={() => setShowAddCard(!showAddCard)}>
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
                open={showAddCard}
                title="Add New Payment"
                setDrawerOpen={(flag) => setShowAddCard(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddCardForm
                    title="Payment Details"
                    setDrawerOpen={setShowAddCard} 
                    enableSave
                    submitButtonLabel="Add New Payment"
                    saveAction={addNewCardHandler}
                />
            </Drawer>

            <Drawer
                open={showInvoiceDrawer}
                title={`Invoice #${invoiceId}`}
                setDrawerOpen={(flag) => onInvoiceDrawerClose(flag)}
                closeIcon={true}
            >
                <AddNewPaymentDrawer invoiceId="791" />
            </Drawer>
        </ModuleContainer>
    );
}

export default ShipmentSummary;
