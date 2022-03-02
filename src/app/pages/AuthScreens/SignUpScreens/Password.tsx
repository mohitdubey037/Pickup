/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useLocation } from "@reach/router";
import { H1 } from "app/components/Typography/Typography";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParamsFromUrl } from "utils/commonUtils";
import { actions } from "store/reducers/SignUpReducer";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import {
    SignUpWrapper,
    FormContent,
    FormWrapper,
    LogoImage,
    SignUpBackgroundWrapper,
} from "../style";
import { passwordSchema } from "./signUpSchemas";

const Password = ({ navigate }: RouteComponentProps) => {
    // const { state } = useLocation() as { state: { email: string } };
    // const passwordRegisterResponse = useSelector(
    //     (state: { signUp: { passwordRegisterResponse: {} } }) =>
    //         state.signUp.passwordRegisterResponse
    // );
    const companyRegisterResponse = useSelector((state: any) => {
        return state?.signUp?.companyRegisterResponse?.emailId;
    });

    const passwordRegisterResponse = useSelector((state: any) => {
        return state?.signUp?.passwordRegisterResponse;
    });

    const showLoader = useSelector(
        (state: { globalState: { showLoader: boolean } }) =>
            state.globalState.showLoader
    );

    const dispatch = useDispatch();
    const location = useLocation();
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        return () => {
            dispatch(actions.registerPasswordResponse(null));
        };
    }, []);

    useEffect(() => {
        //This logic needs to improve or something better needs to be thought of to show user in case of missing email in navigation state
        const params = getParamsFromUrl(location.search);
        if (!companyRegisterResponse && !params["token"]) {
            navigate?.("/sign-up");
        }
        params["token"] && setToken(params["token"]);
    }, [companyRegisterResponse, location.search]);

    useEffect(() => {
        if (passwordRegisterResponse) {
            navigate?.("/congratulations");
        }
    }, [passwordRegisterResponse]);

    const onSubmit = (values) => {
        let data = { password: values.password };
        if (token === "") data["emailId"] = companyRegisterResponse;
        else data["token"] = token;
        dispatch(actions.registerPassword(data));
    };

    const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isValid,
        validateForm,
    } = useFormik({
        initialValues: { password: "", confirmPassword: "" },
        validationSchema: passwordSchema,
        onSubmit: onSubmit,
    });

    useEffect(() => {
        (() => validateForm())();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <SignUpWrapper>
                <SignUpBackgroundWrapper>
                    <LogoImage />
                    <FormWrapper>
                        <FormContent>
                            <H1 title="PASSWORD" mb={24} />
                            <PasswordInput
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Password"
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
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                                error={touched.confirmPassword && errors.confirmPassword}
                            />
                            <Button
                                type="submit"
                                disabled={!(isValid)}
                                showLoader={showLoader}
                                label="Confirm"
                                onClick={handleSubmit}
                                size="large"
                            />
                        </FormContent>
                    </FormWrapper>
                </SignUpBackgroundWrapper>
            </SignUpWrapper>
        </form>
    );
};

export default Password;
