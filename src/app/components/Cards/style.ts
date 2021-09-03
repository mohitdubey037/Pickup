import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CustomProgressCard = styled(Card)`
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
  border-radius: 8px;
  padding: 20px;
  width:686px;
`;

export const ProgressCardHeader = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  margin-bottom:10px;
  text-align:left;
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  line-height: 16px;
`;
