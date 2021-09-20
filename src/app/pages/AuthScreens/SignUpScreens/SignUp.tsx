import { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  setRegisterUserResponse,
} from "store/reducers/actions/signUpActions";
import {
  Header,
  SignUpWrapper,
  FormWrapper,
  FormContent,
  LogoImage,
  LoginLink,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { BlackLink } from "../../../components/Typography/Typography";
import { signUpSchema } from "./signUpSchemas";
 
type SignUpProps = RouteComponentProps;

const SignUp = ({ navigate }: SignUpProps) => {
  const dispatch = useDispatch();
  const signUpResponse = useSelector(
    (state: { signUp: { signUpResponse: { verifyEmailLink: string } } }) => {
      return state.signUp.signUpResponse;
    }
  );

  useEffect(() => {
    return () => {
      dispatch(setRegisterUserResponse({}));
    };
  },[]);

  useEffect(() => {
    if (signUpResponse.verifyEmailLink) {
      navigate?.("/email-sent");
    }
  }, [signUpResponse.verifyEmailLink, navigate]);

  const onSignUp = () => {
    dispatch(registerUser(email));
  };
  
  const {
    handleChange,
    values: { email },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: signUpSchema,
    onSubmit: onSignUp,
  });

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN UP</Header>
          <Input
            label="Business Email"
            placeholder="Start typing"
            id="email"
            name="email"
            onChange={handleChange}
            error={touched.email && errors.email}
            onBlur={handleBlur}
          />
          <Button label="Sign Up" onClick={handleSubmit} />
          <LoginLink>
            Already have an account?{" "}
            <BlackLink
              link={() => navigate?.("sign-in")}
              label={"Login here"}
            />
          </LoginLink>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
