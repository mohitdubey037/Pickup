import { ReactNode } from "react"
import { Error,HeaderText,HelperText } from "./style"

interface ErrorProps{
    header?:string;
    helperText?:ReactNode;
}

const ErrorBox = ({header,helperText}:ErrorProps) => {
    return (
       <Error>
           <HeaderText>{header || 'Error Details'}</HeaderText>
           <HelperText>{helperText || `The file you uploaded has errors, ${<a>Click here</a>} to download the file and fix the errors`}</HelperText>
       </Error>
    )
}

export default ErrorBox;
