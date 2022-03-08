import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  LogoImage,
  FormContent,
  FormWrapper,
  LoginWrapper,
  LoginBackgroundWrapper,
} from "../style";
import { mailLogo } from "../../../assets/Icons/";
import { H1, H4 } from "../../../components/Typography/Typography";
import { CustomLink } from "app/components/Typography/Links";
import { Box } from "@mui/material";

const MailSent = ({ navigate }: RouteComponentProps) => {
  return (
    <LoginWrapper>
      
      <LoginBackgroundWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent className="CenterContent">
        <img src={mailLogo} alt="" className="mailLogo" />
            <Box mt={3} mb={2}>
            <H1 title="EMAIL SENT" mb={24} />
            <H4 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus" />
              </Box>
            <CustomLink label="Back to Login" onClick={() => navigate?.("/")}  redlink />
        </FormContent>
      </FormWrapper>
      </LoginBackgroundWrapper>
    </LoginWrapper>
  );
};

export default MailSent;
