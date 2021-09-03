import React from 'react'
import { Router } from '@reach/router';
import { SignUp, CompanyDetails, Password, EmailSent } from './app/pages/AuthScreens/SignUpScreens';
import { SignIn, ForgotPassword, MailSent, RecoverPassword } from './app/pages/AuthScreens/LoginScreens';
import { Dashboard } from './app/pages/Dashboard';
import { useSelector } from 'react-redux';
import { NotFoundPage } from 'app/pages/NotFoundPage';

const Routes = () => {
    const authUser = useSelector((state: any) => state.authReducer.user);
    return (
        <>
            {!authUser ? <Router>
                <SignUp path='/' />
                <EmailSent path='/email-sent' />
                <CompanyDetails path='/company-details' />
                <Password path='/password' />
                <SignIn path='/sign-in' />
                <ForgotPassword path='/forgot-password' />
                <MailSent path='/mail-sent' />
                <RecoverPassword path='/recover-password' />
                {/*@ts-ignore */}
                <NotFoundPage default={true} />
            </Router>
                :
                <Router>
                    <Dashboard path='/' />
                    {/*@ts-ignore */}
                    <NotFoundPage default={true} />

                </Router>
            }

        </>

    )
}

export default Routes;
