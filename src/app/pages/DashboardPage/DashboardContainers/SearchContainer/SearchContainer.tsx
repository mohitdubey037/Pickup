import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import {
  searchTable,
  getSearchOrderData,
  advanceFilterInitValues,
} from "./helper";
import { SearchFieldsWrapper, SearchTableTop } from "./style";
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
import { useDispatch } from "react-redux";

const SearchContainer = ({ path: string }) => {

    const dispatch = useDispatch();
  const [searchRecordData, setSearchRecordData] = useState<any>();
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const getSearchOrderListData = async () => {
    fetch(
      "https://staging-api.pickups.mobi/order/v1/api/order/business/shipments",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM",
        },
      }
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log("resData", resData);
        let data = resData.data;
        setSearchRecordData(data);
      });
  };

  const getSingleOrderData = async (id: any) => {
    fetch(
      "https://staging-api.pickups.mobi/order/v1/api/order/business/shipment/" +
        id,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM",
        },
      }
    )
      .then((response) => response.json())
      .then((resData) => {
        let data = resData.data;

        console.log("getSingleOrderData", data, resData);
        setSingleOrderData(data);
        setSelectedInvoiceId(id);
        setDrawerType("orderDetails");
        setDrawerOpen(true);
      })
      .catch(() => {
        setSelectedInvoiceId(id);
        setDrawerType("orderDetails");
        setDrawerOpen(true);
      });
  };

  useEffect(() => {
    dispatch(singleActions.resetSingleShipment());
    getSearchOrderListData();
  }, [dispatch]);

  const tableTop = () => {
    return (
      <SearchTableTop>
        <p>{searchTable.length} Shipments</p>
        <div>
          <Button label="Print" onClick={() => {}} />
          <img src={dots3} alt="" />
        </div>
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

  return (
    <ModuleContainer>
      <ContainerTitle>Search</ContainerTitle>
      <SearchFieldsWrapper>
        <Input label="Invoice Number" placeholder="eg. 123,321" />
        <Input label="Shipping Id" placeholder="eg. 123,321" />
        <Input label="From Shipping Date" placeholder="Select" />
        <Input label="To Shipping Date" placeholder="Select" />
        <Select label="Status" style={{ width: 90 }} />
        <Button size={"large"} label="Search" onClick={() => {}} />
        <img
          onClick={openAdvanceFilterDrawer}
          style={{ marginRight: 1, marginTop: 50 }}
          src={sliders}
          alt=""
        />
      </SearchFieldsWrapper>
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
