import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { useFormik } from "formik";
import { Grid, Box } from "@mui/material";
import moment from "moment";

import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import TableSkeleton from "app/components/Table/TableSkeleton";
import DatePickerInput from "app/components/Input/DatePickerInput";
import Select from "app/components/Select";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Input } from "app/components/Input";
import { Flex, SearchTableTop } from "app/components/CommonCss/CommonCss";
import { actions } from "store/reducers/PaymentReducer";
import { getChildAccountData } from "services/ChildAccount/index";
import { ChildAccountListColumn, childDataTable } from "./helper";
import { FilterFlexBox } from "../PaymentsContainer/style";
import { CHILD_STATUS } from "../../../../../constants";
import CreateChildAccount from "./CreateChildAccount";

const initialValues = {
  companyName: "",
  businessNumber: "",
  fromDate: "",
  toDate: "",
  status: "active",
};

export default function ChildAccountList({ path }) {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => state.auth?.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [childData, setChildData] = useState<any>([]);
  const [prevValues, setPrevValues] = useState<any>(initialValues);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });
  const [sorting, setSorting] = useState({
    field: "createdAt",
    type: "desc",
  });

  const addNewChild = () => {
    navigate("/dashboard/my-account/child-account");
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${pagination.count} Accounts`} className="heading" />
      </SearchTableTop>
    );
  };

  useEffect(() => {
    dispatch(actions.getCards());
    getChildOrderList();
  }, []);

  const getChildOrderList = async (
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
      setChildData(data.list);
      setPagination({
        count: data.pageMetaData.total,
        page: data.pageMetaData.page - 1,
      });
    } else {
      setChildData([]);
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
    onSubmit: (values) => getChildOrderList(values),
  });

  if ([4].indexOf(authUser?.roleId) || authUser?.childAccount === 1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Child Accounts" />
        {childData.length > 0 && (
          <Button size="small" label="Create New" onClick={addNewChild} />
        )}
      </Flex>

      {childData.length > 0 && (
        <Box mt={4} mb={2}>
          <GridContainer container spacing={2}>
            <Grid item xs={6} sm={4} lg={2}>
              <Input
                name="companyName"
                label="Company Name"
                placeholder="Example Company"
                initValue={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.companyName && errors.companyName}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <Input
                name="businessNumber"
                label="Business Number"
                placeholder="eg. 1234"
                initValue={values.businessNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.businessNumber && errors.businessNumber}
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
                minDate={
                  !values.fromDate
                    ? null
                    : moment(values.fromDate).add(1, "days").toDate()
                }
                value={values.toDate || null}
                onChange={(val) => setFieldValue("toDate", val)}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <Select
                name="status"
                label="Status"
                placeholder="Select Status"
                options={CHILD_STATUS}
                value={values.status}
                onChange={handleChange}
                allowEmpty
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <FilterFlexBox>
                <Button
                  label="Search"
                  onClick={handleSubmit}
                  size="small"
                  disabled={loading}
                />
              </FilterFlexBox>
            </Grid>
          </GridContainer>
        </Box>
      )}

      {loading && childData.length === 0 ? (
        <TableSkeleton />
      ) : childData.length > 0 ? (
        <Table
          loading={loading}
          tableTop={tableTop()}
          coloumns={ChildAccountListColumn}
          data={childDataTable(childData)}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getChildOrderList(undefined, page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getChildOrderList(undefined, undefined, { field, type })
          }
        />
      ) : (
        <CreateChildAccount onClick={addNewChild} />
      )}
    </ModuleContainer>
  );
}
