import styled from "styled-components";
import { Card } from "@material-ui/core";
import { H2Typography } from "../Typography/style";

export const CustomCard = styled(Card)`
  width: 998px;
  height: 519px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px !important;
  position: relative;
  @media (max-width: 1023px) {
    width: 90%;
    max-width:600px;
    height:auto;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items:center;
`;

export const LeftContent = styled.div`
  width: 50%;
  img{
    height:519px;
    width:100%;
  }
  
  @media (max-width: 1023px) {
    display:none;
  }

`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px 80px 50px 0;
  box-sizing: border-box;
  gap:20px;
  .logo{
    width:84px;
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding: 50px;
  }
  @media (max-width: 600px) {
    padding: 24px 16px;
  }
`;

export const SplashHeader = styled.div`
  font-weight:900;
  font-size: 46px;
  line-height: 54px;
  color: #343434;
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 36px;
  }
`;



export const ButtonBox = styled.div`
  display: flex;
  justify-content:space-between;
`;

export const CardCount = styled(H2Typography)`
  position: absolute;
  right: 24px;
  top: 24px;
  font-family:"Roboto"
`;
