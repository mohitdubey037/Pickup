import React, { useState } from "react";
import { TabWrapper } from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OrderDetailPage from "./OrderDetailsPage";
import ItemDetailsPage from "./ItemDetailsPage";
import TrackingDetailsPage from "./TrackingDetailsPage";

const styles = {
  tab: {
    backgrounf: "#fff",
  },
  tabItemContainer: {
    color: "#000",
  },
};

function SearchOrderDetailsDrawer(props: any) {
  let { singleOrderData } = props;
  const [value, setValue] = React.useState("orderDetails");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("handleChange ~ newValue", newValue);
    setValue(newValue);
  };

  return (
    <div style={{ width: "740px" }}>
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
          {value === "orderDetails" ? (
            <OrderDetailPage />
          ) : value === "itemDetails" ? (
            <ItemDetailsPage singleOrderData={singleOrderData} />
          ) : (<TrackingDetailsPage singleOrderData={singleOrderData} />
          )}
        </div>
      </TabWrapper>
    </div>
  );
}
export default SearchOrderDetailsDrawer;
