import {
  CustomLinkStyle
} from "./style";

interface TypoProps {
  label?: string;
  link?: any;
  onClick?: ()=>void;
  style?: any;
}



export const CustomLink = ({ label, link, style }: TypoProps) => {
  return <CustomLinkStyle onClick={link} style={style}>{label}</CustomLinkStyle>;
};

