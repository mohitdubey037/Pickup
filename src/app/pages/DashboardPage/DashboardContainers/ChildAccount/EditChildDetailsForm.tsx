import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { editChildAccountSchema } from "./ChildAccountSchema";
import { editChildAccountData } from "services/ChildAccount";
import { editChildAccountProps } from "./type";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";

export default function EditChildAccountForm({saveAction, handleCloseDrawer, singleCompanyDetails}: editChildAccountProps ) {

  const companyId = singleCompanyDetails.companyId;

  const handleEditChildAccount = async (values) => {
    values["hstNumber"] = "12345"
    const res = await editChildAccountData(values, companyId);
    console.log(res);
    if (res.success) {
      handleCloseDrawer()
      saveAction()
    }
  }

  const handler = (value) => {
    console.log(value);
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
    console.log(key, updatedOrders[key]);
    setFieldValue(key, updatedOrders[key]);
    })
  };

  const {
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isValid,
    validateForm
  } = useFormik({
    initialValues: {
        profileImage: singleCompanyDetails.profileImage || "",
        companyId: singleCompanyDetails.companyId,
        companyName: singleCompanyDetails.companyName || "",
        businessNumber: singleCompanyDetails.businessNumber || "",
        employeeStrength: singleCompanyDetails.employessStrength || "",
        industry: singleCompanyDetails.industry || "",
        addressLine1: singleCompanyDetails.address1 || "",
        addressLine2: singleCompanyDetails.address2 || "",
        pincode: singleCompanyDetails.pincode || "",
        province: singleCompanyDetails.province || "",
        city: singleCompanyDetails.city || "",
        country:singleCompanyDetails.country || "",
    },
    validationSchema: editChildAccountSchema,
    onSubmit: () =>  {
      handleEditChildAccount(values);
    },
  });

  return (
    <>
      <form>

        <GridContainer container spacing={2}>

          {/* <Grid item xs={12}> */}
            
          {/* </Grid> */}

          <Grid item xs={12}>
            <Input
              id="CompanyName"
              name="companyName"
              label={"Company Name"}
              initValue={values?.companyName}
              onChange={handleChange}
              error={touched.companyName && errors?.companyName}
              placeholder={"Example Company"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="BusinessNumber"
              name="businessNumber"
              initValue={values.businessNumber}
              onChange={handleChange}
              error={touched.businessNumber && errors?.businessNumber}
              label={"Business Number"}
              placeholder="eg. 123456"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Industry"
              name="industry"
              initValue={values.industry}
              onChange={handleChange}
              error={touched.industry && errors?.industry}
              label={"Industry"}
              placeholder={"eg. Retail"}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="Employee"
              name="employeeStrength"
              initValue={values.employeeStrength}
              onChange={handleChange}
              error={touched.employeeStrength && errors?.employeeStrength}
              label={"Employee Strength"}
              placeholder={"eg. John Doe"}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Input
              id="AddressLine1"
              name="addressLine1"
              initValue={values.addressLine1}
              onChange={handleChange}
              error={touched.addressLine1 && errors?.addressLine1}
              label={"Address Line 1"}
              placeholder={"123 Address Street"}
            /> */}
            <AutoComplete
              id="addressLine1"
              name="addressLine1"
              label={"Address Line 1"}
              value={values.addressLine1}
              error={touched.addressLine1 && errors?.addressLine1?.toString()}
              placeholder={"123 Address Street"}
              setFieldValue={setFieldValue}
              onChange={handleChange}
              handleBlur={handleBlur}
              onSelect={handler}
              initValue={values.addressLine1}
              disabled={undefined}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="AddressLine2"
              name="addressLine2"
              initValue={values.addressLine2}
              onChange={handleChange}
              error={touched.addressLine2 && errors?.addressLine2}
              label={"Address Line 2"}
              placeholder={"123 Address Street"}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              id="City"
              name="city"
              initValue={values.city}
              onChange={handleChange}
              error={touched.city && errors?.city}
              label={"City"}
              placeholder={"eg. Toronto"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Pincode"
              name="pincode"
              initValue={values.pincode}
              onChange={handleChange}
              error={touched.pincode && errors?.pincode}
              label={"Pincode"}
              placeholder={"1234"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Province"
              name="province"
              initValue={values.province}
              onChange={handleChange}
              error={touched.province && errors?.province}
              label={"Province"}
              placeholder={"eg. Ontario"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Country"
              name="country"
              initValue={values.country}
              onChange={handleChange}
              error={touched.country && errors?.country}
              label={"Country"}
              placeholder={"eg. Canada"}
            />
          </Grid>
        </GridContainer>
        <DrawerFooter>
                <Button
                secondary
                label="Cancel"
                size="medium"
                onClick={handleCloseDrawer}
                />
                <Button
                label="Save"
                size="medium"
                // disabled={isValid}
                onClick={handleSubmit}
                />
      </DrawerFooter>
      </form>
    </>
  );
}
