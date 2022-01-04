import React, { useEffect, useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Typography } from "@material-ui/core";
import { creditCardDetails, debitCardDetails } from "./helper";
import { Flex } from '../../../../components/Input/style'
import { Drawer } from "app/components/Drawer";
import AddCardForm from "./AddCardForm";
import { addInsuranceService, addNewCardService, getInsuranceService, removeInsuranceService } from "services/PaymentServices";
import InvoiceDetails from "./InvoiceDetails";
import CreditDebitCardHolder from "./CreditDebitCardHolder";
import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";

interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

function ShipmentSummary({ path: string }) {

    const dispatch = useDispatch()

    const [selectedCard, setSelectedCard] = useState({})
    const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
        insuranceAmount: 0,
        taxesOfAllShipments: 0,
        subTotalOfAllShipments: 0,
        total: 0,
    })
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            const res: {response:any, error:any} = await getInsuranceService("182")
            if(!res.error){
                setInvoiceData(res.response.data.data)
            }
        })()
    }, [])

    useEffect(() => {
        onGetData()
    },[])

    const insuranceHandler = async (event) => {
        if(event.target.checked){
            // const res = await addInsuranceHandler(orderId)
            const res: {response:any, error:any} = await addInsuranceService("182")
            if(!res.error){
                setInvoiceData(res.response.data.data)
            }
        }else{
            // const res = await removeInsuranceHandler(orderId)
            const res: {response:any, error:any} = await removeInsuranceService("182")
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

    const onGetData = () => {
        dispatch(
            actions.getCards()
        );
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
