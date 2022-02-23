import React,{useEffect, useState} from "react";
import { Box, Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { RouteComponentProps } from "@reach/router";
import {ChildAccountSchema} from "./ChildAccountSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import {
  LOCATION_TYPES,
  BILLING_TYPES,
  PIN_CODE_MASK,
  PHONE_NO_MASK,
} from "../../../../../constants";

export default function ChildAccountForm({formik}:{formik: any}){

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);
  };

  const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
    formik;

    useEffect(() => {
      console.log(values);
    },[values])

    const handler = (value) => {
      console.log(value);
      let temp = {};
      if (
        value?.location?.displayPosition?.longitude &&
        value?.location?.displayPosition?.latitude
      ) {
        temp[`longitude`] =
          value?.location?.displayPosition?.longitude || "";
        temp[`latitude`] =
          value?.location?.displayPosition?.latitude || "";
        temp[`country`] = value?.location?.address?.country || "";
        temp[`province`] =
          value?.location?.address?.state ||
          value?.location?.address?.county ||
          "";
        temp[`city`] = value?.location?.address?.city || "";
        temp[`pincode`] = value?.location?.address?.postalCode || "";
        temp[`addressLine1`] = value?.location?.address?.label || "";
        temp[`addressLine2`] = value?.location?.address?.street || "";
      } else {
        temp[`longitude`] = "";
        temp[`latitude`] = "";
        temp[`country`] = "";
        temp[`province`] = "";
        temp[`city`] = "";
        temp[`pincode`] = "";
        temp[`addressLine2`] = "";
      }

      let updatedOrders = {...temp};

      Object.keys(updatedOrders).forEach((key) => {
      console.log(key, updatedOrders[key]);
      setFieldValue(key, updatedOrders[key]);
      })
    };

    // useEffect(() => {
    //   console.log(values);
    // },[values])
    
  const childAccountFormTouched = touched;
  const childAccountFormError = errors;

  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="CompanyName"
                name="companyName"
                onBlur={handleBlur}
                initValue={values.companyName}
                onChange={(e) => onChangeHandler(e, `companyName`)}
                error={childAccountFormTouched.companyName && childAccountFormError.companyName}
                label={"Company Name"}
                placeholder={"Example Company"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="BusinessNumber"
                name="businessNumber"
                onBlur={handleBlur}
                initValue = {values.businessNumber}
                onChange={(e) => onChangeHandler(e, `businessNumber`)}
                error={childAccountFormTouched.businessNumber && childAccountFormError.businessNumber}
                label={"Business Number"}
                placeholder="eg. 123456"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Industry"
                name="industry"
                onBlur={handleBlur}
                initValue = {values.industry}
                onChange={(e) => onChangeHandler(e, `industry`)}
                error={childAccountFormTouched.industry && childAccountFormError.industry}
                label={"Industry"}
                placeholder={"eg. Retail"}
                // required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Employee"
                name="employeeStrength"
                onBlur={handleBlur}
                initValue = {values.employeeStrength}
                onChange={(e) => onChangeHandler(e, `employeeStrength`)}
                error={childAccountFormTouched.employeeStrength && childAccountFormError.employeeStrength}
                label={"Employee Strength"}
                placeholder={"eg. 1 or 4"}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AutoComplete
                  id="AddressLine1"
                  name="addressLine1"
                  label={"Address Line 1"}
                  initValue = {values.addressLine1}
                  value = {values.addressLine1}
                  error={childAccountFormTouched.address1 && childAccountFormError.address1}
                  onChange={(e) => onChangeHandler(e, `addressLine1`)}
                  placeholder={"123 Address Street"}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  onSelect={handler}
                  disabled={false}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input
                id="AddressLine2"
                name="addressLine2"
                onBlur={handleBlur}
                initValue = {values.address2}
                onChange={(e) => onChangeHandler(e, `addressLine2`)}
                error={childAccountFormTouched.address2 && childAccountFormError.address2}
                label={"Address Line 2"}
                placeholder={"123 Address Street"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Pincode"
                name="pincode"
                onBlur={handleBlur}
                initValue={values.pincode}
                // initValue = {values.pincode}
                onChange={(e) => onChangeHandler(e, `pinCode`)}
                error={childAccountFormTouched.pincode && childAccountFormError.pincode}
                label={"Pincode"}
                placeholder={"1234"}
                type="mask"
                maskProps={PIN_CODE_MASK}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Province"
                name="province"
                onBlur={handleBlur}
                initValue={values.province}
                onChange={(e) => onChangeHandler(e, `province`)}
                error={childAccountFormTouched.province && childAccountFormError.province}
                label={"Province"}
                placeholder={"eg. Ontario"}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="City"
                name="city"
                onBlur={handleBlur}
                initValue = {values.city}
                onChange={(e) => onChangeHandler(e, `city`)}
                error={childAccountFormTouched.city && childAccountFormError.city}
                label={"City"}
                placeholder={"eg. Toronto"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Country"
                name="country"
                onBlur={handleBlur}
                initValue = {values.country}
                onChange={(e) => onChangeHandler(e, `country`)}
                error={childAccountFormTouched.country && childAccountFormError.country}
                label={"Country"}
                placeholder={"eg. Canada"}
                required
              />
            </Grid>
          </GridContainer>
        </form>
    
    </Box>
  );
}
