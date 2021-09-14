import React from 'react';
import { CustomButton } from './style';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    secondary?: boolean;
    
}

const ThemeButton: React.FC<ButtonProps> = ({ label, secondary , onClick, size = 'medium' }) => {
    return (
        <>
            {secondary ?
                <CustomButton color={'secondary'} onClick={onClick} size={size} variant="contained"  >{label}</CustomButton>

                :
                <CustomButton color={'primary'} onClick={onClick} size={size} variant="contained"  >{label}</CustomButton>

            }
        </>
    )

}

export default ThemeButton;