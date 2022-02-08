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

