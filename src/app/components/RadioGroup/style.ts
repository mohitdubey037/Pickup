import { Box } from "@mui/material";
import styled from "styled-components";
import { Flex } from "../CommonCss/CommonCss";

export const RadioFlex = styled(Flex)`
flex-flow: wrap;
.MuiFormControlLabel-root{
  margin-left:0;
  margin-right:8px;
}

.MuiBox-root {
  margin-right:12px;
  margin-left:-8px;
}
`;

export const RadioBox = styled(Box)`
  margin: 16px 0;
  .title {
    margin-bottom: 2px;
    @media (max-width:600px){
      margin-bottom: 10px;
      }
  }
`;
