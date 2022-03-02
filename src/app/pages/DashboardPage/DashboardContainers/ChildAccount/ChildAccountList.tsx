import React,{useEffect, useState} from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { Table, TableNew } from "app/components/Table";
// import { OnHoldTableTop } from "../OnHoldShipment/Style";
import { useNavigate } from "@reach/router";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import DatePickerInput from "app/components/Input/DatePickerInput";
import moment from "moment";
import { useFormik } from "formik";

import { Grid } from "@mui/material";

import { ChildAccountListColumn, childDataTable } from "./helper";

import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Input } from "app/components/Input";
import { Box } from "@mui/system";
import { FilterFlexBox } from "../PaymentsContainer/style";
import SelectNew from "app/components/Select/SelectNew";
import { CHILD_STATUS } from "../../../../../../src/constants";
import CreateChildAccount from "./CreateChildAccount";
import { Flex, SearchTableTop } from "app/components/CommonCss/CommonCss";

export default function ChildAccountList({ path: string }) {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  const [childData, setChildData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [searchOrderData, setSearchOrderData] = useState<any>([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });

  const [sorting, setSorting] = useState({
    field: "createdAt",
    type: "desc",
  });

  const initialValues = {
    companyName: "",
    businessNumber: "",
    fromDate: "",
    toDate: '',
    status: "active"
  };
  
  const [prevValues, setPrevValues] = useState<any>(initialValues);

  const navigate = useNavigate();

  const dispatch = useDispatch();
    useEffect(() => {
          dispatch(actions.getCards());
  }, []);

  const addChild = () => {
    navigate("/dashboard/my-account/child-account");
  };

  useEffect(() => {
    getChildOrderList();
  }, []);

  const getChildOrderList = async (
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
    params["createdAt"] = params["createdAt"]
      ? moment(params["createdAt"]).format("YYYY-MM-DD")
      : "";
    let tempLen = Object.entries(params).length;
    Object.entries(params).forEach(
      ([key, value], index) =>
        (urlParams += value
          ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
          : "")
    );
    const res = (await getChildAccountData(urlParams)) as any;
    if (!res.error) {
      const data = res.response.data.data;
      setChildData(data);
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
      getChildOrderList(values);
    },
  });

  const tableTop = () => {
    return (
      // <OnHoldTableTop>
         <SearchTableTop>
          <H3 text={`${pagination.count} Accounts`} className="heading" />
        </SearchTableTop>
      // </OnHoldTableTop>
    );
  };

  if ([4].indexOf(authUser?.roleId) || authUser?.childAccount === 1) {
    navigate("/non-authorized-page");
  }

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
              label="Company Name"
              placeholder="test inc. pvt. ltd"
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
            <SelectNew
              id="status"
              name="status"
              label={"Status"}
              placeholder={"Select Status"}
              options={CHILD_STATUS}
              value={values.status}
              onChange={handleChange}
              allowEmpty
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="From Date"
              maxDate={
                values.toDate
                  ? moment(values.toDate).subtract(1, "days").toDate()
                  : new Date()
              }
              placeholder={"e.g 06/06/2021"}
              value={values.fromDate || null}
              onChange={(val) => setFieldValue("fromDate", val)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <DatePickerInput
              label="To Date"
              maxDate={new Date()}
              minDate={moment(values.fromDate).add(1, "days").toDate()}
              placeholder={"e.g 06/06/2021"}
              value={values.toDate || null}
              onChange={(val) => setFieldValue("toDate", val)}
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
        <>
      <TableNew
          tableTop={tableTop()}
          coloumns={ChildAccountListColumn}
          data={childDataTable(childData.list)}
          // showCheckbox
          onRowSelect={setSelectedRows}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getChildOrderList(undefined, page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getChildOrderList(undefined, undefined, { field, type })
          }
        />
        </>
      ) : (
        <CreateChildAccount onClick={addChild} />
      )}
    </ModuleContainer>
  );
}
