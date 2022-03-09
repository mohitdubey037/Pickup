import { useEffect, useState } from "react";
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
import { bulkOrderColoumns, getOrderData } from "./helper";
import { SuccessBox } from "./style";
import PayementDetailsDrawer from "./PayementDetailsDrawer";
import BulkOrderItemDetails from "./BulkOrderItemDetails";
import { getCategoryList } from "services/SingleShipmentServices";

const DRAWER_TITLE = {
  orderItemDetails: "Order Items",
  payment: "Payment",
};

const BulkSummary = ({ path }) => {
  const location: any = useLocation();

  const [categoryById, setCategoryById] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
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

  const openDrawer = (type: string, data?: any) => {
    if (type === "orderItemDetails") {
      setOrderDetailData(data);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex alignItems="center">
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
            onClick={() => {}}
            size="small"
            secondary
            disabled={selectedRows.length === 0}
            style={{ marginRight: "12px" }}
          />
          <Button
            label="Move to Holding Zone"
            onClick={() => {}}
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

  return (
    <ModuleContainer>
      <H2 title="Bulk Order Summary" />

      <SuccessBox>
        <img src={checkSquare} alt="" />
        <p>
          Success! <span> 17 orders ready </span> to go and 3 orders added to
          order holding zone.
        </p>
      </SuccessBox>

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
            openDrawer
          )}
          showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getBulkOrderListData(page)}
        />
      ) : (
        <NullState />
      )}

      <Button
        label="Confirm Orders"
        size="medium"
        onClick={() => openDrawer("payment")}
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
    </ModuleContainer>
  );
};

export default BulkSummary;
