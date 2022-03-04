import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

interface StyledProps {
  fullWidth?: boolean;
}

export const CustomDialog = styled(Dialog)<StyledProps>`
  .MuiPaper-root {
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: ${(props) => (props.fullWidth ? "100%" : "")};
  }
  .MuiDialogActions-root {
    padding: 10px 20px 20px;
    text-align: ${(props) => (props.fullWidth ? "left" : "center")};
  }
  .MuiDialogContent-root {
    text-align: ${(props) => (props.fullWidth ? "left" : "center")};
    margin-right: 5px;

    scrollbar-width: thin;
    scrollbar-color: #bbb #ddd;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
  }
  .heading {
    text-transform: unset;
  }
`;
