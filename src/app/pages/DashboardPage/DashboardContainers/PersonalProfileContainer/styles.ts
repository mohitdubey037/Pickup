import { Box } from "@material-ui/core";
import styled from "styled-components";

export const ComponentStyle = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const FlexBox= styled(Box)`
  display: flex;
  align-items: center;
  width:calc(100% - 300px) !important;
  justify-content:space-between;

  .value{
    margin-top:5px;
    font-family: "Roboto-Bold";
  }

`;


 