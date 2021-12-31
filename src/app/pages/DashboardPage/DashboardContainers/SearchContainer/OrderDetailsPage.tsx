import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { Flex, FormWrapper } from "app/components/Input/style";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/lab";
import Select from "app/components/Select";
import { STATUS_TYPES } from "./helper";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { TabWrapper } from "./style";
import ModuleContainer from "app/components/ModuleContainer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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
