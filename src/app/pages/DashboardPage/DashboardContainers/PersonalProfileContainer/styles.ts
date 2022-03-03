import { Box } from "@mui/material";
import styled from "styled-components";
import { FlexBox } from "app/components/CommonCss/CommonCss";

export const FlexTable = styled(Box)`
  display: flex;
  width: calc(100% - 300px) !important;
  justify-content: space-between;

  @media (max-width: 1023px) {
    width: 100% !important;
    margin: 24px 0 12px 0;
  }

  @media (min-width: 1023px) {
    align-items: center;
  }

  .value {
    margin-top: 5px;
    font-family: "Roboto-Bold";
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  z-index: 999;
  background: #fff;
  outline: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  top: 55px;

  li {
    padding: 8px;
    cursor: pointer;
    font-size: 14px;
    font-family: "Roboto" !important;
    color: #222;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid #bbb;
  }
`;

export const EmailSentBox = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  .para {
    padding: 0 50px;
    text-align: center;
  }
`;
