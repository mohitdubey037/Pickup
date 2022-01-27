import { FC } from "react";
import {
  CustomRedLink,
  CustomBlackLink,
  ContainerTitleLabel,
  PageTitleText,
  Smalllabeltext,
  Paratext,
  ListLabeltext,
  DrawerTitletext,
  SmalltextStyle,
} from "./style";

interface TypoProps {
  label?: string;
  link?: any;
  title?: string;
  className?: string;
  text?: string;
  required?: boolean;
  onClick?: ()=>void;
}

export const ContainerTitle: FC<TypoProps> = ({ title, className }) => {
  return (
    <ContainerTitleLabel className={className}>{title}</ContainerTitleLabel>
  );
};

export const DrawerTitle: FC<TypoProps> = ({ title, className }) => {
  return <DrawerTitletext className={className}>{title}</DrawerTitletext>;
};

export const PageTitle: FC<TypoProps> = ({ title, className }) => {
  return <PageTitleText className={className}>{title}</PageTitleText>;
};

export const SmallLabel: FC<TypoProps> = ({ text, className, required }) => {
  return (
    <Smalllabeltext className={className} required={required}>
      {text}
    </Smalllabeltext>
  );
};

export const ListLabel: FC<TypoProps> = ({ text, className }) => {
  return <ListLabeltext className={className}>{text}</ListLabeltext>;
};

export const Para: FC<TypoProps> = ({ text, className }) => {
  return <Paratext className={className}>{text}</Paratext>;
};

export const Smalltext: FC<TypoProps> = ({ text, className, onClick }) => {
  return <SmalltextStyle className={className} onClick={onClick}>{text}</SmalltextStyle>;
};
export const RedLink = ({ label, link }: TypoProps) => {
  return <CustomRedLink onClick={link}>{label}</CustomRedLink>;
};

export const BlackLink = ({ label, link }: TypoProps) => {
  return <CustomBlackLink onClick={link}>{label}</CustomBlackLink>;
};

export const FormContainerTitle = (props) => {
  return (
    <ContainerTitleLabel style={props.style}>
      {props.children}
    </ContainerTitleLabel>
  );
};
