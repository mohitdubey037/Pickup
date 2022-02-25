import { Box, Grid } from "@material-ui/core";
import { useState } from "react";

import { Drawer } from "app/components/Drawer";
import NullState from "app/components/NullState/NullState";
import services from "services";
import { PaymentCard } from "../../../../components/PaymentCard/index";
import AddCardForm from "./AddCardForm";
import { showToast } from "utils";

export interface IndividualCard {
  id: string;
  card_type: string;
  name: string;
  exp_month: string;
  exp_year: string;
  function: string;
  number: string;
  last4?: string;
  customer?:string
}

interface PaymentCardContainerProps {
  individualCardData: Array<IndividualCard>;
}

export interface cardData {
  cardNumber?: string;
  expiryDate?: string;
  nameOnCard?: string;
  cvc?: string;
  pinCode?: string;
  nickName?: string;
}

const initialCardValue = {
  id: "",
  card_type: "",
  name: "",
  exp_month: "",
  exp_year: "",
  function: "",
  number: "",
};

export default function PaymentCardContainer({
  individualCardData,
}: PaymentCardContainerProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [cardData, setCardData] = useState<IndividualCard>(initialCardValue);

  const handleCardEdit = async (values) => {
    // Note - this needs to be modified as per new stripe payment integration
    try {
      const body = {
        customer_code: values.customer_code,
        card: [
          {
            function: values.function,
            name: values.name,
            number: values.number,
            expiry_month: values.expiry_month,
            expiry_year: values.expiry_year,
            card_type: values.card_type,
          },
        ],
      };
      const res = await services.put(
        `profiles/${values.customer_code}/cards/${values.card.card_id}`,
        body,
        "payment"
      );
      if (res) showToast("Your card has been edited successfully", "success");
      return { response: res, error: null };
    } catch (error) {
      return { response: null, error: error };
    }
  };

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {individualCardData?.length > 0 ? (
          individualCardData?.map((value, idx) => (
            <PaymentCard
              key={idx}
              cardData={value}
              setCardData={setCardData}
              setDrawerOpen={setDrawerOpen}
            />
          ))
        ) : (
          <NullState message="No Card Added" />
        )}
      </Grid>

      <Drawer
        open={drawerOpen}
        title="Edit you card"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <AddCardForm
          setDrawerOpen={setDrawerOpen}
          saveAction={handleCardEdit}
          cardData={cardData}
        />
      </Drawer>
    </Box>
  );
}
