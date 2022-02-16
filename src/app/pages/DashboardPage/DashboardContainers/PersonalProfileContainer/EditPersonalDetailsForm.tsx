import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
import { personalFormSchema } from "./personalFormSchema";
import { PERMISSION_TYPES, IMAGE_FILE_TYPES, PHONE_NO_MASK } from "../../../../../constants";
import Select from "app/components/Select";

import { imageUploadService } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { Avatar, Box } from "@material-ui/core";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import EditAvatar from "app/components/Avatar/EditAvatar";
import { PersonalProfileType } from "./types";
import { useState } from "react";
import { Drawer } from "app/components/Drawer";
import EmailSentDrawer from "./EmailSentDrawer";
interface EditPersonalInterface {
  personalProfileDetails: PersonalProfileType;
  setEditDetailsDrawerOpen: (value: boolean) => void;
  saveAction: any;
}

const EditPersonalDetailsForm = (props: EditPersonalInterface) => {
  const { personalProfileDetails, setEditDetailsDrawerOpen, saveAction } =
    props;

    const [emailSentDrawerOpen, setEmailSentDrawerOpen] = useState(false);

    
    const handleOpenDrawer = () => {
      setEmailSentDrawerOpen(true);
    };
    const handleCloseDrawer  = () => {
      setEmailSentDrawerOpen(false);
    };


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
      profileImage: personalProfileDetails?.profileImage || "", // personalProfileDetails?.profileImage ||
      firstName: personalProfileDetails?.firstName,
      lastName: personalProfileDetails?.lastName,
      emailId: personalProfileDetails?.emailId,
      phone: personalProfileDetails?.userDetails?.phoneNo,
      role: personalProfileDetails?.roleName,
      permission: personalProfileDetails?.roleId,
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
        {/* <Avatar
          src={values?.profileImage}
          onChange={(e) => changeHandler(e)}
          style={{
            width: 86,
            height: 86,
          }}
        /> */}

        <EditAvatar icon={values?.profileImage} changeHandler={changeHandler} />
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
        required={true}
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
        required={true}
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
        placeholder="+1 (999)-999-9999"
        required={true}
        type="mask"
        maskProps={PHONE_NO_MASK}
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
        required={true}
      />
      <Select
        disabled
        id="Permission"
        name="Permission"
        options={PERMISSION_TYPES}
        label={"Permission"}
        value={values?.permission}
        onSelect={(e) => console.log(e)}
      />
</DrawerInnerContent>
      <DrawerFooter>
        <Button
          secondary
          onClick={() => setEditDetailsDrawerOpen(false)}
          label="Cancel"
          size="medium"
        />
        <Button
          label={"Save"}
          onClick={handleSubmit}
          disabled={!isValid}
          size="medium"
        />
        {/* <Button
          label="sent"
          size="small"
          onClick={() => handleOpenDrawer()}
        /> */}
      </DrawerFooter>

      
      {emailSentDrawerOpen &&
      <Drawer
        open={emailSentDrawerOpen}
        setDrawerOpen={() => setEmailSentDrawerOpen(false)}
        title="Edit Colleague Details"
        closeIcon={true}
      >
        <EmailSentDrawer
        />
      </Drawer>
      }

    </>
  );
};

export default EditPersonalDetailsForm;
