import { Menu } from "@material-ui/core";
import { Box } from "@mui/material";
import styled from "styled-components";

export const IndividualCardDiv = styled(Box)`
  background: #f6f9f9;
  border: 1px solid #c1d4d7;
  border-radius: 8px;
  padding: 24px 32px;
  position: relative;
  overflow: hidden;
  height: 190px;

  .menulist {
    right: 0 !important;
  }
`;

export const MenuBox = styled(Menu)`
  right: 20px !important;
  left: -110px !important;
  top: 40px !important;

  .MuiPaper-rounded {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%) !important;
    border-radius: 16px;
    width: 120px;
    @media (max-width: 600px) {
      right: 10px !important;
      left: auto !important;
    }
  }
  .MuiMenuItem-root {
    font-size: 16px;
    line-height: 19px;
    color: #343434;
  }
`;

export const CardNumber = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 3.0502px;
  color: #132a30;
  font-weight: 700;
`;

export const Carddetails = styled(Box)`
  font-size: 12px;
  letter-spacing: 1.06547px;
  text-transform: uppercase;
  color: #132a30;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
`;

export const CardEllipse = styled.img`
  position: absolute;
  top: -2px;
  opacity: 0.1;
  right: -2px;
`;
export const CardOption = styled.img`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
`;

interface CardProp {
  active?: string | boolean;
}

export const Card = styled.div<CardProp>`
  position: relative;
  display: flex;
  background-color: ${({ active }) => (active ? "#FFF8E2" : "#F6F9F9")};
  border: ${({ active }) =>
    active ? "1px solid #FECE3E" : "1px solid #C1D4D7"};
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

export const CheckImageWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;
