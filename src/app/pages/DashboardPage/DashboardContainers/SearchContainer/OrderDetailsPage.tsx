import React from "react";
import { Grid } from "@material-ui/core";
import {
  H2
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import Card from "@mui/material/Card";
import { LOCATION_TYPES } from "../../../../../constants";
import { AddressDetails } from "./AddressDetails";

function OrderDetailPage(props: any) {
  const { singleOrderData = {} } = props;
  const { pickupLocation = {}, dropLocation = {} } = singleOrderData;

  function locationType(location): string {
    const search = (obj) => obj.value === location.addressType;
    const arrayResult = LOCATION_TYPES.filter(search);
    console.log("Array", arrayResult);
    let labelValue: string = "";
    arrayResult.forEach(function (next) {
      labelValue = next.label;
    });
    console.log("Next ans", labelValue);
    return labelValue;
  }

  return (
    <>
    <AddressDetails addressDetails={pickupLocation} title={"Origin Details"} label={locationType(pickupLocation)}/>
    <AddressDetails addressDetails={dropLocation} title={"Destination Details"} label={locationType(dropLocation)}/>
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
