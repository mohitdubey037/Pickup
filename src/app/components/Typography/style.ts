import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const CustomRedLink = styled.div`
  cursor: pointer;
  color: #c94c43;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  line-height: 16px;
  position: absolute;
  bottom: 35px;
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