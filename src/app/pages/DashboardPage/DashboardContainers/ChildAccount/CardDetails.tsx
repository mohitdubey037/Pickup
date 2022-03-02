import React from "react";
import { Grid } from "@material-ui/core";
import { PaymentCard } from "app/components/PaymentCard";
import { Box } from "@mui/material";
import { H3 } from "app/components/Typography/Typography";
import NullState from "app/components/NullState/NullState";
import { FullCard } from "app/components/CommonCss/CommonCss";

interface cardDetailsProps {
  cardDetails: any;
  saveAction?: () => void;
}

const CardsDetails = ({ cardDetails, saveAction }: cardDetailsProps) => {
  return (
    <FullCard>
      <Box mb={2} display="flex" justifyContent="space-between">
        <H3 text="Cards" />
      </Box>
      <Grid container spacing={2}>
        {cardDetails?.cardlist?.length > 0 ? (
          cardDetails?.cardlist?.map((value, idx) => (
            <PaymentCard
              // key={idx}
              saveAction={saveAction}
              cardData={value}
              cardFrom={true}
            />
          ))
        ) : (
          <NullState message="No Cards Found" />
        )}
      </Grid>
    </FullCard>
  );
};

export default CardsDetails;
