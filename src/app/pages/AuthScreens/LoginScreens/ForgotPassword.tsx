import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Input } from "../../../components/Input";
import { H1 } from "../../../components/Typography/Typography";
import {
    FormContent,
    FormWrapper,
    Header,
    LoginBackgroundWrapper,
    LoginLink,
    LoginWrapper,
    LogoImage,
} from "../style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SignInReducer";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import { useEffect, useRef } from "react";
import { CustomLink } from "app/components/Typography/Links";

const ForgotPassword = ({ navigate }: RouteComponentProps) => {

    const firstFieldRef = useRef<any>();

    useEffect(() => {
      firstFieldRef.current?.focus();
    }, []);

    const dispatch = useDispatch();

    const forgetPasswordResponse = useSelector(
        (state: {
            signIn: { forgetPasswordResponse: { status: number; data: { data: {} } } };
        }) => state.signIn.forgetPasswordResponse
    );

    const showLoader = useSelector(
        (state: { globalState: { showLoader: boolean } }) =>
            state.globalState.showLoader
    );

    const onForgetPassword = async (values: any) => {
        dispatch(
            actions.forgetPassword(values.email)
        )
    };

    const { handleChange, errors, values, touched, handleBlur, handleSubmit, isValid, validateForm } =
        useFormik({
            initialValues: { email: "" },
            validationSchema: ForgotPasswordSchema,
            onSubmit: onForgetPassword,
        });

    useEffect(() => {
        return () => {
            dispatch(actions.forgetPasswordResponse({}));
        };
    }, [dispatch])

    useEffect(() => {
        (() => validateForm())();
    }, []);

    useEffect(() => {
        if (forgetPasswordResponse?.status === 200) {
            navigate?.("/mail-sent", {
                state: {
                    emailId: values.email
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forgetPasswordResponse?.status]);

    return (
        <form onSubmit={handleSubmit} >
            <LoginWrapper>
                <LoginBackgroundWrapper>
                <LogoImage />
                <FormWrapper>
                    <FormContent>
                        <H1 title="FORGOT PASSWORD" />
                        <Input
                            id={"email"}
                            name={"email"}
                            label="Email"
                            placeholder="johndoe@pickups.com"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && errors.email}
                            autoComplete="off"
                            ref = {firstFieldRef}
                        />
                        <Button
                            showLoader={showLoader}
                            label="Recover Password"
                            disabled={!(isValid)}
                            size="large"
                            onClick={() => handleSubmit()}
                            type="submit"
                        />
                        <LoginLink>
                            <CustomLink label="Back to Login" link={() => navigate?.("/")} style={{color: '#c94c43'}} />
                        </LoginLink>
                    </FormContent>
                </FormWrapper>
                </LoginBackgroundWrapper>
            </LoginWrapper>
        </form>
    );
};

export default ForgotPassword;
