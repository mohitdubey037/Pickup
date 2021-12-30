import React, { useEffect, useState } from "react";
import {
  CustomInput,
  CustomInputTextArea,
  CustomLabel,
  ErrorLabel,
  InputWrapper,
} from "./style";
import { InputProps } from "./type";

const Input: React.FC<InputProps> = ({
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
  autoComplete
}) => {
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
      <CustomLabel>{label} </CustomLabel>

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
};

export default Input;
