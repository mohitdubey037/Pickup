import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Accordion } from "app/components/Accordion";
import {itempicture} from "../../../../assets/Images/index"
import { InsuranceIcon } from "app/assets/Icons";
import { Checkbox } from "app/components/Checkbox";
import { Link } from "app/components/Link";
import  PaymentDetails  from "./PaymentDetails";
function ShipmentSummaryAndPayments() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div >
      <Grid style={{ width: 540 ,}}>
        <Typography style={{fontWeight:500}}>Shipment Summary</Typography>
        <div style={{justifyContent:"space-evenly",display:"flex"}}>
    <Typography>Subtotal</Typography><Typography style={{paddingLeft:400}}>$320.42</Typography>
  </div>
  <div style={{justifyContent:"space-evenly",display:"flex"}}>
    <Typography>Taxes (HST)</Typography><Typography style={{paddingLeft:400}}>$12.00</Typography>
  </div>
  <div style={{ display: "flex" }}>
          <span style={{ padding: "0px 10px 0px 0px" }}>
            <Checkbox label="Add Insurance" />
          </span>
          <span style={{ display: "flex" }}>
            <img src={InsuranceIcon} />
          </span>
        </div>
        <div style={{ textDecoration: "underline", display: "flex", paddingBottom: 28 }}>
          <Link to="" style={{ color: "#1B8AF0", paddingLeft: 28 }}>
            Check our Terms & Conditions
          </Link>
        </div>
        <div style={{justifyContent:"space-evenly",display:"flex",fontWeight:700,paddingBottom:10}}>
    <Typography>Total</Typography><Typography style={{ paddingLeft:400}}>$320.42</Typography>
  </div>
  <hr/>
  <PaymentDetails/>
      </Grid>
    </div>
  );
}

export default ShipmentSummaryAndPayments;