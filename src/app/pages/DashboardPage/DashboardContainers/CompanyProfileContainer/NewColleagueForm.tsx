import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Box, Grid } from "@mui/material";

import { H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import Select from "app/components/Select";
import { Input } from "app/components/Input";
import SelectBox from "app/components/Select/SelectBox";
import Switches from "app/components/Input/SwitchButton";
import { FullCard } from "app/components/CommonCss/CommonCss";
import { inviteColleague } from "services/CompanyService";
import {
  NOTIFICATION_FREQUENCY_TYPES,
  PERMISSION_TYPES_DESC,
  PHONE_NO_MASK,
} from "../../../../../constants";
import { addNewEditColleagueSchema } from "./schema";

interface NewColleagueInterface {
  companyId: string;
  onAddSuccess: () => void;
}

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  roleDesignation: "",
  emailId: "",
  notification: 0,
  notificationFrequency: "",
  permission: "",
  type: 17,
};

const NewColleagueForm = (props: NewColleagueInterface) => {
  const { companyId, onAddSuccess } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    values,
    errors,
    touched,
    isValid,
    resetForm,
    handleBlur,
    handleChange,
    setFieldValue,
    validateField,
    handleSubmit,
  } = useFormik({
    initialValues,
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
    values.phoneNumber = values.phoneNumber.replace(/[()-]/g, "");
    values.companyId = companyId;
    const res: any = await inviteColleague(values);
    if (res?.success) {
      onAddSuccess();
      setIsChecked(false);
      resetForm({ values: initialValues });
    }
    setLoading(false);
  };

  return (
    <FullCard>
      <Box mb={4}>
        <H3 text="Add New Colleague" />
      </Box>

      <GridContainer container spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
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
        <Grid item lg={3} md={6} xs={12}>
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
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
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
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Switches value={isChecked} setIsChecked={setIsChecked} />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
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
        </Grid>
        {isChecked && (
          <Grid item lg={3} md={6} xs={12}>
            <Select
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
          </Grid>
        )}
        <Grid item xs={12}>
          <SelectBox
            name="permission"
            label="Permission"
            options={PERMISSION_TYPES_DESC}
            value={values.permission}
            onSelect={handleChange}
            error={touched.permission && errors.permission}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            label="Save"
            onClick={handleSubmit}
            size="medium"
            showLoader={loading}
            disabled={!isValid}
            style={{ float: "right" }}
          />
        </Grid>
      </GridContainer>
    </FullCard>
  );
};

export default NewColleagueForm;
