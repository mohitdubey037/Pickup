import { useEffect, useState } from "react";
import { Accordion } from "app/components/Accordion";
import { getOrderDetails } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";
import { Grid } from "@mui/material";
import { H4 } from "app/components/Typography/Typography";
import { Box } from "@mui/system";
import OrderDetailsSkeleton from "./OrderDetailsSkeleton";
import { AccordionOuterBox, InnerAccordion, OrderImage } from "app/components/CommonCss/CommonCss";

interface orderDetails {
  refNo?: string;
  customerReferenceNumber?: string;
  shipmentReference?: string;
  dropOption?: number;
  items?: any;
  image?: string;
  category?: string;
  fragile?: number;
  description?: string;
  picture?: string;
}

function OrderDetailsDrawer({ orderId, setDrawerOpen }) {
  const [orderDetails, setOrderDetails] = useState<orderDetails>({});
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setShowLoader(true);
      const { response } = await getOrderDetails(orderId ? orderId : orderId);
      if (response) {
        setOrderDetails(response.data.data);
      } else {
        showToast("Could not get the data, Please try again!", "error");
        setDrawerOpen(false);
      }
      setShowLoader(false);
    })();
  }, [orderId]);

  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    } else {
      return "";
    }
  };

  return (
    <>
      {showLoader ? (
        <OrderDetailsSkeleton />
      ) : (
        <AccordionOuterBox>
          <Accordion
            title={`Order Items - ${
              orderDetails.shipmentReference
                ? orderDetails.shipmentReference
                : "-"
            }`}
            defaultExpanded
          >
            <Box>
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <H4 text="Category" />
                  <H4 text={orderDetails?.category} className="value" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <H4 text="Customer Reference #" />
                  <H4
                    text={
                      orderDetails?.customerReferenceNumber
                        ? orderDetails.customerReferenceNumber
                        : "-"
                    }
                    className="value"
                  />
                </Grid>
                <Grid item xs={6}>
                  <H4 text="Delivery Options" />
                  <H4
                    text={
                      orderDetails.dropOption === 10
                        ? "Door Drop"
                        : orderDetails.dropOption === 11
                        ? "Safe Drop"
                        : "-"
                    }
                    className="value"
                  />
                </Grid>
                <Grid item xs={6}>
                  <H4 text="Fragile Order" />
                  <H4
                    text={
                      orderDetails?.items?.filter((item) => item.fragile === 1)
                        .length > 0
                        ? "Yes"
                        : "No"
                    }
                    className="value"
                  />
                </Grid>
                <Grid item xs={12}>
                  {orderDetails?.picture ? (
                    <OrderImage
                      src={orderDetails?.picture && orderDetails?.picture}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </Box>

            {orderDetails?.items?.length > 0 &&
              orderDetails?.items.map((item, i) => {
                return (
                  <>
                    <InnerAccordion>
                      <Accordion key={i} title={`Item #${i + 1} ${item.name}`}>
                        <Grid container spacing={3}>
                          {!!item.weight && item.weight !== "0" && (
                            <Grid item sm={4} xs={6}>
                              <H4
                                text={`Weight${getLabelFromID(
                                  item.weightDimension,
                                  WEIGHTDIMENSION
                                )}`}
                              />
                              <H4 text={item.weight} className="value" />
                            </Grid>
                          )}

                          {item.length > 0 &&
                            item.width > 0 &&
                            item.height > 0 && (
                              <Grid item sm={4} xs={6}>
                                <H4
                                  text={`LBH${getLabelFromID(
                                    item.sizeDimension,
                                    DIMENSION2
                                  )}`}
                                />
                                <H4
                                  text={`${item.length} x ${item.width} x ${item.height}`}
                                  className="value"
                                />
                              </Grid>
                            )}
                          {!!item.quantity && (
                            <Grid item sm={4} xs={12}>
                              <H4 text="Pieces" />
                              <H4 text={item.quantity} className="value" />
                            </Grid>
                          )}
                          {!!item.description && (
                            <Grid item xs={12}>
                              <H4 text="Item Description" />
                              <H4 text={item.description} className="value" />
                            </Grid>
                          )}
                        </Grid>
                      </Accordion>
                    </InnerAccordion>
                  </>
                );
              })}
          </Accordion>
        </AccordionOuterBox>
      )}
    </>
  );
}

export default OrderDetailsDrawer;
