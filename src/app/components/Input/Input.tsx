import React, { useEffect, useState } from "react";
import { CustomInput, CustomLabel, ErrorLabel, InputWrapper } from "./style";
import { InputProps } from "./type";

const Input: React.FC<InputProps> = ({
  initValue,
  label,
  placeholder,
  onChange,
  id,
  name,
  error,
  onBlur
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
    <InputWrapper>
      <CustomLabel>{label} </CustomLabel>
      <CustomInput
        placeholder={placeholder}
        onChange={onChangeHandler}
        onBlur={onBlur}
        value={value}
        id={id}
        name={name}
      />
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </InputWrapper>
  );
};

export default Input;
