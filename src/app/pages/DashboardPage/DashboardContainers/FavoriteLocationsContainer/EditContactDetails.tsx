import { useState } from "react";
import { useFormik } from "formik";
import { Grid } from "@mui/material";

import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import Select from "app/components/Select";
import RadioGroup from "app/components/RadioGroup";
import { updateSavedLocation } from "services/LocationServices";
import { editContactDetailsSchema } from "./helper";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import {
  BILLING_TYPES,
  LOCATION_TYPES,
  PHONE_NO_MASK,
  PIN_CODE_MASK,
} from "../../../../../constants";

interface EditContactDetailsProps {
  data: any;
  setDrawerOpen: (value: boolean) => void;
  onEditSuccess: () => void;
}

const EditContactDetails = (props: EditContactDetailsProps) => {
  const { data, setDrawerOpen, onEditSuccess } = props;

  const [loading, setLoading] = useState(false);

  const initialValues = {
    latitude: data?.latitude || "",
    longitude: data?.longitude || "",
    billingType: data?.locationBillingType || "",
    addressType: data?.addressType || "",
    companyName: data?.companyName || "",
    firstName: data?.locationFirstName || "",
    lastName: data?.locationLastName || "",
    address1: data?.locationAddressLine1 || "",
    address2: data?.locationAddressLine2 || "",
    city: data?.locationCity || "",
    postal: data?.locationPinCode || "",
    state: data?.locationProvinceCode || "",
    country: data?.locationCountry || "",
    phone: data?.locationPhone || "",
    alternate: data?.locationAlternatePhone || "",
    email: data?.locationEmail || "",
    details: data?.details || "",
  };

  const onSubmitHandler = async (values) => {
    setLoading(true);
    const body = {
      latitude: values.latitude,
      longitude: values.longitude,
      locationBillingType: values.billingType,
      addressType: values.addressType,
      companyName: values.billingType === 2 ? values.companyName : "",
      locationFirstName: values.firstName,
      locationLastName: values.lastName,
      locationAddressLine1: values.address1,
      locationAddressLine2: values.address2,
      locationCity: values.city,
      locationPinCode: values.postal,
      locationProvinceCode: values.state,
      locationCountry: values.country,
      locationPhone: values.phone?.replace(/[()-]/g, ""),
      locationAlternatePhone: values.alternate?.replace(/[()-]/g, ""),
      locationEmail: values.email,
      details: values.details,
    };
    const res: any = await updateSavedLocation(data.locationId, body);
    if (res?.success) {
      onEditSuccess();
      setDrawerOpen(false);
    }
    setLoading(false);
  };

  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    isValid,
    touched,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: editContactDetailsSchema,
    onSubmit: onSubmitHandler,
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

      temp["latitude"] = value?.location?.displayPosition?.longitude || "";
      temp["longitude"] = value?.location?.displayPosition?.latitude || "";
      temp["country"] = tempCountry || value?.location?.address?.country || "";
      temp["state"] =
        tempProvinceState ||
        value?.location?.address?.state ||
        value?.location?.address?.county ||
        "";
      temp["city"] = value?.location?.address?.city || "";
      temp["postal"] = value?.location?.address?.postalCode || "";
      temp["address1"] = value?.location?.address?.label || "";
      temp["address2"] = value?.location?.address?.street || "";
    } else {
      temp["latitude"] = "";
      temp["longitude"] = "";
      temp["country"] = "";
      temp["state"] = "";
      temp["city"] = "";
      temp["postal"] = "";
      temp["address2"] = "";
    }
    let updatedAddress = values;
    updatedAddress = {
      ...updatedAddress,
      ...temp,
    };
    resetForm({ values: updatedAddress });
  };

  return (
    <>
      <DrawerInnerContent>
        <RadioGroup
          name="billingType"
          defaultValue={
            values.billingType ? String(values.billingType - 1) : "0"
          }
          value={values.billingType ? String(values.billingType - 1) : "0"}
          onChange={(e) =>
            setFieldValue("billingType", Number(e.target.value) + 1)
          }
          options={BILLING_TYPES.map((item) => ({ ...item, disabled: true }))}
        />
        <Select
          name="addressType"
          label="Location Type"
          placeholder="Select Location Type"
          options={LOCATION_TYPES}
          value={values.addressType}
          onChange={handleChange}
          error={touched.addressType && errors.addressType}
          required
          disabled
        />
        {values.billingType === "2" && (
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
        )}
        <Input
          name="firstName"
          label="First Name"
          placeholder="John"
          initValue={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
          required
        />
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          initValue={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
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
        />
        <Grid container columnSpacing={2}>
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
              name="postal"
              label="Postal Code"
              placeholder="ABC 123"
              initValue={values.postal}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.postal && errors.postal}
              required
              type="mask"
              maskProps={PIN_CODE_MASK}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Input
              name="state"
              label="Province/State"
              placeholder="eg. Ontario"
              initValue={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && errors.state}
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
          name="phone"
          label="Contact Number"
          placeholder="+1 (999)-999-9999"
          initValue={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && errors.phone}
          required
          type="mask"
          maskProps={PHONE_NO_MASK}
        />
        <Input
          name="alternate"
          label="Alternate Contact Number"
          placeholder="+1 (999)-999-9999"
          initValue={values.alternate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.alternate && errors.alternate}
          required
          type="mask"
          maskProps={PHONE_NO_MASK}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="johndoe@pickups.com"
          initValue={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          required
        />
        <Input
          name="details"
          label="Additional Notes"
          placeholder="Add any notes here"
          initValue={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.details && errors.details}
          required
          disabled
        />
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={() => setDrawerOpen(false)}
          secondary
          size="medium"
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

export default EditContactDetails;
