import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import Select from "app/components/Select";
import { LOCATION_TYPES } from "../../../../../constants";
import RadioGroup from "app/components/RadioGroup";
import { FavouriateWrapper } from "./style";
import { starimage } from "../../../../assets/Icons";
function SingleSipmentForm({ title, formik }) {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    formik;
  const [status, setStatus] = React.useState();
  const radioHandler = (event) => {
    // setStatus(status);
    const val = event.target.value;
    setStatus(val);
  };
  return (
    <FormWrapper style={{ paddingRight: 35 }}>
      <form>
        <Typography className="typography" variant="h1" component="h3">
          {title}
          <FavouriateWrapper>
            {" "}
            <img className="imageStyle" src={starimage} /> Add to Favorites
          </FavouriateWrapper>
        </Typography>

        <RadioGroup
          defaultValue="0"
          onChange={(e) => radioHandler(e)}
          options={[
            { label: "Individual", value: "0" },
            { label: "Company", value: "1" }
          ]}
          name={"Radio Options"}
        />
        <Grid style={{ paddingBottom: 20, width: 290 }}>
          <div className="div_select">
            <label htmlFor="cars">Location type</label>
            <br />
            <div>
              <Select
                id={title + "locationType"}
                name={title + "locationType"}
                options={LOCATION_TYPES}
                onSelect={handleChange}
                value={values[title + "locationType"]}
              />
            </div>
          </div>
        </Grid>
        <Grid container spacing={3} style={{ marginRight: 30 }}>
          {status === "0" && (
            <Grid item xs={4}>
              <Input
                id={title + "CompanyName"}
                name={title + "CompanyName"}
                label={"Company Name"}
                placeholder={"Start typing"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[title + "CompanyName"] &&
                  errors[title + "CompanyName"]
                }
                validate
              />
            </Grid>
          )}
          <Grid item xs={4}>
            <Input
              id={title + "FirstName"}
              name={title + "FirstName"}
              label={"First Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "FirstName"] && errors[title + "FirstName"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "LastName"}
              name={title + "LastName"}
              label={"Last Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "LastName"] && errors[title + "LastName"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "AddressLine1"}
              name={title + "AddressLine1"}
              label={"Address Line 1"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "AddressLine1"] &&
                errors[title + "AddressLine1"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "AddressLine2"}
              name={title + "AddressLine2"}
              label={"Address Line 2"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "AddressLine2"] &&
                errors[title + "AddressLine2"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "City"}
              name={title + "City"}
              label={"City"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "City"] && errors[title + "City"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "PostalCode"}
              name={title + "PostalCode"}
              label={"Postal Code"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "PostalCode"] && errors[title + "PostalCode"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "ProvinceState"}
              name={title + "ProvinceState"}
              label={"Province/State"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "ProvinceState"] &&
                errors[title + "ProvinceState"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "Country"}
              name={title + "Country"}
              label={"Country"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "Country"] && errors[title + "Country"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "ContactNumber"}
              name={title + "ContactNumber"}
              label={"Contact Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "ContactNumber"] &&
                errors[title + "ContactNumber"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "AlternateNumber"}
              name={title + "AlternateNumber"}
              label={"Alternate Contact Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "AlternateNumber"] &&
                errors[title + "AlternateNumber"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "EmailAddress"}
              name={title + "EmailAddress"}
              label={"Email Address"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "EmailAddress"] &&
                errors[title + "EmailAddress"]
              }
              validate
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id={title + "AdditionalNotes"}
              name={title + "AdditionalNotes"}
              label={"Additional Notes"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "AdditionalNotes"] &&
                errors[title + "AdditionalNotes"]
              }
              validate
            />
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
}
export default SingleSipmentForm;
