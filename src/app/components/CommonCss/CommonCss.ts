import { Box } from "@material-ui/core";
import { Divider } from "@mui/material";
import styled from "styled-components";

export const FlexBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DateComponent = styled.div`
  margin-bottom: 16px;
  .MuiFormControl-root {
    margin-bottom: 6px;
    background: #fff;
  }
  .MuiFormControl-root div input {
    padding: 10px 12px;
  }
`;

export const LineDivider = styled(Divider)`
  margin: 24px 0 !important;
`;

export const ContentBox = styled(Box)`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  .value {
    font-family: "Roboto-Bold";
    margin-top: 5px;
  }
  .title {
    font-family: "Roboto-Medium";
    font-size: 22px;
    margin-bottom: 24px;
  }
  .subtitle {
    font-family: "Roboto-Bold";
    margin-bottom: 0;
  }
`;


export const AccordionOuterBox = styled(Box)`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 24px;
  div {
    box-shadow: none !important;
  }
  .value {
    font-family: "Roboto-Medium";
  }
`;

export const InnerAccordion = styled.div`
  border-top: 1px solid #dddddd;
  .MuiAccordionSummary-content {
    font-size: 16px !important;
    margin: 12px 0 !important;
}
`;

export const OrderImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  background: #f5f5f5;
  border: 1px solid #eee;
`;