import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Flex } from "../Input/style";

export const RadioFlex = styled(Flex)`
flex-flow: wrap;
  .MuiRadio-colorSecondary.Mui-checked {
    color: #fece3e;
  }
  .tooltip{
    margin-right:20px;
    margin-left:-8px;
    display: flex;
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
