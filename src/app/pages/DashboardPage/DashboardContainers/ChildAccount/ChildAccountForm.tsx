import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ChildAccountSchema from "./ChildAccountSchema";

export default function ChildAccountForm({ navigate }: RouteComponentProps) {
  const dispatch = useDispatch();
  const Confirm = () => {};
  const {
    handleChange,
    values: { CompanyName },
    errors,
    touched,
    handleBlur,
    handleSubmit,
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
    onSubmit: Confirm,
  });
  return (
    <>
      <FormWrapper>
        <form>
          <Typography
            className="typography"
            variant="h1"
            component="h3"
          ></Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <Input
                id="CompanyName"
                name="CompanyName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.CompanyName && errors.CompanyName}
                label={"Company Name"}
                placeholder={"Comapany Name"}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="BusinessNumber"
                name="BusinessNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.BusinessNumber && errors.BusinessNumber}
                label={"Business Number"}
                placeholder="+1 (999)-999-9999"
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="Industry"
                name="Industry"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Industry && errors.Industry}
                label={"Industry"}
                placeholder={"Retail"}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="Employee"
                name="Employee"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Employee && errors.Employee}
                label={"Employee"}
                placeholder={"Employee"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="AddressLine1"
                name="AddressLine1"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.AddressLine1 && errors.AddressLine1}
                label={"Address Line 1"}
                placeholder={"Address Line 1"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="AddressLine2"
                name="AddressLine2"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.AddressLine2 && errors.AddressLine2}
                label={"Address Line 2"}
                placeholder={"AddressLine2"}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="Pincode"
                name="Pincode"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Pincode && errors.Pincode}
                label={"Pincode"}
                placeholder={"Pincode"}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="Province"
                name="Province"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Province && errors.Province}
                label={"Province"}
                placeholder={"Province"}
              />
            </Grid>

            <Grid item xs={3}>
              <Input
                id="City"
                name="City"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.City && errors.City}
                label={"City"}
                placeholder={"City"}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                id="Country"
                name="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Country && errors.Country}
                label={"Country"}
                placeholder={"Country"}
              />
            </Grid>
          </Grid>
        </form>
      </FormWrapper>
    </>
  );
}
