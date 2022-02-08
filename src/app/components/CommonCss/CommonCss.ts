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

export const DateComponent = styled.div `
margin-bottom: 16px;
.MuiFormControl-root{    
  margin-bottom: 6px;
}
.MuiFormControl-root div input {
  padding: 11px 14px;
}
`

export const LineDivider = styled(Divider) `
    margin:24px 0 !important;
`

