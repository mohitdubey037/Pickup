import { useState } from "react";
import { useFormik } from "formik";
import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Checkbox } from "../../../components/Checkbox";
import { PasswordInput, Input } from "../../../components/Input";
import { BlackLink } from "../../../components/Typography/Typography";
import {
  LoginWrapper,
  LogoImage,
  FormWrapper,
  FormContent,
  Header,
  LoginLink,
  RememberDiv,
} from "../style";
import { useDispatch } from "react-redux";
import { loginSchema } from "./loginSchemas";

const SignIn = ({ navigate }: RouteComponentProps) => {
  const dispatch = useDispatch();
 
  const submitLogin = () => {
     // dispatch({type:'Logged-in'});
  };
  const {
    handleChange,
    values: { email ,password},
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: submitLogin,
  });
 
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN IN</Header>
          <Input
            id={'email'}
            name={'email'}
            label="Email"
            placeholder={"Start typing"}
            onChange={handleChange}
            error={errors.email}
           />
          <PasswordInput
            label="Password"
            id={'password'}
            name={'password'}
            onChange={handleChange}
            error={errors.password}


           />
          <RememberDiv>
            <Checkbox label="Remember me" />
            <BlackLink
              label="Forgot my Password"
              link={() => navigate?.("/forgot-password")}
            />
          </RememberDiv>
          <Button label="Sign In" onClick={handleSubmit} />
          <LoginLink>
            Don't have an account?{" "}
            <BlackLink label="Sign Up Here" link={() => navigate?.("/")} />
          </LoginLink>
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default SignIn;
