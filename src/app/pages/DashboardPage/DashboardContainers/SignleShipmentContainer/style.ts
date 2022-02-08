import { Box } from "@material-ui/core";
import styled from "styled-components";

export const InnerAccordion = styled.div`
  border-top: 1px solid #dddddd;
  margin: 24px 0;
`;

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

export const AccordionOuterBox = styled(Box)`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  div {
    box-shadow: none !important;
  }
  .value {
    font-family: "Roboto-Medium";
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

export const OrderImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  background: #f5f5f5;
  border: 1px solid #eee;
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
  display: flex;
  justify-content: flex-end;
  .total {
    font-family: "Roboto-Bold";
    margin-left: 12px;
  }
`;
