import { Box, Grid } from "@material-ui/core"
import { Drawer } from "app/components/Drawer"
import { ContainerTitle } from "app/components/Typography/Typography"
import { useState } from "react"
import services from "services";
import { PaymentCard } from "../../../../components/PaymentCard/index";
import AddCardForm from "./AddCardForm";
import { showToast } from "utils";
import NullState from "app/components/NullState/NullState";

export interface IndividualCard {
  card_id: string;
  card_type: string;
  name: string;
  expiry_month: string;
  expiry_year: string;
  function: string;
  number: string;
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

export default function PaymentCardContainer({
  individualCardData,
}: PaymentCardContainerProps) {
  const initialCardValue = {
    card_id: "",
    card_type: "",
    name: "",
    expiry_month: "",
    expiry_year: "",
    function: "",
    number: "",
  };
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [cardData, setCardData] = useState<IndividualCard>(initialCardValue);

  const saveCard = async (values) => {
    console.log("Save card called");
    try {
      const body = {
        "customer_code": values.customer_code,
        "card": [
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
      console.log("body", body, "Res", res)
      if (res) showToast("Your card has been edited successfully", "success");
      return { response: res, error: null };
    } catch (error) {
      return { response: null, error: error };
    }
  };

    return (
     <Box>
  
            <ContainerTitle title="Card"  />
            <Grid container spacing={2}>
                {individualCardData?.length > 0 ?
                (individualCardData?.map((value, idx) => (
                <PaymentCard
                setDrawerOpen={setDrawerOpen}
                setCardData={setCardData}
                key={idx}
                cardData={value}
                />
                )))
                :
                <NullState message="No Card Added" />
                }
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
                saveAction={saveCard}
                cardData={cardData}
            />
            </Drawer>
        </Box>
    )
}
