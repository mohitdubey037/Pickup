import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";

import {
  CustomInput,
  CustomInputTextArea,
  ErrorLabel,
  InputWrapper,
} from "./style";
import { H4 } from "../Typography/Typography";
import { InputProps } from "./type";

const Input = React.forwardRef<any, InputProps>(
  (
    {
      initValue,
      label,
      placeholder,
      onChange,
      id,
      name,
      error,
      onBlur,
      disabled,
      required,
      style,
      inputStyles,
      type,
      autoComplete,
      maskProps,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      initValue ? setValue(initValue) : setValue("");
    }, [initValue]);

    const onChangeHandler = (e: any) => {
      setValue(e.target.value);
      onChange && onChange(e);
    };

    return (
      <InputWrapper style={style}>
        <H4 text={label} required={required} className="label" />

        {type === "textarea" ? (
          <CustomInputTextArea
            placeholder={placeholder}
            onChange={onChangeHandler}
            onBlur={onBlur}
            value={value}
            id={id}
            name={name}
            disabled={disabled}
            style={inputStyles}
          />
        ) : type === "mask" ? (
          <InputMask
            onChange={onChangeHandler}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            {...maskProps}
          >
            <CustomInput
              id={id}
              name={name}
              style={inputStyles}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          </InputMask>
        ) : (
          <CustomInput
            ref={ref}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onBlur={onBlur}
            value={value}
            id={id}
            name={name}
            disabled={disabled}
            style={inputStyles}
            autoComplete={autoComplete}
          />
        )}
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
      </InputWrapper>
    );
  }
);

export default Input;
