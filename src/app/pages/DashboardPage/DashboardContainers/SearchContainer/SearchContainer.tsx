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

const SearchContainer = ({ path: string }) => {
  const [searchRecordData, setSearchRecordData] = useState([{}]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const getData = async () => {
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
        let data = resData.data;
        setSearchRecordData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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

  const openInvoiceDrawer = (id: any) => {
    setSelectedInvoiceId(id);
    setDrawerType("invoice");
    setDrawerOpen(true);
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
        data={searchTable(searchRecordData, openInvoiceDrawer)}
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
      >
        {drawerType == "invoice" ? (
          <AddNewPaymentDrawer />
        ) : (
          <AdvanceFilters formik={formik} />
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default SearchContainer;
