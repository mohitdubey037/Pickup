import React, { useCallback, useEffect, useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Typography } from "@material-ui/core";
import { creditCardDetails, debitCardDetails } from "./helper";
import { Flex } from '../../../../components/Input/style'
import { Drawer } from "app/components/Drawer";
import AddCardForm from "./AddCardForm";
import { addInsuranceService, addNewCardService, getInsuranceService, getUserCardsService, removeInsuranceService } from "services/PaymentServices";
import InvoiceDetails from "./InvoiceDetails";
import CreditDebitCardHolder from "./CreditDebitCardHolder";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import { navigate } from "@reach/router";

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

    const [selectedCard, setSelectedCard] = useState({})
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

    const onGetDataCallback = useCallback(() => {
        dispatch(
            actions.getCards()
        );
    }, [dispatch])

    useEffect(() => {
        onGetDataCallback()
    },[onGetDataCallback])

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
        const res: {response:any, error:any} = await addNewCardService(values);
        if(!res.error){
            console.log("Res", res.response)
        }
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
                debitCardDetails={debitCardDetails}
                creditCardDetails={creditCardDetails}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
            />

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
