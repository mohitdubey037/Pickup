import { CircularProgress } from "@material-ui/core";
import React from "react";
import { CustomButton, useStyles } from "./style";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  secondary?: boolean;
  disabled?: boolean;
  showLoader?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const ThemeButton: React.FC<ButtonProps> = ({
  label,
  secondary,
  onClick,
  size,
  disabled,
  showLoader,
  style,
  className
  
}) => {

  const classes = useStyles({ size });
  
  return (
    <>
      <CustomButton
        disabled={disabled || showLoader}
        color={secondary ? "inherit" : "primary"}
        onClick={onClick}
        size={size}
        variant="contained"
        style={{ ...style, backgroundColor: secondary ? "#fff" : "" }}
        secondary={secondary}
        className={`${className} ${classes.root}`}
        
      >
        {showLoader ? <CircularProgress style={{ color: "#000" }} /> : label}
      </CustomButton>
    </>
  );
};

export default ThemeButton;
