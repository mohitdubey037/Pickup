import { Error,HeaderText,HelperText } from "./style"

interface ErrorProps{

}

const ErrorBox = () => {
    return (
       <Error>
           <HeaderText>Error Details</HeaderText>
           <HelperText>The file you uploaded has errors, <a>Click here</a> to download the file and fix the errors</HelperText>
       </Error>
    )
}

export default ErrorBox
