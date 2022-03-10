import React from "react";
import { MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ComponentContainer, CustomNewSelect, MenuItemStyle } from "./style";
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

export default function Select(props: SelectPropTypes) {
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
      <H4 text={label} required={required} mb={8} className="label" />

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
          <MenuItemStyle disabled={!allowEmpty} value=""  >
            {placeholder}
          </MenuItemStyle>
        )}
        {options.map((item) => (
          <MenuItemStyle key={item.value} value={item.value} className="menuitem">
            {item.label}
          </MenuItemStyle>
        ))}
      </CustomNewSelect>

      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </ComponentContainer>
  );
}
