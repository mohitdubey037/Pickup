import React from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { Typography } from "@material-ui/core";
import { Checkbox } from "app/components/Checkbox";
import { InsuranceIcon } from "../../../../assets/Icons/index";
import { Link } from "app/components/Link";

function ShipmentSummary({ path: string }) {
  return (
    <ModuleContainer>
      <div>
        <h1>Payment</h1>
      </div>
      <Typography component="h2" style={{ fontWeight: 500, fontSize: 18, paddingBottom: 27 }}>
        Shipment Summary
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 14, fontWeight: 400, flex: 1, textAlign: "left", paddingBottom: 12 }}>
            Subtotal
          </span>
          <span>$320.42</span>
        </div>
        <div style={{ display: "flex" }}>
          <span style={{ flex: 1, fontSize: 14, fontWeight: 400, textAlign: "left", paddingBottom: 15 }}>
            Taxes(HST)
          </span>
          <span>$12.00</span>
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
        <div style={{ display: "flex" }}>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 14, textAlign: "left" }}>Total</span>
          <span style={{ fontWeight: 700, fontSize: 14 }}>$332.42</span>
        </div>
        <div>
        <hr/>
        </div>
      </div>
      
    </ModuleContainer>
  );
}

export default ShipmentSummary;
