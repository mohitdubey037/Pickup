import styled from "styled-components";
import Dialog from '@mui/material/Dialog';

interface StyledProps {
    fullWidth?: boolean;
  }

export const CustomDialog = styled(Dialog)<StyledProps>`
.MuiPaper-root{
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: ${(props) => (props.fullWidth ? "100%" : "")};
}
.MuiDialogActions-root{
    padding:10px 20px 20px;
    text-align: ${(props) => (props.fullWidth ? "left" : "center")};
}
.MuiDialogContent-root{
    text-align: ${(props) => (props.fullWidth ? "left" : "center")};
    margin-right:5px;
    &::-webkit-scrollbar {
      width: 7px;
    }
  
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #eee;
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      background: #bbb;
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background: #f5f59a;
    }
}
.heading{
    text-transform:unset;
}
`;