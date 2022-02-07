import React, { useState } from "react";
import { DateTimeInputProps } from "./type";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { H4 } from "../Typography/Typography";
import { DateTimePickerBox, ErrorLabel } from "./style";

const DatePickerInput = React.forwardRef<any, DateTimeInputProps>(
  ({
    label,
    value,
    placeholder,
    onChange,
    defaultValue = "",
    disabled,
    required,
    error,
    disablePast= false
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <DateTimePickerBox>
        <H4 text={label} required={required} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={onChange}
            open={open}
            disabled={disabled}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            disablePast = {disablePast}
            renderInput={(params) => (
              <TextField
                label=""
                disabled={disabled}
                {...{
                  ...params,
                  inputProps: {
                    ...params.inputProps,
                    placeholder: placeholder,
                  },
                }}
                onClick={() => !disabled && setOpen(true)}
                defaultValue={defaultValue}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </LocalizationProvider>
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
      </DateTimePickerBox>
    );
  }
);

export default DatePickerInput;
