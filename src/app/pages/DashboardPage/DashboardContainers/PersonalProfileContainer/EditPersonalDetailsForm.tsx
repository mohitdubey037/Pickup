import { Input, PasswordInput } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { passwordSchema } from "./passwordSchema";
import { Avatar } from "@material-ui/core";
import { ProfileState } from "./types";

const EditPersonalDetailsForm = ({
  title = "",
  setEditDetailsDrawerOpen,
  saveAction,
  enableSave = false,
  submitButtonLabel = "Save",
  profileData,
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
      firstName: profileData?.firstName,
      lastName: profileData?.lastName,
      emailId: profileData?.emailId,
      phone: "",
      role: "",
      email: "",
      permission: "",
      saveProfile: false,
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => saveAction(values),
  });
  console.log(profileData);
  console.log(values.firstName);
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
            onChange={handleChange}
            // error={touched.firstName && errors.firstName}
            label="First Name"
            placeholder={profileData?.firstName}
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
            // error={touched.lastName && errors.lastName}
            label="Last Name"
            placeholder={profileData?.lastName}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="phoneNumber"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.phoneNumber && errors.phoneNumber}
            label="Phone Number"
            placeholder={"+1 (231) 456-7890"}
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
            // error={touched.role && errors.role}
            label="Role/Designation"
            placeholder={"Manager"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="email"
            name="email"
            onBlur={handleBlur}
            value={values.emailId}
            onChange={handleChange}
            // error={touched.email && errors.email}
            label="Email"
            placeholder={profileData?.emailId}
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
            // error={touched.permission && errors.permission}
            label="Permission"
            placeholder={"Select"}
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
