import { Box } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled.div`
  .MuiAccordionSummary-content {
    font-size: 18px;
    font-weight: 700;
    color: #343434;
  }
  MuiPaper-root MuiAccordion-root {
    margin: 0px;
    padding: 0px;
  }
`;

export const FavoritesBox = styled(Box)`
  display: flex;
  align-items: center;
  // margin: 32px 0 0 0;
  .title {
    font-family: "Roboto-Bold";
    margin: 0;
    margin-right: 16px;
    text-transform: capitalize;
  }
  .icon {
    margin-right: 5px;
  }
  .label {
    color: #878787;
    display: inline-block;
    margin-right: 6px;
  }
  .favorites {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const LabelSpan = styled.span`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 400;
`;

export const ContentSpan = styled.span`
  margin: 5px 0;
  font-weight: 600;
  font-size: 16px;
  color: #343434;
`;

export const OrderImageWrapper = styled(Box)`
  width: fit-content;
  position: relative;
`;

export const Remove = styled.img`
  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;
`;

export const ItemDetailsBox = styled(Box)`
  border-top: 1px solid #ddd;
  margin: 20px 0;

  .delete {
    color: red;
    cursor: pointer;
  }
  .heading {
    font-family: "Roboto-Bold";
  }
`;

export const TotalBox = styled(Box)`
  margin: 24px;
  margin-right: calc(25% - 73px);
  display: flex;
  justify-content: flex-end;
  .total {
    font-family: "Roboto-Bold";
    margin-left: 24px;
  }
`;

export const OrderSummaryTableOuter = styled(Box)`
  th,
  td {
    width: 25% !important;
  }
`;

export const DisclaimerBox = styled(Box)`
  background: rgba(255, 219, 110, 0.6);
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
  max-width: 645px;
  float: right;
  margin: 24px 0 48px;
  display: flex;
  h3 {
    font-family: "Roboto-Bold";
    color: #8c6d0f !important;
    margin-bottom: 10px;
  }
  p {
    color: #8c6d0f !important;
  }
`;
