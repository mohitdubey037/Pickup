import React from 'react';
import { CheckboxPrimary } from './style';

interface CheckboxProps{
    // onClick:()=>void;
    label:string
}

const Button:React.FC<CheckboxProps>=({label})=>{
    return(
        <div>
            <CheckboxPrimary color="primary"></CheckboxPrimary>
            {label}
        </div>
    )
}

export default Button;