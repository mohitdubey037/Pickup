import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import AdminDetailsSchema from "./AdminDetailsSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/material";

import {PHONE_NO_MASK} from "../../../../../constants";

export default function AdminDetails({formik}:{formik: any}){

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);
  };

  const { handleChange, values, errors, touched, handleBlur, setFieldValue } = formik;

  const AdminDetailsForm = values;
  const AdminDetailsFormTouched = touched;
  const AdminDetailsFormError = errors;

  // useEffect(() => {
  //     console.log(AdminDetailsForm)
  // },[AdminDetailsForm])

  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="FirstName"
                name="firstName"
                onBlur={handleBlur}
                value={AdminDetailsForm.firstName}
                onChange={(e) => onChangeHandler(e, `firstName`)}
                error={AdminDetailsFormTouched.firstName && AdminDetailsFormError.firstName}
                label={"First Name"}
                placeholder={"John"}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="LastName"
                name="lastName"
                onBlur={handleBlur}
                value={AdminDetailsForm.lastName}
                onChange={(e) => onChangeHandler(e, `lastName`)}
                error={AdminDetailsFormTouched.lastName && AdminDetailsFormError.lastName}
                label={"Last Name"}
                placeholder={"Doe"}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="PhoneNumber"
                name="phoneNumber"
                onBlur={handleBlur}
                value={AdminDetailsForm.phoneNumber}
                onChange={(e) => onChangeHandler(e, `phoneNumber`)}
                error={AdminDetailsFormTouched.phoneNumber && AdminDetailsFormError.phoneNumber}
                label={"Phone Number"}
                placeholder={"+1 (999)-999-9999"}
                type="mask"
                maskProps={PHONE_NO_MASK}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="Role"
                name="roleDesignation"
                onBlur={handleBlur}
                value={AdminDetailsForm.role}
                onChange={(e) => onChangeHandler(e, `roleDesignation`)}
                error={AdminDetailsFormTouched.role && AdminDetailsFormError.role}
                label={"Role/Designation"}
                placeholder={"eg. Manager"}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
              <Input
                id="Email"
                name="emailId"
                onBlur={handleBlur}
                value={AdminDetailsForm.emailId}
                onChange={(e) => onChangeHandler(e, `emailId`)}
                error={AdminDetailsFormTouched.emailId && AdminDetailsFormError.emailId}
                label={"Email id"}
                placeholder={"johndoe@gmail.com"}
              />
            </Grid>
          </GridContainer>
        </form>
    </Box>
  );
}
