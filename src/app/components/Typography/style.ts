import styled from "styled-components";
import { Link as RouterLink } from "@reach/router";

export interface TypoProps {
  link?: any;
  title?: string;
  className?: string;
  text?: any;
  required?: boolean;
  onClick?: () => void;
  fontFamily?: "bold" | "medium" | "regular";
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  color?: string;
}

const fontfamily = {
  regular: "Roboto",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
};

export const commonStyle = (props: TypoProps, defaultFont = "Roboto") => `
  line-height: 1.2;
  font-weight:normal;
  color: ${props.color || "#343434"};
  margin-left: ${props.ml || 0}px;
  margin-top: ${props.mt || 0}px;
  margin-right: ${props.mr || 0}px;
  margin-bottom:${props.mb || 0}px;
  font-family: ${props.fontFamily ? fontfamily[props.fontFamily] : defaultFont};
  ${
    props.required
      ? `&::after {
      content: "*";
      color: #c94c43;
      margin-left: 5px;
    }`
      : ""
  };
`;

export const H1Typography = styled.h1<TypoProps>`
  ${(props) => commonStyle(props, "Roboto-Bold")}
  font-size: 32px;
`;

export const H2Typography = styled.h2<TypoProps>`
  ${(props) => commonStyle(props, "Roboto-Bold")}
  font-size: 24px;
`;

export const DrawerTitle = styled.h2<TypoProps>`
  ${(props) => commonStyle(props, "Roboto-Bold")}
  font-size: 20px;
`;

export const H3Typography = styled.h3<TypoProps>`
  ${(props) => commonStyle(props, "Roboto-Medium")}
  font-size: 18px;
  text-transform: capitalize;
`;

export const H4Typography = styled.p<TypoProps>`
  ${(props) => commonStyle(props)}
  font-size: 16px;
`;

export const Paratext = styled.p<TypoProps>`
  ${(props) => commonStyle(props)}
  font-size: 14px;
`;

export const H5Typography = styled.p<TypoProps>`
  ${(props) => commonStyle(props)}
  font-size: 12px;
  color: #656565;
`;

interface LinkProps {
  redlink?: boolean;
}

export const CustomLinkStyle = styled(Paratext)<LinkProps>`
  cursor: pointer;
  text-decoration: underline;
  color: ${(LinkProps) => (LinkProps.redlink ? "#c94c43" : "343434")};
`;

export const LinkStyle = styled(RouterLink)`
  color: ${(p) => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
    color: "#2A95D1";
  }
`;
