import React from 'react';
import { CheckboxPrimary } from './style';

interface CheckboxProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label:string;
    isChecked?:boolean;
}

const Button:React.FC<CheckboxProps>=({label,onChange,isChecked})=>{
    return(
        <div>
            <CheckboxPrimary 
                color="primary" 
                onChange={onChange}
                checked={isChecked}
            ></CheckboxPrimary>
            {label}
        </div>
    )
}

export default Button;