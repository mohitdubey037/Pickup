import styled from "styled-components";

export const DropzoneWrapper = styled.div`
  height: 289px;
  border: 1.5px dashed #c1d4d7;
  box-sizing: border-box;
  border-radius: 8.71486px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  section{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const DropText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #a6a6a6;
  a{
      text-decoration:underline;
      color: #1B8AF0;
  }
`;

export const HelperText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #c1d4d7;
`;
