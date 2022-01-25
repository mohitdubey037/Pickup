import { Input, PasswordInput } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { passwordSchema } from "./passwordSchema";
import { DrawerFooter } from "app/components/Drawer/style";
import { Box } from "@material-ui/core";

const ChangePasswordForm = ({
  title = "",
  setPasswordDrawerOpen,
  saveAction,
  enableSave = false,
  submitButtonLabel = "Save",
}) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newConfirmedPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => saveAction(values),
  });

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      style={{ height: "100%" }}
    >
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
        />
      </Box>

      <DrawerFooter>
        <Button
          secondary
          style={{ width: "fit-content", minWidth: "150px" }}
          onClick={() => setPasswordDrawerOpen(false)}
          label="Cancel"
        ></Button>
        <Button
          style={{ width: "fit-content", minWidth: "150px" }}
          label={submitButtonLabel}
          onClick={handleSubmit}
        ></Button>
      </DrawerFooter>
    </Flex>
  );
};

export default ChangePasswordForm;
