import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupComponent,
} from "@material-ui/core";

import { ErrorLabel, Flex } from "../Input/style";
import { SmallLabel } from "../Typography/Typography";

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
    <Flex direction={"column"} style={{ alignItems: "start" }}>

      <SmallLabel text={label} />

      <Flex style={{ alignItems: "center" }}>
        <Flex>
          <RadioGroupComponent 
            id={id}
            aria-label={ariaLabel || "radio"}
            defaultValue={defaultValue}
            name={name}
            onChange={onChange}
            value={value}
            
          >
            <Flex >
              {options?.map(({ value, label, disabled }, i) => (
                <FormControlLabel
                    key={i}
                  value={value}
                  control={<Radio disabled={disabled} />}
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
