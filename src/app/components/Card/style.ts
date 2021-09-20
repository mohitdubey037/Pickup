import { Paper } from '@material-ui/core';
import styled from "styled-components";

export const CardDiv = styled(Paper)`
    padding: 1rem;
     border-radius: 11px;
    text-align: center;
    background-color:${(props:{backgroundColor?:string}) =>props.backgroundColor || 'white'}
    
`

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 18px;
    text-align: left;
    color:${(props:{color?:string})=>props.color||'black'};
`

export const CardNumber = styled.h1`
    color: #F99746;
    margin: 0;
    font-size: 48px;
    text-align: left;
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
`