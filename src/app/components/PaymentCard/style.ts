import { Box, Menu } from "@material-ui/core";
import styled from "styled-components";



export const IndividualCardDiv = styled(Box)`
    background: #F6F9F9;
    border: 1px solid #C1D4D7;
    margin: 24px 0;
    border-radius: 8px;
    padding: 24px 32px;
    position: relative;
    overflow: hidden;
    height:190px;

    .menulist{
        right:0 !important;
    }
`




export const MenuBox = styled(Menu)`
right:20px !important;
left:-140px !important;
top:40px !important;

.MuiPaper-rounded {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%) !important;
    border-radius: 16px;
    width: 150px;
}
.MuiMenuItem-root {
    font-size: 16px;
    line-height: 19px;
    color: #343434;
}
`


export const CardNumber = styled(Box)`
font-size: 18px;
font-family: 'Nunito', sans-serif;
letter-spacing: 3.0502px;
color: #132A30;
font-weight:700;
`

export const Carddetails = styled(Box)`
font-size: 12px;
letter-spacing: 1.06547px;
text-transform: uppercase;
color: #132A30;
font-family: 'Nunito', sans-serif;
font-weight:400;
`



export const CardEllipse = styled.img`
    position:absolute;
    top: -2px;
    opacity:0.1;
    right: -2px;
`
export const CardOption = styled.img`
    position:absolute;
    cursor:pointer;
    top: 20px;
    right: 20px;
`
