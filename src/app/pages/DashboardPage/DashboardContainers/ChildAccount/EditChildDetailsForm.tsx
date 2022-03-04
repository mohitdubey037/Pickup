import React, {useState} from "react";
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
import { Box } from "@material-ui/core";
import { INDUSTRY_TEXT } from "../../../../../constants";
import {
  PIN_CODE_MASK,
} from "../../../../../constants";
import SelectNew from "app/components/Select/SelectNew";
import EditAvatarNew from "app/components/Avatar/EditAvatarNew";

export default function EditChildAccountForm({saveAction, handleCloseDrawer, singleCompanyDetails}: editChildAccountProps ) {

  const companyId = singleCompanyDetails.companyId;
  const [loading, setLoading] = useState<boolean>(false);

  const handleEditChildAccount = async (values) => {
    // values["hstNumber"] = "12345"
    const res = await editChildAccountData(values, companyId);
    if (res.success) {
      handleCloseDrawer()
      saveAction()
    }
  }

  // const changeHandler = async (e) => {
  //   setLoading(true)
  //   const formData = new FormData();
  //   const image = e?.target?.files[0];
  //   if (!IMAGE_FILE_TYPES.includes(image.type) || image.size > 5242880) {
  //     showToast(
  //       "You can only upload JPG, JPEG, PNG image (size less than 5MB)",
  //       "error"
  //     );
  //     return;
  //   }
  //   formData.append("document", image, image?.name);
  //   const res: { response: any; error: any } = await imageUploadService(
  //     formData
  //   );
  //   if (res.error) {
  //     showToast(res.error.message, "error");
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //     setFieldValue("companyProfileImage", res?.response?.data?.data || "");
  //   }
  // };

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

  const {
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: {
        companyProfileImage: singleCompanyDetails.companyProfileImage || "",
        companyId: singleCompanyDetails.companyId,
        companyName: singleCompanyDetails.companyName || "",
        businessNumber: singleCompanyDetails.businessNumber || "",
        employeeStrength: singleCompanyDetails.employeeStrength || "",
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
        <Box display="flex" justifyContent="center" mb={5}>
          <EditAvatarNew
            src={values?.companyProfileImage}
            onChange={(val) => setFieldValue("companyProfileImage", val || "")}
            setLoading={setLoading}
          />
        </Box>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <Input
              id="CompanyName"
              name="companyName"
              label={"Company Name"}
              initValue={values?.companyName}
              onChange={handleChange}
              error={touched.companyName && errors?.companyName}
              placeholder={"Example Company"}
              required
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
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Input
              id="Industry"
              name="industry"
              initValue={values.industry}
              onChange={handleChange}
              error={touched.industry && errors?.industry}
              label={"Industry"}
              placeholder={"eg. Retail"}
            /> */}
            <SelectNew
              placeholder="Select Industry"
              id="industry"
              name="industry"
              label={"Industry"}
              options={INDUSTRY_TEXT}
              onChange={handleChange}
              value={values.industry}
              allowEmpty/>
          </Grid>
          <Grid item xs={12}>
            <Input
              id="Employee"
              name="employeeStrength"
              initValue={values.employeeStrength}
              onChange={handleChange}
              error={touched.employeeStrength && errors?.employeeStrength}
              label={"Employee Strength"}
              placeholder={"1 or 5"}
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
              required
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
              type="mask"
              maskProps={PIN_CODE_MASK}
              required
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
              required
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
              required
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
                showLoader={loading}              
                onClick={handleSubmit}
                />
      </DrawerFooter>
      </form>
    </>
  );
}
