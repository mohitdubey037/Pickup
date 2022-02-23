import React,{useEffect, useState} from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import { OnHoldTableTop } from "../OnHoldShipment/Style";
import { useNavigate } from "@reach/router";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import DatePickerInput from "app/components/Input/DatePickerInput";
import moment from "moment";
import { useFormik } from "formik";

import { Grid } from "@mui/material";

import { childDataTable } from "./helper";

import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Input } from "app/components/Input";
import { Box } from "@mui/system";
import { FilterFlexBox } from "../PaymentsContainer/style";
import CreateChildAccount from "./CreateChildAccount";

export default function ChildAccountList({ path: string }) {

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(0);
  const [sortType, setSortType] = useState<string | undefined>("desc");
  const [childData, setChildData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();
    useEffect(() => {
          dispatch(actions.getCards());
  }, []);

  const addChild = () => {
    navigate("/dashboard/my-account/child-account");
  };

  useEffect(() => {
    getChildData()
  }, []);

  const getChildData = async () => {
    setLoading(true);
    const res = (await getChildAccountData()) as any;
    if (!res?.error) {
      const InvoiceList = res.response.data.data;
      setChildData(InvoiceList);
      setPage(res.response.data.data.pageMetaData.page - 1);
      setTotalPages(res.response.data.data.pageMetaData.totalPages);
      setTotalData(res.response.data.data.pageMetaData.total);
    } else if (res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
    setLoading(false);
  }

  const getSearchPaginatedData = async (page, sortingField, sortingType) => {
    setSortType(sortingType);
    let res;
    if (page === 0) {
      res = (await getChildAccountData('',0, 10, sortingField, sortingType)) as any;
    }
    else {
      res = (await getChildAccountData('',page+1, 10, sortingField, sortingType)) as any;
    }
    if (!res?.error) {
      const InvoiceList = res.response.data.data;
      setPage(page);
      setChildData(InvoiceList);
    } else if (!res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
  };

  const initialValues = {
    companyName: "",
    businessNumber: "",
    createdAt: "",
    status: ""
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
      // setLoading(true);
      console.log(values);
    },
  });

  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p> Accounts</p>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>

      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Child Accounts" />
        {/* <Button size="medium" label="child Details" onClick={childDetails} /> */}
        {childData?.list?.length > 0 &&
        <Button size="medium" label="Create New" onClick={addChild} />
        }
      </Flex>
      {childData?.list?.length > 0 &&
      <Box mt={4} mb={2}>
        <GridContainer container spacing={2}>
        <Grid item xs={6} sm={4} lg={2}>
            <Input
              id="companyName"
              name="companyName"
              initValue={values.companyName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.companyName && errors.companyName}
              label="company Name"
              placeholder="eg. 1234"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Input
              id="businessNumber"
              name="businessNumber"
              initValue={values.businessNumber}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.businessNumber && errors.businessNumber}
              label="Business Number"
              placeholder="eg. 1234"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Input
              id="status"
              name="status"
              initValue={values.status}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.status && errors.status}
              label="Status"
              placeholder="eg. pending"
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="Created At"
              maxDate={new Date()}
              placeholder={"e.g 06/06/2021"}
              value={values.createdAt || null}
              onChange={(val) => setFieldValue("createdAt", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <FilterFlexBox>
              <Button size="small" label="Search" onClick={handleSubmit} />
            </FilterFlexBox>
          </Grid>
        </GridContainer>
      </Box>
}

      {loading ? (
        <TableSkeleton />
      ) : childData?.list?.length > 0 ? (
        <Table
        data={childDataTable(childData.list)}
        tableTop={tableTop()}
        sortTypeProps = {sortType}
        paginationData={(page, sortingField, sortingType) => getSearchPaginatedData(page, sortingField, sortingType)}
        // showCheckbox 
        showPagination
        perPageRows={10}
        page={page}
        totalData={totalData}
        totalPage={totalPages}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
      ) : (
        <CreateChildAccount onClick={addChild} />
      )}
    </ModuleContainer>
  );
}
