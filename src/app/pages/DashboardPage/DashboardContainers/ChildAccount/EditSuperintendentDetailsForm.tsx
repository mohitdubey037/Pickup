import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import { editChildAccountSchema } from "./ChildAccountSchema";
import { editSuperindedentData } from "./helper";
import { useFormik } from "formik";

export default function EditSuperintendentDetailsForm() {

  const {
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm
  } = useFormik({
    initialValues: editSuperindedentData,
    validationSchema: editChildAccountSchema,
    onSubmit: () =>  {console.log(values)},
  });

  const editSuperindendent = values;
  const editSuperindendentTouched = touched;
  const editSuperindendentError = errors;
  
  return (
    <>
        <form>
        <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="FirstName"
                name="firstName"
                label={"First Name"}
                value={editSuperindendent.firstName}
                onChange={handleChange}
                error={editSuperindendentTouched.firstName && editSuperindendentError.firstName}
                placeholder={"John"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="LastName"
                name="lastName"
                label={"Last Name"}
                value={editSuperindendent.lastName}
                onChange={handleChange}
                error={editSuperindendentTouched.lastName && editSuperindendentError.lastName}
                placeholder={"Doe"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="PhoneNumber"
                name="phoneNumber"
                label={"Phone Number"}
                value={editSuperindendent.phoneNumber}
                onChange={handleChange}
                error={editSuperindendentTouched.phoneNumber && editSuperindendentError.phoneNumber}
                placeholder={"+1 (999)-999-9999"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Role"
                name="roleId"
                label={"Role/Designation"}
                value={editSuperindendent.roleId}
                onChange={handleChange}
                error={editSuperindendentTouched.roleId && editSuperindendentError.roleId}
                placeholder={"eg. Manager"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Email"
                name="emailId"
                label={"Email id"}
                value={editSuperindendent.emailId}
                onChange={handleChange}
                error={editSuperindendentTouched.emailId && editSuperindendentError.emailId}
                placeholder={"johndoe@gmail.com"}
              />
            </Grid>
          </GridContainer>
          <DrawerFooter>
                <Button
                secondary
                label="Cancel"
                size="medium"
                />
                <Button
                label="Save"
                size="medium"
                />
      </DrawerFooter>
        </form>
    
    </>
  );
}
