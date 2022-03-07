import styled from "styled-components";

export const ModuleContainerWrapper = styled.div`
  background-color: #fafafa;
  overflow: hidden;
  overflow-y: auto;
  height: calc(100vh - 113px);
  padding: 24px 32px;
  @media (max-width: 1023px) {
    height: auto;
    padding: 24px;
    padding-top: 100px !important;
    min-height: calc(100vh - 125px);
  }
  @media (max-width: 600px) {
    padding: 16px;
  }

  scrollbar-width: thin;
  scrollbar-color: #fece3e #bbb;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #bbb;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fece3e;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
  
`;
