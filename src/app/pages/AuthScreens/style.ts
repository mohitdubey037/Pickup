import styled from "styled-components";
import { bgImage, bgImage2 } from "../../assets/Images";
import { logo } from "../../assets/Icons";

export const SignUpWrapper = styled.div`
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

export const SignUpBackgroundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: rgba(102, 102, 102, 0.6);
  box-sizing:border-box;
  @media (max-width:1023px){
    padding-bottom:24px;
  }
`;

export const LoginWrapper = styled.div`
  background: url(${bgImage2}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

export const LoginBackgroundWrapper = styled(SignUpBackgroundWrapper)`
  background: rgba(102, 102, 102, 0.3);
`;

export const LogoImage = styled.div`
  background: url(${logo}) no-repeat;
  background-size: contain;
  height: 126px;
  width: 126px;
  margin-top:10px;
  @media (max-width: 1366px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width:600px){
    width: 70px;
    height: 70px;
  }
`;

export const FormWrapper = styled.div`
  background: #fff;
  width: 486px;
  box-shadow: 0px 16px 40px 5px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  min-height: 520px;
  position: relative;

  @media (max-width: 1366px) {
    min-height: 450px;
  }
  @media (max-width:600px){
    width: 90%;
  }

  .mailLogo {
    width: 190px;
    height: 204px;
    @media (max-width: 1366px) {
      width: 140px;
      height: 204px;
    }
    @media (max-width:600px){
      width: 100px;
      height: 140px;
    }
  }
  ${(props: { isValidating?: boolean }) => {
    return (
      props.isValidating &&
      `justify-content: center;
    flex-direction: column;
    display: flex;
    align-items:center;`
    );
  }}
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: flex-start;
  @media (max-width: 1366px) {
    padding: 24px 32px;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
  &.CenterContent {
    align-items: center;
    text-align: center;
  }
`;


export const LoginLink = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 4px;
  bottom: 32px;
  @media (max-width: 1366px) {
    bottom: 20px;
  }
`;

export const RememberDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  @media (max-width: 1366px) {
    margin-bottom: 16px;
  }
`;










