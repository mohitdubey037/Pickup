import { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

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
import { actions } from "store/reducers/SignUpReducer";

type SignUpProps = RouteComponentProps;

const SignUp = ({ navigate }: SignUpProps) => {

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('')

  const signUpResponse = useSelector(
    (state: { signUp: { signUpResponse } }) => {
      return state.signUp.signUpResponse;
    }
  );

  const showLoader=useSelector((state:{globalState:{showLoader:boolean}})=>state.globalState.showLoader )

  useEffect(() => {
    return () => {
      dispatch(actions.registerUserResponse({}));
    };
  }, [dispatch]);

  useEffect(() => {
    if (signUpResponse.verifyEmailLink) {
      navigate?.("/email-sent");
    }else if(signUpResponse.status === 400){
        setErrorMessage(signUpResponse.message)
    }
  }, [signUpResponse, navigate]);
  
  const onSignUp = () => {
    dispatch(actions.registerUser(values.email));
  };

  const {
    handleChange,
    values,
    errors,
    handleBlur,
    handleSubmit,
    isValid,
    dirty
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: signUpSchema,
    onSubmit: onSignUp,
  });
 
  useEffect(() => {
    setErrorMessage('')
  },[values.email])

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN UP</Header>
          <Input
            label="Business Email"
            placeholder="johndoe@pickups.com"
            id="email"
            name="email"
            onChange={handleChange}
            error={ errors.email}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errorMessage ? <span style={{ color: 'red' }}> {errorMessage} </span> : null}
          <Button disabled={!(isValid && dirty)} label="Sign Up" showLoader={showLoader} onClick={handleSubmit} />
          <LoginLink>
            Already have an account?{" "}
            <BlackLink
              link={() => navigate?.("/")}
              label={"Login Here"}
            />
          </LoginLink>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
