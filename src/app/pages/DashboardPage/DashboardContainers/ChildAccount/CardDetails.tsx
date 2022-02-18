import React, { FC, useState } from "react";
import { Grid } from "@material-ui/core";
import { PaymentCard } from "app/components/PaymentCard";
import { FullCard } from "app/components/Input/style";
import { Box } from "@mui/material";
import { H3 } from "app/components/Typography/Typography";
import { useSelector } from "react-redux";



const CardsDetails: FC = () => {
  const paymentCards = useSelector(
    (state: { paymentCard: { paymentCardsData } }) =>
        state.paymentCard.paymentCardsData
);
  return (
        <> <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Cards" />
          </Box>
            <Grid container spacing={2}>
            {
            paymentCards?.card?.map((value, idx) => (
                <PaymentCard
                // key={idx}
                cardData={value}
                />
                ))
            }
            </Grid>
            </FullCard>
        </>
  );
}

export default CardsDetails;