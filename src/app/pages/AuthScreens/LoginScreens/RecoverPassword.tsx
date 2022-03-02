import { RouteComponentProps, useLocation } from "@reach/router";
import { useFormik } from "formik";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
    FormContent,
    FormWrapper,
    LogoImage,
    LoginWrapper,
    LoginBackgroundWrapper,
} from "../style";
import { actions } from "store/reducers/SignInReducer";
import { useEffect, useState } from "react";
import { getParamsFromUrl } from "utils/commonUtils";
import { verifyToken } from "./helper";
import { H1 } from "app/components/Typography/Typography";
import { passwordSchema } from "../SignUpScreens/signUpSchemas";

const RecoverPassword = ({ navigate }: RouteComponentProps) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [token, setToken] = useState<string>('')
    const [jwtToken, setJWTToken] = useState<string>('')

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
        const requestData: { password: string, token: string } = {
            password: values.password,
            token: jwtToken
        }
        dispatch(
            actions.resetPassword(requestData)
        )
    };

    const {
        handleChange,
        errors,
        touched,
        isValid,
        handleBlur,
        handleSubmit,
        validateForm
    } = useFormik({
        initialValues: { password: "", confirmPassword: "" },
        validationSchema: passwordSchema,
        onSubmit: onResetPassword,
    });

    useEffect(() => {
        (() => validateForm())();
    }, []);

    useEffect(() => {
        const params = getParamsFromUrl(location.search)
        setToken(params['token'])
    }, [location.search])

    useEffect(() => {
        (async () => {
            if (token) {
                const res = await verifyToken(token)
                if (!res.success) {
                    navigate?.('/forgot-password')
                }
                setJWTToken(res?.response?.data?.data?.jwtToken)
            }
        }
        )()

    }, [token, navigate])

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
        <form onSubmit={handleSubmit} >
            <LoginWrapper>
            <LoginBackgroundWrapper>
                <LogoImage />
                <FormWrapper>
                    <FormContent>
                        <H1 title="RECOVER PASSWORD" mb={24} />
                        <PasswordInput
                            id="password"
                            name="password"
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            placeholder="Password"
                            autoComplete="off"
                            validate
                        />
                        <PasswordInput
                            id="confirmPassword"
                            name="confirmPassword"
                            error={touched.confirmPassword && errors.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Confirm Password"
                            placeholder="Password"
                            autoComplete="off"
                        />
                        <Button type="submit" disabled={!isValid} showLoader={showLoader} label="Confirm" onClick={handleSubmit} size="large" />
                    </FormContent>
                </FormWrapper>
                </LoginBackgroundWrapper>
            </LoginWrapper>
        </form>
    );
};

export default RecoverPassword;
