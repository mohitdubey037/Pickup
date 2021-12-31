import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
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
import OrderDetailPage from "./OrderDetailsPage";

const styles = {
  tab: {
    backgrounf: "#fff",
  },
  tabItemContainer: {
    color: "#000",
  },
};

function OrderDetailsDrawer(props: any) {
  const [value, setValue] = React.useState("orderDetails");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("handleChange ~ newValue", newValue);
    setValue(newValue);
  };

  return (
    <TabWrapper>
      <Tabs
        TabIndicatorProps={{ style: { background: "#FECE3E" } }}
        value={value}
        onChange={handleChange}
        className="custom"
      >
        <Tab
          style={styles.tabItemContainer}
          value="orderDetails"
          label="Order Details"
        />
        <Tab
          style={styles.tabItemContainer}
          value="itemDetails"
          label="Item Details"
        />
        <Tab
          style={styles.tabItemContainer}
          value="trackingDetails"
          label="Tracking Details"
        />
      </Tabs>
      <div className="tab-content">
        {value == "orderDetails" ? <OrderDetailPage /> : null}
      </div>
    </TabWrapper>
  );
}
export default OrderDetailsDrawer;
