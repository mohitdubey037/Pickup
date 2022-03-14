import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { navigate, useLocation } from "@reach/router";

import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2, H3, H5 } from "app/components/Typography/Typography";
import { checkSquare } from "app/assets/Icons";
import { Button } from "app/components/Buttons";
import { Drawer } from "app/components/Drawer";
import { Flex, SearchTableTop } from "app/components/CommonCss/CommonCss";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import { getCategoryList } from "services/SingleShipmentServices";
import { actions } from "store/reducers/SingleShipmentReducer";
import { bulkOrderColoumns, getOrderData } from "./helper";
import { SuccessBox } from "./style";
import PayementDetailsDrawer from "./PayementDetailsDrawer";
import BulkOrderItemDetails from "./BulkOrderItemDetails";

const DRAWER_TITLE = {
  orderItemDetails: "Order Items",
  payment: "Payment",
};

const BulkSummary = ({ path }) => {
  const dispatch = useDispatch();
  const location: any = useLocation();

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });
  const inProgress = useSelector((state: { globalState: { showLoader } }) => {
    return state.globalState.showLoader;
  });

  const [categoryById, setCategoryById] = useState({});
  const [onHoldCount, setOnHoldCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderListData, setOrderListData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });

  const [orderDetailData, setOrderDetailData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const alertUser = (e) => (e.returnValue = "");

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const fetchCategoryList = async () => {
    const res: any = await getCategoryList();
    if (res?.success) {
      let temp = res.response.data.data;
      let categories = {};
      temp.forEach((obj: any) => (categories[obj.categoryId] = obj.name));
      setCategoryById(categories);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location?.state?.data) {
      setOrderListData(location?.state?.data);
      setPagination({
        count: location?.state?.data?.length,
        page: 0,
      });
      fetchCategoryList();
    } else {
      navigate("/dashboard/charter-shipment/bulk-shipment", { replace: true });
    }
  }, []);

  useEffect(() => {
    let tempOnHold = 0;
    orderListData.forEach((item) => {
      if (Number(item.type) === 22) {
        tempOnHold += 1;
      }
    });
    setOnHoldCount(tempOnHold);
  }, [orderListData]);

  const openDrawer = (type: string, data?: any) => {
    if (type === "orderItemDetails") {
      setOrderDetailData(data);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const deleteSelectedOrders = async (orderIdx?: number) => {
    let data = JSON.parse(JSON.stringify(orderListData));
    let indexes = orderIdx !== undefined ? [orderIdx] : selectedRows;
    indexes = indexes.map((item) => item + pagination.page * 10);
    data = data.filter((_, index) => indexes.indexOf(index) === -1);
    setOrderListData(data);
    setPagination({ ...pagination, page: 0, count: data.length });
  };

  const setToHoldingZone = () => {
    let data = JSON.parse(JSON.stringify(orderListData));
    let indexes = selectedRows;
    indexes.forEach((item) => {
      const index = item + pagination.page * 10;
      data[index].orderedAt = null;
      data[index].type = 22;
    });
    setOrderListData(data);
    setPagination({ ...pagination, count: data.length });
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex alignItems="center" style={{ flexFlow: "wrap" }}>
          <H3 text={`${pagination.count} Orders`} className="heading" />
          <H5
            text={`(${selectedRows.length} Selected)`}
            className="spanlabel"
            ml={8}
            mt={4}
          />
        </Flex>
        <Box>
          <Button
            label="Delete"
            onClick={() => deleteSelectedOrders()}
            size="small"
            secondary
            disabled={selectedRows.length === 0}
            style={{ marginRight: "8px" }}
          />
          <Button
            label="Move to Holding Zone"
            onClick={setToHoldingZone}
            size="small"
            disabled={selectedRows.length === 0}
          />
        </Box>
      </SearchTableTop>
    );
  };

  const getBulkOrderListData = async (page?: number) => {
    if (page !== undefined) {
      setPagination({
        count: orderListData.length,
        page: page,
      });
    }
  };

  useEffect(() => {
    if (orderIds?.length > 0) {
      navigate("/dashboard/charter-shipment/order-summary");
    }
  }, [orderIds]);

  const handleConfirmOrders = async () => {
    let orders = JSON.parse(JSON.stringify(orderListData));
    orders = orders.map((order) => {
      delete order.OrderNumber;
      return order;
    });
    dispatch(actions.submitShipment({ orders, source: "bulk" }));
  };

  return (
    <ModuleContainer>
      <H2 title="Bulk Order" />

      {orderListData.length > 0 && (
        <SuccessBox>
          <img src={checkSquare} alt="" />
          <p>
            Success!
            <span>{orderListData.length - onHoldCount} orders ready</span>to go
            {onHoldCount > 0 &&
              ` and ${onHoldCount} orders will be added to holding zone`}
            .
          </p>
        </SuccessBox>
      )}

      {loading && orderListData.length === 0 ? (
        <TableSkeleton />
      ) : orderListData.length > 0 ? (
        <Table
          loading={loading}
          tableTop={tableTop()}
          coloumns={bulkOrderColoumns}
          data={getOrderData(
            orderListData,
            pagination.page,
            categoryById,
            openDrawer,
            deleteSelectedOrders
          )}
          showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getBulkOrderListData(page)}
        />
      ) : (
        <NullState message="No order to place now" />
      )}

      <Button
        label="Confirm Orders"
        onClick={handleConfirmOrders}
        size="medium"
        showLoader={inProgress}
        disabled={orderListData.length === 0 || loading}
        style={{ float: "right", margin: "16px 0" }}
      />

      <Drawer
        open={drawerOpen}
        title={DRAWER_TITLE?.[drawerType] || ""}
        setDrawerOpen={setDrawerOpen}
        closeIcon
      >
        {drawerType === "orderItemDetails" ? (
          <BulkOrderItemDetails
            data={orderDetailData}
            categoryById={categoryById}
          />
        ) : drawerType === "payment" ? (
          <PayementDetailsDrawer />
        ) : (
          <></>
        )}
      </Drawer>

      {inProgress && (
        <div
          style={{
            position: "absolute",
            zIndex: 100000,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        />
      )}
    </ModuleContainer>
  );
};

export default BulkSummary;
