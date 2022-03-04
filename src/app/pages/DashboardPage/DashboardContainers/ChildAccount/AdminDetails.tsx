import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/material";

import {PHONE_NO_MASK} from "../../../../../constants";

export default function AdminDetails({formik}:{formik: any}){

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);
  };

  const { handleChange, values, errors, touched, handleBlur } = formik;

  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="FirstName"
                name="firstName"
                onBlur={handleBlur}
                initValue={values.firstName}
                onChange={(e) => onChangeHandler(e, `firstName`)}
                error={touched.firstName && errors.firstName}
                label={"First Name"}
                placeholder={"John"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="LastName"
                name="lastName"
                onBlur={handleBlur}
                initValue={values.lastName}
                onChange={(e) => onChangeHandler(e, `lastName`)}
                error={touched.lastName && errors.lastName}
                label={"Last Name"}
                placeholder={"Doe"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="PhoneNumber"
                name="phoneNumber"
                onBlur={handleBlur}
                initValue={values.phoneNumber}
                onChange={(e) => onChangeHandler(e, `phoneNumber`)}
                error={touched.phoneNumber && errors.phoneNumber}
                label={"Phone Number"}
                placeholder={"+1 (999)-999-9999"}
                type="mask"
                maskProps={PHONE_NO_MASK}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="Role"
                name="roleDesignation"
                onBlur={handleBlur}
                initValue={values.roleDesignation}
                onChange={(e) => onChangeHandler(e, `roleDesignation`)}
                error={touched.roleDesignation && errors.roleDesignation}
                label={"Role/Designation"}
                placeholder={"eg. Manager"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
              <Input
                id="Email"
                name="emailId"
                onBlur={handleBlur}
                initValue={values.emailId}
                onChange={(e) => onChangeHandler(e, `emailId`)}
                error={touched.emailId && errors.emailId}
                label={"Email id"}
                placeholder={"johndoe@gmail.com"}
                required
              />
            </Grid>
          </GridContainer>
        </form>
    </Box>
  );
}
