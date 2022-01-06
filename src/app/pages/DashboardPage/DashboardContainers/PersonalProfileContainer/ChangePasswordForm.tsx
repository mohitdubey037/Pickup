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
      newPasswordConfirmation: "",
      saveCard: false,
    },
    validationSchema: passwordSchema,
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
            // error={touched.password && errors.password}
            placeholder="Current Password"
            validate
          />
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <PasswordInput
            id="newPassword"
            name="newPassword"
            label="New Password"
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.password && errors.password}
            placeholder="New Password"
            validate
          />
        </Flex>
        <Flex>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.password && errors.password}
            placeholder="Confirm New Password"
            validate
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
