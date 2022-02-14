import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import AdminDetailsSchema from "./AdminDetailsSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/material";

export default function AdminDetails({ navigate }: RouteComponentProps) {
  const dispatch = useDispatch();
  const Confirm = () => {};
  const {
    handleChange,
    values: { FirstName },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Role: "",
      Email: "",
      
    },
    validationSchema: AdminDetailsSchema,
    onSubmit: Confirm,
  });
  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="FirstName"
                name="FirstName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.FirstName && errors.FirstName}
                label={"First Name"}
                placeholder={"John"}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="LastName"
                name="LastName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.LastName && errors.LastName}
                label={"Last Name"}
                placeholder={"Doe"}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="PhoneNumber"
                name="PhoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.PhoneNumber && errors.PhoneNumber}
                label={"Phone Number"}
                placeholder={"+1 (999)-999-9999"}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Input
                id="Role"
                name="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Role && errors.Role}
                label={"Role/Designation"}
                placeholder={"eg. Manager"}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
              <Input
                id="Email"
                name="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Email && errors.Email}
                label={"Email id"}
                placeholder={"johndoe@gmail.com"}
              />
            </Grid>
          </GridContainer>
        </form>
    </Box>
  );
}
