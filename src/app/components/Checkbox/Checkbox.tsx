import React from "react";
import { CheckboxProps, Box } from "@mui/material";

import { CheckboxPrimary } from "./style";
import { ErrorLabel } from "../Input/style";

interface CheckboxPropsType extends CheckboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string | any;
  isChecked?: boolean;
  style?: any;
  onClick?: any;
  error?: string | boolean;
  value?: boolean | string;
}

const Button: React.FC<CheckboxPropsType> = ({
  label,
  onChange,
  isChecked,
  style,
  error = "",
  value = "",
  disabled,
}) => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <CheckboxPrimary
          color="primary"
          onChange={onChange}
          checked={isChecked}
          value={value}
          style={style}
          disabled={disabled}
        ></CheckboxPrimary>
        {label}
      </Box>

      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

export default Button;
