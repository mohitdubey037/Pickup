import styled from "styled-components";
import Dialog from '@mui/material/Dialog';

export const CustomDialog = styled(Dialog)`
.MuiDialogActions-root{
    justify-content:center;
    padding:10px 20px 20px;
}
.MuiDialogContentText-root{
    text-align:center;
}
.heading{
    text-transform:unset;
}
`;