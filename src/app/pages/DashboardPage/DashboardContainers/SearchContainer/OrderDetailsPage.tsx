import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import Card from "@mui/material/Card";

function OrderDetailPage(props: any) {
  const CardComponent = (title: any) => {
    return (
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        <FormContainerTitle>{title}</FormContainerTitle>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Type</div>
            <div className="label-text">Company</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Company Name</div>
            <div className="label-text">Hilton Hotel</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label"> First Name</div>
            <div className="label-text">John</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Last Name</div>
            <div className="label-text">Doe</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="label">Address Line 1</div>
            <div className="label-text">Queen St W</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label"> Address Line 2</div>
            <div className="label-text">Address Line 2</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">City</div>
            <div className="label-text">Toronto</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Postal Code</div>
            <div className="label-text">32141</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label"> Province/State</div>
            <div className="label-text">Province</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Country</div>
            <div className="label-text">Canada</div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Contact Number</div>
            <div className="label-text">(321) 312 321</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Alternate Number</div>
            <div className="label-text">(321) 312 321</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label"> Email Address</div>
            <div className="label-text">john.doe@gmail.com</div>
          </Grid>
          <Grid item xs={6}>
            <div className="label"> Additional Notes</div>
            <div className="label-text">Additional Notes</div>
          </Grid>
        </Grid>
      </Card>
    );
  };

  return (
    <>
      {CardComponent("Origin Details")}
      {CardComponent("Destination Details")}
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
