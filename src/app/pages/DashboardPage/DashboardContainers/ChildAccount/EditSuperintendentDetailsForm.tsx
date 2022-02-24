import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import { editSuperindedentDataSchema } from "./ChildAccountSchema";
import { useFormik } from "formik";
import { Avatar, Box } from "@material-ui/core";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { showToast } from "utils";
import { IMAGE_FILE_TYPES } from "../../../../../constants";
import { editSuperIndendentAccountData } from "services/ChildAccount";
import { imageUploadService } from "services/SingleShipmentServices";
import { editChildAccountProps } from "./type";
import {
  PHONE_NO_MASK,
} from "../../../../../constants";

export default function EditSuperintendentDetailsForm({saveAction, handleCloseDrawer, singleCompanyDetails}: editChildAccountProps ) {

  const [loading, setLoading] = useState<boolean>(false);

  const {userId} = singleCompanyDetails;

  const changeHandler = async (e) => {
    setLoading(true)
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
      setLoading(false)
      showToast(res.error.message, "error");
    } else {
      setLoading(false);
      setFieldValue("userProfileImage", res?.response?.data?.data || "");
    }
  };

  const handleEditSuperindendentAccount = async (values) => {
    // values["hstNumber"] = "12345"
    const res = await editSuperIndendentAccountData(values, userId);
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
        userProfileImage: singleCompanyDetails?.userProfileImage || "",
        firstName: singleCompanyDetails.firstName || "",
        lastName: singleCompanyDetails.lastName || "",
        phoneNumber: singleCompanyDetails.phoneNumber || "",
        roleDesignation: singleCompanyDetails.roleDesignation || "",
        emailId: singleCompanyDetails.emailId || ""
    },
    validationSchema: editSuperindedentDataSchema,
    onSubmit: () =>  {
      handleEditSuperindendentAccount(values);
    },
  });
  
  return (
    <>
        {/* <form> */}
        <Box display="flex" justifyContent="center" mb={5}>
          <EditAvatar icon={values?.userProfileImage} changeHandler={changeHandler} />
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
                required
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
                required
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
                required
                type="mask"
                maskProps={PHONE_NO_MASK}
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
                required
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
                required
              />
            </Grid>
          </GridContainer>
          {/* </DrawerInnerContent> */}
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
                showLoader={loading}
                onClick={handleSubmit}
                />
      </DrawerFooter>
    </>
  );
}
