import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import { Accordion } from "app/components/Accordion";
import { getOrderCountDetail } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";
import { H4 } from "app/components/Typography/Typography";
import OrderDetailsSkeleton from "./OrderDetailsSkeleton";
import { AccordionOuterBox, InnerAccordion, OrderImage } from "app/components/CommonCss/CommonCss";

interface orderDetails {
  refNo?: string;
  shippingReference?: string;
  referenceNumber?: string;
  dropOption?: string;
  items?: any;
  image?: string;
  categoryName?: string;
  fragile?: number;
  description?: string;
  picture?: string;
}

function OrderItemDetailsDrawer(props) {
  const { orderId, setDrawerOpen } = props;
  const [orderDetails, setOrderDetails] = useState<Array<orderDetails>>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setShowLoader(true);
      const { response } = await getOrderCountDetail(orderId);
      if (response) {
        setOrderDetails(response?.data?.data?.orders);
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
          {orderDetails?.map((order, index) => {
            return (
              <Accordion
                title={`Order Items - ${
                  order.referenceNumber ? order.referenceNumber : "-"
                }`}
                defaultExpanded={index === 0}
              >
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <H4 text="Category" />
                      <H4 text={order?.categoryName} className="value" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <H4 text="Customer Reference #" />
                      <H4
                        text={
                          order?.shippingReference
                            ? order.shippingReference
                            : "-"
                        }
                        className="value"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <H4 text="Delivery Options" />
                      <H4
                        text={
                          order.dropOption === "FRONT DOOR"
                            ? "Door Drop"
                            : order.dropOption === "SAFE DROP"
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
                          order?.items?.filter((item) => item.fragile === 1)
                            .length > 0
                            ? "Yes"
                            : "No"
                        }
                        className="value"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      {order?.picture ? (
                        <OrderImage
                          src={order?.picture && order?.picture}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                </Box>

                {order?.items?.length > 0 &&
                  order?.items.map((item, i) => {
                    return (
                      <>
                        <InnerAccordion>
                          <Accordion
                            key={i}
                            title={`Item #${i + 1} ${item.name}`}
                          >
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
                                  <H4
                                    text={item.description}
                                    className="value"
                                  />
                                </Grid>
                              )}
                            </Grid>
                          </Accordion>
                        </InnerAccordion>
                      </>
                    );
                  })}
              </Accordion>
            );
          })}
        </AccordionOuterBox>
      )}
    </>
  );
}

export default OrderItemDetailsDrawer;
