import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupComponent,
} from "@material-ui/core";

import { CustomLabel, ErrorLabel, Flex } from "../Input/style";

interface RadioOptionItem {
  value: number | string;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  options?: Array<RadioOptionItem>;
  defaultValue?: number | string;
  ariaLabel?: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  error?: string;
  id?: string;
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
}: RadioGroupProps) {
  return (
    <Flex direction={"column"} style={{ alignItems: "start" }}>
      <CustomLabel>{label}</CustomLabel>
      <Flex style={{ alignItems: "center" }}>
        <Flex>
          <RadioGroupComponent
            id={id}
            aria-label={ariaLabel || "radio"}
            defaultValue={defaultValue}
            name={name}
            onChange={onChange && onChange}
          >
            <Flex>
              {options?.map(({ value, label }) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                />
              ))}
            </Flex>
          </RadioGroupComponent>
        </Flex>
      </Flex>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </Flex>
  );
}

export default RadioGroup;