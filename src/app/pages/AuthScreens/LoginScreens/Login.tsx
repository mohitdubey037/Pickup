import { useFormik } from "formik";
import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Checkbox } from "../../../components/Checkbox";
import { PasswordInput, Input } from "../../../components/Input";
import { BlackLink } from "../../../components/Typography/Typography";
import {
    LoginWrapper,
    LogoImage,
    FormWrapper,
    FormContent,
    Header,
    LoginLink,
    RememberDiv,
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { loginSchema } from "./loginSchemas";
import { actions } from "store/reducers/SignInReducer";
import { useEffect } from "react";

const Login = ({ navigate }: RouteComponentProps) => {

    const dispatch = useDispatch();

    const signInUserResponse = useSelector(
        (state: {
            signIn: { signInUserResponse: { status: number; data: { data: {} } } };
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
            navigate?.("/dashboard");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signInUserResponse?.status]);

    const onSignIn = () => {
        dispatch(
            actions.signInUser({ email: values.email, password: values.password })
        );
    };

    const { handleChange, values, errors, touched, handleBlur, handleSubmit, isValid, dirty } =
        useFormik({
            initialValues: { email: "", password: "" },
            validationSchema: loginSchema,
            onSubmit: onSignIn,
        });

    return (
        <LoginWrapper>
            <LogoImage />
            <FormWrapper>
                <FormContent>
                    <Header>LOGIN</Header>
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
                    <Button
                        showLoader={showLoader}
                        label="Sign In"
                        onClick={handleSubmit}
                        disabled={!(isValid && dirty)}
                    />
                    <LoginLink>
                        Don't have an account?{" "}
                        <BlackLink label="Sign Up Here" link={() => navigate?.("/sign-up")} />
                    </LoginLink>
                </FormContent>
            </FormWrapper>
        </LoginWrapper>
    );
};

export default Login;