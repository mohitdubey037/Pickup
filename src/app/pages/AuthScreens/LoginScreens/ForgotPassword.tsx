import { RouteComponentProps } from "@reach/router";
import { Center, LeftAlign } from "app/components/Typography/style";
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


const ForgotPassword = ({ navigate }: RouteComponentProps) => {
  
  
    const dispatch = useDispatch();
    const signInUserResponse = useSelector(
      (state: {
        signIn: { signInUserResponse: { status: number; data: { data: {} } } };
      }) => state.signIn.signInUserResponse
    );
  const onSignIn = () => {
    dispatch(
      actions.signInUser({ email: values.email })
    );
  };
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
      useFormik({
        initialValues: { email: "" },
        validationSchema: ForgotPasswordSchema,
        onSubmit: onSignIn,
      });
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
          />
          <Button
            label="Recover Password"
            onClick={() => navigate?.("/mail-sent")}
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
