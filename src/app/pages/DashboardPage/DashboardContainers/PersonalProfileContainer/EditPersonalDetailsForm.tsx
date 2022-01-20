import { Input } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { personalFormSchema } from "./personalFormSchema";
import { useSelector } from "react-redux";
import { AuthUser } from "types";
import { PERMISSION_TYPES } from "../../../../../constants";
import Select from "app/components/Select";

import { imageUploadService } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { Avatar, Box } from "@material-ui/core";
import { DrawerFooter } from "app/components/Drawer/style";
import EditAvatar from "app/components/Avatar/EditAvatar";

const EditPersonalDetailsForm = ({
  title = "",
  setEditDetailsDrawerOpen,
  saveAction,
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
      profileImage: user?.profileImage,
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

  const changeHandler = async (e) => {
    const formData = new FormData();
    const image = e.target.files[0];

    formData.append("document", image, image.name);

    const res: { response: any; error: any } = await imageUploadService(
      formData
    );

    if (res.error) {
      showToast(res.error.message, "error");
    } else {
      setFieldValue("profileImage", res?.response?.data?.data || "");
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        {/* <Avatar
          src={values?.profileImage}
          onChange={(e) => changeHandler(e)}
          style={{
            width: 86,
            height: 86,
          }}
        /> */}
        
        <EditAvatar  />

      </Box>
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
      <Input
        id="role"
        name="role"
        onBlur={handleBlur}
        onChange={handleChange}
        initValue={values.role}
        // error={touched.role && errors.role}
        disabled
        label="Role/Designation"
      />
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
      <Select
        disabled
        id="Permission"
        name="Permission"
        options={PERMISSION_TYPES}
        label={"Permission"}
        value={values[title + "Permission"]}
        onSelect={(e) => console.log(e)}
      />

      <DrawerFooter>
          <Button
            secondary
            onClick={() => setEditDetailsDrawerOpen(false)}
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

export default EditPersonalDetailsForm;