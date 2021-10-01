import { Paper } from "@material-ui/core";
import styled from "styled-components";
export const FormWrapper = styled.div`
 margin-top:20px;
 width: 97%;
  }
 
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  img {
    cursor: pointer;
    position: absolute;
    top: 36px;
    right: 5px;
  }
`;

export const CustomLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #343434;
  margin-bottom: 0.5rem;
`;

export const CustomInput = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 0 5px;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;

export const CustomInputTextArea = styled.textarea`
  height: 154px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 10px 5px;
  
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;


export const ErrorLabel = styled.span`
  color: red;
`;

export const FullCard = styled(Paper)`
width: 100%;
padding: 20px;
display: flex;
justify-content: "flex-start";
margin-top: ${(props: { marginBottom?: number }) => props.marginBottom || 20}px;
`;

export const Flex=styled.div`
display:flex;
flex-direction:${(props:{direction?:string})=>props.direction || 'row'};

justify-content: ${(props:{direction?:string,justifyContent?:any})=>props.justifyContent};
width:100%;
 `
export const Block=styled.div`
display: block;
 text-align: start ;
`
