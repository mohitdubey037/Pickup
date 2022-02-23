import styled from "styled-components";

export const NullStateBox = styled.div`
  background: #f4f4f4;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
  width: 100%;
  margin-top: 24px;
  box-sizing: border-box;
	border-radius: 8px;

  svg {
    width: 40px;
    height: 40px;
    fill: #828282;
  }
  .labeltext {
    margin-top: 24px;
    text-align: center;
    color: #828282;
    font-size: 20px;
    font-family: "Roboto-Medium";
  }
`;
