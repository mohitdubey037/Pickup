import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import ChildAccountSchema from "./ChildAccountSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

export default function ChildAccountForm({ navigate }: RouteComponentProps) {

  const dispatch = useDispatch();

  const handleConfirm = (value) => {
    console.log('hii');
  }

  const {
    handleChange,
    values: { CompanyName },
    errors,
    touched,
    handleBlur,
    // handleSubmit,
  } = useFormik({
    initialValues: {
      CompanyName: "",
      BusinessNumber: "",
      Industry: "",
      Employee: "",
      AddressLine1: "",
      AddressLine2: "",
      Pincode: "",
      Province: "",
      City: "",
      Country: "",
    },
    validationSchema: ChildAccountSchema,
    onSubmit: (values) => handleConfirm(values),
  });
  return (
    <Box mt={4}>
        <form>
          <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="CompanyName"
                name="CompanyName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.CompanyName && errors.CompanyName}
                label={"Company Name"}
                placeholder={"Example Company"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="BusinessNumber"
                name="BusinessNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.BusinessNumber && errors.BusinessNumber}
                label={"Business Number"}
                placeholder="eg. 123456"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Industry"
                name="Industry"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Industry && errors.Industry}
                label={"Industry"}
                placeholder={"eg. Retail"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Employee"
                name="Employee"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Employee && errors.Employee}
                label={"Employee"}
                placeholder={"eg. John Doe"}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input
                id="AddressLine1"
                name="AddressLine1"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.AddressLine1 && errors.AddressLine1}
                label={"Address Line 1"}
                placeholder={"123 Address Street"}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input
                id="AddressLine2"
                name="AddressLine2"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.AddressLine2 && errors.AddressLine2}
                label={"Address Line 2"}
                placeholder={"123 Address Street"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Pincode"
                name="Pincode"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Pincode && errors.Pincode}
                label={"Pincode"}
                placeholder={"1234"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Province"
                name="Province"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Province && errors.Province}
                label={"Province"}
                placeholder={"eg. Ontario"}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="City"
                name="City"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.City && errors.City}
                label={"City"}
                placeholder={"eg. Toronto"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Country"
                name="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Country && errors.Country}
                label={"Country"}
                placeholder={"eg. Canada"}
              />
            </Grid>
          </GridContainer>
        </form>
    
    </Box>
  );
}
