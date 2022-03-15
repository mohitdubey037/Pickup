import { Box } from "@mui/material";
import styled from "styled-components";

export const SuccessBox = styled(Box)`
  background: #cfffe8;
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  @media (max-width: 600px) {
    padding: 12px;
  }
  p {
    color: #1eaa67;
    font-size: 18px;
    line-height: 21px;
    font-family: "Roboto";
    margin: 0;
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  span {
    font-family: "Roboto-Bold";
    margin: 0 5px;
  }
  img {
    margin-right: 8px;
  }
`;
