/* eslint-disable no-debugger */
import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2, H3 } from "app/components/Typography/Typography";
import { searchTable, advanceFilterInitValues } from "./helper";
import { SearchTableTop } from "./style";
import { dots3, sliders } from "app/assets/Icons";
import Select from "app/components/Select";
import { useState, useEffect } from "react";
import { Drawer } from "app/components/Drawer";
import AddNewPaymentDrawer from "../PaymentsContainer/AddNewPaymentDrawer";
import AdvanceFilters from "./AdvanceFilters";
import { useFormik } from "formik";
import { AdvanceFilterFormSchema } from "./AdvanceFilterFormSchema";
import SearchOrderDetailsDrawer from "./SearchOrderDetailsDrawer";
import { actions as singleActions } from "store/reducers/SingleShipmentReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchOrderList,
  getSearchOrderListById,
  getPaginatedData
} from "../../../../../services/SearchItemService";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { navigate } from "@reach/router";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DateComponent } from 'app/components/CommonCss/CommonCss';
import moment from "moment";
import {STATUS} from '../../../../../../src/constants';
import { FilterFlexBox } from "../PaymentsContainer/style";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import InvoiceDrawerSkeleton from "../PaymentsContainer/InvoiceDrawerSkeleton";
import { AddressDetailsSkeleton } from "./AddressDetailsSkeleton";


