import { Input, PasswordInput } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { personalFormSchema } from "./personalFormSchema";
import { Avatar } from "@material-ui/core";
import { ProfileState } from "./types";
import { useSelector } from "react-redux";
import { AuthUser } from "types";

const EditPersonalDetailsForm = ({
  title = "",
  setEditDetailsDrawerOpen,
  saveAction,
  enableSave = false,
  submitButtonLabel = "Save",
}) => {
  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });
  const { user } = auth;
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
      firstName: user?.firstName,
      lastName: user?.lastName,
      emailId: user?.emailId,
      phone: user?.userDetails?.phoneNo,
      role: user?.roleDesignation,
      permission: "",
    },
    validationSchema: personalFormSchema,
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
            value={values.firstName}
            initValue={values.firstName}
            onChange={handleChange}
            error={touched.firstName && errors.firstName}
            label="First Name"
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
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
            initValue={values.lastName}
            error={touched.lastName && errors.lastName}
            label="Last Name"
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="phone"
            name="phone"
            onBlur={handleBlur}
            onChange={handleChange}
            initValue={values.phone}
            value={values.phone}
            error={touched.phone && errors.phone}
            label="Phone Number"
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="role"
            name="role"
            onBlur={handleBlur}
            onChange={handleChange}
            initValue={values.role}
            // error={touched.role && errors.role}
            label="Role/Designation"
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
            onBlur={handleBlur}
            value={values.emailId}
            initValue={values.emailId}
            onChange={handleChange}
            placeholder={values?.emailId}
            error={touched.emailId && errors.emailId}
            label="Email"
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="permission"
            name="permission"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Permission"
            // error={touched.permission && errors.permission}
            label="Permission"
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
          onClick={() => setEditDetailsDrawerOpen(false)}
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

export default EditPersonalDetailsForm;
