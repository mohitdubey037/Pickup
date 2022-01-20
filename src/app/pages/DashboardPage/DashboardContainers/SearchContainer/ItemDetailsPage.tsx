import React from "react";
import { Grid } from "@material-ui/core";
import { Accordion } from "app/components/Accordion";
import { itempicture } from "../../../../assets/Images/index";
import Card from "@mui/material/Card";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";

function ItemDetailsPage(props: any) {
  const { singleOrderData } = props;
  const { items } = singleOrderData;

  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    }
    return null;
  };

  const accordianItem = (item: any) => {
    return (
      <Grid>
        <Accordion title={item.name}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <div className="label">Category</div>
              <div className="label-text">
                {singleOrderData.category ? singleOrderData.category : "-"}
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">
                Shipment Weight{" "}
                {getLabelFromID(item.weightDimension, WEIGHTDIMENSION)}
              </div>
              <div className="label-text">
                {item.weight ? item.weight : "-"}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">
                LBH {getLabelFromID(item.sizeDimension, DIMENSION2)}
              </div>
              <div className="label-text">
                {item.length > 0 && item.width > 0 && item.height > 0 && (
                  <div>
                    {item.length} x {item.width} x {item.height}
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Pieces</div>
              <div className="label-text">
                {singleOrderData.totalQuantity
                  ? singleOrderData.totalQuantity
                  : "-"}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Shipment Cost</div>
              <div className="label-text">
                {"$" + singleOrderData.shipmentCost
                  ? singleOrderData.shipmentCost
                  : "-"}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label">Fragile Shipment</div>
              <div className="label-text">
                {item.fragile === 1 ? "Yes" : "No"}
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="label">Delivery options</div>
              <div className="label-text">
                {singleOrderData.dropOption === 10
                  ? "Door Drop"
                  : singleOrderData.dropOption === 11
                  ? "Safe Drop"
                  : "-"}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="label"> Customer Reference #</div>
              <div className="label-text">
                {singleOrderData.customerReferenceNumber
                  ? singleOrderData.customerReferenceNumber
                  : "-"}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="label"> Order Description</div>
              <div className="label">
                {item.description ? item.description : "-"}
              </div>
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
