import React from 'react'
import { RouteComponentProps } from "@reach/router";
import {
  Header,
  LogoImage,
  FormContent,
  CenterContent,
  FormWrapper,
  LoginWrapper,
} from "../style";
import { mailLogo } from "../../../assets/Icons/";
import { RedLink } from "../../../components/Typography/Typography";

const MailSent = ({ navigate }: RouteComponentProps) => {
  return (
    <LoginWrapper>
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
            <RedLink label="Back to Login" link={() => navigate?.("/")} />
          </CenterContent>
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default MailSent;
