import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import { editSuperindedentDataSchema } from "./ChildAccountSchema";
import { editSuperindedentData } from "./helper";
import { useFormik } from "formik";
import { Avatar, Box } from "@material-ui/core";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { showToast } from "utils";
import { IMAGE_FILE_TYPES } from "../../../../../constants";
import { editSuperIndendentAccountData } from "services/ChildAccount";
import { imageUploadService } from "services/SingleShipmentServices";

export default function EditSuperintendentDetailsForm({saveAction, handleCloseDrawer, singleCompanyDetails} ) {

  const {userId} = singleCompanyDetails;
  console.log(userId);

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
      setFieldValue("companyProfileImage", res?.response?.data?.data || "");
    }
  };

  const handleEditSuperindendentAccount = async (values) => {
    values["hstNumber"] = "12345"
    console.log(values);
    const res = await editSuperIndendentAccountData(values, userId);
    console.log(res);
    if (res.success) {
      handleCloseDrawer()
      saveAction()
    }
  }

  const {
    handleChange,
    values,
    touched,
    errors,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm
  } = useFormik({
    initialValues: {
        companyProfileImage: singleCompanyDetails?.profileImage || "",
        firstName: singleCompanyDetails.firstName || "",
        lastName: singleCompanyDetails.lastName || "",
        phoneNumber: singleCompanyDetails.phoneNumber || "",
        roleDesignation: singleCompanyDetails.roleDesignation || "",
        emailId: singleCompanyDetails.emailId || ""
    },
    validationSchema: editSuperindedentDataSchema,
    onSubmit: () =>  {
      console.log('hii 3')
      handleEditSuperindendentAccount(values);
    },
  });
  
  return (
    <>
        <form>
        <Box display="flex" justifyContent="center" mb={5}>
          <EditAvatar icon={values?.companyProfileImage} changeHandler={changeHandler} />
        </Box>
        <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="FirstName"
                name="firstName"
                label={"First Name"}
                initValue={values?.firstName}
                onChange={handleChange}
                error={touched.firstName && errors?.firstName}
                placeholder={"John"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="LastName"
                name="lastName"
                label={"Last Name"}
                initValue={values?.lastName}
                onChange={handleChange}
                error={touched.lastName && errors?.lastName}
                placeholder={"Doe"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="PhoneNumber"
                name="phoneNumber"
                label={"Phone Number"}
                initValue={values?.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && errors?.phoneNumber}
                placeholder={"+1 (999)-999-9999"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Role"
                name="roleDesignation"
                label={"Role/Designation"}
                initValue={values?.roleDesignation}
                onChange={handleChange}
                error={touched.roleDesignation && errors?.roleDesignation}
                placeholder={"eg. Manager"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Email"
                name="emailId"
                label={"Email id"}
                initValue={values?.emailId}
                onChange={handleChange}
                error={touched.emailId && errors?.emailId}
                placeholder={"johndoe@gmail.com"}
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
                onClick={handleSubmit}
                />
      </DrawerFooter>
        </form>
    
    </>
  );
}
