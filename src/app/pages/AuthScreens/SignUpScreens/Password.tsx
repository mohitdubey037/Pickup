import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import {
  SignUpWrapper,
  FormContent,
  FormWrapper,
  LogoImage,
  Header,
} from "../style";

const Password = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>PASSWORD</Header>
          <PasswordInput label="Password" placeholder="Start typing" validate/>
          <PasswordInput label="Confirm Password" placeholder="Start typing" />
          <Button label="Sign Up" onClick={() => navigate('/congratulations')} />
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default Password;
