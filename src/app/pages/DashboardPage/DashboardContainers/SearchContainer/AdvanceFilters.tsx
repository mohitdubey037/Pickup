import { useEffect, useState } from "react";
import { Grid, Divider, Box } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";

import Select from "app/components/Select";
import { H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { Input } from "app/components/Input";
import {
  deleteAdvancedFilter,
  saveAdvancedFilters,
} from "services/SearchItemService";
import { getCategoryList } from "services/SingleShipmentServices";
import { STATUS, WEIGHTDIMENSION, OPERANDS } from "../../../../../constants";
import { advanceFilterInitValues } from "./helper";
import { AdvanceFilterFormSchema } from "./AdvanceFilterFormSchema";
import { LineDivider } from "app/components/CommonCss/CommonCss";

const CusLabel = ({ label }) => (
  <span>
    {label}
    <sup>3</sup>
  </span>
);

const VOLUMEDIMENSION = [
  {
    label: <CusLabel label="INCH" />,
    value: 12,
  },
  {
    label: <CusLabel label="CM" />,
    value: 13,
  },
];

function AdvanceFilters({ data, applyFilters }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const res: any = await getCategoryList();
      if (res.success && res.response) {
        let temp: any = res.response.data.data;
        let categories = temp
          ? temp.map((option: any) => ({
              value: option.categoryId,
              label: option.name,
            }))
          : [];
        setCategoryList(categories);
      }
    })();
  }, []);

  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: advanceFilterInitValues(data),
    validationSchema: AdvanceFilterFormSchema,
    onSubmit: (values) => applyAdvancedFilters(values),
  });

  const applyAdvancedFilters = async (values) => {
    values.fromShippingDate = values.fromShippingDate
      ? moment(values.fromShippingDate).format("YYYY-MM-DD")
      : null;
    values.toShippingDate = values.toShippingDate
      ? moment(values.toShippingDate).format("YYYY-MM-DD")
      : null;
    const res = await saveAdvancedFilters(values);
    if (res.success) {
      applyFilters();
    }
  };

  const removeAdvancedFilters = async () => {
    const res = await deleteAdvancedFilter();
    if (res.success) {
      applyFilters();
    }
  };

  return (
    <Box mt={2}>
      <GridContainer container spacing={2}>
        <Grid item xs={6}>
          <DatePickerInput
            label="From Order Date"
            placeholder="e.g 06/06/2021"
            maxDate={moment(values.toShippingDate).subtract(1, "days").toDate()}
            value={values.fromShippingDate}
            onChange={(val) => setFieldValue("fromShippingDate", val)}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerInput
            label="To Order Date"
            placeholder="e.g 06/06/2021"
            minDate={moment(values.fromShippingDate).add(1, "days").toDate()}
            maxDate={new Date()}
            value={values.toShippingDate}
            onChange={(val) => setFieldValue("toShippingDate", val)}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name="status"
            label="Status"
            placeholder="Select Order Status"
            options={STATUS}
            value={values.status}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
      </GridContainer>

      <LineDivider />

      <H3 text="Order Origin Details" />
      <GridContainer container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Input
            name="originCity"
            label="City"
            placeholder="eg. Toronto"
            initValue={values.originCity}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.originCity && errors.originCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="originPincode"
            label="Postal Code"
            placeholder="ABC 123"
            initValue={values.originPincode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.originPincode && errors.originPincode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="originProvince"
            label="Province/State"
            placeholder="eg. Ontario"
            initValue={values.originProvince}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.originProvince && errors.originProvince}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="originCountry"
            label="Country"
            placeholder="eg. Canada"
            initValue={values.originCountry}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.originCountry && errors.originCountry}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="originEmail"
            label="Email"
            placeholder="johndoe@pickups.com"
            initValue={values.originEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.originEmail && errors.originEmail}
          />
        </Grid>
      </GridContainer>

      <LineDivider />

      <H3 text="Order Destination Details" />
      <GridContainer container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Input
            name="destinationCity"
            label="City"
            placeholder="eg. Toronto"
            initValue={values.destinationCity}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.destinationCity && errors.destinationCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="destinationPincode"
            label="Postal Code"
            placeholder="ABC 123"
            initValue={values.destinationPincode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.destinationPincode && errors.destinationPincode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="destinationProvince"
            label="Province/State"
            placeholder="eg. Ontario"
            initValue={values.destinationProvince}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.destinationProvince && errors.destinationProvince}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="destinationCountry"
            label="Country"
            placeholder="eg. Canada"
            initValue={values.destinationCountry}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.destinationCountry && errors.destinationCountry}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="destinationEmail"
            label="Email"
            placeholder="johndoe@pickups.com"
            initValue={values.destinationEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.destinationEmail && errors.destinationEmail}
          />
        </Grid>
      </GridContainer>

      <LineDivider />

      <H3 text="Order Details" />
      <GridContainer container spacing={2} mt={2}>
        <Grid item xs={3}>
          <Select
            name="weightOperand"
            label="Weight"
            placeholder="Select"
            options={OPERANDS}
            value={values.weightOperand}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name="weight"
            placeholder={"eg. 100"}
            initValue={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.weight && errors.weight}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            name="weightDimension"
            label="Unit"
            placeholder="Select Unit"
            options={WEIGHTDIMENSION}
            value={values.weightDimension}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            name="volumnOperand"
            label="Volume"
            placeholder="Select"
            options={OPERANDS}
            value={values.volumnOperand}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name="volume"
            placeholder="eg. 100"
            initValue={values.volume}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.volume && errors.volume}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            name="volumeDimension"
            label="Unit"
            placeholder="Select Unit"
            options={VOLUMEDIMENSION}
            value={values.volumeDimension}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name="category"
            label="Category"
            placeholder="Select Category"
            options={categoryList}
            value={Number(values.category)}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
      </GridContainer>

      <DrawerFooter>
        <Button
          label="Clear"
          onClick={removeAdvancedFilters}
          size="medium"
          secondary
        />
        <Button label="Apply Filters" onClick={handleSubmit} size="medium" />
      </DrawerFooter>
    </Box>
  );
}

export default AdvanceFilters;
