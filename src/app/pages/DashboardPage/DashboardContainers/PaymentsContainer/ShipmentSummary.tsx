import { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import ModuleContainer from "app/components/ModuleContainer";
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
import { Flex } from "app/components/CommonCss/CommonCss";

interface InvoiceDataType {
    insuranceAmount: number;
    taxesOfAllShipments: number;
    subTotalOfAllShipments: number;
    total: number;
}

function ShipmentSummary({ path }) {
    const dispatch = useDispatch();

    const invoiceId = useSelector(
        (state: { singleShipment: { invoiceId } }) =>
            state.singleShipment.invoiceId
    );
    const paymentCards = useSelector(
        (state: { paymentCard: { paymentCardsData } }) =>
            state.paymentCard.paymentCardsData
    );
    const showLoader = useSelector(
        (state: { globalState: { showLoader } }) => state.globalState.showLoader
    );
    const authUser = useSelector((state: any) => {
        return state.auth?.user;
    });

    const [loading, setLoading] = useState(false);
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

    const paymentHandler = async () => {
        setLoading(true);
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
        setLoading(false);
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
                    showLoader={showLoader || loading}
                    size="medium"
                    disabled={Object.keys(selectedCard).length === 0}
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
                    getSavedCard={setSelectedCard}
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
