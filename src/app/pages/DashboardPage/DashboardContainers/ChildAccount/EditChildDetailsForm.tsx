import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Box, Grid } from "@mui/material";

import { Input } from "app/components/Input";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import Select from "app/components/Select";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { editChildAccountData } from "services/ChildAccount";
import { editChildAccountSchema } from "./ChildAccountSchema";
import { editChildAccountProps } from "./type";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import {
  EMPLOYEE_STRENGTH_MASK,
  INDUSTRY_TEXT,
  PIN_CODE_MASK,
} from "../../../../../constants";

export default function EditChildAccountForm({
  saveAction,
  handleCloseDrawer,
  singleCompanyDetails,
}: editChildAccountProps) {
  const companyId = singleCompanyDetails.companyId;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    values,
    errors,
    touched,
    isValid,
    resetForm,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      companyProfileImage: singleCompanyDetails.companyProfileImage || "",
      companyId: singleCompanyDetails.companyId,
      companyName: singleCompanyDetails.companyName || "",
      businessNumber: singleCompanyDetails.businessNumber || "",
      employeeStrength:
        singleCompanyDetails.employeeStrength.toString() || null,
      industry: singleCompanyDetails.industry || "",
      addressLine1: singleCompanyDetails.address1 || "",
      addressLine2: singleCompanyDetails.address2 || "",
      pincode: singleCompanyDetails.pincode || "",
      province: singleCompanyDetails.province || "",
      city: singleCompanyDetails.city || "",
      country: singleCompanyDetails.country || "",
    },
    validationSchema: editChildAccountSchema,
    onSubmit: () => {
      handleEditChildAccount(values);
    },
  });

  const handleEditChildAccount = async (values) => {
    const res = await editChildAccountData(values, companyId);
    if (res?.success) {
      handleCloseDrawer();
      saveAction();
    }
  };

  const handleAddressSelect = (value) => {
    let temp = {};
    if (
      value?.location?.displayPosition?.longitude &&
      value?.location?.displayPosition?.latitude
    ) {
      let tempCountry = "",
        tempProvinceState = "";
      value?.location?.address?.additionalData.forEach((ele) => {
        if (ele.key === "CountryName" && !tempCountry) {
          tempCountry = ele.value;
        }
        if (
          (ele.key === "StateName" || ele.key === "CountyName") &&
          !tempProvinceState
        ) {
          tempProvinceState = ele.value;
        }
      });
      temp["country"] = tempCountry || value?.location?.address?.country || "";
      temp["province"] =
        tempProvinceState ||
        value?.location?.address?.state ||
        value?.location?.address?.county ||
        "";
      temp["city"] = value?.location?.address?.city || "";
      temp["pincode"] = value?.location?.address?.postalCode || "";
      temp["addressLine1"] = value?.location?.address?.label || "";
      temp["addressLine2"] = value?.location?.address?.street || "";
    } else {
      temp["country"] = "";
      temp["province"] = "";
      temp["city"] = "";
      temp["pincode"] = "";
      temp["addressLine2"] = "";
    }
    let updatedChild = values;
    updatedChild = {
      ...updatedChild,
      ...temp,
    };
    resetForm({ values: updatedChild });
  };

  return (
    <>
      <DrawerInnerContent>
        <Box display="flex" justifyContent="center" mb={4}>
          <EditAvatar
            src={values?.companyProfileImage}
            onChange={(val) => setFieldValue("companyProfileImage", val || "")}
            setLoading={setLoading}
          />
        </Box>
        <Input
          name="companyName"
          label="Company Name"
          placeholder="Example Company"
          initValue={values.companyName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.companyName && errors.companyName}
          required
        />
        <AutoComplete
          id="addressLine1"
          name="addressLine1"
          label="Address Line 1"
          placeholder="123 Address Street"
          initValue={values.addressLine1}
          value={values.addressLine1}
          onChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          onSelect={handleAddressSelect}
          error={touched.addressLine1 && errors.addressLine1}
          disabled={false}
        />
        <Input
          name="addressLine2"
          label="Address Line 2"
          placeholder="123 Address Street"
          initValue={values.addressLine2}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.addressLine2 && errors?.addressLine2}
        />
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Input
              name="city"
              label="City"
              placeholder="eg. Toronto"
              initValue={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && errors.city}
              required
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Input
              name="pincode"
              label="Pincode"
              placeholder="ABC 123"
              initValue={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.pincode && errors.pincode}
              required
              type="mask"
              maskProps={PIN_CODE_MASK}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Input
              name="province"
              label="Province"
              placeholder="eg. Ontario"
              initValue={values.province}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.province && errors.province}
              required
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Input
              name="country"
              label="Country"
              placeholder="eg. Canada"
              initValue={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.country && errors.country}
              required
            />
          </Grid>
        </Grid>
        <Input
          name="businessNumber"
          label="Business Number"
          placeholder="eg. 123456"
          initValue={values.businessNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.businessNumber && errors.businessNumber}
          required
        />
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Select
              name="industry"
              label="Industry"
              placeholder="Select Industry"
              options={INDUSTRY_TEXT}
              value={values.industry}
              onChange={handleChange}
              error={touched.industry && errors.industry}
              allowEmpty
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Input
              name="employeeStrength"
              label="Employee Strength"
              placeholder="e.g. 32"
              initValue={values.employeeStrength}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.employeeStrength && errors.employeeStrength}
              type="mask"
              maskProps={EMPLOYEE_STRENGTH_MASK}
            />
          </Grid>
        </Grid>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={handleCloseDrawer}
          size="medium"
          secondary
        />
        <Button
          label="Save"
          onClick={handleSubmit}
          size="medium"
          showLoader={loading}
          disabled={!isValid}
        />
      </DrawerFooter>
    </>
  );
}
