import React, { useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Grid } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import PaymentCardContainer from "./PaymentsCardContainer";
import { masterCard, scotiaBank } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          <div style={{ maxWidth: "160px", display: "inline-flex" }}>
            <Button
              label="+ Add New Payment"
              size="small"
              onClick={() => {
                setDrawerOpen(true);
              }}
            />
          </div>
          <PaymentCardContainer
            heading="Credit Card"
            individualCardData={individualCardData}
          />
          <PaymentCardContainer
            heading="Debit Card"
            individualCardData={individualCardData}
          />
          <PaymentCardContainer
            heading="Bank Account"
            individualCardData={individualCardData}
          />
        </Grid>
      </Grid>
      <Drawer
        open={drawerOpen}
        title="Add New Payment"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <AddNewPaymentDrawer />
      </Drawer>
    </ModuleContainer>
  );
}
