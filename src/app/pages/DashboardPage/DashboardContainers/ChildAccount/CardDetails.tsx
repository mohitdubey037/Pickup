import React, { FC, useState } from "react";
import { Grid } from "@material-ui/core";
import { PaymentCard } from "app/components/PaymentCard";
import { FullCard } from "app/components/Input/style";
import { Box } from "@mui/material";
import { H3 } from "app/components/Typography/Typography";
import { useSelector } from "react-redux";

interface cardDetailsProps{
  cardDetails: any;
  updateCards? : () => void;
}

const CardsDetails = ({cardDetails, updateCards}: cardDetailsProps) => {

  return (
        <> <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Cards" />
          </Box>
            <Grid container spacing={2}>
            {
              cardDetails?.cardlist?.map((value, idx) => (
                <PaymentCard
                // key={idx}
                updateCards = {updateCards}
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