import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Accordion } from "app/components/Accordion";
import { getOrderCountDetail, getOrderDetails } from "services/SingleShipmentServices";
import { Flex } from "app/components/Input/style";
import { showToast } from "utils";
import { useParams } from "@reach/router";
import { LabelSpan, ContentSpan, MainDiv, InnerAccordion } from "./style";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";

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
  const {orderId, setDrawerOpen, pdfUrl} = props;
  console.log(pdfUrl);
  const [orderDetails, setOrderDetails] = useState<Array<orderDetails>>([]);
  const [isFragile, setIsFragile] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    console.log(typeof(orderDetails));
    console.log(orderDetails);
  },[orderDetails])

  useEffect(() => {
    (async () => {
      setShowLoader(true);
      // const { response } = await getOrderDetails(orderId ? orderId : orderId);
      const { response } = await getOrderCountDetail(orderId)
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
    const fragile = orderDetails.filter(item => {
      // orderDetails?.items?.filter((item) => {
        if (item.fragile === 1) return true;
        return false;
        
      });
      if (fragile?.length) {
        setIsFragile(true);
      }
    // const fragile = orderDetails?.items?.filter((item) => {
    //   if (item.fragile === 1) return true;
    //   return false;
    // });
    // if (fragile?.length > 0) {
    //   setIsFragile(true);
    // }
  }, [orderDetails]);

  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) =>item.value === id);
    if(foundLabel) {
        return `(${foundLabel.label.toLowerCase()})`
    }
    return null;
  }

  return (
    <MainDiv>
      {showLoader ? (
        <CircularProgress style={{ color: "black" }} />
      ) : 
      <>
      {orderDetails?.map(orderDetails => {
        console.log(orderDetails);
        return (
          <div style={{ border: "1px solid #DCDCDC" }}>
            <Accordion
              title={`Order Items - ${
                orderDetails.shipmentReference
                  ? orderDetails.shipmentReference
                  : "-"
              }`}
            >
              <div>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  style={{ margin: "18px 0" }}
                >
                  <Flex direction="column">
                    <LabelSpan>Category</LabelSpan>
                    <ContentSpan>{orderDetails?.category}</ContentSpan>
                  </Flex>
                  <Flex direction="column">
                    <LabelSpan>Customer Ref. #</LabelSpan>
                    <ContentSpan>
                      {orderDetails?.customerReferenceNumber
                        ? orderDetails.customerReferenceNumber
                        : "-"}
                    </ContentSpan>
                  </Flex>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  style={{ margin: "18px 0" }}
                >
                  <Flex direction="column">
                    <LabelSpan>Delivery Options</LabelSpan>
                    <ContentSpan>
                      {orderDetails.dropOption === 10 ? "Door Drop" :
                      (orderDetails.dropOption === 11 ? "Safe Drop" : "-")}
                    </ContentSpan>
                  </Flex>
                  <Flex direction="column">
                    <LabelSpan>Fragile</LabelSpan>
                    <ContentSpan>{isFragile ? "Yes" : "No"}</ContentSpan>
                  </Flex>
                </Flex>
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  style={{ margin: "18px 0" }}
                >
                  {/* <LabelSpan>Order Description</LabelSpan>
                  <ContentSpan>{orderDetails?.description}</ContentSpan> */}
                  {orderDetails?.picture ? (
                    <img
                      style={{ width: "120px", height: "100px" }}
                      src={orderDetails?.picture && orderDetails?.picture}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </Flex>
              </div>
  
              {orderDetails?.items?.length > 0 &&
                orderDetails?.items.map((item, i) => {
                  return (
                    <>
                      <hr
                        style={{ width: "100%", border: "1px solid #DCDCDC" }}
                      />
                      <InnerAccordion>
                      <Accordion key={i} title={`Item #${i + 1} ${item.name}`}>
                        <Flex direction="row" style={{ margin: "18px 0", width: "100%" }}>
                          {!!item.weight && item.weight !=="0"  && (
                            <Flex direction="column">
                              <LabelSpan>Weight {getLabelFromID(item.weightDimension, WEIGHTDIMENSION)}</LabelSpan>
                              <ContentSpan>{item.weight}</ContentSpan>
                            </Flex>
                          )}
                          {item.length > 0 &&
                            item.width > 0 &&
                            item.height > 0 && (
                              <Flex direction="column">
                                <LabelSpan>LBH {getLabelFromID(item.sizeDimension, DIMENSION2)}</LabelSpan>
                                <ContentSpan>
                                  {item.length} x {item.width} x {item.height}
                                </ContentSpan>
                              </Flex>
                            )}
                          {!!item.quantity && (
                            <Flex direction="column">
                              <LabelSpan>Pieces</LabelSpan>
                              <ContentSpan>{item.quantity}</ContentSpan>
                            </Flex>
                          )}
                        </Flex>
                        <Flex direction="column">
                          {!!item.description && (
                            <Flex direction="column">
                              <LabelSpan>Shipment Description</LabelSpan>
                              <ContentSpan>{item.description}</ContentSpan>
                            </Flex>
                          )}
                        </Flex>
                      </Accordion>
                      </InnerAccordion>
                    </>
                  );
                })}
            </Accordion>
          </div>
        )
      }
      )
      }
      </>
    }
    </MainDiv>
  );
}

export default OrderDetailsDrawer;
