import { CustomRedLink,CustomBlackLink } from "./style"

interface TypoProps{
    label:string;
    link?:any;
}

export const RedLink = ({label,link}:TypoProps) => {
    return (
        <CustomRedLink onClick={link}>{label}</CustomRedLink>        
    )
}


export const BlackLink = ({label,link}:TypoProps) => {
    return (
        <CustomBlackLink onClick={link}>{label}</CustomBlackLink>        
    )
}

