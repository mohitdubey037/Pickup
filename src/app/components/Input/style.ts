import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position:relative;
  width:100%;
  img {
    cursor: pointer;
    position: absolute;
    top: 36px;
    right: 5px;
  }
`;

export const CustomLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #343434;
`;

export const CustomInput = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position:relative;
  padding:0 5px;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
`;
