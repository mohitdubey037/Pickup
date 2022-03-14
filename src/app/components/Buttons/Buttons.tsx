import { CircularProgress } from "@mui/material";
import React from "react";
import { CustomButton, useStyles } from "./style";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset" | undefined;
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
  type,
  disabled,
  showLoader,
  style,
  className,
}) => {
  const classes = useStyles({ size });

  return (
    <>
      <CustomButton
        disabled={disabled || showLoader}
        color={secondary ? "inherit" : "primary"}
        onClick={onClick}
        size={size}
        type={type}
        variant={secondary ? "outlined" : "contained"}
        style={{ ...style, backgroundColor: secondary ? "#fff" : "" }}
        className={`${className} ${classes.root}`}
      >
        {showLoader ? (
          <CircularProgress style={{ color: "#000" }} size={25} />
        ) : (
          label
        )}
      </CustomButton>
    </>
  );
};

export default ThemeButton;
