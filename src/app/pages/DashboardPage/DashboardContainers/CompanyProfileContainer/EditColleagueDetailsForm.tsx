import { Input, PasswordInput } from "app/components/Input";
import { Flex, Block } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
// import { passwordSchema } from "./passwordSchema";
import { Avatar, Grid } from "@material-ui/core";
import {
  COUNTRY_TEXT,
  INDUSTRY_TEXT,
  NOTIFICATION_FREQUENCY_TYPES,
  PERMISSION_TYPES,
} from "../../../../../constants";
import Select from "app/components/Select";
import { editColleagueSchema } from "./CompanyProfileSchema";
import React, { useEffect, useState } from "react";
import { ColleagueDetailsType } from "./types";

const EditColleagueDetailsForm = ({
  colleagueDetails,
  setColleagueDrawerOpen,
  saveAction,
  submitButtonLabel = "Save",
}) => {
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
      emailId: colleagueDetails?.emailId || "",
      firstName: colleagueDetails?.firstName || "",
      lastName: colleagueDetails?.lastName || "",
      notification: colleagueDetails?.notification || "",
      notificationFrequency: colleagueDetails?.notificationFrequency || "",
      phoneNumber: colleagueDetails?.phoneNo || "",
      role: colleagueDetails?.role || "",
      roleDesignation: colleagueDetails?.roleDesignation || "",
      type: colleagueDetails?.type || "",
      inviteId: colleagueDetails?.inviteId,
    },
    validationSchema: editColleagueSchema,
    onSubmit: (values) => saveAction(values),
  });

  return (
    <Flex direction="column" style={{ height: "100%", width: "540px" }}>
      <div>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Avatar
            style={{
              width: 86,
              height: 86,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src="https://i.pravatar.cc/300" width={86} />
          </Avatar>
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="firstName"
            name="firstName"
            onBlur={handleBlur}
            value={values?.firstName}
            initValue={values?.firstName}
            onChange={handleChange}
            error={touched?.firstName && errors?.firstName?.toString()}
            label="First Name"
            placeholder={"Torinit"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="lastName"
            name="lastName"
            value={values?.lastName}
            initValue={values?.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched?.lastName && errors?.lastName?.toString()}
            label="Last Name"
            placeholder={"100 Bond Street"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="emailId"
            name="emailId"
            value={values.emailId}
            initValue={values?.emailId}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.emailId && errors?.emailId?.toString()}
            label="Email Id"
            placeholder={"123 Avebue"}
          />
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={values.phoneNumber}
                initValue={values?.phoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.phoneNumber && errors?.phoneNumber?.toString()}
                label="Phone Number"
                placeholder={"9987451169"}
              />
            </Block>
          </Flex>
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="roleDesignation"
                name="roleDesignation"
                value={values.roleDesignation}
                initValue={values?.roleDesignation}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched.roleDesignation && errors?.roleDesignation?.toString()
                }
                label="Role/Designation"
                placeholder={"Manager"}
              />
            </Block>
          </Flex>
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Grid item xs={11}>
            <Select
              id="role"
              name="role"
              options={PERMISSION_TYPES}
              label={"Permissions"}
              value={values["role"]}
              onSelect={handleChange}
            />
          </Grid>
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Select
            id="notificationFrequency"
            name="notificationFrequency"
            options={NOTIFICATION_FREQUENCY_TYPES}
            label={"Notification Frequency"}
            value={values["notificationFrequency"]}
            onSelect={handleChange}
            error={
              touched.notificationFrequency &&
              errors?.notificationFrequency?.toString()
            }
          />
          {/* <Input
            id="notificationFrequency"
            name="notificationFrequency"
            value={values.notificationFrequency}
            initValue={values?.notificationFrequency}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              touched.notificationFrequency &&
              errors?.notificationFrequency?.toString()
            }
            label="Notification Frequency"
            placeholder={"Monthly"}
          /> */}
        </Flex>
      </div>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        style={{ alignItems: "flex-end" }}
      >
        <Button
          secondary
          style={{ width: "fit-content", minWidth: "150px" }}
          onClick={() => setColleagueDrawerOpen(false)}
          label="Cancel"
        ></Button>
        <Button
          style={{ width: "fit-content", minWidth: "150px" }}
          label={submitButtonLabel}
          onClick={handleSubmit}
          disabled={!isValid}
        ></Button>
      </Flex>
    </Flex>
  );
};

export default EditColleagueDetailsForm;
