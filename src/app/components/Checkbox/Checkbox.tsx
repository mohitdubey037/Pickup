import React from 'react';
import { CheckboxPrimary } from './style';

interface CheckboxProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label:string| any;
    isChecked?:boolean;
    style?:any;
}

const Button:React.FC<CheckboxProps>=({label,onChange,isChecked, style})=>{
    return(
        <div>
            <CheckboxPrimary 
                color="primary" 
                onChange={onChange}
                checked={isChecked}
                value={true||false}
                style={style}
            ></CheckboxPrimary>
            {label}
        </div>
    )
}

export default Button;