import styled from "styled-components";

export const test = styled.div`
    color: #c94c43
`

export const UploadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:fit-content;
  paddingLeft:100;
  
`

export const DropText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #a6a6a6;
  a {
    text-decoration: underline;
    color: #1b8af0;
  }
`;
export const HelperText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #c1d4d7;
`;
export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:10px;
`;
export const DropzoneBox = styled.div`
  width: 100%;
  height: 289px;
  border: 1.5px dashed #c1d4d7;
  box-sizing: border-box;
  border-radius: 8.71486px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  section {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
