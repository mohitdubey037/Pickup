import { FC } from "react";
import {
  H1Typography,
  H2Typography,
  H3Typography,
  H4Typography,
  Paratext,
  H5Typography,
  DrawerTitle,
  TypoProps,
} from "./style";

export const H1: FC<TypoProps> = ({ title, ...CssProps }) => {
  return <H1Typography {...CssProps}>{title}</H1Typography>;
};

export const H2: FC<TypoProps> = ({ title, ...CssProps }) => {
  return <H2Typography {...CssProps}>{title}</H2Typography>;
};

export const H3: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <H3Typography {...CssProps}>{text}</H3Typography>;
};

export const H4: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <H4Typography {...CssProps}>{text}</H4Typography>;
};

export const Para: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <Paratext {...CssProps}>{text}</Paratext>;
};

export const H5: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <H5Typography {...CssProps}>{text}</H5Typography>;
};

export const DrawerHeading: FC<TypoProps> = ({ title, ...CssProps }) => {
  return <DrawerTitle {...CssProps}>{title}</DrawerTitle>;
};
