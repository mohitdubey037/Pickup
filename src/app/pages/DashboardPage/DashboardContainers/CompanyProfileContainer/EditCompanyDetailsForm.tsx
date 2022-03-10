import { useState } from "react";
import { useFormik } from "formik";
import { Box, Grid } from "@mui/material";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import Select from "app/components/Select";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { updateCompanyProfile } from "services/CompanyService";
import { INDUSTRY_TEXT, PIN_CODE_MASK } from "../../../../../constants";
import { editCompanySchema } from "./schema";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import { CompanyDetailsType } from "./types";

interface EditDetailsInterface {
  data: CompanyDetailsType;
  setDrawerOpen: (value: boolean) => void;
  onEditSuccess: () => void;
}

const EditCompanyDetailsForm = (props: EditDetailsInterface) => {
  const { data, setDrawerOpen, onEditSuccess } = props;

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
      profileImage: data?.companyProfileImage || "",
      companyName: data?.companyName || "",
      businessNumber: data?.businessNumber || "",
      industry: data?.industry || "",
      employeeStrength: data?.employeeStrength || "",
      address1: data?.addressLine1 || "",
      address2: data?.addressLine2 || "",
      city: data?.city || "",
      pincode: data?.pincode || "",
      province: data?.province || "",
      country: data?.country || "",
      hstNumber: data?.hstNumber || "",
    },
    validationSchema: editCompanySchema,
    onSubmit: (values) => onSubmit(values),
  });

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
      temp["address1"] = value?.location?.address?.label || "";
      temp["address2"] = value?.location?.address?.street || "";
    } else {
      temp["country"] = "";
      temp["province"] = "";
      temp["city"] = "";
      temp["pincode"] = "";
      temp["address2"] = "";
    }
    let updatedCompany = values;
    updatedCompany = {
      ...updatedCompany,
      ...temp,
    };
    resetForm({ values: updatedCompany });
  };

  const onSubmit = async (values) => {
    setLoading(true);
    values.companyId = data?.companyId;
    const res: any = await updateCompanyProfile(values);
    if (res?.success) {
      onEditSuccess();
      setDrawerOpen(false);
    }
    setLoading(false);
  };

  return (
    <>
      <DrawerInnerContent>
        <Box display="flex" justifyContent="center" mb={4}>
          <EditAvatar
            src={values?.profileImage}
            onChange={(val) => setFieldValue("profileImage", val || "")}
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
          id="address1"
          name="address1"
          label="Address Line 1"
          placeholder="123 Address Street"
          initValue={values.address1}
          value={values.address1}
          onChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          onSelect={handleAddressSelect}
          error={touched.address1 && errors.address1}
          disabled={false}
        />
        <Input
          name="address2"
          label="Address Line 2"
          placeholder="123 Address Street"
          initValue={values.address2}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address2 && errors.address2}
          required
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
          name="hstNumber"
          label="HST Number"
          placeholder="eg. 123456"
          initValue={values.hstNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.hstNumber && errors.hstNumber}
          required
        />
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
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.employeeStrength && errors.employeeStrength}
            />
          </Grid>
        </Grid>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={() => setDrawerOpen(false)}
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
};

export default EditCompanyDetailsForm;
