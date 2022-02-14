/* eslint-disable no-debugger */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2, H3 } from "app/components/Typography/Typography";
import { sliders } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import DatePickerInput from "app/components/Input/DatePickerInput";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import SelectNew from "app/components/Select/SelectNew";
import { searchTable } from "./helper";
import { SearchTableTop } from "./style";
import AddNewPaymentDrawer from "../PaymentsContainer/AddNewPaymentDrawer";
import AdvanceFilters from "./AdvanceFilters";
import SearchOrderDetailsDrawer from "./SearchOrderDetailsDrawer";
import { actions as singleActions } from "store/reducers/SingleShipmentReducer";
import {
  getSearchOrderList,
  getSearchOrderListById,
} from "../../../../../services/SearchItemService";
import { STATUS } from "../../../../../../src/constants";
import { FilterFlexBox } from "../PaymentsContainer/style";
import { AddressDetailsSkeleton } from "./AddressDetailsSkeleton";

const SearchContainer = ({ path: string }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  const [searchRecordData, setSearchRecordData] = useState<any>();
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(0);

  const getSearchListData = async (values?: object) => {
    let urlParams = "";
    if (values) {
      urlParams += "?";
      let tempLen = Object.entries(values).length;
      Object.entries(values).forEach(
        ([key, value], index) =>
          (urlParams += value
            ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
            : "")
      );
    }
    getSearchOrderListData(urlParams);
  };

  const getSearchOrderListData = async (url?: any) => {
    setLoading(true);
    const res = (await getSearchOrderList(url)) as any;
    if (res.success) {
      const orderList = res.response.data.data;
      setSearchRecordData(orderList);
      setPage(orderList?.pageMetaData?.page - 1);
      setTotalPages(orderList?.pageMetaData?.totalPages);
      setTotalData(orderList?.pageMetaData?.total);
    } else if (!res.error) {
      const InvoiceList = res;
      setSearchRecordData(InvoiceList);
    }
    setLoading(false);
  };

  const getSearchPaginatedData = async (page) => {
    if (page === 0) {
      getSearchListData();
    } else {
      const res = (await getSearchOrderList("", page + 1, 10)) as any;
      if (res.success) {
        const orderList = res.response.data.data;
        setPage(page);
        setSearchRecordData(orderList);
      } else if (!res.error) {
        const InvoiceList = res;
        setSearchRecordData(InvoiceList);
      }
    }
  };

  const getSingleOrderData = async (id: any) => {
    setLoading(true);
    const res = (await getSearchOrderListById(id)) as any;
    if (res.success) {
      const orderListByID = res.response.data.data;
      setSingleOrderData(orderListByID);
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(singleActions.resetSingleShipment());
    getSearchListData();
  }, [dispatch]);

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${totalData} Orders`} className="heading" />
        <Button label="Print" onClick={() => {}} size="small" secondary />
      </SearchTableTop>
    );
  };

  const setData = (name, value) => {
    if (name === "fromDate") {
      setFieldValue("fromDate", moment(value).format("YYYY-MM-DD"));
    } else if (name === "toDate") {
      setFieldValue("toDate", moment(value).format("YYYY-MM-DD"));
    }
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type === "orderDetails") {
      getSingleOrderData(id);
      setSelectedInvoiceId(id);
    } else if (type === "invoice") {
      setSelectedInvoiceId(id);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "advanceFilter") {
      return "Advanced Filter";
    } else {
      return "";
    }
  };

  const applyOrderFilters = () => {
    setDrawerType("");
    setDrawerOpen(false);
    getSearchListData();
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      invoiceNumber: "",
      shippingId: "",
      orderId: "",
      fromDate: "",
      toDate: "",
      status: "pending",
    },
    onSubmit: (values) => getSearchListData(values),
  });

  if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <H2 title="Search Orders" />

      <Box mt={3} mb={2}>
        <GridContainer container spacing={2}>
          <Grid item xs={6} sm={4} lg={2}>
            <Input
              id="invoiceNumber"
              name="invoiceNumber"
              initValue={values.invoiceNumber}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.invoiceNumber && errors.invoiceNumber}
              label="Invoice Number"
              placeholder="eg. 123,321"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Input
              id="orderId"
              name="orderId"
              initValue={values.orderId}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.orderId && errors.orderId}
              label="Order Id"
              placeholder="eg. 123,321"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="From Date"
              maxDate={
                new Date(moment(values.toDate).subtract(1, "days").toDate())
              }
              placeholder={"e.g 06/06/2021"}
              value={values.fromDate || null}
              onChange={(val) => setData("fromDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              minDate={
                new Date(moment(values.fromDate).add(1, "days").toDate())
              }
              maxDate={new Date()}
              label="To Date"
              placeholder={"e.g 06/06/2021"}
              value={values.toDate || null}
              onChange={(val) => setData("toDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <SelectNew
              id="status"
              name="status"
              label={"Status"}
              placeholder={"Select Order Status"}
              options={STATUS}
              value={values.status}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <FilterFlexBox>
              <Button size="small" label="Search" onClick={handleSubmit} />
              <Box>
                <img
                  onClick={() => openInvoiceDrawer(null, "advanceFilter")}
                  src={sliders}
                  alt=""
                />
              </Box>
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>

      {loading ? (
        <TableSkeleton />
      ) : searchRecordData?.list?.length > 0 ? (
        <Table
          data={searchTable(searchRecordData?.list, openInvoiceDrawer)}
          tableTop={tableTop()}
          paginationData={(page) => getSearchPaginatedData(page)}
          showCheckbox
          showPagination
          page={page}
          totalData={totalData}
          totalPage={totalPages}
          filterColumns={[0, 1, 2, 3, 4, 5]}
        />
      ) : (
        <NullState message="No Records Found" />
      )}

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
        size={drawerType === "orderDetails" ? "large" : "small"}
      >
        {drawerType === "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType === "advanceFilter" ? (
          <AdvanceFilters applyFilters={applyOrderFilters} />
        ) : (
          <>
            {loading ? (
              <AddressDetailsSkeleton />
            ) : (
              <SearchOrderDetailsDrawer
                singleOrderData={singleOrderData}
                orderId={selectedInvoiceId}
              />
            )}
          </>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default SearchContainer;
