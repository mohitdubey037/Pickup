import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ModuleContainerWrapper = styled.div`
  background-color: #fafafa;
  overflow:hidden;
  overflow-y: auto;
  height: calc(100vh - 113px);
  padding:24px 32px;
  @media (max-width:1023px){
    height:auto;
    padding:24px;
    padding-top:100px !important;    
    min-height: calc(100vh - 125px);
  }
  @media (max-width:600px){
    padding:16px;
  }
&::-webkit-scrollbar {
  width: 5px;
}


&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px gray;
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb {
  background: #fece3e;
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb:hover {
  background: #fece3e;
}
 
`;

export const FormContainer = styled(Paper)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  margin-top: 20px;

`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // padding: 24px;
  margin-top: 20px;
  flex: 1;
`;
