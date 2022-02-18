import React from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { ComponentContainer, CustomNewSelect } from "./style";
import { H4 } from "../Typography/Typography";
import { ErrorLabel } from "../Input/style";

interface SelectOption {
  value: string | number;
  label: any;
}
interface SelectPropTypes {
  label?: string;
  options?: Array<SelectOption>;
  value?: string | number | null;
  style?: React.CSSProperties;
  onChange?: any;
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: any;
  required?: boolean;
  placeholder?: string;
  allowEmpty?: boolean;
}

export default function SelectNew(props: SelectPropTypes) {
  const {
    label,
    id,
    name,
    onChange,
    value,
    options = [],
    error,
    disabled = false,
    required,
    placeholder,
    allowEmpty = false,
  } = props;

  return (
    <ComponentContainer>
      <H4 text={label} required={required} />

      <CustomNewSelect
        id={id}
        value={value ? value : ""}
        name={name}
        onChange={onChange}
        disabled={disabled}
        IconComponent={KeyboardArrowDownIcon}
        displayEmpty
      >
        {placeholder && (
          <MenuItem disabled={!allowEmpty} value="">
            {placeholder}
          </MenuItem>
        )}
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </CustomNewSelect>

      {!!error && (
        <ErrorLabel>
          {error}
        </ErrorLabel>
      )}
    </ComponentContainer>
  );
}
