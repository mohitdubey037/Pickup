import React, { FC, useState } from "react";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PaymentCardList from "app/components/PaymentCardList";
import { DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";



const CardList: FC = () => {
  const [selectedCard, setSelectedCard] = useState<any>({});
  const paymentCards = useSelector(
    (state: { paymentCard: { paymentCardsData } }) =>
        state.paymentCard.paymentCardsData
);
  return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            {paymentCards.length > 0 &&
                paymentCards.map((card, idx) => (
                  <PaymentCardList
                    key={idx}
                    card={card}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                  />
                ))}
            
            </Grid>
            </Grid>
            <DrawerFooter>
                <Button
                secondary
                label="Cancel"
                size="medium"
                />
                <Button
                label="Confirm"
                size="medium"
                />
      </DrawerFooter>
        </>
  );
}

export default CardList;