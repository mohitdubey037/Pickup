import { Input, PasswordInput } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { passwordSchema } from "./passwordSchema";

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
    // validationSchema: passwordSchema,
    onSubmit: (values) => saveAction(values),
  });

  return (
    <Flex direction="column" style={{ height: "100%", width: "540px" }}>
      <div>
        <h3>{title}</h3>
        <Flex style={{ marginBottom: 20 }}>
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
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
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
        </Flex>
        <Flex>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={values.newConfirmedPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.newConfirmedPassword && errors.newConfirmedPassword}
            placeholder="Confirm New Password"
          />
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
          onClick={() => setPasswordDrawerOpen(false)}
          label="Cancel"
        ></Button>
        <Button
          style={{ width: "fit-content", minWidth: "150px" }}
          label={submitButtonLabel}
          onClick={handleSubmit}
        ></Button>
      </Flex>
    </Flex>
  );
};

export default ChangePasswordForm;
