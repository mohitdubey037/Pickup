import styled from "styled-components";
import { Link as RouterLink } from '@reach/router';
import {Typography } from "@mui/material";
import { TypoProps } from "./index";

interface Props {
  required?: boolean | undefined;
  fontFamily?: string;
}

export const commonStyle = `
  color: #343434;
  margin:0; 
  font-weight:normal;
  font-family: "Roboto";
  `;

  const fontsize = {
    'body1': '14px',
    'h1': '32px',
    'h2': '24px',
    'h3': '18px',
    'h4': '16px',
    'subtitle1' : '12px'
  }
  const fontfamily = {
    'body1': 'Roboto',
    'h1': 'Roboto-Bold',
    'h2': 'Roboto-Bold',
    'h3': 'Roboto-Medium',
    'h4': 'Roboto',
    'subtitle1' : 'Roboto'
  }




export const CustomTypography = styled(Typography)(({ variant, font } : TypoProps) => ({
  fontSize: fontsize[variant],
  color: fontsize[variant],
  fontFamily: font ? font : fontfamily[variant],
  margin: 0,
  padding: 0,
  lineHeight: 1.5,
}));


export const H1Typography = styled.h1`
  ${commonStyle}
  font-size: 32px;
  line-height: 37px;
  margin: 0 0 24px 0;  
  font-family: "Roboto-Bold";
 
`;

export const H2Typography = styled.h2`
  ${commonStyle}
  font-size: 24px;
  line-height: 28px;
  font-family: "Roboto-Bold";
`;


export const DrawerTitle = styled.h2`
  ${commonStyle}
  font-size: 20px;
  line-height: 23px;
  font-family: "Roboto-Bold";
`;

export const H3Typography = styled.h3`
  ${commonStyle}
  font-size: 18px;
  line-height: 21px;
  font-family: "Roboto-Medium";
  text-transform: capitalize;
 
`;

export const H4Typography = styled.p<Props>`
  ${commonStyle}
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 8px 0;
  font-family: ${(props) => (props.fontFamily === "bold" ? "Roboto-Bold" : (props.fontFamily === "medium" ? "Roboto-medium" : ""))};
  ${(props: Props) =>
    props.required
      ? `
     &::after {
    content: "*";
    color: #c94c43;
    margin-left: 5px;
  }
  `
      : null};
`;


export const Paratext = styled.p`
  ${commonStyle}
  font-size: 14px;
  line-height: 18px;
`;

export const H5Typography = styled.p`
  ${commonStyle}
  font-size: 12px;
  line-height: 14px;
  color: #656565;
`;




interface LinkProps {
  redlink?: boolean;
}


export const CustomLinkStyle = styled(Paratext)<LinkProps>`
  cursor: pointer;
  text-decoration: underline;
  color: ${LinkProps => LinkProps.redlink ? '#c94c43' : '343434'};
`;

export const LinkStyle = styled(RouterLink)`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
    color:"#2A95D1";
  }
`;