import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Flex } from "app/components/Input/style";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H3, H4, Para } from "app/components/Typography/Typography";
import { Button } from "../../../../components/Buttons";
import { Drawer } from "app/components/Drawer";
import OrderDetailsDrawer from "./OrderDetailsDrawer";
import ShipmentSummaryAndPayments from "./ShipmentSummaryAndPayments";
import { getShipmentDetails } from "services/SingleShipmentServices";
import { actions } from "store/reducers/SingleShipmentReducer";
import { DisclaimerBox, OrderSummaryTableOuter, TotalBox } from "./style";
import TableSkeleton from "app/components/Table/TableSkeleton";
import { disclaimer } from "app/assets/Icons";
import NullState from "app/components/NullState/NullState";

function OrderSummary({ path: string }) {
    const dispatch = useDispatch();

    const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
        return state.singleShipment.orderIds;
    });
    const authUser = useSelector((state: any) => {
        return state.auth?.user;
    });

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenOne, setDrawerOpenOne] = useState(false);
    const [orderSummaryData, setOrderSummaryData] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState<null | number>(null);
    const [totalCost, setTotalCost] = useState(0);
    const [loading, setLoading] = useState<boolean>(true);

    const redirectBack = () => {
        navigate?.("/dashboard/search-shipment", {
            replace: true,
        });
    };

    const redirectForward = () => {
        navigate?.("/dashboard/charter-shipment/shipment-summary");
    };

    useEffect(() => {
        if (orderIds?.length > 0) {
            fetchOrderSummary();
        } else {
            redirectBack();
        }
    }, [orderIds]);

    const fetchOrderSummary = async () => {
        setLoading(true);
        const res = (await getShipmentDetails(orderIds)) as any;
        if (res.success) {
            const shipmentDetails = res.response.data.data;
            const data = shipmentDetails.shipmentSummary;
            const totalCost = data.reduce((acc, curr) => acc + curr.total, 0);
            dispatch(actions.setInvoice(shipmentDetails.invoiceId));
            setTotalCost(totalCost);
            setOrderSummaryData(data);
        }
        setLoading(false);
    };

    const onBackHandler = () => {
        dispatch(actions.resetSingleShipment());
    };

    const onItemCountSelectHandler = (id: number) => {
        setDrawerOpen(true);
        setSelectedOrder(id);
    };

    const getOrderIdItem = (openInvoiceDrawer, value, id: any) => {
        return <a onClick={() => openInvoiceDrawer(id)}>{value}</a>;
    };

    const onHoldTable = (orderSummaryData: any[], openOrderDrawer: any) => {
        let makeTableData: any = [];
        if (orderSummaryData && orderSummaryData.length) {
            orderSummaryData.forEach((item: any) => {
                makeTableData.push({
                    "Order Id": item.refNo,
                    Schedule:
                        item.type === "SCHEDULED"
                            ? moment(item.scheduledTime).format(
                                  "HH:mm - DD/MM/YY"
                              )
                            : item.type,
                    "Item Count": getOrderIdItem(
                        openOrderDrawer,
                        item.itemCount,
                        item.orderId
                    ),
                    "Order Cost": `$${item.total.toFixed(2)}`,
                });
            });
        }
        return makeTableData;
    };

    if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
        navigate("/non-authorized-page");
    }

    return (
      <>
        <ModuleContainer>
          <H3 text="Order Summary" />

          {loading ? (
            <Box mt={3}>
              <TableSkeleton />
            </Box>
          ) : (
            <OrderSummaryTableOuter mt={3}>
              {orderSummaryData?.length > 0 ? (
                <>
                  <Table
                    data={onHoldTable(
                      orderSummaryData,
                      onItemCountSelectHandler
                    )}
                  />
                  <TotalBox>
                    <H4 text="Total" className="total" />
                    <H4
                      text={`$${Number(totalCost).toFixed(2)}`}
                      className="total"
                    />
                  </TotalBox>
                </>
              ) : (
                <NullState />
              )}
            </OrderSummaryTableOuter>
          )}

          <DisclaimerBox>
            <img src={disclaimer} alt="" />
            <Box ml={2}>
              <H3 text="3 orders added to orders holding zone." />
              <Para text="Once they are ready to ship you can schedule them from the holding zone" />
            </Box>
          </DisclaimerBox>

          <Flex justifyContent="flex-end" top={24}>
            <Button
              secondary
              label="Back"
              onClick={onBackHandler}
              size="small"
            />
            <Button
              label="Proceed to Payment"
              onClick={redirectForward}
              size="medium"
              style={{ marginLeft: "12px" }}
            />
            {/* <Button
                        style={{ marginLeft: "12px" }}
                        secondary
                        label="drawer"
                        size="small"
                        onClick={() => {
                            setDrawerOpenOne(true);
                        }}
                    /> */}
          </Flex>
        </ModuleContainer>

        <Drawer
          open={drawerOpenOne}
          title="Payments"
          setDrawerOpen={(flag) => setDrawerOpenOne(flag)}
          closeIcon={true}
          actionButtons={true}
        >
          <ShipmentSummaryAndPayments />
        </Drawer>
        <Drawer
          open={drawerOpen}
          title="Order Details"
          setDrawerOpen={(flag) => setDrawerOpen(flag)}
          closeIcon={true}
          actionButtons={true}
        >
          <OrderDetailsDrawer
            orderId={selectedOrder}
            setDrawerOpen={setDrawerOpen}
          />
        </Drawer>
      </>
    );
}
export default OrderSummary;
