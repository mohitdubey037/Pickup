import { useEffect, useState, useRef,  InputHTMLAttributes, MutableRefObject, RefObject } from "react";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  Header,
  SignUpWrapper,
  FormWrapper,
  FormContent,
  LogoImage,
  LoginLink,
  SignUpBackgroundWrapper,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { BlackLink, PageTitle } from "../../../components/Typography/Typography";
import { signUpSchema } from "./signUpSchemas";
import { actions } from "store/reducers/SignUpReducer";
import { Box } from "@material-ui/core";

type SignUpProps = RouteComponentProps;

const SignUp = ({ navigate }: SignUpProps) => {

  const firstFieldRef = useRef<any>();

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('')

  const signUpResponse = useSelector(
    (state: { signUp: { signUpResponse } }) => {
      return state.signUp.signUpResponse;
    }
  );

  const showLoader = useSelector((state: { globalState: { showLoader: boolean } }) => state.globalState.showLoader)

  useEffect(() => {
    return () => {
      dispatch(actions.registerUserResponse({}));
    };
  }, [dispatch]);

  useEffect(() => {
    if (signUpResponse.verifyEmailLink) {
      navigate?.("/email-sent");
    } else if (signUpResponse.status === 400) {
      setErrorMessage(signUpResponse.message)
    }
  }, [signUpResponse, navigate]);

  const onSignUp = () => {
    dispatch(actions.registerUser(values.email));
  };

  const {
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: signUpSchema,
    onSubmit: onSignUp,
  });

  useEffect(() => {
    setErrorMessage('')
  }, [values.email])

  useEffect(() => {
    (() => validateForm())();
  }, []);

  return (
    <form onSubmit={handleSubmit} >
      <SignUpWrapper>
        <SignUpBackgroundWrapper>
          <LogoImage />
          <FormWrapper>
            <FormContent>
              <PageTitle title="SIGN UP" />
              <Input
                label="Business Email"
                placeholder="Start typing"
                id="email"
                name="email"
                onChange={handleChange}
                error={touched.email && errors.email}
                onBlur={handleBlur}
                autoComplete="off"
                ref = {firstFieldRef}
              />
              {errorMessage ? <span style={{ color: '#c94c43' }}> {errorMessage} </span> : null}
              <Button type="submit" disabled={!(isValid)} label="Sign Up" showLoader={showLoader} size="large" />
              <LoginLink>
                Already have an account?{" "}
                <BlackLink
                  link={() => navigate?.("/")}
                  label={"Login Here"}
                />
              </LoginLink>
            </FormContent>
          </FormWrapper>
        </SignUpBackgroundWrapper>
      </SignUpWrapper>
    </form>
  );
};

export default SignUp;
