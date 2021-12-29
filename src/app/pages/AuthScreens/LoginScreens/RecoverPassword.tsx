import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
    FormContent,
    FormWrapper,
    LogoImage,
    Header,
    LoginWrapper,
} from "../style";
import { recoverPasswordSchema } from "./recoverPasswordSchema";
import { actions } from "store/reducers/SignInReducer";
import { useEffect } from "react";

const RecoverPassword = ({ navigate }: RouteComponentProps) => {
    const dispatch = useDispatch();

    const resetPasswordResponse = useSelector(
        (state: {
            signIn: { resetPasswordResponse: { status: number; data: { data: {} } } };
        }) => state.signIn.resetPasswordResponse
    );

    const showLoader = useSelector(
        (state: { globalState: { showLoader: boolean } }) =>
            state.globalState.showLoader
    );

    const onResetPassword = async (values: any) => {
        console.log('Values', values.password)
        dispatch(
            actions.resetPassword(values.password)
        )
    };

    const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: { password: "", confirmpassword: "" },
        validationSchema: recoverPasswordSchema,
        onSubmit: onResetPassword,
    });

    useEffect(() => {
        return () => {
            dispatch(actions.forgetPasswordResponse({}));
        };
    }, [dispatch])

    useEffect(() => {
        if (resetPasswordResponse?.status === 200) {
            navigate?.("/congratulations");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetPasswordResponse?.status]);    

    return (
        <LoginWrapper>
            <LogoImage />
            <FormWrapper>
                <FormContent>
                    <Header>RECOVER PASSWORD</Header>
                    <PasswordInput
                        id="password"
                        name="password"
                        label="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.password && errors.password}
                        placeholder="Start typing"
                        validate
                    />
                    <PasswordInput
                        id="confirmpassword"
                        name="confirmpassword"
                        error={touched.confirmpassword && errors.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Confirm Password"
                        placeholder="Start typing"
                    />
                    <Button showLoader={showLoader} label="Confirm" onClick={handleSubmit} />
                </FormContent>
            </FormWrapper>
        </LoginWrapper>
    );
};

export default RecoverPassword;
