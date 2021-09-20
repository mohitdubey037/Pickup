import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ModuleContainerWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #fafafa;
  overflow-y: scroll;
  max-height: 90vh;
  ::-webkit-scrollbar{
      display:none;
  }
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
  padding: 24px;
  margin-top: 20px;
  flex: 1;
`;
