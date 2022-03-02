import { FC } from "react";
import {
  CustomTypography
} from "./style";

export interface TypoProps {
  link?: any;
  className?: string;
  text?: string;
  font?: "bold" | "medium" | "regular";
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'subtitle1';
}

const Text: FC<TypoProps> = ({text, variant="body1", font}) => {
  return (
    <CustomTypography variant={variant} font={font} >
     {text}
    </CustomTypography>
  );
};


export default Text;