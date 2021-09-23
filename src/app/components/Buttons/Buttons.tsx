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
}

const ThemeButton: React.FC<ButtonProps> = ({
  label,
  secondary,
  onClick,
  size = "medium",
  disabled,
  showLoader,
}) => {
  return (
    <>
      <CustomButton
        disabled={disabled || showLoader}
        color={secondary ? "secondary" : "primary"}
        onClick={onClick}
        size={size}
        variant="contained"
      >
        {showLoader ? <CircularProgress style={{color:'black'}}  /> : label}
      </CustomButton>
    </>
  );
};

export default ThemeButton;
