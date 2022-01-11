import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import Card from "@mui/material/Card";
import { LOCATION_TYPES } from "../../../../../constants";

function OrderDetailPage(props: any) {
  let { singleOrderData } = props;
  let { pickupLocation, dropLocation } = singleOrderData;
  // let {  } = singleOrderData;
  const PickupCardComponent = (title: any) => {
    return (
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        <FormContainerTitle>{title}</FormContainerTitle>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Type</div>
            <div className="label-text">{pickupLocation.addressType}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Company Name</div>
            <div className="label-text">{pickupLocation.companyName ? pickupLocation.companyName:"-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">First Name</div>
            <div className="label-text">{pickupLocation.locationFirstName ? pickupLocation.locationFirstName : "-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Last Name</div>
            <div className="label-text">{pickupLocation.locationLastName ? pickupLocation.locationLastName : "-"}</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="label">Address Line 1</div>
            <div className="label-text">{pickupLocation.locationAddressLine1 ? pickupLocation.locationAddressLine1 : "-"}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Address Line 2</div>
            <div className="label-text">{pickupLocation.locationAddressLine2 ? pickupLocation.locationAddressLine2 : "-"}</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">City</div>
            <div className="label-text">{ pickupLocation.locationCity ? pickupLocation.locationCity : "-" }</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Postal Code</div>
            <div className="label-text">{ pickupLocation.locationPinCode ? pickupLocation.locationPinCode : "-" }</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Province/State</div>
            <div className="label-text">{pickupLocation.locationProvinceCode ? pickupLocation.locationProvinceCode : "-" }</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Country</div>
            <div className="label-text">{ pickupLocation.locationCountry ? pickupLocation.locationCountry : "-" }</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Contact Number</div>
            <div className="label-text">{pickupLocation.locationPhone ? pickupLocation.locationPhone : "-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Alternate Number</div>
            <div className="label-text">{ pickupLocation.locationAlternatePhone ? pickupLocation.locationAlternatePhone : "-"}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Email Address</div>
            <div className="label-text">{ pickupLocation.locationEmail ? pickupLocation.locationEmail : "-"}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Additional Notes</div>
            <div className="label-text">{ pickupLocation.details ? pickupLocation.details : "-"}</div>
          </Grid>
        </Grid>
      </Card>
    );
  };

  const DropCardComponent = (title: any) => {
    return (
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        <FormContainerTitle>{title}</FormContainerTitle>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Type</div>
            {/* <div className="label-text">{LOCATION_TYPES}</div> */}
          </Grid>
          <Grid item xs={3}>
            <div className="label">Company Name</div>
            <div className="label-text">{dropLocation.companyName ? dropLocation.companyName:"-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">First Name</div>
            <div className="label-text">{dropLocation.locationFirstName ? dropLocation.locationFirstName : "-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Last Name</div>
            <div className="label-text">{dropLocation.locationLastName ? dropLocation.locationLastName : "-"}</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="label">Address Line 1</div>
            <div className="label-text">{dropLocation.locationAddressLine1 ? dropLocation.locationAddressLine1 : "-"}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Address Line 2</div>
            <div className="label-text">{dropLocation.locationAddressLine2 ? dropLocation.locationAddressLine2 : "-"}</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">City</div>
            <div className="label-text">{ dropLocation.locationCity ? dropLocation.locationCity : "-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Postal Code</div>
            <div className="label-text">{ dropLocation.locationPinCode ? dropLocation.locationPinCode : "-"}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Province/State</div>
            <div className="label-text">{ dropLocation.locationProvinceCode ? dropLocation.locationProvinceCode : "-" }</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Country</div>
            <div className="label-text">{ dropLocation.locationCountry ? dropLocation.locationCountry : "-" }</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Contact Number</div>
            <div className="label-text">{ dropLocation.locationPhone ? dropLocation.locationPhone : "-" }</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Alternate Number</div>
            <div className="label-text">{ dropLocation.locationAlternatePhone ? dropLocation.locationAlternatePhone : "-" }</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Email Address</div>
            <div className="label-text">{ dropLocation.locationEmail ? dropLocation.locationEmail : "-" }</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Additional Notes</div>
            <div className="label-text">{ dropLocation.details ? dropLocation.details : "-" }</div>
          </Grid>
        </Grid>
      </Card>
    );
  };
  return (
    <>
      {PickupCardComponent("Origin Details")}
      {DropCardComponent("Destination Details")}
      <Grid item xs={4} style={{ marginTop: "20px" }}>
        <Button
          size={"large"}
          label="Download Proof of Delivery"
          onClick={() => {}}
        />
      </Grid>
    </>
  );
}
export default OrderDetailPage;
