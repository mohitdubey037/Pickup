import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ModuleContainerWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fafafa;
  overflow:hidden;
  overflow-y: auto;
  max-height: calc(100vh - 121px);
  padding:24px 32px;
 
`;

export const FormContainer = styled(Paper)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  margin-top: 20px;
  flex: 1;
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
