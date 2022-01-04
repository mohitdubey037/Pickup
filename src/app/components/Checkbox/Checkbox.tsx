import React from 'react';
import { CheckboxPrimary } from './style';
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { ErrorLabel } from '../Input/style';

interface CheckboxPropsType extends CheckboxProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label?:string | any;
    isChecked?:boolean;
    style?:any;
    onClick?:any
    error?: string | boolean
}

const Button:React.FC<CheckboxPropsType>=({label,onChange,isChecked, style, error=''})=>{
    return(
        <>
            <div>
                <CheckboxPrimary 
                    color="primary" 
                    onChange={onChange}
                    checked={isChecked}
                    // value={value}
                    style={style}
                ></CheckboxPrimary>
                {label}
            </div>
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
        </>
    )
}

export default Button;