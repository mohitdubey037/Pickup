import {useState} from 'react';
import { CustomInput, CustomLabel, InputWrapper } from "./style";
import { InputProps } from "./type";
import { eyeIcon } from "../../assets/Icons";
import { PasswordValidate } from '../PasswordValidate';

const PasswordInput = ({label,placeholder,validate,onChange}:InputProps) => {
    const [value,setValue] = useState('')
    const [showPass,setShowPass] = useState(false);

    const onChangeHandler = (e:any) => {
        setValue(e.target.value)
        onChange && onChange(e.target.value);
    }

    return (
       <InputWrapper>
       <CustomLabel>{label}</CustomLabel>
        <CustomInput placeholder={placeholder} type={showPass?'':'password'} value={value} onChange={onChangeHandler} />
            <img src={eyeIcon} alt='' onClick={()=>setShowPass(!showPass)} style={{opacity:showPass?0.3:1, height:'25px',padding:'6px 12px'}}/>
            {validate && <PasswordValidate isOpen={value ? value.length>0 : false} input={value}/>}
       </InputWrapper>
    )
}

export default PasswordInput
