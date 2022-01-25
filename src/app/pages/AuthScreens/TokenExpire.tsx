import React from "react";
import { Box } from "@material-ui/core";
import { DrawerTitle } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FormWrapper, LoginWrapper, LogoImage } from "./style";

const TokenExpire: React.FC = () => {
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper style={{ minHeight: "350px" }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          height="350px"
        >
          <DrawerTitle title="You have already verified your account." />
          <Button
            type="button"
            size="small"
            label="Login Here"
            style={{ marginTop: "20px" }}
          />
        </Box>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default TokenExpire;
