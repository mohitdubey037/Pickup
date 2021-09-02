import { RouteComponentProps } from "@reach/router";
import {
  Header,
  SignUpWrapper,
  FormWrapper,
  FormContent,
  LogoImage,
  LoginLink
} from "../style";
import { Input } from "../../../components/Input";
import { Buttons } from "../../../components/Buttons";
import { BlackLink } from "../../../components/Typography/Typography";

type SignUpProps = RouteComponentProps;

const SignUp = ({ navigate }: SignUpProps) => {
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>SIGN UP</Header>
          <Input label="Business Email" placeholder="Start typing" />
          <Buttons label="Sign Up" onClick={() => navigate?.("/email-sent")} />
          <LoginLink>
              Already have an account? <BlackLink label={"Login here"} />
          </LoginLink>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
