import {RouteComponentProps} from '@reach/router';
import { Buttons } from "../../../components/Buttons";
import { Input } from "../../../components/Input";
import { RedLink } from "../../../components/Typography/Typography";
import { FormContent, FormWrapper, Header, LoginWrapper, LogoImage } from "../style";

const ForgotPassword = ({navigate}:RouteComponentProps) => {
    return (
       <LoginWrapper>
           <LogoImage/>
           <FormWrapper>
               <FormContent>
                   <Header>FORGOT PASSWORD</Header>
                   <Input label='Email' placeholder='Start typing'/>
                   <Buttons label='Recover Password' onClick={()=>{}}/>
                   <RedLink label='Back to Login'/>
               </FormContent>
           </FormWrapper>
       </LoginWrapper>
    )
}

export default ForgotPassword
