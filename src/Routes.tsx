import React from 'react'
import {Router} from '@reach/router';
import {SignUp,CompanyDetails,Password,EmailSent,Congratulations} from './app/pages/AuthScreens/SignUpScreens';
import { SignIn,ForgotPassword,MailSent,RecoverPassword } from './app/pages/AuthScreens/LoginScreens';
import { Dashboard } from './app/pages/DashboardPage';
import { useSelector } from 'react-redux';

const Routes = () => {
    const authUser = useSelector((state:any)=>state.authReducer.user);
    console.log(authUser,'authUser')
    return (
        <Router>
            <SignUp path='/'/>
            <EmailSent path='/email-sent'/>
            <CompanyDetails path='/company-details'/>
            <Password path='/password'/>
            <Congratulations  path='/congratulations'/>
            <SignIn path='/sign-in'/>
            <ForgotPassword path='/forgot-password'/>
            <MailSent path='/mail-sent'/>
            <RecoverPassword path='/recover-password'/>
            <Dashboard path='/dashboard'/>
        </Router>
    )
}

export default Routes;
