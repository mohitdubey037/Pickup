import { useEffect, useState } from "react";
import moment from "moment";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Box, Grid } from "@mui/material";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2, H3, H5 } from "app/components/Typography/Typography";
import { sliders } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import { Flex, SearchTableTop } from "app/components/CommonCss/CommonCss";
import {
  getHoldingShipmentsService,
  scheduleShipmentService,
  deleteShipmentService,
} from "services/HoldingService";
import { actions as singleActions } from "store/reducers/SingleShipmentReducer";
import OrderDetailsDrawer from "../SignleShipmentContainer/OrderDetailsDrawer";
import { onHoldOrderColoumns, getOnHoldOrderData } from "./helper";
import ScheduleShipmentsDrawer from "./ScheduleShipmentsDrawer";
import { FilterFlexBox } from "../PaymentsContainer/style";

const initialValues = {
  shippingId: "",
  fromDate: "",
  toDate: "",
};

const OnHoldShipmentContainer = ({ path: string }) => {
  const dispatch = useDispatch();

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [onHoldOrderData, setOnHoldOrderData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [prevValues, setPrevValues] = useState<any>(initialValues);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });
  const [sorting, setSorting] = useState({
    field: "shippingDate",
    type: "desc",
  });

  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const getDrawerTitle = () => {
    if (drawerType === "orderDetails") {
      return "Order Items";
    } else if (drawerType === "scheduleOrder") {
      return "Schedule Orders";
    } else {
      return "";
    }
  };

  const openOnHoldDrawer = (id: any, type: any) => {
    if (drawerType !== "scheduleSelectedOrders") {
      setSelectedOrderId(id);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const deleteSelectedOrders = async () => {
    const orderIds = onHoldOrderData
      .filter((_, idx) => selectedRows.includes(idx))
      .map((item) => item.orderId);

    const res: any = await deleteShipmentService(orderIds);
    if (res?.success) {
      getOnHoldOrderListData();
    }
  };

  const scheduleSelectedOrders = async (values) => {
    let orderIds: any = [];
    if (drawerType === "scheduleSelectedOrders") {
      orderIds = onHoldOrderData
        .filter((_, idx) => selectedRows.includes(idx))
        .map((item) => item.orderId);
    } else {
      orderIds = [selectedOrderId];
    }
    const data = {
      ...values,
      shipment: orderIds,
    };
    const res: any = await scheduleShipmentService(data);
    if (res?.success) {
      dispatch(singleActions.setShipmentOrderIds(orderIds));
    }
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
            onClick={deleteSelectedOrders}
            size="medium"
            secondary
            disabled={selectedRows.length === 0}
            style={{ marginRight: "12px" }}
          />
          <Button
            label="Schedule"
            onClick={() => openOnHoldDrawer("", "scheduleSelectedOrders")}
            size="medium"
            disabled={selectedRows.length === 0}
          />
        </Box>
      </SearchTableTop>
    );
  };

  useEffect(() => {
    if (orderIds?.length > 0) {
      navigate("/dashboard/charter-shipment/order-summary");
    }
  }, [orderIds]);

  useEffect(() => {
    dispatch(singleActions.resetSingleShipment());
    getOnHoldOrderListData();
  }, []);

  const getOnHoldOrderListData = async (
    values?: object,
    page?: number,
    sort?: { field: string; type: string }
  ) => {
    setLoading(true);
    let urlParams = "",
      rest = values !== undefined ? values : prevValues;
    let params: any = {
      ...rest,
      page:
        values !== undefined
          ? 1
          : page !== undefined
          ? page + 1
          : pagination.page + 1,
      chunk: 10,
      sortingField: sort !== undefined ? sort.field : sorting.field,
      sortingType: sort !== undefined ? sort.type : sorting.type,
    };
    if (values) {
      setPrevValues(values);
    } else {
      resetForm({ values: prevValues });
    }
    if (sort) {
      setSorting({
        field: sort.field,
        type: sort.type,
      });
    }
    params["fromDate"] = params["fromDate"]
      ? moment(params["fromDate"]).format("YYYY-MM-DD")
      : "";
    params["toDate"] = params["toDate"]
      ? moment(params["toDate"]).format("YYYY-MM-DD")
      : "";
    let tempLen = Object.entries(params).length;
    Object.entries(params).forEach(
      ([key, value], index) =>
        (urlParams += value
          ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
          : "")
    );
    const res: any = await getHoldingShipmentsService(urlParams);
    if (res?.success) {
      const data = res.response.data.data;
      setOnHoldOrderData(data.list);
      setPagination({
        count: data.pageMetaData.total,
        page: data.pageMetaData.page - 1,
      });
    } else {
      setOnHoldOrderData([]);
    }
    setLoading(false);
  };

  const {
    values,
    errors,
    touched,
    resetForm,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: (values) => getOnHoldOrderListData(values),
  });

  return (
    <ModuleContainer>
      <H2 title="On Hold Orders" />

      <Box mt={4} mb={2}>
        <GridContainer container spacing={2}>
          <Grid item xs={12} sm={4} lg={2}>
            <Input
              id="shippingId"
              name="shippingId"
              initValue={values.shippingId}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.shippingId && errors.shippingId}
              label="Order Id"
              placeholder="eg. 1234"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="From Date"
              maxDate={values.toDate ? values.toDate : new Date()}
              placeholder={"e.g 06/06/2021"}
              value={values.fromDate || null}
              onChange={(val) => setFieldValue("fromDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="To Date"
              maxDate={new Date()}
              minDate={!values.fromDate ? null : values.fromDate}
              placeholder={"e.g 06/06/2021"}
              value={values.toDate || null}
              onChange={(val) => setFieldValue("toDate", val)}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FilterFlexBox>
              <Button
                label="Search"
                onClick={handleSubmit}
                size="small"
                disabled={loading}
              />
              <Box>
                <img src={sliders} alt="Advanced Filter" />
              </Box>
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>

      {loading && onHoldOrderData?.length === 0 ? (
        <TableSkeleton />
      ) : onHoldOrderData.length > 0 ? (
        <Table
          loading={loading}
          tableTop={tableTop()}
          coloumns={onHoldOrderColoumns}
          data={getOnHoldOrderData(onHoldOrderData, openOnHoldDrawer)}
          showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getOnHoldOrderListData(undefined, page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getOnHoldOrderListData(undefined, undefined, { field, type })
          }
        />
      ) : (
        <NullState />
      )}

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={setDrawerOpen}
        closeIcon
      >
        {drawerType === "orderDetails" ? (
          <OrderDetailsDrawer
            orderId={selectedOrderId}
            setDrawerOpen={setDrawerOpen}
          />
        ) : drawerType === "scheduleOrder" ||
          drawerType === "scheduleSelectedOrders" ? (
          <ScheduleShipmentsDrawer
            handleSchedule={scheduleSelectedOrders}
            setDrawerOpen={setDrawerOpen}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default OnHoldShipmentContainer;
