import { Typography } from "@material-ui/core"
import { CustomRedLink, CustomBlackLink, ContainerTitleLabel } from "./style"

interface TypoProps {
    label: string;
    link?: any;
}

export const RedLink = ({ label, link }: TypoProps) => {
    return (
        <CustomRedLink onClick={link}>{label}</CustomRedLink>
    )
}


export const BlackLink = ({ label, link }: TypoProps) => {
    return (
        <CustomBlackLink onClick={link}>{label}</CustomBlackLink>
    )
}

export const ContainerTitle = (props) => {
    return <ContainerTitleLabel large={true}>{props.children}</ContainerTitleLabel>

}


export const FormContainerTitle = (props) => {
    return <ContainerTitleLabel>{props.children}</ContainerTitleLabel>
}
