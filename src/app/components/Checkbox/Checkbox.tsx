import React from 'react';
import { CheckboxPrimary } from './style';
import { CheckboxProps } from '@material-ui/core/Checkbox';

interface CheckboxPropsType extends CheckboxProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label:string | any;
    isChecked?:boolean;
    style?:any;
    onClick?:any
    value?: boolean | string;
}

const Button:React.FC<CheckboxPropsType>=({label,onChange,isChecked, style, value})=>{
    return(
        <div>
            <CheckboxPrimary 
                color="primary" 
                onChange={onChange}
                checked={isChecked}
                value={value}
                style={style}
            ></CheckboxPrimary>
            {label}
        </div>
    )
}

export default Button;