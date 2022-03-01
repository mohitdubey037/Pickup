import { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Flex } from "app/components/Input/style";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H3, H4, Para } from "app/components/Typography/Typography";
import TableSkeleton from "app/components/Table/TableSkeleton";
import { disclaimer } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import NullState from "app/components/NullState/NullState";
import { Button } from "../../../../components/Buttons";
import OrderDetailsDrawer from "./OrderDetailsDrawer";
import { getShipmentDetails } from "services/SingleShipmentServices";
import { actions } from "store/reducers/SingleShipmentReducer";
import { DisclaimerBox, OrderSummaryTableOuter, TotalBox } from "./style";

function OrderSummary({ path }) {
  const dispatch = useDispatch();

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | number>(null);
  const [orderSummaryData, setOrderSummaryData] = useState([]);
  const [onHoldShipment, setOnHoldShipment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  const redirectBack = () => {
    const url =
      orderSummaryData?.length > 0
        ? "/dashboard/search-shipment"
        : onHoldShipment > 0
        ? "/dashboard/holding-zone"
        : "/dashboard/charter-shipment/single-shipment";
    navigate?.(url, {
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
      shipmentDetails?.onHoldShipments > 0 &&
        setOnHoldShipment(shipmentDetails?.onHoldShipments);
      setTotalCost(totalCost);
      setOrderSummaryData(data);
    }
    setLoading(false);
  };

  const alertUser = (e) => (e.returnValue = "");

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const onBackHandler = () => {
    if (window.confirm("Are you sure you want to leave this page?")) {
      dispatch(actions.resetSingleShipment());
    }
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
              ? moment(item.scheduledTime).format("HH:mm - DD/MM/YY")
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
        ) : orderSummaryData?.length > 0 ? (
          <OrderSummaryTableOuter mt={3}>
            <Table
              data={onHoldTable(orderSummaryData, onItemCountSelectHandler)}
            />
            <TotalBox>
              <H4 text="Total" className="total" />
              <H4 text={`$${Number(totalCost).toFixed(2)}`} className="total" />
            </TotalBox>
          </OrderSummaryTableOuter>
        ) : (
          <NullState message="No order to place now" />
        )}

        {onHoldShipment > 0 && (
          <DisclaimerBox>
            <img src={disclaimer} alt="" />
            <Box ml={2}>
              <H3
                text={`${onHoldShipment} order${
                  onHoldShipment > 1 ? "s" : ""
                } added to holding zone.`}
              />
              <Para text="Once your orders are ready to ship, you can schedule them later from the holding zone" />
            </Box>
          </DisclaimerBox>
        )}

        {!loading && (
          <Flex justifyContent="flex-end" top={24}>
            <Button
              secondary
              label="Back"
              onClick={onBackHandler}
              size="small"
            />
            {orderSummaryData?.length > 0 && (
              <Button
                label="Proceed to Payment"
                onClick={redirectForward}
                size="medium"
                style={{ marginLeft: "12px" }}
              />
            )}
          </Flex>
        )}
      </ModuleContainer>

      <Drawer
        open={drawerOpen}
        title="Order Details"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon
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
