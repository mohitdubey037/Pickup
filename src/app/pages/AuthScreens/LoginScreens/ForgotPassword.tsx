import { RouteComponentProps } from "@reach/router";
import { LeftAlign } from "app/components/Typography/style";
import { Button } from "../../../components/Buttons";
import { Input } from "../../../components/Input";
import { RedLink } from "../../../components/Typography/Typography";
import {
    FormContent,
    FormWrapper,
    Header,
    LoginWrapper,
    LogoImage,
} from "../style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SignInReducer";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import { useEffect } from "react";

const ForgotPassword = ({ navigate }: RouteComponentProps) => {

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

    const { handleChange, errors, values, touched, handleBlur, handleSubmit, isValid, dirty } =
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
        if (forgetPasswordResponse?.status === 200) {
            navigate?.("/mail-sent", { state: {
                emailId: values.email
            } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forgetPasswordResponse?.status]);    

    return (
        <LoginWrapper>
            <LogoImage />
            <FormWrapper>
                <FormContent>
                    <Header>FORGOT PASSWORD</Header>
                    <Input
                        id={"email"}
                        name={"email"}
                        label="Email"
                        placeholder="Start typing"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                        autoComplete="off"
                    />
                    <Button
                        showLoader={showLoader}
                        label="Recover Password"
                        disabled={!(isValid && dirty)}
                        onClick={() => handleSubmit()}
                    />
                </FormContent>
                <LeftAlign>
                    <RedLink label="Back to Login" link={() => navigate?.("/")} />
                </LeftAlign>
            </FormWrapper>
        </LoginWrapper>
    );
};

export default ForgotPassword;
