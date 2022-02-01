import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { Flex, FormWrapper } from "app/components/Input/style";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/lab";
import Select from "app/components/Select";
import { STATUS_TYPES } from "./helper";
import {
  H2
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FilterWrapper } from "./style";

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
  const [openFirstPicker, setOpenFirstPicker] = useState(false);
  const [openSecondPicker, setOpenSecondPicker] = useState(false);
  return (
    <FormWrapper>
      <FilterWrapper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={values.from_shipping}
                onChange={(newValue) => {
                  setFieldValue("from_shipping", newValue);
                }}
                open={openFirstPicker}
                onOpen={() => setOpenFirstPicker(true)}
                onClose={() => setOpenFirstPicker(false)}
                disablePast
                renderInput={(params) => (
                  <TextField
                    label="Date"
                    placeholder={"e.g 06/06/2021"}
                    {...params}
                    onClick={(e) => setOpenFirstPicker(true)}
                    defaultValue={""}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={values.to_shipping}
                onChange={(newValue) => {
                  setFieldValue("to_shipping", newValue);
                }}
                open={openSecondPicker}
                onOpen={() => setOpenSecondPicker(true)}
                onClose={() => setOpenSecondPicker(false)}
                disablePast
                renderInput={(params) => (
                  <TextField
                    label="Date"
                    placeholder={"e.g 06/06/2021"}
                    {...params}
                    onClick={(e) => setOpenSecondPicker(true)}
                    defaultValue={""}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} style={{ width: 10, marginBottom: 20 }}>
            <div className="div_select">
              <label htmlFor="cars">Status</label>
              <br />
              <div>
                <Select
                  id={"status"}
                  name={"status"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["status"]}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </FilterWrapper>
      <FilterWrapper>
        <div className="heading">
          <H2 title="Order Origin Details" />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Input
              id={"origin_city"}
              name={"origin_city"}
              label={"City"}
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched["origin_postal_code"] && errors["origin_postal_code"]
              }
              validate
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginBottom: 10 }}>
          <Grid item xs={6}>
            <Input
              id={"origin_province_state"}
              name={"origin_province_state"}
              label={"Province/State"}
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched["origin_email"] && errors["origin_email"]}
              validate
            />
          </Grid>
        </Grid>
      </FilterWrapper>
      <FilterWrapper>
        <div className="heading">
          <H2 title="Order Destination Details" />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              id={"destination_company_name"}
              name={"destination_company_name"}
              label={"Company Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched["destination_company_name"] &&
                errors["destination_company_name"]
              }
              validate
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id={"destination_city"}
              name={"destination_city"}
              label={"City"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched["destination_city"] && errors["destination_city"]}
              validate
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id={"destination_postal_code"}
              name={"destination_postal_code"}
              label={"Postal Code"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched["destination_postal_code"] &&
                errors["destination_postal_code"]
              }
              validate
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginBottom: 10 }}>
          <Grid item xs={6}>
            <Input
              id={"destination_province_state"}
              name={"destination_province_state"}
              label={"Province/State"}
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched["destination_email"] && errors["destination_email"]
              }
              validate
            />
          </Grid>
        </Grid>
      </FilterWrapper>
      <FilterWrapper className="bordernone">
        <div className="heading">
          <H2 title="Order Details" />
        </div>
        <Grid container spacing={3} style={{ marginBottom: 0 }}>
          <Grid item xs={3}>
            <div className="div_select">
              <label htmlFor="cars">Weight</label>
              <div>
                <Select
                  id={"weight"}
                  name={"weight"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["weight"]}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 35 }}>
            <Input
              id={"weight_value"}
              name={"weight_value"}
              label={""}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched["weight_value"] && errors["weight_value"]}
              validate
            />
          </Grid>
          <Grid item xs={3}>
            <div className="div_select">
              <label htmlFor="cars">Unit</label>
              <br />
              <div>
                <Select
                  id={"weight_unit"}
                  name={"weight_unit"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["weight_unit"]}
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginBottom: 0 }}>
          <Grid item xs={3}>
            <div className="div_select">
              <label htmlFor="cars">Volume</label>
              <div>
                <Select
                  id={"volume"}
                  name={"volume"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["volume"]}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 35 }}>
            <Input
              id={"volume_value"}
              name={"volume_value"}
              label={""}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched["volume_value"] && errors["volume_value"]}
              validate
            />
          </Grid>
          <Grid item xs={3}>
            <div className="div_select">
              <label htmlFor="cars">Unit</label>
              <br />
              <div>
                <Select
                  id={"volume_unit"}
                  name={"volume_unit"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["volume_unit"]}
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ width: 10, marginBottom: 20 }}>
            <div className="div_select">
              <label htmlFor="cars">Category</label>
              <br />
              <div>
                <Select
                  id={"category"}
                  name={"category"}
                  options={STATUS_TYPES}
                  onSelect={handleChange}
                  value={values["category"]}
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          xs={4}
          style={{ marginTop: 20, float: "right" }}
        >
          <Button label="Apply Filters" onClick={handleSubmit} />
        </Grid>
      </FilterWrapper>
    </FormWrapper>
  );
}
export default AdvanceFilters;
