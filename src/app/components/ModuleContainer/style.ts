import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ModuleContainerWrapper = styled.div`
    height: 100%;
     display: flex;
        flex:1;
     flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    background-color:#FAFAFA;
    border-radius: 40px 0px 0px 0px;
`


export const FormContainer=styled(Paper)`
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:24px;
    margin-top: 20px;
    flex:1;
    border-radius: 8px !important;
`