import React, {useState} from "react";
import { Drawer } from "app/components/Drawer";
import { PaymentCard } from "app/components/PaymentCard";
import { Box, Grid } from "@mui/material";
import { H3 } from "app/components/Typography/Typography";
import NullState from "app/components/NullState/NullState";
import { FullCard } from "app/components/CommonCss/CommonCss";
import AddCardForm from "../PaymentsContainer/AddCardForm";

interface cardDetailsProps {
  cardDetails: any;
  saveAction: () => void;
}

const CardsDetails = ({ cardDetails, saveAction }: cardDetailsProps) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <FullCard>
      <Box mb={2} display="flex" justifyContent="space-between">
        <H3 text="Cards" />
        <H3 text="Add Card" onClick={() => setDrawerOpen(true)}/>
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
    <Drawer
    open={drawerOpen}
    title="Add Card Form"
    setDrawerOpen={setDrawerOpen}
    closeIcon
    >
    <AddCardForm 
      saveAction = {() => saveAction()} 
      setDrawerOpen={setDrawerOpen}
      userId = {cardDetails?.userId}
    />
  </Drawer>
  </>
  );
};

export default CardsDetails;
