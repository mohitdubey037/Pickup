import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Accordion } from "app/components/Accordion";

function OrderDetailsDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <Grid style={{ width: 540 }}>
        <Accordion title="Order Items - TOR-0607-123">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Category</span>
              <span>Customer Ref. #</span>
            </div>
            <div>
              <span>Electronics</span>
              <span>PO23451</span>
            </div>
          </div>
        </Accordion>
      </Grid>
    </div>
  );
}

export default OrderDetailsDrawer;
