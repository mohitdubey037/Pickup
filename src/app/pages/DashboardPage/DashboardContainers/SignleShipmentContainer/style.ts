import { Box } from "@mui/material";
import { Flex } from "app/components/CommonCss/CommonCss";
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
  .icon {
    margin-right: 5px;
  }
  .label {
    display: inline-block;
  }
  .favorites {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
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


export const TotalBox = styled(Box)`
  margin: 24px;
  margin-right: calc(25% - 60px);
  display: flex;
  justify-content: flex-end;
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
`;

export const AddImgBox = styled(Flex)`
  margin: 0 0 24px 0;
  cursor: ${(props: { disabled?: boolean }) =>
    props.disabled ? "not-allowed" : "pointer"};
  align-items: center;
  box-sizing: border-box;
  .icon {
    fill: ${(props: { disabled?: boolean }) =>
      props.disabled ? "#ddd" : "#1b8af0"};
    margin-right: 5px;
  }
  .label {
    color: ${(props: { disabled?: boolean }) =>
      props.disabled ? "#ddd" : "#1b8af0"};
  }
`;
