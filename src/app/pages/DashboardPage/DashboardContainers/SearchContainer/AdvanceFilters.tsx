import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Divider } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";

import SelectNew from "app/components/Select/SelectNew";
import { H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { Input } from "app/components/Input";
import { AdvanceFilterBox } from "./style";
import {
  STATUS,
  WEIGHTDIMENSION,
  DIMENSION2,
  OPERANDS,
} from "../../../../../constants";
import { advanceFilterInitValues } from "./helper";
import { AdvanceFilterFormSchema } from "./AdvanceFilterFormSchema";
import { saveAdvancedFilters } from "services/SearchItemService";
import { getCategoryList } from "services/SingleShipmentServices";
import { showToast } from "utils";

function AdvanceFilters({ applyFilters }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategoryList();
      if (response.success && response.response) {
        const data = response.response as { data: any };
        setCategoryList(data.data.data);
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
    initialValues: advanceFilterInitValues,
    validationSchema: AdvanceFilterFormSchema,
    onSubmit: (values) => applyAdvancedFilters(values),
  });

  const applyAdvancedFilters = async (values, isClear?: any) => {
    values.fromShippingDate = values.fromShippingDate
      ? moment(values.fromShippingDate).format("YYYY-MM-DD")
      : null;
    values.toShippingDate = values.toShippingDate
      ? moment(values.toShippingDate).format("YYYY-MM-DD")
      : null;
    const res = await saveAdvancedFilters(values);
    console.log(res);
    if (res.success) {
      showToast(
        `Successfully ${isClear ? "removed" : "applied"} advanced filters`,
        "success"
      );
      applyFilters();
    } else {
      showToast("Something went wrong", "error");
    }
  };

  const removeAdvancedFilters = async () => {
    applyAdvancedFilters(advanceFilterInitValues, true);
  };

  return (
    <AdvanceFilterBox>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DatePickerInput
            label="From Order Date"
            placeholder={"e.g 06/06/2021"}
            maxDate={moment(values.toShippingDate).subtract(1, "days").toDate()}
            value={values.fromShippingDate}
            onChange={(val) => setFieldValue("fromShippingDate", val)}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerInput
            label="To Order Date"
            placeholder={"e.g 06/06/2021"}
            minDate={moment(values.fromShippingDate).add(1, "days").toDate()}
            maxDate={new Date()}
            value={values.toShippingDate}
            onChange={(val) => setFieldValue("toShippingDate", val)}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectNew
            id={"status"}
            name={"status"}
            label={"Status"}
            placeholder={"Select Order Status"}
            options={STATUS}
            value={values["status"]}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
      </Grid>

      <Divider />

      <H3 text="Order Origin Details" className="heading" />
      <GridContainer container spacing={2}>
        <Grid item xs={6}>
          <Input
            id={"originCity"}
            name={"originCity"}
            label={"City"}
            placeholder={"eg. Toronto"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["originCity"] && errors["originCity"]}
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"originPostalCode"}
            name={"originPostalCode"}
            label={"Postal Code"}
            placeholder={"ABC 123"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["originPostalCode"] && errors["originPostalCode"]}
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"originProvinceState"}
            name={"originProvinceState"}
            label={"Province/State"}
            placeholder={"eg. Ontario"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["originProvinceState"] && errors["originProvinceState"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"originCountry"}
            name={"originCountry"}
            label={"Country"}
            placeholder={"eg. Canada"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["originCountry"] && errors["originCountry"]}
            validate
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id={"originEmail"}
            name={"originEmail"}
            label={"Email"}
            placeholder={"johndoe@pickups.com"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["originEmail"] && errors["originEmail"]}
            validate
          />
        </Grid>
      </GridContainer>

      <Divider />

      <H3 text="Order Destination Details" className="heading" />
      <GridContainer container spacing={2}>
        <Grid item xs={12}>
          <Input
            id={"destinationCompanyName"}
            name={"destinationCompanyName"}
            label={"Company Name"}
            placeholder={"Example Company"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destinationCompanyName"] &&
              errors["destinationCompanyName"]
            }
            validate
          />
        </Grid>
        <Grid item sm={6}>
          <Input
            id={"destinationCity"}
            name={"destinationCity"}
            label={"City"}
            placeholder={"eg. Toronto"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["destinationCity"] && errors["destinationCity"]}
            validate
          />
        </Grid>
        <Grid item sm={6}>
          <Input
            id={"destinationPostalCode"}
            name={"destinationPostalCode"}
            label={"Postal Code"}
            placeholder={"ABC 123"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destinationPostalCode"] &&
              errors["destinationPostalCode"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"destinationProvinceState"}
            name={"destinationProvinceState"}
            label={"Province/State"}
            placeholder={"eg. Ontario"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destinationProvinceState"] &&
              errors["destinationProvinceState"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"destinationCountry"}
            name={"destinationCountry"}
            label={"Country"}
            placeholder={"eg. Canada"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destinationCountry"] && errors["destinationCountry"]
            }
            validate
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id={"destinationEmail"}
            name={"destinationEmail"}
            label={"Email"}
            placeholder={"johndoe@pickups.com"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["destinationEmail"] && errors["destinationEmail"]}
            validate
          />
        </Grid>
      </GridContainer>

      <Divider />

      <H3 text="Order Details" className="heading" />
      <GridContainer container spacing={2}>
        <Grid item xs={3}>
          <SelectNew
            id={"weightOperand"}
            name={"weightOperand"}
            label={"Weight"}
            placeholder={"Select"}
            options={OPERANDS}
            value={values["weightOperand"]}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"weight"}
            name={"weight"}
            label={""}
            placeholder={"eg. 100"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["weight"] && errors["weight"]}
            validate
          />
        </Grid>
        <Grid item xs={3}>
          <SelectNew
            id={"weightDimension"}
            name={"weightDimension"}
            label={"Unit"}
            placeholder={"Select Unit"}
            options={WEIGHTDIMENSION}
            value={values["weightDimension"]}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={3}>
          <SelectNew
            id={"volumnOperand"}
            name={"volumnOperand"}
            label={"Volume"}
            placeholder={"Select"}
            options={OPERANDS}
            value={values["volumnOperand"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"volume"}
            name={"volume"}
            label={""}
            placeholder={"eg. 100"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["volume"] && errors["volume"]}
            validate
          />
        </Grid>
        <Grid item xs={3}>
          <SelectNew
            id={"volumeDimension"}
            name={"volumeDimension"}
            label={"Unit"}
            placeholder={"Select Unit"}
            options={DIMENSION2}
            value={values["volumeDimension"]}
            onChange={handleChange}
            allowEmpty
          />
        </Grid>
        <Grid item xs={12}>
          <SelectNew
            id={"category"}
            name={"category"}
            label={"Category"}
            placeholder={"Select Category"}
            options={
              categoryList
                ? categoryList.map((option: any) => ({
                    value: option.categoryId,
                    label: option.name,
                  }))
                : []
            }
            value={Number(values["category"])}
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
    </AdvanceFilterBox>
  );
}

export default AdvanceFilters;
