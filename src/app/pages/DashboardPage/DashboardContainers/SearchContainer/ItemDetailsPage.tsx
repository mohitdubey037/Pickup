import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Accordion } from "app/components/Accordion";
import { itempicture } from "../../../../assets/Images/index";
import Card from "@mui/material/Card";

function ItemDetailsPage(props: any) {
  const accordianItem = () => {
    return (
      <Grid>
        <Accordion title="Order Items - TOR-0607-123A">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <div className="label">Category</div>
              <div className="label-text">Electronics</div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">Shipment Weight (lbs)</div>
              <div className="label-text">13</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label"> LBH (inches)</div>
              <div className="label-text">32 x 32 x 32</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Pieces</div>
              <div className="label-text">Pieces</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Shipment Cost</div>
              <div className="label-text">$15</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Fragile Shipment</div>
              <div className="label-text">Yes</div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">Delivery options</div>
              <div className="label-text">Door drop</div>
            </Grid>
            <Grid item xs={2}>
              <div className="label"> Customer Reference #</div>
              <div className="label-text">PO23451</div>
            </Grid>
            <Grid item xs={12}>
              <div className="label"> Order Description</div>
              <div className="label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                libero in nulla maximus consequat. Aliquam dapibus est velit.
              </div>
            </Grid>
            <Grid item xs={12}>
              <img className="imageStyle" src={itempicture} />
            </Grid>
          </Grid>
        </Accordion>
      </Grid>
    );
  };
  return (
    <>
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        {accordianItem()}
        {accordianItem()}
        {accordianItem()}
      </Card>
    </>
  );
}
export default ItemDetailsPage;
