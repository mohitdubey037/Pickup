import {useState} from 'react';
import { RouteComponentProps } from "@reach/router";
import { Button } from "../../../components/Buttons";
import { Checkbox } from '../../../components/Checkbox';
import { PasswordInput,Input } from "../../../components/Input";
import { BlackLink } from "../../../components/Typography/Typography";
import { LoginWrapper,LogoImage,FormWrapper, FormContent, Header, LoginLink, RememberDiv } from "../style";
import { useDispatch } from 'react-redux';

const SignIn = ({navigate}:RouteComponentProps) => {
    const dispatch = useDispatch();
    const [creds,setCreds] = useState({email:'',pass:''});

    const submitLogin = () => {
        console.log(creds);
        dispatch({type:'Logged-in'});
    }
    return (
        <LoginWrapper>
            <LogoImage/>
            <FormWrapper>
                <FormContent>
                    <Header>SIGN IN</Header>
                    <Input label='Email' placeholder={'Start typing'} onChange={(val)=>setCreds({email:val,pass:creds.pass})}/>
                    <PasswordInput label='Password' onChange={(val)=>setCreds({email:creds.email,pass:val})}/>
                    <RememberDiv>
                        <Checkbox label='Remember me'/>
                        <BlackLink label='Forgot my Password' link={()=>navigate?.('/forgot-password')}/>
                    </RememberDiv>
                    <Button label='Sign In' onClick={submitLogin}/>
                    <LoginLink>Don't have an account? <BlackLink label='Sign Up Here' link={()=>navigate?.('/')}/></LoginLink>
                </FormContent>
            </FormWrapper>
        </LoginWrapper>
    )
}

export default SignIn
