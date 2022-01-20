import React from "react";
import { Box, Grid } from "@material-ui/core";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
} from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FormikValues } from "formik";
import { CustomInput } from "./style";
import { PERMISSION_TYPES } from "../../../../../constants";
import Select from "app/components/Select";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import Switches from "app/components/Input/SwitchButton";
import EditAvatar from "app/components/Avatar/EditAvatar";
function NewColleagueForm(props: { formik: FormikValues }) {
  const {
    handleChange,
    errors,
    title,
    touched,
    values,
    handleBlur,
    handleSubmit,
  } = props.formik;
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
            error={touched.firstName && errors.firstName}
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
            error={touched.lastName && errors.lastName}
            label={"Last Name"}
            placeholder={"Start typing"}
          />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="phoneNumber"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.phoneNumber && errors.phoneNumber}
            label={"Phone Number"}
            placeholder={"Doe"}
          />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="Role"
            name="Role"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.Role && errors.Role}
            label={"Role/Designation"}
            placeholder={"+1 (999)-999-9999"}
          />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && errors.email}
            label={"Email id"}
            placeholder={"johndoe@pickups.com"}
          />
        </Grid>
        <Grid item md={3}>
        <Switches />
        </Grid>
        <Grid item md={3}>
          <CustomInput
            id="notificationFrequency"
            name="notificationFrequency"
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              touched.notificationFrequency && errors.notificationFrequency
            }
            label={"Notification Frequency"}
            placeholder={"Start typing"}
          />
        </Grid>
        <Grid item md={12}>
          <Select
            id="Permission"
            name="Permission"
            options={PERMISSION_TYPES}
            label={"Permission"}
            value={values[title + "Permission"]}
            onSelect={(e) => console.log(e)}
          />
        </Grid>
        <Grid item md={12}>
          <Button
            label="Save"
            onClick={handleSubmit}
            size="medium"
            style={{ float: "right" }}
          />
        </Grid>
        {/* <div style={{ marginLeft: 5, width: 130 }}>
            <Button
              label="Add Colleague"
              onClick={handleSubmit}
              style={{ marginTop: 100, width: 150 }}
            />
          </div> */}
      </GridContainer>
    </FullCard>
  );
}

export default NewColleagueForm;
