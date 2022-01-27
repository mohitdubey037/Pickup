import { Box } from '@material-ui/core';
import styled from "styled-components";

interface StyledProps {
	isOrangeBox?: boolean;
}


    
export const PaperBox = styled(Box)`
box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.4);
border-radius: 8px;
padding:24px 16px;   
background:#fff;  
`

export const CardDiv = styled(PaperBox)`
box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
border-radius: 8px;
padding:24px 16px;  
background: ${(props: StyledProps) => props.isOrangeBox ? '#F99746' : ''};

.heading{
    color: ${(props: StyledProps) => props.isOrangeBox ? '#fff' : ''};
}

.count{
    color: ${(props: StyledProps) => props.isOrangeBox ? '#fff' : '#F99746'};
    margin-top: 12px;
    line-height: 56px;
    font-size:48px;
    font-family:"Robot-Medium";
    margin:12px 0 20px;
}
.viewall{
    color: ${(props: StyledProps) => props.isOrangeBox ? '#fff' : '#2D9CDB'};
    text-decoration:underline;
    cursor:pointer;
}
.icon{
    fill: ${(props: StyledProps) => props.isOrangeBox ? '#fff' : ''};
}
.label{
    color: ${(props: StyledProps) => props.isOrangeBox ? '#fff' : ''};
    margin-left:5px;
}
    
`
export const CardNumber = styled.h1`
    color: #F99746;
    margin-top: 12px;
    font-size: 48px;
    
`

