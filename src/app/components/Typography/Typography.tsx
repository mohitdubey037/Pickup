import { FC } from "react";
import {
  H1Typography,
  H2Typography,
  H3Typography,
  H4Typography,
  Paratext,
  H5Typography,
  DrawerTitle
} from "./style";

interface TypoProps {
  link?: any;
  title?: string;
  className?: string;
  text?: any;
  required?: boolean;
  onClick?: ()=>void;
  fontFamily?: "bold" | "medium" | "regular";
}


export const H1: FC<TypoProps> = ({ title, className }) => {
  return <H1Typography className={className}>{title}</H1Typography>;
};

export const H2: FC<TypoProps> = ({ title, className }) => {
  return (
    <H2Typography className={className}>{title}</H2Typography>
  );
};


export const H3: FC<TypoProps> = ({ text, className }) => {
  return <H3Typography className={className}>{text}</H3Typography>;
};

export const H4: FC<TypoProps> = ({ text, className, required, fontFamily="regular" }) => {
  return (
    <H4Typography className={className} required={required} fontFamily={fontFamily}>
      {text}
    </H4Typography>
  );
};

export const Para: FC<TypoProps> = ({ text, className }) => {
  return <Paratext className={className}>{text}</Paratext>;
};


export const H5: FC<TypoProps> = ({ text, className }) => {
  return <H5Typography className={className}>{text}</H5Typography>;
};


export const DrawerHeading: FC<TypoProps> = ({ title, className }) => {
  return <DrawerTitle className={className}>{title}</DrawerTitle>;
};


