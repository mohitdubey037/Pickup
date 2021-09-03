import {useEffect} from 'react';
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

const EmailSent = ({ navigate }: RouteComponentProps) => {

  useEffect(() => {
   setTimeout(()=>navigate?.('/company-details'),3000)
  }, []);

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
            <RedLink label="Back to Signup" link={() => navigate?.("/")} />
          </CenterContent>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default EmailSent;
