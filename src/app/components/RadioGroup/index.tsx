import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupComponent,
  Box,
} from "@material-ui/core";

import { ErrorLabel, Flex } from "../Input/style";
import { H4 } from "../Typography/Typography";
import { RadioFlex } from "./style";

interface RadioOptionItem {
  value: number | string;
  label: string;
  disabled ?: boolean;
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
  checked?:any
  onClick?:any
  value?:any
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
  checked,
  onClick,
  value
}: RadioGroupProps) {
  return (
    <Box mb={2} mt={2}>
      <H4 text={label} />
          <RadioGroupComponent 
            id={id}
            aria-label={ariaLabel || "radio"}
            defaultValue={defaultValue}
            name={name}
            onChange={onChange}
            value={value}
            
          >
            <RadioFlex>
              {options?.map(({ value, label, disabled }, i) => (
                <FormControlLabel
                    key={i}
                  value={value}
                  control={<Radio disabled={disabled} />}
                  label={label}
                />
              ))}
            </RadioFlex>
          </RadioGroupComponent>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </Box>
  );
}

export default RadioGroup;
