import styled from "styled-components";
import { bgImage,bgImage2 } from "../../assets/Images";
import { logoImg } from "../../assets/Icons";

export const SignUpWrapper = styled.div`
  background: url(${bgImage}) no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginWrapper = styled.div`
  background: url(${bgImage2})no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LogoImage = styled.img`
  width: 126px;
  height: 126px;
  background-image: url(${logoImg});
`;

export const FormWrapper = styled.div`
  background: white;
  width: 486px;
  box-shadow: 0px 16px 40px 5px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  min-height:519px;
  position:relative;
  .mailLogo {
    width: 170px;
    height: 148px;
    margin: 20px 0;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding:30px;
  gap: 14px;
  align-items:flex-start;
`;

export const CenterContent = styled.div`
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap:20px;
`;

export const Header = styled.div`
  font-weight: 900;
  font-size: 32px;
  color: #343434;
  line-height: 37px;
  text-align: inherit;
`;


export const LoginLink = styled.div`
  display:flex;
  align-items:center;
  position:absolute;
  gap:4px;
  bottom:20px;
`;