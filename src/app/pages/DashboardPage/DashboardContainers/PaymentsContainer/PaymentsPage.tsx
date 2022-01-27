import React, { useState, useEffect } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Box, Grid } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import PaymentCardContainer from "./PaymentsCardContainer";
import { masterCard, scotiaBank } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import AddCardForm from "./AddCardForm";
import { ContainerTitle } from "app/components/Typography/Typography";

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

export default function PaymentsPage({ path: string }) {
  const initialState = {
    cardType: 0,
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
    pinCOde: "",
    nickName: "",
  };

  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState(initialState);
  const cardsData = useSelector(
    (state: any) => state.paymentCard.paymentCardsData
  );

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = () => {
    dispatch(actions.getCards());
  };

  const addNewCardHandler = async (values) => {
    const body = {
      name: values.nameOnCard,
      number: values.cardNumber,
      expiry_month: values.expiryDate.split("/")[0],
      expiry_year: values.expiryDate.split("/")[1],
      cvd: values.cvc,
    };
    dispatch(actions.addNewCard(body));
    setDrawerOpen(false);
  };

  return (
    <ModuleContainer>
      <Box display="flex" justifyContent="space-between">
      <ContainerTitle title="Cards"  />
        <Button
          label="+ Add New Card"
          size="small"
          onClick={() => {
            setDrawerOpen(true);
          }}
        />
      </Box>
      <PaymentCardContainer  individualCardData={cardsData?.card} />

      <Drawer
        open={drawerOpen}
        title="Add New Card"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <AddCardForm
          setDrawerOpen={setDrawerOpen}
          saveAction={addNewCardHandler}
        />
      </Drawer>
    </ModuleContainer>
  );
}
