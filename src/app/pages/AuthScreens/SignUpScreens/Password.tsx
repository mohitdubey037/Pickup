/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useLocation } from "@reach/router";
import { PageTitle } from "app/components/Typography/Typography";
import { useFormik } from "formik";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SignUpReducer";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import {
    SignUpWrapper,
    FormContent,
    FormWrapper,
    LogoImage,
    Header,
    SignUpBackgroundWrapper,
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
            dispatch(actions.registerPasswordResponse(null));
        };
    }, []);

    useEffect(() => {
        //This logic needs to improve or something better needs to be thought of to show user in case of missing email in navigation state
        if (!state?.email) {
            navigate?.('/sign-up')
        }
    }, [state?.email]);

    useEffect(() => {
        if (passwordRegisterResponse) {
            navigate?.("/congratulations");
        }
    }, [passwordRegisterResponse]);

    const onSubmit = (values) => {
        dispatch(
            actions.registerPassword({
                emailId: state?.email,
                password: values.password,
            })
        );
    };

    const { handleChange, errors, touched, handleBlur, handleSubmit, isValid, validateForm } =
        useFormik({
            initialValues: { password: "", confirmPassword: "" },
            validationSchema: passwordSchema,
            onSubmit: onSubmit,
        });

        useEffect(() => {
            (() => validateForm())();
          }, []);

    return (
        <SignUpWrapper>
        <SignUpBackgroundWrapper>
            <LogoImage />
            <FormWrapper>
                <FormContent>
                    <PageTitle title="PASSWORD" />
                    <PasswordInput
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="Start typing"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                        autoComplete="off"
                        validate
                    />
                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Start typing"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        error={touched.confirmPassword && errors.confirmPassword}
                    />
                    <Button
                        disabled={!(isValid)}
                        showLoader={showLoader}
                        label="Confirm"
                        onClick={handleSubmit}
                    />
                </FormContent>
            </FormWrapper>
            </SignUpBackgroundWrapper>
        </SignUpWrapper>
    );
};

export default Password;
