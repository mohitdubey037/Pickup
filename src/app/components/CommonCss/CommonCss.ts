import { Box } from "@material-ui/core";
import { Divider } from "@mui/material";
import styled from "styled-components";

export const FlexBox = styled(Box) `
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width:1023px){
      flex-direction:column;
      align-items: flex-start;
        }
`

export const LineDivider = styled(Divider) `
    margin:24px 0 !important;
`



export const ContentBox = styled(Box)`
border: 1px solid #DCDCDC;
box-sizing: border-box;
border-radius: 4px;
padding:16px;
margin-bottom:16px;

.value{
  font-family: "Roboto-Bold";
  margin-top:5px;
}
.title{
  font-family: "Roboto-Medium";
  font-size:22px;
  margin-bottom:24px;
}
.subtitle{
  font-family: "Roboto-Bold";
  margin-bottom:0;
}
`;