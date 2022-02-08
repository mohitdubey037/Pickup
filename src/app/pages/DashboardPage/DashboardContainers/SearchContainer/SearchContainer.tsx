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
} from "../../../../../services/SearchItemService";
import { navigate } from "@reach/router";
import { Grid } from "@mui/material";
import { Flex } from "app/components/Input/style";
import { Box } from "@mui/system";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import DatePickerInput from "app/components/Input/DatePickerInput";

const SearchContainer = ({ path: string }) => {
  const dispatch = useDispatch();
  const [searchRecordData, setSearchRecordData] = useState<any>();
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const getSearchOrderListData = async () => {
    const res = (await getSearchOrderList()) as any;
    if (res.success) {
      const orderList = res.response.data.data;
      console.log("Order List", orderList);
      setSearchRecordData(orderList);
    }
  };

  const getSingleOrderData = async (id: any) => {
    const res = (await getSearchOrderListById(id)) as any;
    if (res.success) {
      const orderListByID = res.response.data.data;
      console.log("Order by Id", orderListByID);
      setSingleOrderData(orderListByID);
      setSelectedInvoiceId(id);
      setDrawerType("orderDetails");
      setDrawerOpen(true);
    } else {
      setSelectedInvoiceId(id);
      setDrawerType("orderDetails");
      setDrawerOpen(true);
    }
  };

  useEffect(() => {
    dispatch(singleActions.resetSingleShipment());
    getSearchOrderListData();
  }, [dispatch]);

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${searchTable.length} Shipments`} className="heading" />
        <Button label="Print" onClick={() => {}} size="small" />
      </SearchTableTop>
    );
  };

  const openAdvanceFilterDrawer = () => {
    setDrawerType("advanceFilter");
    setDrawerOpen(true);
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type == "orderDetails") {
      getSingleOrderData(id);
    } else {
      setSelectedInvoiceId(id);
      setDrawerType(type);
      setDrawerOpen(true);
    }
  };

  const formik = useFormik({
    initialValues: advanceFilterInitValues,
    validationSchema: AdvanceFilterFormSchema,
    onSubmit: async () => {
      console.log(formik.values, "Full");
    },
  });

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
  return (
    <ModuleContainer>
      <H2 title="Search" />

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={4} lg={2}>
          <Input label="Invoice Number" placeholder="eg. 123,321" />
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Input label="Order Id" placeholder="eg. 123,321" />
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <DatePickerInput
            label="From Order Date"
            placeholder={"e.g 11/20/2021"}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <DatePickerInput
            label="To Order Date"
            placeholder={"e.g 11/20/2021"}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Select label="Status" />
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <FlexBox alignItems="center" mb={2} style={{ height: "100%" }}>
            <Button size="small" label="Search" onClick={() => {}} />
            <Box>
              <img
                onClick={openAdvanceFilterDrawer}
                src={sliders}
                alt=""
                style={{ cursor: "pointer" }}
              />
            </Box>
          </FlexBox>
        </Grid>
      </Grid>

      <Table
        data={searchTable(searchRecordData?.list, openInvoiceDrawer)}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={10}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />

      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
        maxWidth={"75%"}
      >
        {drawerType == "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
        ) : drawerType == "advanceFilter" ? (
          <AdvanceFilters formik={formik} />
        ) : (
          <SearchOrderDetailsDrawer singleOrderData={singleOrderData} />
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default SearchContainer;
