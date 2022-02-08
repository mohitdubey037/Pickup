import { useFormik } from "formik";
import Cookies from "js-cookie";
import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Checkbox } from "../../../components/Checkbox";
import { PasswordInput, Input } from "../../../components/Input";
import { H1, Para } from "../../../components/Typography/Typography";
import {
  LoginWrapper,
  LogoImage,
  FormWrapper,
  FormContent,
  LoginLink,
  RememberDiv,
  LoginBackgroundWrapper,
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { loginSchema } from "./loginSchemas";
import { actions } from "store/reducers/SignInReducer";
import { useEffect, useState, useRef } from "react";
import CryptoJS from 'crypto-js';
import { CommonError } from "app/components/Input/style";
import { CustomLink } from "app/components/Typography/Links";

const Login = ({ navigate }: RouteComponentProps) => {

  const firstFieldRef = useRef<any>(null);

  useEffect(() => {
    firstFieldRef.current.focus();
  }, [])

  let tempCookie = Cookies.get('password');

  function getPassword() {
    if (tempCookie) {
      let newTempCookie = CryptoJS?.AES?.decrypt(tempCookie, 'message');
      let latestCookie = newTempCookie.toString(CryptoJS.enc.Utf8);
      return latestCookie;
    }
    else return ""
  }

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [checked, setChecked] = useState(true);

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
    if (Cookies.get('token')) {
      console.log(Cookies.get('token'));
      navigate?.("/dashboard");
    }
  }, [])

  useEffect(() => {
    if (signInUserResponse?.status === 200) {
      dispatch({
        type: "SET_LOGEDIN_USER",
        user: signInUserResponse?.data?.data,
      });
      console.log(signInUserResponse?.data?.data?.token);
      Cookies.set("token", signInUserResponse?.data?.data?.token);

      navigate?.("/dashboard");
    } else if (signInUserResponse?.status === 400 || signInUserResponse?.status === 403) {
      setErrorMessage(signInUserResponse?.message)
    }
    else if (signInUserResponse?.status === 422) {
      setErrorMessage("Password must be at least 4 character")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInUserResponse]);

  const onSignIn = () => {
    dispatch(
      actions.signInUser({ email: values.email, password: values.password, checked: values.checked })
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
    setFieldValue
  } = useFormik({
    initialValues: { email: Cookies.get('email') || "", password: getPassword(), checked: false },
    validationSchema: loginSchema,
    onSubmit: onSignIn,
  });

  useEffect(() => {
    setErrorMessage('')
  }, [values])

  useEffect(() => {
    (() => validateForm())();
  }, []);


  return (
    <form onSubmit={handleSubmit} >
      <LoginWrapper>
      <LoginBackgroundWrapper>
        <LogoImage />
        <FormWrapper>
          <FormContent>
            <H1 title="LOGIN" />
            {/* <form onSubmit={handleSubmit}> */}
            <Input
              ref={firstFieldRef}
              id={"email"}
              name={"email"}
              label="Email"
              placeholder={"johndoe@pickups.com"}
              onChange={handleChange}
              initValue={values?.email}
              onBlur={handleBlur}
              error={touched.email && errors?.email}
            />
            <PasswordInput
              id={"password"}
              name={"password"}
              label="Password"
              placeholder={"•••••••••••••••"}
              onChange={handleChange}
              initValue={values?.password}
              onBlur={handleBlur}
              error={touched.password && errors?.password?.toString()}
            />
            <RememberDiv>
              <Checkbox
                id="checked"
                name="checked"
                onChange={() => setFieldValue("checked", !values.checked)}
                label="Remember me" />
              <CustomLink
                label="Forgot my password"
                link={() => navigate?.("/forgot-password")}
              />
            </RememberDiv>
            {errorMessage ? <CommonError>{errorMessage} </CommonError> : null}
            <Button
              showLoader={showLoader}
              label="Sign In"
              size="large"
              type="submit"
              // onClick={handleSubmit}
              disabled={!(isValid)}
            />
            <LoginLink>
              <Para text="Don't have an account?" />
              <CustomLink
                label="Sign Up Here"
                link={() => navigate?.("/sign-up")}
              />
            </LoginLink>
            {/* </form > */}
          </FormContent>
        </FormWrapper>
        
        </LoginBackgroundWrapper>
      </LoginWrapper>
    </form>
  );
};

export default Login;
