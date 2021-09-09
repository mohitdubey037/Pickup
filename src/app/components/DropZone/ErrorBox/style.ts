import styled from "styled-components";

export const Error = styled.div`
  height: 162px;
  background: #ffe6e6;
  border: 1px solid #e35a5a;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  justify-content: center;
`;

export const HeaderText = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #eb5757;
  text-align:center;
`;

export const HelperText = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: #515151;
  text-align:center;
  a{
      color:#EB5757;
      text-decoration:underline;
  }
`;
