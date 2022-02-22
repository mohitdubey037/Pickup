import { PasswordInput } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { passwordSchema } from "./passwordSchema";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Box } from "@material-ui/core";

const ChangePasswordForm = ({
  setPasswordDrawerOpen,
  saveAction,
  submitButtonLabel = "Save",
}) => {
  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        currentPassword: "",
        newPassword: "",
        newConfirmedPassword: "",
      },
      validationSchema: passwordSchema,
      onSubmit: (values) => saveAction(values),
    });

  return (
    <>
      <DrawerInnerContent>
        <Box>
          <PasswordInput
            id="currentPassword"
            name="currentPassword"
            label="Current Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.currentPassword}
            error={touched.currentPassword && errors.currentPassword}
            placeholder="Current Password"
            required={true}
          />

          <PasswordInput
            id="newPassword"
            name="newPassword"
            label="New Password"
            value={values.newPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.newPassword && errors.newPassword}
            placeholder="New Password"
            required={true}
          />

          <PasswordInput
            id="newConfirmedPassword"
            name="newConfirmedPassword"
            label="Confirm Password"
            value={values.newConfirmedPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.newConfirmedPassword && errors?.newConfirmedPassword}
            placeholder="Confirm New Password"
            required={true}
          />
        </Box>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          secondary
          onClick={() => setPasswordDrawerOpen(false)}
          label="Cancel"
          size="medium"
        ></Button>
        <Button
          label={submitButtonLabel}
          onClick={handleSubmit}
          size="medium"
        ></Button>
      </DrawerFooter>
    </>
  );
};

export default ChangePasswordForm;
