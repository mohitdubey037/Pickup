import { Box } from "@material-ui/core";
import styled from "styled-components";

export const ComponentStyle = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const FlexTable= styled(Box)`
  display: flex;
  width:calc(100% - 300px) !important;
  justify-content:space-between;
  
  @media (max-width:1023px){
  width:100% !important;
  margin:24px 0 12px 0;
  }

  @media (min-width:1023px){
    align-items: center;
    }

  .value{
    margin-top:5px;
    font-family: "Roboto-Bold";
  }

`;


 