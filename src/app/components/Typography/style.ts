import styled from "styled-components";

interface Props {
  required?: boolean | undefined;
}

export const commonStyle = `
  color: #343434;
  margin:0; 
  font-weight:normal;
  font-family: "Roboto";
  `;


export const H1Typography = styled.h1`
  ${commonStyle}
  font-size: 32px;
  line-height: 37px;
  margin: 0 0 24px 0;  
  font-family: "Roboto-Bold";
 
`;

export const H2Typography = styled.h2`
  ${commonStyle}
  font-size: 24px;
  line-height: 28px;
  font-family: "Roboto-Bold";
`;


export const DrawerTitle = styled.h2`
  ${commonStyle}
  font-size: 20px;
  line-height: 23px;
  font-family: "Roboto-Bold";
`;

export const H3Typography = styled.h3`
  ${commonStyle}
  font-size: 18px;
  line-height: 21px;
  font-family: "Roboto-Medium";
  text-transform: capitalize;
 
`;

export const H4Typography = styled.p<Props>`
  ${commonStyle}
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 8px 0;
  ${(props: Props) =>
    props.required
      ? `
     &::after {
    content: "*";
    color: #c94c43;
    margin-left: 5px;
  }
  `
      : null};
`;


export const Paratext = styled.p`
  ${commonStyle}
  font-size: 14px;
  line-height: 16px;
`;

export const H5Typography = styled.p`
  ${commonStyle}
  font-size: 12px;
  line-height: 14px;
  color: #656565;
`;


export const CustomLinkStyle = styled(Paratext)`
  cursor: pointer;
  text-decoration: underline;
`;