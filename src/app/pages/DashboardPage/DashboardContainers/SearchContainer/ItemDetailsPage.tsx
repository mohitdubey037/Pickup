import React from "react";
import { Grid } from "@material-ui/core";
import { Accordion } from "app/components/Accordion";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";
import { ContentBox } from "app/components/CommonCss/CommonCss";
import { H4 } from "app/components/Typography/Typography";
import { ItemDetailsBox } from "./style";
import { OrderImage } from "../SignleShipmentContainer/style";

function ItemDetailsPage(props: any) {
  const { singleOrderData } = props;
  const { items } = singleOrderData;

  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    } else {
      return "(lbs)";
    }
  };

  const accordianItem = (item: any, index: number) => {
    return (
      <ItemDetailsBox>
        <Accordion title={item.name} defaultExpanded={index === 0}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <H4 text="Category" />
              <H4
                className="value"
                text={singleOrderData.category ? singleOrderData.category : "-"}
              />
            </Grid>

            <Grid item md={3}>
              <H4
                text={`Shipment Weight ${getLabelFromID(
                  item.weightDimension,
                  WEIGHTDIMENSION
                )}`}
              />
              <H4 className="value" text={item.weight ? item.weight : "-"} />
            </Grid>

            <Grid item md={3}>
              <H4
                text={`LBH ${getLabelFromID(item.sizeDimension, DIMENSION2)}`}
              />
              <H4
                className="value"
                text={
                  <div>
                    {item.length} x {item.width} x {item.height}
                  </div>
                }
              />
            </Grid>

            <Grid item md={3}>
              <H4 text="Pieces" />
              <H4
                className="value"
                text={item.quantity ? item.quantity : "-"}
              />
            </Grid>

            <Grid item md={3}>
              <H4 text="Shipment Cost" />
              <H4
                className="value"
                text={
                  singleOrderData.shipmentCost
                    ? "$" + singleOrderData.shipmentCost
                    : "-"
                }
              />
            </Grid>

            <Grid item md={3}>
              <H4 text="Fragile Shipment" />
              <H4 className="value" text={item.fragile === 1 ? "Yes" : "No"} />
            </Grid>

            <Grid item md={3}>
              <H4 text="Delivery options" />
              <H4
                className="value"
                text={
                  singleOrderData.dropOption === 10
                    ? "Door Drop"
                    : singleOrderData.dropOption === 11
                    ? "Safe Drop"
                    : "-"
                }
              />
            </Grid>

            <Grid item md={3}>
              <H4 text="Customer Reference #" />
              <H4
                className="value"
                text={
                  singleOrderData.customerReferenceNumber
                    ? singleOrderData.customerReferenceNumber
                    : "-"
                }
              />
            </Grid>

            <Grid item md={12}>
              <H4 text="Order Description" />
              <H4
                className="value"
                text={item.description ? item.description : "-"}
              />
            </Grid>

            {item.picture && (
              <Grid item md={12}>
                <OrderImage src={item.picture} alt="" />
              </Grid>
            )}
          </Grid>
        </Accordion>
      </ItemDetailsBox>
    );
  };
  return (
    <>
      <ContentBox>
        {items && items.length
          ? items.map((item: object, index: number) => {
              return accordianItem(item, index);
            })
          : null}
      </ContentBox>
    </>
  );
}
export default ItemDetailsPage;
