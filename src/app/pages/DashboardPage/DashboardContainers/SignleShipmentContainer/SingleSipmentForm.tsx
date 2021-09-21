import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { useFormik } from "formik";
import { SingleShipmentFormSchema } from "./SingleShipmentFormSchema";

function SingleSipmentForm({ title, formik }) {
  const {
    handleChange,
    values: { emailAddress },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <FormWrapper>
      <form>
        <Typography className="typography" variant="h1" component="h3">
          {title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="div_select">
              <label htmlFor="cars">Location type</label>
              <br />
              <div>
                <select className="select" name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"companyName"}
              name={"companyName"}
              label={"Company Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.companyName && errors.companyName}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"firstName"}
              name={"firstName"}
              label={"First Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"lastName"}
              name={"lastName"}
              label={"Last Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"addressLine1"}
              name={"addressLine1"}
              label={"Address Line 1"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.addressLine1 && errors.addressLine1}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"addressLine2"}
              name={"addressLine2"}
              label={"Address Line 2"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.addressLine2 && errors.addressLine2}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"city"}
              name={"city"}
              label={"City"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && errors.city}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"postalCode"}
              name={"postalCode"}
              label={"Postal Code"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.postalCode && errors.postalCode}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"provinceState"}
              name={"provinceState"}
              label={"Province/State"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.provinceState && errors.provinceState}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"country"}
              name={"country"}
              label={"Country"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.country && errors.country}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"contactNumber"}
              name={"contactNumber"}
              label={"Contact Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.contactNumber && errors.contactNumber}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"alternateNumber"}
              name={"alternateNumber"}
              label={"Alternate Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.alternateNumber && errors.alternateNumber}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={"emailAddress"}
              name={"emailAddress"}
              label={"Email Address"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.emailAddress && errors.emailAddress}
              validate
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id={"additionalNotes"}
              name={"additionalNotes"}
              label={"Additional Notes"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.additionalNotes && errors.additionalNotes}
              validate
            />
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
}
export default SingleSipmentForm;
