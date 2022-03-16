import React from "react";
import { DrawerHeading } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FormWrapper, LoginBackgroundWrapper, LoginWrapper, LogoImage } from "./style";
import { RouteComponentProps } from "@reach/router";
import { Box } from "@mui/material";

type Props = RouteComponentProps;

const ReVerify= ({ navigate }: Props) => {
  const signupHandler = () => {
    navigate?.("/sign-up");
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
          textAlign="center"
          p={2}
        >
          <DrawerHeading title="Your verification link has expired." />
          <DrawerHeading title="Click below to Verify" />
          <Button
            type="button"
            size="small"
            label="Signup Here"
            style={{ marginTop: "20px" }}
            onClick={signupHandler}
          />
        </Box>
      </FormWrapper>
      </LoginBackgroundWrapper>
    </LoginWrapper>
  );
};

export default ReVerify;
