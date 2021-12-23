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
            { label: "Company", value: "1" },
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
                id={title + "companyName"}
                name={title + "companyName"}
                label={"Company Name"}
                placeholder={"Start typing"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[title + "companyName"] &&
                  errors[title + "companyName"]
                }
                validate
              />
            </Grid>
          )}
          <Grid item xs={4}>
            <Input
              id={title + "firstName"}
              name={title + "firstName"}
              label={"First Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "firstName"] && errors[title + "firstName"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "lastName"}
              name={title + "lastName"}
              label={"Last Name"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "lastName"] && errors[title + "lastName"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "addressLine1"}
              name={title + "addressLine1"}
              label={"Address Line 1"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "addressLine1"] &&
                errors[title + "addressLine1"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "addressLine2"}
              name={title + "addressLine2"}
              label={"Address Line 2"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "addressLine2"] &&
                errors[title + "addressLine2"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "city"}
              name={title + "city"}
              label={"City"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "city"] && errors[title + "city"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "postalCode"}
              name={title + "postalCode"}
              label={"Postal Code"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "postalCode"] && errors[title + "postalCode"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "provinceState"}
              name={title + "provinceState"}
              label={"Province/State"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "provinceState"] &&
                errors[title + "provinceState"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "country"}
              name={title + "country"}
              label={"Country"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[title + "country"] && errors[title + "country"]}
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "contactNumber"}
              name={title + "contactNumber"}
              label={"Contact Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "contactNumber"] &&
                errors[title + "contactNumber"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "alternateNumber"}
              name={title + "alternateNumber"}
              label={"Alternate Number"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "alternateNumber"] &&
                errors[title + "alternateNumber"]
              }
              validate
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              id={title + "emailAddress"}
              name={title + "emailAddress"}
              label={"Email Address"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "emailAddress"] &&
                errors[title + "emailAddress"]
              }
              validate
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id={title + "additionalNotes"}
              name={title + "additionalNotes"}
              label={"Additional Notes"}
              placeholder={"Start typing"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[title + "additionalNotes"] &&
                errors[title + "additionalNotes"]
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
