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
import { useDispatch, useSelector } from "react-redux";
import { loginSchema } from "./loginSchemas";
import { actions } from "store/reducers/SignInReducer";

const SignIn = ({ navigate }: RouteComponentProps) => {
  const dispatch = useDispatch();
   
  const onSignIn = () => {
    dispatch(
      actions.signInUser({ email: values.email, password: values.password })
    );
  };
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: onSignIn,
    });

  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN IN</Header>
          <Input
            id={"email"}
            name={"email"}
            label="Email"
            placeholder={"Start typing"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <PasswordInput
            onChange={handleChange}
            onBlur={handleBlur}
            label="Password"
            id={"password"}
            name={"password"}
            error={touched.password && errors.password}
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
