import { Box } from "@mui/material";
import styled from "styled-components";

export const Error = styled(Box)`
  background: #ffe6e6;
  border: 1px solid #e35a5a;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  padding: 24px 12px;
  margin-top: 24px;
  
  .subheading {
    color: #515151;
    font-size: 14px;
    a {
      color: #eb5757;
    }
  }
`;