const SearchContainer = ({ path: string }) => {

  const dispatch = useDispatch();
  const [searchRecordData, setSearchRecordData] = useState<any>();
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  const [fromDateOpen, setFromDateOpen] = useState(false);
  const [toDateOpen, setToDateOpen] = useState(false);

  // const [pageMetaData, setPageMetaData] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(10);

  const getSearchOrderListData = async (url?:any) => {
    const res = (await getSearchOrderList(url)) as any;
    if (res.success) {
      const orderList = res.response.data.data;
      console.log(orderList);
      setSearchRecordData(orderList);
      console.log(orderList?.pageMetaData);
      setPage(orderList?.pageMetaData?.page - 1);
      setTotalPages(orderList?.pageMetaData?.totalPages);
      setTotalData(orderList?.pageMetaData?.total);
    }
    else if (!res.error) {
      const InvoiceList = res;
      setSearchRecordData(InvoiceList);
    }
  };

  const getSearchPaginatedData = async (page) => {
    console.log(page);
    if (page === 0) {
      getSearchOrderListData("");
    }
    else {
      const res = (await getPaginatedData(page+1, 10)) as any;
      if (res.success) {
        console.log('succes');
        const orderList = res.response.data.data;
        console.log("Order List", orderList);
        setPage(page);
        setSearchRecordData(orderList);
      }
      else if (!res.error) {
        const InvoiceList = res;
        setSearchRecordData(InvoiceList);
      }
    }
  }

  const getSingleOrderData = async (id: any) => {
    setLoading(true);
    const res = (await getSearchOrderListById(id)) as any;
    if (res.success) {
      const orderListByID = res.response.data.data;
      console.log("Order by Id", orderListByID);
      setSingleOrderData(orderListByID);
      setSelectedInvoiceId(id);
      // setDrawerType("orderDetails");
      // setDrawerOpen(true);
    } else {
      setSelectedInvoiceId(id);
      // setDrawerType("orderDetails");
      // setDrawerOpen(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(singleActions.resetSingleShipment());
    // getSearchOrderListData();
    getSearchListData()
  }, [dispatch]);

  const getSearchListData = async (values?: object) => {
    console.log(values);
    let urlParams = "";
    if (values) {
      urlParams += "?";
      let tempLen = Object.entries(values).length;
      console.log(tempLen);
      Object.entries(values).forEach(
        ([key, value], index) =>
          (urlParams += value
            ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
            : "")
      );
    }
    console.log(urlParams,'hiiii');
    getSearchOrderListData(urlParams);
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${searchRecordData?.list?.length} Orders`} className="heading" />
        <Button label="Print" onClick={() => {}} size="small" secondary />
      </SearchTableTop>
    );
  };

  const setData = (name, value) => {
    console.log(value);
    if (name === 'fromDate') {
      setFieldValue('fromDate', moment(value).format('YYYY-MM-DD'));
    }
    else if (name === "toDate") {
      setFieldValue('toDate', moment(value).format('YYYY-MM-DD'));
    }
    else if (name === "status") {
      console.log(value);
      setFieldValue("status", value);
    }
  }

  const openAdvanceFilterDrawer = () => {
    setDrawerType("advanceFilter");
    setDrawerOpen(true);
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type === "orderDetails") {
      getSingleOrderData(id);
    } else {
      setSelectedInvoiceId(id);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const updateStatusHandler = (name: string, value: string) => {
        // updateAllFieldsHandler(name, newValue);
        setFieldValue('status', value);
  };  

  const getDrawerTitle = () => {
    if (drawerType == "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType == "advanceFilter") {
      return "Advanced Filter";
    } else {
      return "";
    }
  };
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
    navigate(" /non-authorized-page");
  }

  const drawerFormik = useFormik({
    initialValues: advanceFilterInitValues,
    validationSchema: AdvanceFilterFormSchema,
    onSubmit: async () => {
      console.log("Full");
    },
  });

  const { values, handleChange, errors, touched, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        invoiceNumber: "",
        shippingId: "", 
        orderId: "",
        fromDate: "",
        toDate: "",
        status: ""
      },
      onSubmit: (values) => getSearchListData(values),
    });

    useEffect(() => {
      console.log(values);
    },[values])
    // const handleSearch = () => {
    //   alert("Cancelled!")
    // }

  return (
    <ModuleContainer>
      <H2 title="Search" />
      
      <Box mt={3} mb={2}>
      <GridContainer container spacing={2}>
        <Grid item xs={6} sm={4} lg={2}>
          {/* <Input label="Invoice Number" placeholder="eg. 123,321" /> */}
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
          {/* <Input label="Order Id" placeholder="eg. 123,321" /> */}
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
          <Box display="flex" flexDirection="column">
            <p style={{margin: '0 0 8px 0'}}>From Date</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateComponent>
              <DatePicker
                  // label="06/06/2021"
                  value={values.fromDate || null}
                  onChange={(val) => setData('fromDate', val)}
                  open={fromDateOpen}
                  onOpen={() => setFromDateOpen(true)}
                  onClose={() => setFromDateOpen(false)}
                  disablePast
                  renderInput={(params) => (
                    <TextField
                        style={{ width: '100%' }}
                        label="From Date"
                        placeholder={"e.g 06/06/2021"}
                        {...params}
                        onClick={() => setFromDateOpen(true)}
                        defaultValue={""}
                        InputLabelProps={{ shrink: false }} 
                    />
                  )}
              />
            </DateComponent>
            </LocalizationProvider>   
          </Box>  
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <Box display="flex" flexDirection="column">
          <p style={{margin: '0 0 8px 0'}}>To Date</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateComponent>
            <DatePicker
              // label="06/06/2021"
              value={values.toDate || null}
              onChange={(val) => setData('toDate',val)}
              open={toDateOpen}
              onOpen={() => setToDateOpen(true)}
              onClose={() => setToDateOpen(false)}
              disablePast
              renderInput={(params) => (
                <TextField
                    style={{ width: '100%' }}
                    label="To Date"
                    placeholder={"e.g 06/06/2021"}
                    {...params}
                    onClick={() => setToDateOpen(true)}
                    defaultValue={""}
                    InputLabelProps={{ shrink: false }} 
                />
              )}
            />
          </DateComponent>
          </LocalizationProvider>
        </Box>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          {/* <Select label="Status" /> */}
          <Select
              id={`${STATUS}.value`}
              name={`${STATUS}.label`}
              label={"Status"}
              value={String(values?.status)}
              onSelect={(e) =>
                setData("status", e.target.value)
              }
              disabled={false}
              options={
                STATUS ?
                  STATUS.map((option) => ({
                            value: option.value,
                            label: option.label,
                        }))
                        : []
              }
              required
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <FilterFlexBox>
            <Button size="small" label="Search" onClick={handleSubmit} />
            <Box>
              <img
                onClick={openAdvanceFilterDrawer}
                src={sliders}
                alt=""
              />
            </Box>
          </FilterFlexBox>
        </Grid>
      </GridContainer>
      </Box>

      <Table
        data={searchTable(searchRecordData?.list, openInvoiceDrawer)}
        tableTop={tableTop()}
        paginationData = {(page) => getSearchPaginatedData(page)}
        showCheckbox
        showPagination
        page={page}
        totalData = {totalData}
        totalPage = {totalPages}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
        size={drawerType === "orderDetails" ? "large" : "small" }
      >
        {drawerType === "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType === "advanceFilter" ? (
          <AdvanceFilters formik={drawerFormik} />
        ) : (
          <>
            {loading ? (
            <AddressDetailsSkeleton />
            ) : (
            <SearchOrderDetailsDrawer singleOrderData={singleOrderData} />
            )}
          </>
            )}
      </Drawer>
    </ModuleContainer>
  );
};

export default SearchContainer;
