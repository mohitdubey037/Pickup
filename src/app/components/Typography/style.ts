import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const Center=styled.div`
display: flex; 
justify-content: center;
`
export const LeftAlign=styled.div`
display: flex; 
justify-content: Left;
padding:15px
`

export const CustomRedLink = styled.div`
  cursor: pointer;
  color: #c94c43;
  font-family: "Roboto";
  font-size: 14px;
  text-decoration: underline;
  line-height: 16px;
`;

export const CustomBlackLink = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  color: #343434;
  text-decoration: underline;
  line-height: 16px;
`;


export const ContainerTitleLabel = styled(Typography)`
font-style: normal !important;
font-weight: bold !important;
font-size: ${(props: { large?: boolean }) => props.large ? '24px' : '18px'} !important;
line-height: 28px !important;
color:#343434;
`

export const PageTitleText = styled.p`
font-size: 32px;
line-height: 37px;
color: #343434;
margin:0 0 24px 0;
font-family: "Roboto-Bold";
`
export const Smalllabeltext = styled.p`
font-size: 16px;
line-height: 19px;
color: #343434;
font-family: "Roboto";
margin:0 0 8px 0;
`

export const Paratext = styled.p`
font-size: 14px;
line-height: 16px;
color: #343434;
font-family: "Roboto";
margin:00;
`
