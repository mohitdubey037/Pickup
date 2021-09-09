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
