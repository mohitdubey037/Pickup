import { RouteComponentProps } from "@reach/router";
import {
  Header,
  LogoImage,
  FormContent,
  SignUpWrapper,
  CenterContent,
  FormWrapper,
} from "../style";
import { mailLogo } from "../../../assets/Icons";
import { RedLink } from "../../../components/Typography/Typography";
import { Center } from "app/components/Typography/style";

const EmailSent = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <CenterContent>
            <img src={mailLogo} alt="" className="mailLogo" />
            <Header>EMAIL SENT</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus
            </p>
            <Center>
              <RedLink label="Back to Signup" link={() => navigate?.("/")} />
            </Center>
          </CenterContent>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default EmailSent;
