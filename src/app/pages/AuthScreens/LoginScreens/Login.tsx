import { useFormik } from "formik";
import Cookies from "js-cookie";
import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Checkbox } from "../../../components/Checkbox";
import { PasswordInput, Input } from "../../../components/Input";
import { BlackLink, PageTitle, Para } from "../../../components/Typography/Typography";
import {
  LoginWrapper,
  LogoImage,
  FormWrapper,
  FormContent,
  LoginLink,
  RememberDiv,
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { loginSchema } from "./loginSchemas";
import { actions } from "store/reducers/SignInReducer";
import { useEffect, useState } from "react";

const Login = ({ navigate }: RouteComponentProps) => {

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('')

  const signInUserResponse = useSelector(
    (state: {
      signIn: { signInUserResponse };
    }) => state.signIn.signInUserResponse
  );

  const showLoader = useSelector(
    (state: { globalState: { showLoader: boolean } }) =>
      state.globalState.showLoader
  );

  useEffect(() => {
    return () => {
      dispatch(actions.signInUserResponse({}));
    };
  }, [dispatch]);

  useEffect(() => {
    if (signInUserResponse?.status === 200) {
      dispatch({
        type: "SET_LOGEDIN_USER",
        user: signInUserResponse?.data?.data,
      });

      Cookies.set("token", signInUserResponse?.data?.data?.token);

      navigate?.("/dashboard");
    }else if(signInUserResponse?.status === 400){
        setErrorMessage(signInUserResponse?.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInUserResponse]);

  const onSignIn = () => {
    dispatch(
      actions.signInUser({ email: values.email, password: values.password })
    );
  };

  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: onSignIn,
  });

  useEffect(() => {
    setErrorMessage('')
  },[values])

  useEffect(() => {
    (() => validateForm())();
  }, []);

  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <PageTitle title="LOGIN" />
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
              label="Forgot my password"
              link={() => navigate?.("/forgot-password")}
            />
          </RememberDiv>
          {errorMessage ? <span style={{ color: '#c94c43' }}> {errorMessage} </span> : null}
          <Button
            showLoader={showLoader}
            label="Sign In"
            onClick={handleSubmit}
            disabled={!(isValid)}
          />
          <LoginLink>
            <Para text="Don't have an account?" />
            <BlackLink
              label="Sign Up Here"
              link={() => navigate?.("/sign-up")}
            />
          </LoginLink>
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
