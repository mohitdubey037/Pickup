import { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Badge } from "@mui/material";
import moment from "moment";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { TableNew } from "app/components/Table";
import { H2, H3 } from "app/components/Typography/Typography";
import { sliders } from "app/assets/Icons";
import { Drawer } from "app/components/Drawer";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import DatePickerInput from "app/components/Input/DatePickerInput";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import SelectNew from "app/components/Select/SelectNew";
import { getSearchOrderData, searchOrderColoumns } from "./helper";
import { CustomBadge, SearchTableTop } from "./style";
import InvoiceDetailsDrawer from "../PaymentsContainer/InvoiceDetailsDrawer";
import AdvanceFilters from "./AdvanceFilters";
import SearchOrderDetailsDrawer from "./SearchOrderDetailsDrawer";
import { actions as singleActions } from "store/reducers/SingleShipmentReducer";
import {
  getAdvancedFilter,
  getSearchOrderList,
} from "../../../../../services/SearchItemService";
import { STATUS } from "../../../../../../src/constants";
import { FilterFlexBox } from "../PaymentsContainer/style";

const initialValues = {
  invoiceNumber: "",
  orderId: "",
  fromDate: "",
  toDate: "",
  status: "",
};

const SearchContainer = ({ path }: any) => {
  const dispatch = useDispatch();

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [searchOrderData, setSearchOrderData] = useState<any>([]);
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

  const [advanceFilterData, setAdvanceFilterData] = useState(null);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType === "advanceFilter") {
      return "Advanced Filter";
    } else {
      return "";
    }
  };

  const openOrderDrawer = (id: any, type: any) => {
    setSelectedInvoiceId(id);
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const completeOrderPayment = (orderId) => {
    dispatch(singleActions.setShipmentOrderIds([orderId]));
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${pagination.count} Orders`} className="heading" />
        <Button
          label="Print"
          onClick={() => {}}
          size="small"
          secondary
          disabled={selectedRows.length === 0 || true}
        />
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
    getAdvanceFiltersData();
    getSearchOrderListData();
  }, []);

  const getAdvanceFiltersData = async () => {
    const res = (await getAdvancedFilter()) as any;
    if (res.success) {
      setAdvanceFilterData(res.response.data.data);
    } else {
      setAdvanceFilterData(null);
    }
  };

  const getSearchOrderListData = async (
    values?: object,
    page?: number,
    sort?: { field: string; type: string }
  ) => {
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
    const res = (await getSearchOrderList(urlParams)) as any;
    if (res.success) {
      const data = res.response.data.data;
      setSearchOrderData(data.list);
      setPagination({
        count: data.pageMetaData.total,
        page: data.pageMetaData.page - 1,
      });
    } else {
      setSearchOrderData([]);
    }
    setLoading(false);
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      setLoading(true);
      getSearchOrderListData(values);
    },
  });

  const applyOrderFilters = () => {
    setDrawerType("");
    setDrawerOpen(false);
    getSearchOrderListData();
    getAdvanceFiltersData();
  };

  return (
    <ModuleContainer>
      <H2 title="Search Orders" />

      <Box mt={4} mb={2}>
        <GridContainer container spacing={2}>
          <Grid item xs={6} sm={4} lg={2}>
            <Input
              name="invoiceNumber"
              label="Invoice Number"
              placeholder="eg. 1234"
              initValue={values.invoiceNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.invoiceNumber && errors.invoiceNumber}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <Input
              name="orderId"
              label="Order Id"
              placeholder="eg. 1234"
              initValue={values.orderId}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.orderId && errors.orderId}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="From Date"
              placeholder="e.g 06/06/2021"
              maxDate={
                values.toDate
                  ? moment(values.toDate).subtract(1, "days").toDate()
                  : new Date()
              }
              value={values.fromDate || null}
              onChange={(val) => setFieldValue("fromDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="To Date"
              placeholder="e.g 06/06/2021"
              maxDate={new Date()}
              minDate={moment(values.fromDate).add(1, "days").toDate()}
              value={values.toDate || null}
              onChange={(val) => setFieldValue("toDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <SelectNew
              name="status"
              label="Status"
              placeholder="Select Order Status"
              options={STATUS}
              value={values.status}
              onChange={handleChange}
              allowEmpty
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <FilterFlexBox>
              <Button size="small" label="Search" onClick={handleSubmit} />
              <Box>
                <CustomBadge
                  badgeContent=""
                  showZero
                  invisible={advanceFilterData === null}
                >
                  <img
                    onClick={() => openOrderDrawer(null, "advanceFilter")}
                    src={sliders}
                    alt="Advanced Filter"
                  />
                </CustomBadge>
              </Box>
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>

      {loading ? (
        <TableSkeleton />
      ) : searchOrderData.length > 0 ? (
        <TableNew
          tableTop={tableTop()}
          coloumns={searchOrderColoumns}
          data={getSearchOrderData(
            searchOrderData,
            openOrderDrawer,
            completeOrderPayment
          )}
          showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getSearchOrderListData(undefined, page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getSearchOrderListData(undefined, undefined, { field, type })
          }
        />
      ) : (
        <NullState />
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
          <InvoiceDetailsDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType === "advanceFilter" ? (
          <AdvanceFilters
            data={advanceFilterData}
            applyFilters={applyOrderFilters}
          />
        ) : drawerType === "orderDetails" ? (
          <SearchOrderDetailsDrawer orderId={selectedInvoiceId} />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default SearchContainer;
