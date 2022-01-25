import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { FullCard } from "app/components/Input/style";
import { ListLabel } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
// import { Input } from "./style";
import {
  PERMISSION_TYPES,
  NOTIFICATION_FREQUENCY_TYPES,
  NEW_PERMISSION_TYPES,
} from "../../../../../constants";
import Select from "app/components/Select";
import { addNewColleague } from "./CompanyProfileSchema";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import Switches from "app/components/Input/SwitchButton";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { Input } from "app/components/Input";
import { CustomInput } from "./style";
import SelectBox from "app/components/Select/SelectBox";
function NewColleagueForm({ saveAction }) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      roleDesignation: "",
      emailId: "",
      notificationFrequency: null,
      permission: "",
      notification: 1,
      type: 17,
    },
    validationSchema: addNewColleague,
    onSubmit: (values, actions) => {
      if (isChecked) {
        values.notificationFrequency = null;
      }
      // console.log("permission", values?.permission);
      saveAction(values);
      actions.resetForm({
        values: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          roleDesignation: "",
          emailId: "",
          notificationFrequency: null,
          permission: "",
          notification: 1,
          type: 17,
        },
      });
      // values.permission = "";
      // console.log("permission", values?.permission);
    },
  });

  return (
    <FullCard>
      <Box mb={4}>
        <ListLabel text="Add New Colleague" />
      </Box>
      <GridContainer container spacing={2}>
        <Grid item md={3}>
          <CustomInput
            id="firstName"
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.firstName}
            initValue={values?.firstName}
            error={touched.firstName && errors?.firstName?.toString()}
            label={"First Name"}
            placeholder={"John"}
          />
        </Grid>

        <Grid item md={3}>
          <CustomInput
            id="lastName"
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.lastName}
            initValue={values?.lastName}
            error={touched.lastName && errors?.lastName}
            label={"Last Name"}
            placeholder={"Doe"}
          />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="phoneNumber"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.phoneNumber}
            initValue={values?.phoneNumber}
            error={touched.phoneNumber && errors?.phoneNumber?.toString()}
            label={"Phone Number"}
            placeholder={"+1 (999)-999-9999"}
          />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="roleDesignation"
            name="roleDesignation"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.roleDesignation}
            initValue={values?.roleDesignation}
            error={
              touched.roleDesignation && errors?.roleDesignation?.toString()
            }
            label={"Role / Designation"}
            placeholder={"Manager"}
          />
        </Grid>
        <Grid item md={12} style={{ marginBottom: 15 }}>
          <Switches value={isChecked} setIsChecked={setIsChecked} />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="emailId"
            name="emailId"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.emailId}
            initValue={values?.emailId}
            error={touched.emailId && errors?.emailId?.toString()}
            label={"Email id"}
            placeholder={"johndoe@pickups.com"}
          />
        </Grid>
        <Grid item md={3}>
          <Select
            id="notificationFrequency"
            name="notificationFrequency"
            options={NOTIFICATION_FREQUENCY_TYPES}
            label={"Notification Frequency"}
            value={!isChecked ? values["notificationFrequency"] : null}
            onSelect={handleChange}
            disabled={isChecked}
          />
        </Grid>
      </GridContainer>

      <GridContainer container>
        <Grid item md={12}>
          <SelectBox
            id="permission"
            name="permission"
            options={NEW_PERMISSION_TYPES}
            label={"Permission"}
            value={values?.permission}
            onSelect={handleChange}
            error={touched.permission && errors?.permission?.toString()}
          />
        </Grid>
        <Grid item md={12}>
          <Button
            label="Save"
            onClick={handleSubmit}
            size="medium"
            disabled={!isValid}
            style={{ float: "right" }}
          />
        </Grid>
      </GridContainer>
    </FullCard>
  );
}

export default NewColleagueForm;
