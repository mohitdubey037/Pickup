import React, { useState } from "react";
import { DateTimeInputProps } from "./type";
import { LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { H4 } from "../Typography/Typography";
import { DateTimePickerBox, ErrorLabel } from "./style";

const TimePickerInput = React.forwardRef<any, DateTimeInputProps>(
  ({
    label,
    value,
    placeholder,
    onChange,
    defaultValue = "",
    disabled,
    required,
    error,
    minTime = undefined,
    maxTime = undefined,
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <DateTimePickerBox>
        <H4 text={label} required={required} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            value={value}
            onChange={onChange}
            open={open}
            disabled={disabled}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            minTime={minTime}
            maxTime={maxTime}
            renderInput={(params) => (
              <TextField
                label=""
                disabled={disabled}
                placeholder={placeholder}
                {...{
                  ...params,
                  inputProps: {
                    ...params.inputProps,
                    placeholder: placeholder,
                  },
                }}
                onClick={() => !disabled && setOpen(true)}
                defaultValue={defaultValue}
              />
            )}
          />
        </LocalizationProvider>
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
      </DateTimePickerBox>
    );
  }
);

export default TimePickerInput;
