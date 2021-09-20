import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().required().email(),
});
