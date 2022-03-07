import { Box } from "@mui/material";
import styled from "styled-components";

export const DrawerHeaderBox = styled.div`
  text-align: center;
  .divider {
    margin: 24px -32px;
    @media (max-width: 600px) {
      margin: 24px -16px;
    }
  }
  .title {
    margin: 16px 0;
  }
  .title-sec {
    color: #f99746;
  }
`;

export const InvoiceDetailsBox = styled.div`
  .value {
    color: #000;
    margin-left: 16px;
  }
  .label {
    font-family: "Roboto-bold";
    color: #000;
  }
  .divider{
    margin-top:24px !important;
  }
`;

export const FilterFlexBox = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 16px;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
`;
