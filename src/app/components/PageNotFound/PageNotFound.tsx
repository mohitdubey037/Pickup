
import React from 'react'
import { PageNotFoundHeading, PageNotFoundSubHeading, PageNotFoundBox } from './style'
import { useNavigate } from '@reach/router';
import { Button } from '../Buttons';


const PageNotFound : React.FC = () => {
    const navigate = useNavigate();
	const handleLogout = () => {
		navigate('/login');
	};

    return (
    <PageNotFoundBox>
        <PageNotFoundHeading> 404 </PageNotFoundHeading>
        <PageNotFoundSubHeading>Page Not Found.</PageNotFoundSubHeading>
        <Button type='button' size="medium" className="backBtn" label="Back To Home" onClick={handleLogout}/>
    </PageNotFoundBox>
    )
}

export default PageNotFound;




