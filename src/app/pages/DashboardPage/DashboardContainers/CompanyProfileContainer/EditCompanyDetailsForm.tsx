import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";

import { useSelector } from "react-redux";
// import { passwordSchema } from "./passwordSchema";
import { Avatar, Box, Grid } from "@material-ui/core";
import { COUNTRY, INDUSTRY } from "../../../../../constants";
import Select from "app/components/Select";
import { DrawerFooter } from "app/components/Drawer/style";

const EditCompanyDetailsForm = ({
  title = "",
  setCompanyDrawerOpen,
  saveAction,
  enableSave = false,
  submitButtonLabel = "Save",
}) => {
  const companyDetails = useSelector(
    (state: any) => state?.auth?.user?.companyDetails?.[0]
  );
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      companyName: companyDetails?.companyName,
      businessNumber: companyDetails?.businessNumber,
      industry: companyDetails?.industry,
      employeeStrength: companyDetails?.employeeStrength,
      address1: companyDetails?.addressLine1,
      address2: companyDetails?.addressLine2,
      city: companyDetails?.city,
      pincode: companyDetails?.pincode,
      province: companyDetails?.province,
      country: companyDetails?.country,
      hstNumber: companyDetails?.hstNumber,
      saveCard: false,
    },
    // validationSchema: passwordSchema,
    onSubmit: (values) => saveAction(values),
  });
  console.log(companyDetails);
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Avatar
          style={{
            width: 86,
            height: 86,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></Avatar>
      </Box>
      <Input
        id="companyName"
        name="companyName"
        onBlur={handleBlur}
        value={values.companyName}
        initValue={values.companyName}
        onChange={handleChange}
        // error={touched.companyName && errors.companyName}
        label="Company Name"
        placeholder={"Torinit"}
      />

      <Input
        id="address1"
        name="address1"
        value={values.address1}
        initValue={values.address1}
        onBlur={handleBlur}
        onChange={handleChange}
        // error={touched.address1 && errors.address1}
        label="Adresss Line 1"
        placeholder={"100 Bond Street"}
      />

      <Input
        id="address2"
        name="address2"
        value={values.address2}
        initValue={values.address2}
        onBlur={handleBlur}
        onChange={handleChange}
        // error={touched.address2 && errors.address2}
        label="Address Line 2"
        placeholder={"123 Avebue"}
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
            // error={touched.city && errors.city}
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
            // error={touched.province && errors.province}
            label="Province"
            placeholder={"Ontario"}
          />
        </Grid>
      </Grid>

      <Select
        id="country"
        name="country"
        options={COUNTRY}
        label={"Country"}
        value={values[title + "country"]}
        onSelect={(e) => console.log(e)}
      />

      <Input
        id="hstNumber"
        name="hstNumber"
        value={values.hstNumber}
        initValue={values.hstNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        // error={touched.hstNumber && errors.hstNumber}
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
        // error={touched.businessNumber && errors.businessNumber}
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
        // error={touched.pincode && errors.pincode}
        label="Pincode"
        placeholder={"554787"}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Select
            id="industry"
            name="industry"
            options={INDUSTRY}
            label={"Industry"}
            value={values[title + "industry"]}
            onSelect={(e) => console.log(e)}
          />
        </Grid>

        <Grid item xs={6}>
          <Input
            id="employeeStrength"
            name="employeeStrength"
            value={values.employeeStrength}
            initValue={values.employeeStrength}
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.employeeStrength && errors.employeeStrength}
            label="Employee Strength"
            placeholder={"32"}
          />
        </Grid>
      </Grid>

      <DrawerFooter>
        <Button
          secondary
          style={{ width: "fit-content", minWidth: "150px" }}
          onClick={() => setCompanyDrawerOpen(false)}
          label="Cancel"
        ></Button>
        <Button
          style={{ width: "fit-content", minWidth: "150px" }}
          label={submitButtonLabel}
          onClick={handleSubmit}
        ></Button>
      </DrawerFooter>
    </>
  );
};

export default EditCompanyDetailsForm;
