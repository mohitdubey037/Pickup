import styled from "styled-components";

export const UploadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:fit-content;
`;

export const UploadText = styled.p`
  font-size: 24px;
  line-height: 150%;
  color: #515151;
`;

export const ScanText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #515151;
`;


export const OnHoldFieldsWrapper = styled.div`
  margin-top: 54px;
  margin-bottom:28px;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  img{
    align-self:center;
    cursor:pointer;
  }
  input {
    width: 152px;
  }
  button {
    height: 42px;
  }
`;

export const OnHoldTableTop = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  padding:0 12px;
  justify-content: space-between;
  img{
      cursor:pointer;
  }
  p{
      color:#F99746;
  }
  button{
      width:114.19px;
      margin-right:16px;
      height:32px;
  }
`;
