import { Link } from "app/components/Typography/Links";
import { DrawerHeading, Para } from "app/components/Typography/Typography";
import { Termslink } from "app/pages/AuthScreens/style";
import { Error } from "./style"

interface ErrorProps{
    header?:string;
}

const ErrorBox = ({header}:ErrorProps) => {
    return (
       <Error>
           <DrawerHeading title={header || 'Error Details'} className="heading" />
           <Termslink className="subheading" >The file you uploaded has errors, <Link to="">Click Here</Link> to download the file and fix the errors
                  </Termslink>
       </Error>
    )
}

export default ErrorBox;
