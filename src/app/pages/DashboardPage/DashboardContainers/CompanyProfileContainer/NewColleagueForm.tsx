import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
// import { Input } from "./style";
import {
  PERMISSION_TYPES,
  NOTIFICATION_FREQUENCY_TYPES,
} from "../../../../../constants";
import Select from "app/components/Select";
import { addNewColleague } from "./CompanyProfileSchema";
function NewColleagueForm({ saveAction }) {
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
      notificationFrequency: "",
      permission: "",
      notification: 1,
      type: 17,
    },
    validationSchema: addNewColleague,
    onSubmit: (values) => saveAction(values),
  });
  return (
    <FullCard style={{ marginLeft: 0 }}>
      <Flex direction={"column"}>
        <Typography className="typography" variant="h1" component="h3">
          <FormContainerTitle>New Colleague</FormContainerTitle>
        </Typography>
        <Flex direction={"column"}>
          <Flex style={{ marginTop: 20 }}>
            <Input
              id="firstName"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.firstName && errors.firstName}
              label={"First Name"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <Input
              id="lastName"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
              label={"Last Name"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />

            <Input
              id="phoneNumber"
              name="phoneNumber"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.phoneNumber && errors.phoneNumber}
              label={"Phone Number"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
          </Flex>
          <Flex style={{ marginTop: 20 }}>
            <Input
              id="roleDesignation"
              name="roleDesignation"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.roleDesignation && errors.roleDesignation}
              label={"Role / Designation"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <Input
              id="emailId"
              name="emailId"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.emailId && errors.emailId}
              label={"Email id"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            {/* <Input
              id="notificationFrequency"
              name="notificationFrequency"
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                touched.notificationFrequency && errors.notificationFrequency
              }
              label={"Notification Frequency"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            /> */}
            <Grid item xs={4}>
              <Select
                id="notificationFrequency"
                name="notificationFrequency"
                options={NOTIFICATION_FREQUENCY_TYPES}
                label={"Notification Frequency"}
                value={values["notificationFrequency"]}
                onSelect={handleChange}
              />
            </Grid>
          </Flex>
          <Flex style={{ marginTop: 20 }}>
            <Grid item xs={11}>
              <Select
                id="permission"
                name="permission"
                options={PERMISSION_TYPES}
                label={"Permission"}
                value={values["permission"]}
                onSelect={handleChange}
              />
            </Grid>
          </Flex>
          <Flex direction={"row-reverse"} style={{ marginTop: 20 }}>
            <div style={{ marginRight: 30, width: 148 }}>
              <Button label="Save" onClick={handleSubmit} disabled={!isValid} />
            </div>
          </Flex>
          {/* <div style={{ marginLeft: 5, width: 130 }}>
            <Button
              label="Add Colleague"
              onClick={handleSubmit}
              style={{ marginTop: 100, width: 150 }}
            />
          </div> */}
        </Flex>
      </Flex>
    </FullCard>
  );
}

export default NewColleagueForm;
