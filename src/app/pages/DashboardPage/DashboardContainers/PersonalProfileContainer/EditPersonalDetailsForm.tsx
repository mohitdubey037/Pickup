import { useFormik } from "formik";
import { Box } from "@mui/material";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import SelectNew from "app/components/Select/SelectNew";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { personalFormSchema } from "./personalFormSchema";
import {
  PERMISSION_TYPES,
  IMAGE_FILE_TYPES,
  PHONE_NO_MASK,
} from "../../../../../constants";
import { imageUploadService } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { PersonalProfileType } from "./types";

interface EditPersonalInterface {
  data: PersonalProfileType;
  setDrawerOpen: (value: boolean) => void;
  saveAction: (values: any) => void;
}

const EditPersonalDetailsForm = (props: EditPersonalInterface) => {
  const { data, setDrawerOpen, saveAction } = props;

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isValid,
  } = useFormik({
    initialValues: {
      profileImage: data?.profileImage || "",
      firstName: data?.firstName,
      lastName: data?.lastName,
      emailId: data?.emailId,
      phone: data?.userDetails?.phoneNo,
      role: data?.roleName,
      permission: data?.roleId,
    },
    validationSchema: personalFormSchema,
    onSubmit: (values) => {
      values.phone = values.phone.replace(/[()-]/g, "");
      saveAction(values);
    },
  });

  const changeHandler = async (e) => {
    const formData = new FormData();
    const image = e?.target?.files[0];
    if (!IMAGE_FILE_TYPES.includes(image.type) || image.size > 5242880) {
      showToast(
        "You can only upload JPG, JPEG, PNG image (size less than 5MB)",
        "error"
      );
      return;
    }
    formData.append("document", image, image?.name);
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
      <DrawerInnerContent>
        <Box display="flex" justifyContent="center">
          <EditAvatar
            icon={values?.profileImage}
            changeHandler={changeHandler}
          />
        </Box>
        <Input
          id="firstName"
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
          id="lastName"
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
          id="phone"
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
          id="role"
          name="role"
          label="Role/Designation"
          initValue={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.role && errors.role}
          disabled
          required
        />
        <Input
          id="emailId"
          name="emailId"
          label="Email"
          placeholder="johndoe@pickups.com"
          initValue={values.emailId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailId && errors.emailId}
          required
        />
        <SelectNew
          id="Permission"
          name="Permission"
          label="Permission"
          placeholder="Select Permission"
          options={PERMISSION_TYPES}
          value={values?.permission}
          onChange={handleChange}
          error={touched.permission && errors.permission}
          disabled
          required
        />
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          secondary
          onClick={() => setDrawerOpen(false)}
          label="Cancel"
          size="medium"
        />
        <Button
          label={"Save"}
          onClick={handleSubmit}
          disabled={!isValid}
          size="medium"
        />
      </DrawerFooter>
    </>
  );
};

export default EditPersonalDetailsForm;
