import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  LogoImage,
  FormContent,
  FormWrapper,
  LoginWrapper,
} from "../style";
import { mailLogo } from "../../../assets/Icons/";
import { PageTitle, RedLink, SmallLabel } from "../../../components/Typography/Typography";
import { Box } from "@material-ui/core";

const MailSent = ({ navigate }: RouteComponentProps) => {
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent className="CenterContent">
        <img src={mailLogo} alt="" className="mailLogo" />
            <Box mt={3} mb={2}>
            <PageTitle title="EMAIL SENT" />
            <SmallLabel text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus" />
              </Box>
            <RedLink label="Back to Login" link={() => navigate?.("/")} />
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default MailSent;
