/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useLocation } from "@reach/router";
import { useFormik } from "formik";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store/reducers/SignUpReducer";
import { showToast } from "utils";

import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import {
  SignUpWrapper,
  FormContent,
  FormWrapper,
  LogoImage,
  Header,
} from "../style";
import { passwordSchema } from "./signUpSchemas";

const Password = ({ navigate }: RouteComponentProps) => {
  const { state } = useLocation() as { state: { email: string } };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state?.email) {
      navigate?.("/");
      showToast("Invalid", "error");
    }
  }, [state?.email]);

  const onSubmit = () => {
    dispatch(
      actions.registerPassword({
        emailId: state?.email,
        password: values.password,
      })
    );
  };

  const { handleChange, errors, values, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { password: "", confirmPassword: "" },
      validationSchema: passwordSchema,
      onSubmit: onSubmit,
    });

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>PASSWORD</Header>
          <PasswordInput
            id="password"
            name="password"
            label="Password"
            placeholder="Start typing"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
            validate
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Start typing"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && errors.confirmPassword}
          />

          <Button label="Sign Up" onClick={handleSubmit} />
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default Password;
