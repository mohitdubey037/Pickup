import { Badge, Box } from "@mui/material";
import styled from "styled-components";

export const TabWrapper = styled.div`
  .tabs {
    @media (min-width: 601px) {
      position: fixed;
      top: 10px;
      overflow: auto;
    }
  }
  .MuiTab-root {
    font-size: 20px;
    line-height: 23px;
    font-family: "Roboto";
    text-transform: capitalize;
    color: #343434 !important;
    padding: 16px 0;
    margin-right: 42px;
    @media (max-width: 600px) {
      font-size: 18px;
      margin-right: 24px;
    }
  }

  .Mui-selected {
    font-family: "Roboto-Bold";
    color: #000 !important;
  }
  .MuiTabs-indicator {
    background-color: #fece3e;
    height: 4px;
  }
`;

export const MapDiv = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ItemDetailsBox = styled(Box)`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  div {
    box-shadow: none !important;
  }
`;

export const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    min-width: 15px;
    height: 15px;
    background-color: #f99746;
  }
`;
