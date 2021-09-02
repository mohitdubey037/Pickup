import { RouteComponentProps } from "@reach/router";
import { Buttons } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import {
  FormContent,
  FormWrapper,
  LogoImage,
  Header,
  LoginWrapper,
} from "../style";

const RecoverPassword = ({ navigate }: RouteComponentProps) => {
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>RECOVER PASSWORD</Header>
          <PasswordInput label="Password" placeholder="Start typing" validate/>
          <PasswordInput label="Confirm Password" placeholder="Start typing" />
          <Buttons label="Confirm" onClick={() => {}} />
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default RecoverPassword;
