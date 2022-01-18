import { CircularProgress } from "@material-ui/core";
import React from "react";
import { CustomButton } from "./style";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  secondary?: boolean;
  disabled?: boolean;
  showLoader?: boolean;
  style?: React.CSSProperties;
  link?:any
}

const ThemeButton: React.FC<ButtonProps> = ({
  label,
  secondary,
  onClick,
  size = "medium",
  disabled,
  showLoader,
  style,
  link
}) => {
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
        
      >
        {showLoader ? <CircularProgress style={{ color: "#000" }} /> : label}
      </CustomButton>
    </>
  );
};

export default ThemeButton;
