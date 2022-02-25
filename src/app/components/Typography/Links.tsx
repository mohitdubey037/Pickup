import {
  CustomLinkStyle,
  LinkStyle
} from "./style";
interface TypoProps {
  label?: string;
  onClick?: ()=>void;
  style?: any;
  redlink?: boolean;
}



export const CustomLink = ({ label, onClick, style, redlink}: TypoProps) => {
  return <CustomLinkStyle onClick={onClick} style={style} redlink={redlink}>{label}</CustomLinkStyle>;
};


export const Link = LinkStyle;
