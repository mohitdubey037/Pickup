import React,{useEffect, useState} from "react";
import { CustomInput, CustomLabel, InputWrapper } from "./style";
import {InputProps} from './type';

const Input: React.FC<InputProps> = ({ initValue, label, placeholder, onChange }) => {
    const [value,setValue] = useState('');

    useEffect(()=>{
      initValue ? setValue(initValue) : setValue('')
    },[initValue])

    const onChangeHandler = (e:any) => {
        setValue(e.target.value);
        onChange && onChange(e.target.value);
    }

  return (
    <InputWrapper>
      <CustomLabel>{label} </CustomLabel>
      <CustomInput placeholder={placeholder} onChange={onChangeHandler} value={value}/>
    </InputWrapper>
  );
};

export default Input;
