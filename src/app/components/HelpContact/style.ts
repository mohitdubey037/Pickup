import styled from "styled-components";


export const ContactHeading = styled.h3`
    margin-bottom: 1rem;
`

export const ContactDetails = styled.div`
    border: 1px solid #C4C4C4;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const StyledUl = styled.ul`
   margin: 0;
   padding: 0;
   
   ::before
   {
content: '';
background-image: url("../../assets/Icons/phone.svg");
width: 50px;
height: 50px;
   }
`