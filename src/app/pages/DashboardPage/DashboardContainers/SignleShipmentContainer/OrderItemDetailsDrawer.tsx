import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Accordion } from "app/components/Accordion";
import { getOrderCountDetail } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { InnerAccordion, AccordionOuterBox, OrderImage } from "./style";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";
import { Box, Grid } from "@mui/material";
import { H4 } from "app/components/Typography/Typography";

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
  pdfUrl?: any;
}

function OrderDetailsDrawer(props) {
  const { orderId, setDrawerOpen, pdfUrl } = props;
  console.log(pdfUrl);
  const [orderDetails, setOrderDetails] = useState<Array<orderDetails>>([]);
  const [isFragile, setIsFragile] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    console.log(typeof orderDetails);
    console.log(orderDetails);
  }, [orderDetails]);

  useEffect(() => {
    (async () => {
      setShowLoader(true);
      // const { response } = await getOrderDetails(orderId ? orderId : orderId);
      const { response } = await getOrderCountDetail(orderId);
      // console.log("response", response);
      if (response) {
        console.log(response?.data?.data?.orders);
        console.log(response?.data?.data?.orders[0]);
        setOrderDetails([response?.data?.data?.orders[0]]);
        setShowLoader(false);
      } else {
        setShowLoader(false);
        showToast("Could not get the data, Please try again!", "error");
        setDrawerOpen(false);
      }
    })();
  }, [orderId]);

  useEffect(() => {
    const fragile = orderDetails.filter((item) => {
      // orderDetails?.items?.filter((item) => {
      if (item.fragile === 1) return true;
      return false;
    });
    if (fragile?.length) {
      setIsFragile(true);
    }
  
  }, [orderDetails]);

  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    }
    return null;
  };

  return (
    <>
      {showLoader ? (
        <CircularProgress style={{ color: "black" }} />
      ) : (
        <AccordionOuterBox>
          {orderDetails?.map((orderDetails) => {
            console.log(orderDetails);
            return (
              <Accordion
                title={`Order Items - ${
                  orderDetails.shipmentReference
                    ? orderDetails.shipmentReference
                    : "-"
                }`}
              >
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <H4 text="Category" />
                      <H4 text={orderDetails?.category} className="value" />
                    </Grid>
                    <Grid item xs={6}>
                      <H4 text="Customer Reference #" />
                      <H4 text={orderDetails?.category} className="value" />
                    </Grid>
                    <Grid item xs={6}>
                      <H4 text="Delivery Options" />
                      <H4 text={orderDetails?.category} className="value" />
                    </Grid>
                    <Grid item xs={6}>
                      <H4 text="Fragile" />
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
                      <H4 text="Category" />
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
                      <H4 text="Category" />
                      <H4 text={isFragile ? "Yes" : "No"} className="value" />
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
                          <Accordion
                            key={i}
                            title={`Item #${i + 1} ${item.name}`}
                          >
                            <Grid container spacing={2}>
                              {!!item.weight && item.weight !== "0" && (
                                <Grid item xs={4}>
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
                                  <Grid item xs={4}>
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
                                <Grid item xs={4}>
                                  <H4 text="Pieces" />
                                  <H4 text={item.quantity} className="value" />
                                </Grid>
                              )}
                              {!!item.description && (
                                <Grid item xs={12}>
                                  <H4 text="Shipment Description" />
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

export default OrderDetailsDrawer;
