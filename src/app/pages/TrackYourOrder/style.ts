
import { Box, Paper } from "@mui/material";
import { trackorderbg } from "app/assets/Images";
import styled from "styled-components";

export const TrackInputBox = styled(Box)`
background: #FFF6DA;
display:flex;
align-items:center;
justify-content:center;
height:calc(100vh - 518px);
padding:16px;
.inputbox{
    width:100%;
    max-width:600px;
}
.input{
    width:100%; 
}
`;

export const LogoBox = styled(Box)`
padding:12px 42px;
box-sizing:border-box;
background:#000000;
    img{
        width:68px;
        height:68px;
    }
`;

export const InputPaper = styled(Paper)`
background: #FFFFFF;
border: 1.35714px solid #C6C6C6;
box-sizing: border-box;
border-radius: 5px;
box-shadow:none !important;
padding: 8px;
display: flex;
align-items: center;
width: 100%;

button{
    min-width: 140px;
    font-size: 14px;
    height: 46px;
}
`;


export const AppDownloadBox = styled(Box)`
background-image: url(${trackorderbg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
height:390px;

`;
