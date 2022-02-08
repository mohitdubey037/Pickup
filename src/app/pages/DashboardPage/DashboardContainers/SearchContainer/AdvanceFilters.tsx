import React from "react";
import { Grid } from "@material-ui/core";
// import { Input } from "app/components/Input";
import Select from "app/components/Select";
import { STATUS_TYPES } from "./helper";
import { H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { Divider } from "@mui/material";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import DatePickerInput from "app/components/Input/DatePickerInput";
import { Input } from "app/components/Input";
import { AdvanceFilterBox } from "./style";

function AdvanceFilters({ formik }) {
  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = formik;
 
  return (
    <AdvanceFilterBox>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DatePickerInput
            label="Date"
            placeholder={"e.g 06/06/2021"}
            value={values.from_shipping}
            onChange={(newValue) => {
              setFieldValue("from_shipping", newValue);
            }}
            
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerInput
            label="Date"
            placeholder={"e.g 06/06/2021"}
            value={values.to_shipping}
            onChange={(newValue) => {
              setFieldValue("to_shipping", newValue);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="cars">Status</label>
          <Select
            id={"status"}
            name={"status"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["status"]}
          />
        </Grid>
      </Grid>

      <Divider />

      <H3 text="Order Origin Details" className="heading"  />
      <GridContainer container spacing={2}>
        <Grid item xs={6}>
          <Input
            id={"origin_city"}
            name={"origin_city"}
            label={"City"}
            placeholder={"eg. Toronto"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["origin_city"] && errors["origin_city"]}
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"origin_postal_code"}
            name={"origin_postal_code"}
            label={"Postal Code"}
            placeholder={"ABC 123"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["origin_postal_code"] && errors["origin_postal_code"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"origin_province_state"}
            name={"origin_province_state"}
            label={"Province/State"}
            placeholder={"eg. Ontario"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["origin_province_state"] &&
              errors["origin_province_state"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"origin_country"}
            name={"origin_country"}
            label={"Country"}
            placeholder={"eg. Canada"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["origin_country"] && errors["origin_country"]}
            validate
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id={"origin_email"}
            name={"origin_email"}
            label={"Email"}
            placeholder={"johndoe@pickups.com"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["origin_email"] && errors["origin_email"]}
            validate
          />
        </Grid>
      </GridContainer>

      <Divider />

      <H3 text="Order Destination Details" className="heading"  />
      <GridContainer container spacing={2}>
        <Grid item xs={12}>
          <Input
            id={"destination_company_name"}
            name={"destination_company_name"}
            label={"Company Name"}
            placeholder={"Example Company"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destination_company_name"] &&
              errors["destination_company_name"]
            }
            validate
          />
        </Grid>
        <Grid item sm={6}>
          <Input
            id={"destination_city"}
            name={"destination_city"}
            label={"City"}
            placeholder={"eg. Toronto"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["destination_city"] && errors["destination_city"]}
            validate
          />
        </Grid>
        <Grid item sm={6}>
          <Input
            id={"destination_postal_code"}
            name={"destination_postal_code"}
            label={"Postal Code"}
            placeholder={"ABC 123"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destination_postal_code"] &&
              errors["destination_postal_code"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"destination_province_state"}
            name={"destination_province_state"}
            label={"Province/State"}
            placeholder={"eg. Ontario"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destination_province_state"] &&
              errors["destination_province_state"]
            }
            validate
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"destination_country"}
            name={"destination_country"}
            label={"Country"}
            placeholder={"eg. Canada"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched["destination_country"] && errors["destination_country"]
            }
            validate
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id={"destination_email"}
            name={"destination_email"}
            label={"Email"}
            placeholder={"johndoe@pickups.com"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["destination_email"] && errors["destination_email"]}
            validate
          />
        </Grid>
      </GridContainer>

      <Divider />

      <H3 text="Order Details" className="heading" />
      <GridContainer container spacing={2}>
        <Grid item xs={3}>
          <Select
            id={"weight"}
            name={"weight"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["weight"]}
            label={"Weight"}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"weight_value"}
            name={"weight_value"}
            label={""}
            placeholder={"eg. 100"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["weight_value"] && errors["weight_value"]}
            validate
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            id={"weight_unit"}
            name={"weight_unit"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["weight_unit"]}
            label={"Unit"}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            id={"volume"}
            name={"volume"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["volume"]}
            label={"Volume"}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            id={"volume_value"}
            name={"volume_value"}
            label={""}
            placeholder={"eg. 100"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["volume_value"] && errors["volume_value"]}
            validate
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            id={"volume_unit"}
            name={"volume_unit"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["volume_unit"]}
            label={"Unit"}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            id={"category"}
            name={"category"}
            options={STATUS_TYPES}
            onSelect={handleChange}
            value={values["category"]}
            label={"Category"}
          />
        </Grid>
      </GridContainer>

      <DrawerFooter>
        <div></div>
        <Button label="Apply Filters" onClick={handleSubmit} size="medium"  />
      </DrawerFooter>
    </AdvanceFilterBox>
  );
}
export default AdvanceFilters;
