import React,{useEffect, useState} from "react";
import { Box, Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import ChildAccountSchema from "./ChildAccountSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

export default function ChildAccountForm({formik}:{formik: any}){

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);
  };

  const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
    formik;

  const childAccountForm = values;
  const childAccountFormTouched = touched;
  const childAccountFormError = errors;

  // useEffect(() => {
  //   console.log(childAccountForm);
  // },[childAccountForm])


  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="CompanyName"
                name="companyName"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.companyName}
                onChange={(e) => onChangeHandler(e, `companyName`)}
                error={childAccountFormTouched.companyName && childAccountFormError.companyName}
                label={"Company Name"}
                placeholder={"Example Company"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="BusinessNumber"
                name="businessNumber"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.businessNumber}
                onChange={(e) => onChangeHandler(e, `businessNumber`)}
                error={childAccountFormTouched.businessNumber && childAccountFormError.businessNumber}
                label={"Business Number"}
                placeholder="eg. 123456"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Industry"
                name="industry"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.industry}
                onChange={(e) => onChangeHandler(e, `industry`)}
                error={childAccountFormTouched.industry && childAccountFormError.industry}
                label={"Industry"}
                placeholder={"eg. Retail"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Employee"
                name="employeeStrength"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.employeeStrength}
                onChange={(e) => onChangeHandler(e, `employeeStrength`)}
                error={childAccountFormTouched.employeeStrength && childAccountFormError.employeeStrength}
                label={"Employee Strength"}
                placeholder={"eg. 1 or 4"}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input
                id="AddressLine1"
                name="addressLine1"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.address1}
                onChange={(e) => onChangeHandler(e, `addressLine1`)}
                error={childAccountFormTouched.address1 && childAccountFormError.address1}
                label={"Address Line 1"}
                placeholder={"123 Address Street"}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input
                id="AddressLine2"
                name="addressLine2"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.address2}
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
                // onChange={handleChange}
                value = {childAccountForm.pincode}
                onChange={(e) => onChangeHandler(e, `pinCode`)}
                error={childAccountFormTouched.pincode && childAccountFormError.pincode}
                label={"Pincode"}
                placeholder={"1234"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Province"
                name="province"
                onBlur={handleBlur}
                // onChange={handleChange}
                value = {childAccountForm.province}
                onChange={(e) => onChangeHandler(e, `province`)}
                error={childAccountFormTouched.province && childAccountFormError.province}
                label={"Province"}
                placeholder={"eg. Ontario"}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="City"
                name="city"
                onBlur={handleBlur}
                value = {childAccountForm.city}
                onChange={(e) => onChangeHandler(e, `city`)}
                error={childAccountFormTouched.city && childAccountFormError.city}
                label={"City"}
                placeholder={"eg. Toronto"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Country"
                name="country"
                onBlur={handleBlur}
                value = {childAccountForm.country}
                onChange={(e) => onChangeHandler(e, `country`)}
                error={childAccountFormTouched.country && childAccountFormError.country}
                label={"Country"}
                placeholder={"eg. Canada"}
              />
            </Grid>
          </GridContainer>
        </form>
    
    </Box>
  );
}
