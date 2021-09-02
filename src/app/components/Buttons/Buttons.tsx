import React from 'react';
import { CustomButton } from './style';

interface ButtonProps{
    label:string;
    onClick:()=>void;
    size?:'small'|'medium'|'large';
}

const Buttons:React.FC<ButtonProps>=({label,onClick,size='medium'})=>{
    return(
        <CustomButton onClick={onClick} size={size} variant="contained">{label}</CustomButton>
    )
}

export default Buttons;