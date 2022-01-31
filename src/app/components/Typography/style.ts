import styled from "styled-components";

interface Props {
  required?: boolean | undefined;
}

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
export const LeftAlign = styled.div`
  display: flex;
  justify-content: Left;
  padding: 15px;
`;

export const CustomRedLink = styled.div`
  cursor: pointer;
  color: #c94c43;
  font-family: "Roboto";
  font-size: 14px;
  text-decoration: underline;
  line-height: 16px;
`;

export const CustomBlackLink = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  color: #343434;
  text-decoration: underline;
  line-height: 16px;
  margin: 0;
`;

export const ContainerTitleLabel = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #343434;
  font-family: "Roboto-Bold";
  margin: 0;
`;
export const DrawerTitletext = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #343434;
  font-family: "Roboto-Bold";
  margin: 0;
`;

export const PageTitleText = styled.p`
  font-size: 32px;
  line-height: 37px;
  color: #343434;
  margin: 0 0 24px 0;
  font-family: "Roboto-Bold";
`;
export const Smalllabeltext = styled.p<Props>`
  font-size: 16px;
  line-height: 19px;
  color: #343434;
  font-family: "Roboto";
  margin: 0 0 8px 0;
  word-break: break-word;
  ${(props: Props) =>
    props.required
      ? `
     &::after {
    content: "*";
    color: red;
    margin-left: 5px;
  }
  `
      : null};
`;
export const ListLabeltext = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  font-family: "Roboto-Medium";
  margin: 0;
  text-transform: capitalize;
  word-break: break-word;
`;

export const Paratext = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #343434;
  font-family: "Roboto";
  margin: 0;
  word-break: break-word;
`;

export const SmalltextStyle = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #656565;
  font-family: "Roboto";
  margin: 0;
  word-break: break-word;
`;
