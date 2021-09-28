import { RouteComponentProps } from "@reach/router";
import { Center } from "app/components/Typography/style";
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

const ForgotPassword = ({ navigate }: RouteComponentProps) => {
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>FORGOT PASSWORD</Header>
          <Input label="Email" placeholder="Start typing" />
          <Button
            label="Recover Password"
            onClick={() => navigate?.("/mail-sent")}
          />
        </FormContent>
        <Center>
          <RedLink label="Back to Login" link={() => navigate?.("/")} />
        </Center>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default ForgotPassword;
