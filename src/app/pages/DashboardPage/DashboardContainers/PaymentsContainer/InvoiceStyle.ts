import styled from "styled-components";

export const InvoicesWrapper = styled.div`
  margin-top: 54px;
  margin-bottom: 28px;
  display: flex;
  gap: 16px;
  div {
    width: 192px;
  }
`;

export const InvoiceTableTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 5px 16px;
  justify-content: space-between;
  p {
    color: #343434;
    font-size: 18px;
    margin-left: 16px;
  }
  p span {
    color: #828282;
    font-size: 12px;
  }
  button {
    width: 150px;
    height: 32px;
    font-size: 12px;
  }
`;
