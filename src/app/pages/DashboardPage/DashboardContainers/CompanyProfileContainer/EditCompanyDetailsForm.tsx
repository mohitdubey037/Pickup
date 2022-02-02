import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import {
  // COUNTRY_TEXT,
  INDUSTRY_TEXT,
  IMAGE_FILE_TYPES,
} from "../../../../../constants";
import Select from "app/components/Select";
import { editCompanySchema } from "./CompanyProfileSchema";
import { Box, Grid } from "@material-ui/core";
import { DrawerFooter } from "app/components/Drawer/style";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { showToast } from "utils";
import { imageUploadService } from "services/SingleShipmentServices";

const pinCodeMask = [
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
  /[a-zA-Z0-9 ]/,
];

const EditCompanyDetailsForm = ({
  title = "",
  setCompanyDrawerOpen,
  companyDetails,
  saveAction,
  // enableSave = false,
  submitButtonLabel = "Save",
}) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isValid,
  } = useFormik({
    initialValues: {
      profileImage: companyDetails?.companyProfileImage || "",
      companyName: companyDetails?.companyName || "",
      businessNumber: companyDetails?.businessNumber || "",
      industry: companyDetails?.industry || "",
      employeeStrength: companyDetails?.employeeStrength || "",
      address1: companyDetails?.addressLine1 || "",
      address2: companyDetails?.addressLine2 || "",
      city: companyDetails?.city || "",
      pincode: companyDetails?.pincode || "",
      province: companyDetails?.province || "",
      country: companyDetails?.country || "",
      hstNumber: companyDetails?.hstNumber || "",
    },
    validationSchema: editCompanySchema,
    onSubmit: (values) => saveAction(values),
  });

  const changeHandler = async (e) => {
    const formData = new FormData();
    const image = e?.target?.files[0];
    if (!IMAGE_FILE_TYPES.includes(image.type) || image.size > 5242880) {
      showToast(
        "You can only upload JPG, JPEG, PNG image (size less than 5MB)",
        "error"
      );
      return;
    }
    formData.append("document", image, image?.name);
    const res: { response: any; error: any } = await imageUploadService(
      formData
    );
    if (res.error) {
      showToast(res.error.message, "error");
    } else {
      setFieldValue("profileImage", res?.response?.data?.data || "");
    }
  };

  const handler = (value) => {
    if (
      value?.location?.displayPosition?.longitude &&
      value?.location?.displayPosition?.latitude
    ) {
      // setFieldValue(
      //   `${formFieldName}.${title}Longitude`,
      //   value?.location?.displayPosition?.longitude || ""
      // );
      // setFieldValue(
      //   `${formFieldName}.${title}Latitude`,
      //   value?.location?.displayPosition?.latitude || ""
      // );
      setFieldValue("country", value?.location?.address?.country || "");
      setFieldValue(
        "province",
        value?.location?.address?.state ||
          value?.location?.address?.county ||
          ""
      );
      setFieldValue("city", value?.location?.address?.city || "");
      setFieldValue("pincode", value?.location?.address?.postalCode || "");
      // setFieldValue(`${formFieldName}.${title}AddressLine1`, value?.location?.address?.label || "");
      setFieldValue("address2", value?.location?.address?.street || "");
    } else {
      // setFieldValue(`${formFieldName}.${title}Longitude`, "");
      // setFieldValue(`${formFieldName}.${title}Latitude`, "");
      setFieldValue("country", values.country);
      setFieldValue("province", values.province);
      setFieldValue("city", values.city);
      setFieldValue("pincode", values.pincode);
      setFieldValue("address2", values.address2);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <EditAvatar icon={values?.profileImage} changeHandler={changeHandler} />
      </Box>
      <Input
        id="companyName"
        name="companyName"
        onBlur={handleBlur}
        value={values.companyName}
        initValue={values.companyName}
        onChange={handleChange}
        required={true}
        error={touched.companyName && errors?.companyName?.toString()}
        label="Company Name"
        placeholder={"Torinit"}
      />
      <AutoComplete
        id="address1"
        name="address1"
        label={"Address Line 1"}
        value={values.address1}
        error={touched.address1 && errors?.address1?.toString()}
        placeholder={"Address Line 1"}
        setFieldValue={setFieldValue}
        onChange={handleChange}
        handleBlur={handleBlur}
        onSelect={handler}
        initValue={values.address1}
        disabled={undefined}
      />
      <Input
        id="address2"
        name="address2"
        value={values.address2}
        initValue={values.address2}
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        error={touched.address2 && errors?.address2?.toString()}
        label="Address Line 2"
        placeholder={"123 Avenue"}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            id="city"
            name="city"
            value={values.city}
            initValue={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={touched.city && errors?.city?.toString()}
            label="City"
            placeholder={"Toronto"}
          />
        </Grid>

        <Grid item xs={6}>
          <Input
            id="province"
            name="province"
            value={values.province}
            initValue={values.province}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={touched.province && errors?.province?.toString()}
            label="Province"
            placeholder={"Ontario"}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Input
          id="country"
          name="country"
          value={values.country}
          initValue={values.country}
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          error={touched.country && errors?.country?.toString()}
          label="Country"
          placeholder={"Start typing"}
        />
      </Grid>
      {/* <Select
        id="country"
        name="country"
        options={COUNTRY_TEXT}
        label={"Country"}
        value={values["country"]}
        onSelect={handleChange}
      /> */}
      <Input
        id="hstNumber"
        name="hstNumber"
        value={values.hstNumber}
        initValue={values.hstNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        error={touched.hstNumber && errors?.hstNumber?.toString()}
        label="HST Number"
        placeholder={"1245567842185"}
      />
      <Input
        id="businessNumber"
        name="businessNumber"
        value={values.businessNumber}
        initValue={values.businessNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        error={touched.businessNumber && errors?.businessNumber?.toString()}
        label="Business Number"
        placeholder={"5421369"}
      />
      <Input
        id="pincode"
        name="pincode"
        value={values.pincode}
        initValue={values.pincode}
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        error={touched.pincode && errors?.pincode?.toString()}
        label="Pincode"
        placeholder={"554787"}
        type="mask"
        maskProps={{
          mask: pinCodeMask,
          maskPlaceholder: null,
        }}
      />
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Select
            id="industry"
            name="industry"
            options={INDUSTRY_TEXT}
            label={"Industry"}
            value={values[title + "industry"]}
            onSelect={handleChange}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Input
            id="employeeStrength"
            name="employeeStrength"
            value={values.employeeStrength}
            initValue={values.employeeStrength}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              touched.employeeStrength && errors?.employeeStrength?.toString()
            }
            label="Employee Strength"
            placeholder={"32"}
          />
        </Grid>
      </Grid>
      <DrawerFooter>
        <Button
          secondary
          size="medium"
          onClick={() => setCompanyDrawerOpen(false)}
          label="Cancel"
        />
        <Button
          size="medium"
          label={submitButtonLabel}
          onClick={handleSubmit}
          disabled={!isValid}
        />
      </DrawerFooter>
    </>
  );
};

export default EditCompanyDetailsForm;
