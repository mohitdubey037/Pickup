import React, { useState, useEffect } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Grid } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import PaymentCardContainer from "./PaymentsCardContainer";
import { masterCard, scotiaBank } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import AddCardForm from "./AddCardForm";
import CardContainer from "./CardContainer";

const individualCardData = [
    {
        name: "John Doe",
        type: masterCard,
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
    {
        name: "John Doe",
        type: scotiaBank,
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
];

export default function PaymentCards({ path: string }) {

    const initialState = {
        cardType: 0,
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        nameOnCard: '',
        pinCOde: '',
        nickName: ''
    }

    const dispatch = useDispatch()
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cardDetails, setCardDetails] = useState(initialState)

    const getAllCardResponse = useSelector(
        (state: {
            paymentCard: { getCardDetailResponse: { status: number; data: { data: {} } } };
        }) => state.paymentCard.getCardDetailResponse
    );

    useEffect(() => {
        return () => {
            dispatch(actions.getCardDetailResponse({}));
        };
    }, [dispatch]);

    const onGetData = () => {
        dispatch(
            actions.getCards()
        );
    };

 
    return (
        <ModuleContainer>
            <Grid container justifyContent="flex-end">
                <Grid
                    item
                    xl={12}
                    lg={12}
                    sm={12}
                    md={12}
                    xs={12}
                    style={{ textAlign: "right" }}
                >
                   
                    <CardContainer
                        heading=""
                        individualCardData={individualCardData}
                    />
                  <CardContainer
                        heading=""
                        individualCardData={individualCardData}
                    />
                </Grid>
            </Grid>
            
        </ModuleContainer>
    );
}
