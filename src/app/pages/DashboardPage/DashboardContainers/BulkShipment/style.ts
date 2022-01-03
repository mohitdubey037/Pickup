import styled from "styled-components";

export const BulkShipmentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    border-radius: 8px;
    width: fit-content;
    padding: 12px 16px !important;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const HelperText = styled.div`
  font-size: 14px;
  line-height: 150%;
  color: #515151;
  text-align: left;
`;
export const CustomProgressCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
  border-radius: 8px;
  padding: 20px;
  `;

export const ProgressCardHeader = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  margin-bottom: 10px;
  text-align: left;
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: ce nter;
  gap: 20px;
  padding: 5px 0;
  span {
    display: flex;
    font-size: 14px;
    line-height: 16px;
    width:14%;
  }
`;
