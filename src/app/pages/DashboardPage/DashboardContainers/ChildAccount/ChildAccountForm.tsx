import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import {
  EMPLOYEE_STRENGTH_MASK,
  INDUSTRY_TEXT,
  PIN_CODE_MASK,
} from "../../../../../constants";
import { Box, Grid } from "@mui/material";
import Select from "app/components/Select";

export default function ChildAccountForm({formik}:{formik: any}){

  const { handleChange, values, errors, touched, handleBlur, setFieldValue } =formik;

    const handler = (value) => {
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
      setFieldValue(key, updatedOrders[key]);
      })
    };

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
                // onChange={(e) => onChangeHandler(e, `companyName`)}
                onChange={handleChange}
                error={touched.companyName && errors.companyName}
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
                onChange={handleChange}
                error={touched.businessNumber && errors.businessNumber}
                label={"Business Number"}
                placeholder="eg. 123456"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {/* <Input
                id="Industry"
                name="industry"
                onBlur={handleBlur}
                initValue = {values.industry}
                onChange={(e) => onChangeHandler(e, `industry`)}
                error={touched.industry && errors.industry}
                label={"Industry"}
                placeholder={"eg. Retail"}
                // required
              /> */}
              <Select
              placeholder="Select Industry"
              id="industry"
              name="industry"
              label={"Industry"}
              options={INDUSTRY_TEXT}
              onChange={handleChange}
              value={values.industry}
              allowEmpty
          />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Input
                id="Employee"
                name="employeeStrength"
                initValue={values.employeeStrength}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.employeeStrength && errors.employeeStrength}
                label={"Employee Strength"}
                placeholder={"eg. 1 or 4"}
                type="mask"
                maskProps={EMPLOYEE_STRENGTH_MASK}
              />
              
            </Grid>
            <Grid item xs={12} lg={6}>
              <AutoComplete
                  id="AddressLine1"
                  name="addressLine1"
                  label={"Address Line 1"}
                  initValue = {values.addressLine1}
                  value = {values.addressLine1}
                  error={touched.addressLine1 && errors.addressLine1}
                  onChange={handleChange}
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
                initValue = {values.addressLine2}
                onChange={handleChange}
                error={touched.addressLine2 && errors.addressLine2}
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
                onChange={handleChange}
                error={touched.pincode && errors.pincode}
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
                onChange={handleChange}
                error={touched.province && errors.province}
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
                onChange={handleChange}
                error={touched.city && errors.city}
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
                onChange={handleChange}
                error={touched.country && errors.country}
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
