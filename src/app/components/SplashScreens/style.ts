import styled from "styled-components";
import { Card } from "@material-ui/core";
import { LogoImg } from "../../assets/Icons";

export const CustomCard = styled(Card)`
  width: 998px;
  height: 519px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px !important;
  
  position: relative;
  
`;

export const CardContent = styled.div`
  display: flex;
  gap: 20px;
  
   
`;

export const LeftContent = styled.div`
  width: 40%;
  position:relative;
  .yellowSplash {
    position: absolute;
    width: 88%;
    height: 167%;
    left: -75.29px;
    background: #fece3e;
    transform: rotate(-30.06deg);
  }
  img{
    position:absolute;
    top:20%;
    left: 10%;
    width: -webkit-fill-available;
}
}
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 52%;
  padding: 40px;
  padding-right:0px;
  align-items: inherit;
  text-align: initial;
`;

export const SplashHeader = styled.div`
  font-weight: 900;
  font-size: 45.8947px;
  line-height: 54px;
  color: #343434;
`;

export const SplashSubHeader = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #343434;
`;

export const LogoImage = styled.img`
  width: 84px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 50px;
`;

export const CardCount = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 24px;
  line-height: 28px;
  color: #343434;
`;
