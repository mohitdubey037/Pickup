import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import ModuleContainer from "app/components/ModuleContainer";
import { Flex } from "../../../../components/Input/style";
import { Drawer } from "app/components/Drawer";
import AddCardForm from "./AddCardForm";
import {
    addInsuranceService,
    // confirmPaymentInDrawer,
    confirmPaymentService,
    getInsuranceService,
    removeInsuranceService,
} from "services/PaymentServices";
import InvoiceDetails from "./InvoiceDetails";
import CreditDebitCardHolder from "./CreditDebitCardHolder";
import { actions } from "store/reducers/PaymentReducer";
import { actions as shipmentActions } from "store/reducers/SingleShipmentReducer";
import { Button } from "app/components/Buttons";
import { showToast } from "utils";
import { CardType } from "../../../../../types";
import InvoiceDetailsDrawer from "./InvoiceDetailsDrawer";
import { H3 } from "app/components/Typography/Typography";
import { CustomLink } from "app/components/Typography/Links";

interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

// eslint-disable-next-line unused-imports/no-unused-vars
function ShipmentSummary({ path }: { path: string }) {
    const dispatch = useDispatch();

    const invoiceId = useSelector(
        (state: { singleShipment: { invoiceId } }) =>
            state.singleShipment.invoiceId
    );
    const paymentCards = useSelector(
        (state: { paymentCard: { paymentCardsData } }) =>
            state.paymentCard.paymentCardsData
    );
    const loading = useSelector(
        (state: { globalState: { showLoader } }) => state.globalState.showLoader
    );
    const authUser = useSelector((state: any) => {
        return state.auth?.user;
    });

    const [showAddCard, setShowAddCard] = useState<boolean>(false);
    const [showInvoiceDrawer, setShowInvoiceDrawer] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardType>({});
    const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
        insuranceAmount: 0,
        taxesOfAllShipments: 0,
        subTotalOfAllShipments: 0,
        total: 0,
    });

    function redirectBack() {
        navigate?.("/dashboard/charter-shipment/single-shipment", {
            replace: true,
        });
    }

    const onBackHandler = () => {
        navigate?.("/dashboard/charter-shipment/order-summary");
    };

    useEffect(() => {
        (async () => {
            if (!invoiceId) {
                redirectBack();
                return;
            }
            dispatch(actions.getCards());
            const res: { response: any; error: any } =
                await getInsuranceService(invoiceId);
            if (!res.error) {
                setInvoiceData(res.response.data.data);
            }
        })();
    }, [invoiceId]);

    useEffect(() => {
        return () => {
            dispatch(shipmentActions.setInvoice(null));
            dispatch(actions.addNewCardResponse(null));
        };
    }, [dispatch]);

    const insuranceHandler = async (event) => {
        if (event.target.checked) {
            const res: { response: any; error: any } =
                await addInsuranceService(invoiceId);
            if (!res.error) {
                setInvoiceData(res.response.data.data);
            }
        } else {
            const res: { response: any; error: any } =
                await removeInsuranceService(invoiceId);
            if (!res.error) {
                setInvoiceData(res.response.data.data);
            }
        }
    };

    const handleAddNewCard = async (values) => {
        const body = {
            name: values.nameOnCard,
            number: values.cardNumber,
            expiryMonth: values.expiryDate.split("/")[0],
            expiryYear: values.expiryDate.split("/")[1],
            cvd: values.cvc,
        };
        dispatch(actions.addNewCard(body));
        setShowAddCard(false);
        // const data = {
        //     amount: invoiceData.total,
        //     card: {
        //         name: values.nameOnCard,
        //         number: values.cardNumber,
        //         expiryMonth: values.expiryDate.split("/")[0],
        //         expiryYear: values.expiryDate.split("/")[1],
        //         cvd: values.cvc,
        //         complete: true,
        //     },
        // };
        // const res: { response: any; error: any } = await confirmPaymentInDrawer(
        //     data,
        //     invoiceId
        // );
        // if (!res.error) {
        //     showToast("Payment successful", "success");
        //     setShowInvoiceDrawer(true);
        //     dispatch(shipmentActions.resetOrderIds());
        // } else {
        //     showToast(
        //         res.error?.message || "Oops! Something went wrong!",
        //         "error"
        //     );
        // }
    };

    const paymentHandler = async () => {
        if (Object.keys(selectedCard).length === 0) {
            showToast("Please select a card or add one", "error");
            return;
        }
        const data = {
            profileId: selectedCard.customer,
            cardId: selectedCard.id,
            amount: invoiceData.total,
        };
        const res: { response: any; error: any } = await confirmPaymentService(
            data,
            invoiceId
        );
        if (!res.error) {
            showToast("Payment successful", "success");
            setShowInvoiceDrawer(true);
            dispatch(shipmentActions.resetOrderIds());
        } else {
            showToast(
                res.error?.message || "Oops! Something went wrong!",
                "error"
            );
        }
    };

    const onInvoiceDrawerClose = (flag: boolean) => {
        setShowInvoiceDrawer(flag);
        navigate("/dashboard/search-shipment", { replace: true });
    };

    if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
        navigate("/non-authorized-page");
    }

    return (
        <ModuleContainer>
            <InvoiceDetails
                invoiceData={invoiceData}
                insuranceHandler={insuranceHandler}
            />

            <Flex justifyContent="space-between" top={24}>
                <H3 text="Payment Details" />
                <Box
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowAddCard(!showAddCard)}
                >
                    <CustomLink
                        label={`+ Add New Card`}
                        style={{ color: "#1B8AF0" }}
                    />
                </Box>
            </Flex>

            <CreditDebitCardHolder
                // debitCardDetails={paymentCards}
                creditCardDetails={paymentCards}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
            />

            <Flex justifyContent="flex-end">
                <Button
                    secondary
                    label="Back"
                    onClick={onBackHandler}
                    size="small"
                    style={{ marginRight: "12px" }}
                />
                <Button
                    label="Confirm Payment"
                    onClick={paymentHandler}
                    showLoader={loading}
                    size="medium"
                />
            </Flex>

            <Drawer
                open={showAddCard}
                title="Add New Payment"
                setDrawerOpen={(flag) => setShowAddCard(flag)}
                closeIcon={true}
            >
                <AddCardForm
                    setDrawerOpen={setShowAddCard}
                    saveAction={handleAddNewCard}
                />
            </Drawer>
            <Drawer
                open={showInvoiceDrawer}
                title={`Invoice #${invoiceId}`}
                setDrawerOpen={(flag) => onInvoiceDrawerClose(flag)}
                closeIcon={true}
            >
                <InvoiceDetailsDrawer invoiceId={invoiceId} />
            </Drawer>
        </ModuleContainer>
    );
}

export default ShipmentSummary;
