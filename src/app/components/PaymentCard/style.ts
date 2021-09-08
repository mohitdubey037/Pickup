import styled from "styled-components";

export const CardContainerDiv = styled.div`
    display: flex;
`

export const IndividualCardDiv = styled.div`
    /* background: #FAFAFA; */
    background: #F6F9F9;
    border: 1.5px solid #C1D4D7;
    margin-top: 1rem;
    display: block;
    width: 370px;
    border-radius: 8px;
    padding: 2rem;
    margin-right: 1rem;
    position: relative;
    overflow: hidden;
`

export const IndividualCardNumberContainer = styled.div`
    text-align:left; 
    margin-top:2.5rem;
    strong{
        font-size: 22px;
    }
`

export const IndividualCardDetailsContainer = styled.div`
    text-align:left; 
    margin-top:0.5rem;
    span{
        margin-right: 4rem;
    }
`