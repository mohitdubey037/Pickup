import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupComponent,
  Box,
} from "@material-ui/core";

import { ErrorLabel, Flex } from "../Input/style";
import { H4 } from "../Typography/Typography";
import { RadioBox, RadioFlex } from "./style";
import CustomTooltip from "../Tooltip/CustomTooltip";
import { tooltipIcon } from "app/assets/Icons";

interface RadioOptionItem {
  value: number | string;
  label: string;
  disabled ?: boolean;
  tooltiptext?: string;
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
    <RadioBox>
      <H4 text={label} className="title" />
          <RadioGroupComponent 
            id={id}
            aria-label={ariaLabel || "radio"}
            defaultValue={defaultValue}
            name={name}
            onChange={onChange}
            value={value}
            
          >
            <RadioFlex>
              {options?.map(({ value, label, disabled, tooltiptext }, i) => (
               <Box display="flex" alignItems="center"> 
                <FormControlLabel
                    key={i}
                  value={value}
                  control={<Radio disabled={disabled} />}
                  label={label}
                />
              
                    {tooltiptext && 
                    <CustomTooltip 
                    text={tooltiptext}
                    content={<img src={tooltipIcon} alt="" />}
                    className="tooltip"
                    />
                    }

                  </Box>
              ))}
            </RadioFlex>
          </RadioGroupComponent>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </RadioBox>
  );
}

export default RadioGroup;
