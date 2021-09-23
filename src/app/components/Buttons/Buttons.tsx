import React from "react";
import { CustomButton } from "./style";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  secondary?: boolean;
  disabled?: boolean;
}

const ThemeButton: React.FC<ButtonProps> = ({
  label,
  secondary,
  onClick,
  size = "medium",
  disabled,
}) => {
  return (
    <>
      <CustomButton
        disabled={disabled}
        color={secondary ? "secondary" : "primary"}
        onClick={onClick}
        size={size}
        variant="contained"
      >
        {label}
      </CustomButton>
    </>
  );
};

export default ThemeButton;
