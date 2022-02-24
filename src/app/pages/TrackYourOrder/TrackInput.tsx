import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { logo } from "app/assets/Icons";
import { Button } from "app/components/Buttons";
import { H1 } from "app/components/Typography/Typography";
import * as React from "react";
import { AppDownloadBox, InputPaper, LogoBox, TrackInputBox } from "./style";

export function TrackInput() {
  return (
    <>
      <LogoBox>
        <img src={logo} alt="logo" />
      </LogoBox>
      <TrackInputBox>
        <Box className="inputbox">
          <H1 title="Track Your Order" />

          <InputPaper>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by order ID or tracking ID"
            />

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <Button
                type="button"
                size="medium"
                label="Track"
                onClick={() => {}}
              />
            </IconButton>
          </InputPaper>
        </Box>
      </TrackInputBox>
      <AppDownloadBox />
    </>
  );
}
