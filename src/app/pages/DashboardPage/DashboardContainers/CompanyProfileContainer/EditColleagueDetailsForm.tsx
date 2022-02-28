import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import Switches from "app/components/Input/SwitchButton";
import SelectBox from "app/components/Select/SelectBox";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import EditAvatarNew from "app/components/Avatar/EditAvatarNew";
import SelectNew from "app/components/Select/SelectNew";
import { updateColleague } from "services/CompanyService";
import {
  NOTIFICATION_FREQUENCY_TYPES,
  NEW_PERMISSION_TYPES,
  PHONE_NO_MASK,
} from "../../../../../constants";
import { addNewEditColleagueSchema } from "./schema";
import { ColleagueDetailsType } from "./types";

interface EditDetailsInterface {
  data?: ColleagueDetailsType;
  setDrawerOpen: (value: boolean) => void;
  onEditSuccess: () => void;
}

const EditColleagueDetailsForm = (props: EditDetailsInterface) => {
  const { data, setDrawerOpen, onEditSuccess } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(
    Number(data?.notification) === 1
  );

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    setFieldValue,
    validateField,
    handleSubmit,
  } = useFormik({
    initialValues: {
      profileImage: data?.profileImage || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      emailId: data?.emailId || "",
      phoneNumber: data?.phoneNo || "",
      roleDesignation: data?.roleDesignation || "",
      permission: data?.role || "",
      notification: data?.notification || 0,
      notificationFrequency: data?.notificationFrequency || "",
      type: data?.type || 17,
    },
    validationSchema: addNewEditColleagueSchema,
    onSubmit: (values) => onSubmit(values),
  });

  useEffect(() => {
    if (isChecked) {
      setFieldValue("notification", 1);
    } else {
      setFieldValue("notificationFrequency", "");
      setFieldValue("notification", 0);
      validateField("notificationFrequency");
    }
  }, [isChecked]);

  const onSubmit = async (values) => {
    setLoading(true);
    values.role = values.permission;
    delete values.permission;
    values.phoneNumber = values.phoneNumber.replace(/[()-]/g, "");
    values.inviteId = data?.inviteId;
    values.companyId = data?.companyId;
    const res: any = await updateColleague(values);
    if (res?.success) {
      onEditSuccess();
      setDrawerOpen(false);
    }
    setLoading(false);
  };

  return (
    <>
      <DrawerInnerContent>
        <Box display="flex" justifyContent="center">
          <EditAvatarNew
            src={values?.profileImage}
            onChange={(val) => setFieldValue("profileImage", val || "")}
            setLoading={setLoading}
          />
        </Box>
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
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          initValue={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
          required
        />
        <Input
          name="emailId"
          label="Email Id"
          placeholder="johndoe@pickups.com"
          initValue={values.emailId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailId && errors.emailId}
          required
        />
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
          placeholder="Manager"
          initValue={values.roleDesignation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.roleDesignation && errors.roleDesignation}
          required
        />
        <SelectBox
          name="permission"
          label="Permission"
          options={NEW_PERMISSION_TYPES}
          value={values.permission}
          onSelect={handleChange}
          error={touched.permission && errors.permission}
          required
          isNoSubtitle
        />
        <Switches value={isChecked} setIsChecked={setIsChecked} />
        {isChecked && (
          <SelectNew
            name="notificationFrequency"
            label="Notification Frequency"
            placeholder="Select Notification Frequency"
            options={NOTIFICATION_FREQUENCY_TYPES}
            value={values.notificationFrequency}
            onChange={handleChange}
            error={
              touched.notificationFrequency && errors.notificationFrequency
            }
            required
          />
        )}
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={() => setDrawerOpen(false)}
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
};

export default EditColleagueDetailsForm;
