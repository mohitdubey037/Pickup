import { useState } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import SelectNew from "app/components/Select/SelectNew";
import EditAvatarNew from "app/components/Avatar/EditAvatarNew";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { editPersonalProfileDetails } from "services/PersonalProfileServices";
import { editPersonalProfileSchema } from "./schema";
import { PERMISSION_TYPES, PHONE_NO_MASK } from "../../../../../constants";
import { PersonalProfileType } from "./types";

interface EditDetailsInterface {
  data: PersonalProfileType;
  setDrawerOpen: (value: boolean) => void;
  onEditSuccess: () => void;
}

const EditPersonalDetailsForm = (props: EditDetailsInterface) => {
  const { data, setDrawerOpen, onEditSuccess } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      profileImage: data?.profileImage || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      phone: data?.userDetails?.phoneNo || "",
      role: data?.roleName || "",
      emailId: data?.emailId || "",
      permission: data?.roleId || "",
    },
    validationSchema: editPersonalProfileSchema,
    onSubmit: (values) => onSubmit(values),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    values.phone = values.phone.replace(/[()-]/g, "");
    const res: any = await editPersonalProfileDetails(values);
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
          name="phone"
          label="Phone Number"
          placeholder="+1 (999)-999-9999"
          initValue={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && errors.phone}
          required
          type="mask"
          maskProps={PHONE_NO_MASK}
        />
        <Input
          name="role"
          label="Role/Designation"
          initValue={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.role && errors.role}
          required
          disabled
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
        <SelectNew
          name="Permission"
          label="Permission"
          placeholder="Select Permission"
          options={PERMISSION_TYPES}
          value={values.permission}
          onChange={handleChange}
          error={touched.permission && errors.permission}
          required
          disabled
        />
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

export default EditPersonalDetailsForm;
