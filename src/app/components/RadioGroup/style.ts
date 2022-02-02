import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Flex } from "../Input/style";

export const RadioFlex = styled(Flex)`
  .MuiRadio-colorSecondary.Mui-checked {
    color: #fece3e;
  }
`;

export const RadioBox = styled(Box)`
  margin: 16px 0;
  .title {
    margin-bottom: 2px;
  }
`;
