import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Accordion } from "app/components/Accordion";
import { itempicture } from "../../../../assets/Images/index";
import Card from "@mui/material/Card";

function ItemDetailsPage(props: any) {
  let { singleOrderData } = props;
  let { items } = singleOrderData;

  const accordianItem = (item: any) => {
    return (
      <Grid>
        <Accordion title={item.name}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <div className="label">Category</div>
              <div className="label-text">{singleOrderData.category}</div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">Shipment Weight (lbs)</div>
              <div className="label-text">{item.weight}</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label"> LBH (inches)</div>
              <div className="label-text">{item.length}</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Pieces</div>
              <div className="label-text">{singleOrderData.totalQuantity}</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Shipment Cost</div>
              <div className="label-text">
                {"$" + singleOrderData.shipmentCost}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Fragile Shipment</div>
              <div className="label-text">{item.fragile}</div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">Delivery options</div>
              <div className="label-text">Door drop</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label"> Customer Reference #</div>
              <div className="label-text">
                {singleOrderData.customerReferenceNumber}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="label"> Order Description</div>
              <div className="label">{item.description}</div>
            </Grid>
            <Grid item xs={12}>
              <img
                style={{ width: "180px", height: "180px" }}
                src={item.picture ? item.picture : itempicture}
              />
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
    );
  };
  return (
    <>
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        {items && items.length
          ? items.map((item: any) => {
              return accordianItem(item);
            })
          : null}
      </Card>
    </>
  );
}
export default ItemDetailsPage;
