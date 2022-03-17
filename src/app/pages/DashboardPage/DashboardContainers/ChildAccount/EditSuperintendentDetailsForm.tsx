import { useState } from "react";
import { useFormik } from "formik";
import { Grid, Box } from "@mui/material";

import { Input } from "app/components/Input";
import { DrawerInnerContent, DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { editSuperIndendentAccountData } from "services/ChildAccount";
import { editSuperindedentDataSchema } from "./ChildAccountSchema";
import { editChildAccountProps } from "./type";
import { PHONE_NO_MASK } from "../../../../../constants";

export default function EditSuperintendentDetailsForm({
  saveAction,
  handleCloseDrawer,
  singleCompanyDetails,
}: editChildAccountProps) {
  const { userId } = singleCompanyDetails;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userProfileImage: singleCompanyDetails?.userProfileImage || "",
      firstName: singleCompanyDetails.firstName || "",
      lastName: singleCompanyDetails.lastName || "",
      phoneNumber: singleCompanyDetails.phoneNumber || "",
      roleDesignation: singleCompanyDetails.roleDesignation || "",
      emailId: singleCompanyDetails.emailId || "",
    },
    validationSchema: editSuperindedentDataSchema,
    onSubmit: () => handleEditSuperindendentAccount(values),
  });

  const handleEditSuperindendentAccount = async (values) => {
    const res = await editSuperIndendentAccountData(values, userId);
    if (res?.success) {
      handleCloseDrawer();
      saveAction();
    }
  };

  return (
    <>
      <DrawerInnerContent>
        <Box display="flex" justifyContent="center" mb={4}>
          <EditAvatar
            src={values?.userProfileImage}
            onChange={(val) => setFieldValue("userProfileImage", val || "")}
            setLoading={setLoading}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              initValue={values?.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName}
              required
            />
          </Grid>
        </Grid>
        <Input
          name="phoneNumber"
          label="Phone Number"
          placeholder="+1 (999)-999-9999"
          initValue={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
          required
          type="mask"
          maskProps={PHONE_NO_MASK}
        />
        <Input
          name="roleDesignation"
          label="Role/Designation"
          placeholder="eg. Manager"
          initValue={values.roleDesignation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.roleDesignation && errors.roleDesignation}
          required
        />
        <Input
          name="emailId"
          label="Email id"
          placeholder="johndoe@gmail.com"
          initValue={values.emailId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailId && errors.emailId}
          required
          // disabled
        />
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
