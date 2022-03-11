import React from "react";
import { DrawerHeading } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FormWrapper, LoginBackgroundWrapper, LoginWrapper, LogoImage } from "./style";
import { RouteComponentProps } from "@reach/router";
import { Box } from "@mui/material";

type Props = RouteComponentProps;

const AccountVerified= ({ navigate }: Props) => {
  const LoginHandler = () => {
    navigate?.("/");
}
  return (
    <LoginWrapper>
      <LoginBackgroundWrapper>
      <LogoImage />
      <FormWrapper style={{ minHeight: "350px" }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          height="350px"
        >
          <DrawerHeading title="Successfully updated and verified your account" />
          
          <Button
            type="button"
            size="small"
            label="Login Here"
            style={{ marginTop: "20px" }}
            onClick={LoginHandler}
          />
        </Box>
      </FormWrapper>
      </LoginBackgroundWrapper>
    </LoginWrapper>
  );
};

export default AccountVerified;
