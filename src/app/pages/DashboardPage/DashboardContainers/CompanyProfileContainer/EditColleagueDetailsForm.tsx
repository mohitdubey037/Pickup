import { useState, useEffect } from "react";
import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { Avatar, Box } from "@material-ui/core";
import {
  NOTIFICATION_FREQUENCY_TYPES,
  // PERMISSION_TYPES,
  NEW_PERMISSION_TYPES,
} from "../../../../../constants";
import Switches from "app/components/Input/SwitchButton";
import Select from "app/components/Select";
import SelectBox from "app/components/Select/SelectBox";
import { editColleagueSchema } from "./CompanyProfileSchema";
import { DrawerFooter } from "app/components/Drawer/style";

const EditColleagueDetailsForm = ({
  colleagueDetails,
  setColleagueDrawerOpen,
  saveAction,
  submitButtonLabel = "Save",
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    colleagueDetails?.notification == 1
  );

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
    onSubmit: (values) => {
      if (!isChecked) {
        values.notification = 0;
        values.notificationFrequency = "";
      } else {
        values.notification = 1;
      }
      saveAction(values);
    },
  });

  useEffect(() => {
    if (isChecked) {
      setFieldValue("notification", 1);
    } else {
      setFieldValue("notification", 0);
    }
  }, [isChecked]);

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Avatar style={{ width: 86, height: 86 }} />
      </Box>

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

      <Input
        id="phoneNumber"
        name="phoneNumber"
        value={values.phoneNumber}
        initValue={values?.phoneNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.phoneNumber && errors?.phoneNumber?.toString()}
        label="Phone Number"
        placeholder="+1 (999)-999-9999"
      />

      <Input
        id="roleDesignation"
        name="roleDesignation"
        value={values.roleDesignation}
        initValue={values?.roleDesignation}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.roleDesignation && errors?.roleDesignation?.toString()}
        label="Role/Designation"
        placeholder={"Manager"}
      />

      {/* <Select
        id="role"
        name="role"
        options={PERMISSION_TYPES}
        label={"Permissions"}
        value={values["role"]}
      /> */}

      <SelectBox
        id="role"
        name="role"
        options={NEW_PERMISSION_TYPES}
        label={"Permission"}
        value={values["role"]}
        onSelect={handleChange}
        error={touched.role && errors?.role?.toString()}
        isNoSubtitle={true}
      />

      <Switches value={isChecked} setIsChecked={setIsChecked} />

      {isChecked && (
        <Select
          id="notificationFrequency"
          name="notificationFrequency"
          options={NOTIFICATION_FREQUENCY_TYPES}
          label={"Notification Frequency"}
          value={isChecked ? values["notificationFrequency"] : ""}
          onSelect={handleChange}
          error={
            touched.notificationFrequency &&
            errors?.notificationFrequency?.toString()
          }
          required={isChecked && true}
        />
      )}

      <DrawerFooter>
        <Button
          secondary
          onClick={() => setColleagueDrawerOpen(false)}
          label="Cancel"
          size="medium"
        />
        <Button
          label={submitButtonLabel}
          onClick={handleSubmit}
          disabled={!isValid}
          size="medium"
        />
      </DrawerFooter>
    </>
  );
};

export default EditColleagueDetailsForm;
