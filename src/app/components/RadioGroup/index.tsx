import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupComponent,
  Box,
} from "@material-ui/core";

import { ErrorLabel } from "../Input/style";
import { H4 } from "../Typography/Typography";
import { RadioBox, RadioFlex } from "./style";
import CustomTooltip from "../Tooltip/CustomTooltip";
import { tooltipIcon } from "app/assets/Icons";

interface RadioOptionItem {
  value: number | string;
  label: string;
  disabled?: boolean;
  tooltipText?: string;
}

interface RadioGroupProps {
  label?: string;
  options?: Array<RadioOptionItem>;
  defaultValue?: number | string;
  ariaLabel?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string | boolean;
  id?: string;
  checked?: any;
  onClick?: any;
  value?: any;
  required?: boolean;
}

function RadioGroup({
  label,
  options,
  defaultValue,
  ariaLabel,
  name,
  onChange,
  error,
  id,
  value,
  required,
}: RadioGroupProps) {
  return (
    <RadioBox>
      <H4 text={label} className="title" required={required} />
      <RadioGroupComponent
        id={id}
        aria-label={ariaLabel || "radio"}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        value={value}
      >
        <RadioFlex>
          {options?.map(({ value, label, disabled, tooltipText }, i) => (
            <Box display="flex" alignItems="center" key={i}>
              <FormControlLabel
                key={i}
                value={value}
                control={<Radio disabled={disabled} />}
                label={label}
              />

              {tooltipText && (
                <CustomTooltip
                  text={tooltipText}
                  content={<img src={tooltipIcon} alt="" />}
                  className="tooltip"
                />
              )}
            </Box>
          ))}
        </RadioFlex>
      </RadioGroupComponent>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </RadioBox>
  );
}

export default RadioGroup;
