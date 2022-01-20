import React from 'react';
import { CheckboxPrimary } from './style';
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { ErrorLabel } from '../Input/style';
import { Box } from '@material-ui/core';

interface CheckboxPropsType extends CheckboxProps{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label?:string | any;
    isChecked?:boolean;
    style?:any;
    onClick?:any
    error?: string | boolean
    value?: boolean | string;
}

const Button:React.FC<CheckboxPropsType>=({label,onChange,isChecked, style, error='', value=''})=>{
    return(
        <>
            <Box display="flex" alignItems="center">
                <CheckboxPrimary 
                    color="primary" 
                    onChange={onChange}
                    checked={isChecked}
                    value={value}
                    style={style}
                ></CheckboxPrimary>
                {label}
            </Box>
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
        </>
    )
}

export default Button;