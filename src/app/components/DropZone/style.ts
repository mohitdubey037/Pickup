import styled from "styled-components";
import { Flex } from "../CommonCss/CommonCss";

export const DropzoneWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:10px;
`;

export const DropzoneBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 1.5px dashed #c1d4d7;
  box-sizing: border-box;
  border-radius: 8px;
  padding:16px;
  margin:24px 0;
`;

export const DropeZoneText = styled.div`
 text-align:center;
 .label{
  color: #A6A6A6;
  margin:24px 0 12px 0;
  font-family:"Roboto-Medium";
 }
 .smalltext{
  color: #C1D4D7;
  font-family:"Roboto-Medium";
 }
`;

export const UploadingWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title{
  color: #515151;
  margin:24px 0 8px;
  font-family:"Roboto";
  }
  .para{
    color: #515151;
    margin-bottom:14px;
    }
  .subtext{
  color: #515151;
  font-family:"Roboto-bold";
  margin-bottom:5px;
  }
`;



