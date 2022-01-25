import services from "services";
import * as Yup from "yup";

export const formInitValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  phoneNumber: "",
  emailId: "",
};

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  companyName: Yup.string().required("Please enter company's name"),
  phoneNumber: Yup.string()
    .required("Please enter phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone no. must be of at least 10 digits")
    .max(10, "Phone no. cannot be less than 10 digits"),
  emailId: Yup.string()
    .email("Invalid email")
    .required("Please enter email address"),
});

export const setPassword = async (body: any) => {
  try {
    const response = await services.post("business/password", body);
    return { response: response, success: true };
  } catch (error) {
    return { data: error, success: false };
  }
};
