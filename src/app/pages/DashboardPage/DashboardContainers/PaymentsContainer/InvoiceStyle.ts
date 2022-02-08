import styled from "styled-components";

export const InvoicesWrapper = styled.div`
  margin-top: 54px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  .invoice_number_div {
    width: 192px;
  }
  p {
    margin-top: 0;
    margin-bottom: 8px;
  }
  // .search-btn-wrapper {
  //   padding-top: 25px;
  // }
  .search-btn-wrapper button {
    height: 42px;
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

export const DateComponent = styled.div `
margin-bottom: 16px;
.MuiFormControl-root{    
  margin-bottom: 6px;
}
.MuiFormControl-root div input {
  padding: 11px 14px;
}
`
