import React, { useEffect, useState } from "react";
import { SmallLabel } from "../Typography/Typography";
import {
  CustomInput,
  CustomInputTextArea,
  ErrorLabel,
  InputWrapper,
} from "./style";
import { InputProps } from "./type";

const Input = React.forwardRef<any,InputProps>(
  ({
  initValue,
  label,
  placeholder,
  onChange,
  id,
  name,
  error,
  onBlur,
  disabled,
  width,
  style,
  inputStyles,
  type,
  autoComplete,
},ref) => {
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

      <SmallLabel text={label} />

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
});

export default Input;
