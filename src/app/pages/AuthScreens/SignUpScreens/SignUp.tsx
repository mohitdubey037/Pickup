import { RouteComponentProps } from "@reach/router";
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
import { useDispatch } from "react-redux";
import { registerUser } from "store/reducers/signUpActions";

type SignUpProps = RouteComponentProps;

const SignUp = ({ navigate }: SignUpProps) => {
  const dispatch = useDispatch();
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN UP</Header>
          <Input label="Business Email" placeholder="Start typing" />
          <Button
            label="Sign Up"
            onClick={() => {
              dispatch(registerUser("amit@torinit.ca"));
            }}
          />
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
