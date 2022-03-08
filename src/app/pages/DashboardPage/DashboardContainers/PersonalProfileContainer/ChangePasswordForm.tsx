import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import { PasswordInput } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { changeProfilePassword } from "services/PersonalProfileServices";
import { changePasswordSchema } from "./schema";

interface ChangePasswordInterface {
  setDrawerOpen: (value: boolean) => void;
}

const ChangePasswordForm = ({ setDrawerOpen }: ChangePasswordInterface) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, validateForm } =
    useFormik({
      initialValues: {
        currentPassword: "",
        newPassword: "",
        newConfirmedPassword: "",
      },
      validationSchema: changePasswordSchema,
      onSubmit: (values) => onSubmit(values),
    });

  const onSubmit = async (values) => {
    setLoading(true);
    const res: any = await changeProfilePassword(values);
    if (res?.success) {
      setDrawerOpen(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    (() => validateForm())();
  }, []);

  return (
    <>
      
      <DrawerInnerContent>
        <Box>
          <PasswordInput
            name="currentPassword"
            label="Current Password"
            placeholder="Current Password"
            value={values.currentPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.currentPassword && errors.currentPassword}
            required
          />
          <PasswordInput
            name="newPassword"
            label="New Password"
            placeholder="New Password"
            value={values.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.newPassword && errors.newPassword}
            required
          />
          <PasswordInput
            name="newConfirmedPassword"
            label="Confirm Password"
            placeholder="Confirm New Password"
            value={values.newConfirmedPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.newConfirmedPassword && errors.newConfirmedPassword}
            required
          />
        </Box>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={() => setDrawerOpen(false)}
          size="medium"
          secondary
        />
        <Button
          disabled = {!(isValid)}
          label="Save"
          onClick={handleSubmit}
          size="medium"
          showLoader={loading}
        />
      </DrawerFooter>
    </>
  );
};

export default ChangePasswordForm;
