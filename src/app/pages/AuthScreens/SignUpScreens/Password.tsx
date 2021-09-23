/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useLocation } from "@reach/router";
import { useFormik } from "formik";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const passwordRegisterResponse = useSelector(
    (state: { signUp: { passwordRegisterResponse: {} } }) =>
      state.signUp.passwordRegisterResponse
  );
  const showLoader = useSelector(
    (state: { globalState: { showLoader: boolean } }) =>
      state.globalState.showLoader
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actions.registerPasswordResponse({}));
    };
  });

  useEffect(() => {
    if (!state?.email) {
      navigate?.("/");
      showToast("Invalid", "error");
    }
  }, [state?.email]);

  useEffect(() => {
    if (passwordRegisterResponse) {
      navigate?.("/congratulations");
    }
  }, [passwordRegisterResponse]);

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

          <Button
            showLoader={showLoader}
            label="Confirm"
            onClick={handleSubmit}
          />
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default Password;
