import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";

import ModuleContainer from "app/components/ModuleContainer";
import { Button } from "app/components/Buttons";
import { Drawer } from "app/components/Drawer";
import { H2 } from "app/components/Typography/Typography";
import PaymentCardSkeleton from "app/components/PaymentCard/PaymentCardSkeleton";
import PaymentCardContainer from "./PaymentsCardContainer";
import { actions } from "store/reducers/PaymentReducer";
import AddCardForm from "./AddCardForm";

export default function PaymentsPage({ path: string }) {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  const cardsData = useSelector((state: any) => state.paymentCard);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(actions.getCards());
  }, []);

  const handleAddNewCard = async (values) => {
    const body = {
      name: values.nameOnCard,
      number: values.cardNumber,
      expiryMonth: values.expiryDate.split("/")[0],
      expiryYear: values.expiryDate.split("/")[1],
      cvd: values.cvc,
    };
    dispatch(actions.addNewCard(body));
    setDrawerOpen(false);
  };

  if ([4].indexOf(authUser?.roleId) === -1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <Box display="flex" justifyContent="space-between">
        <H2 title="Cards" />
        <Button
          label="+ Add New Card"
          size="small"
          onClick={() => setDrawerOpen(true)}
        />
      </Box>

      {cardsData.showLoader ? (
        <PaymentCardSkeleton />
      ) : (
        <PaymentCardContainer individualCardData={cardsData.paymentCardsData} />
      )}

      <Drawer
        open={drawerOpen}
        title="Add New Card"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <AddCardForm
          setDrawerOpen={setDrawerOpen}
          saveAction={handleAddNewCard}
        />
      </Drawer>
    </ModuleContainer>
  );
}
