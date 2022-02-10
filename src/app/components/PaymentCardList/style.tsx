import { Box } from "@mui/material";
import styled from "styled-components";

interface TextProp {
  fontSize?: string;
  letterSpacing?: string;
  fontWeight?: string;
  marginBottom?: string;
  marginRight?: string;
}

interface CardProp {
  active?: string | boolean;
}

// export const CardWrapper = styled.div`
//   box-sizing: border-box;
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;

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
  // width: 400px;
  // height: 80px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // width: 60%;
`;


export const Carddetails = styled(Box)`
font-size: 12px;
letter-spacing: 1.06547px;
text-transform: uppercase;
color: #132A30;
font-family: 'Nunito', sans-serif;
font-weight:400;
`

export const CardNumber = styled(Box)`
font-size: 18px;
font-family: 'Nunito', sans-serif;
letter-spacing: 3.0502px;
color: #132A30;
font-weight:700;
`


export const CardRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Text = styled.span<TextProp>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  letter-spacing: ${({ letterSpacing }) => letterSpacing && letterSpacing};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
`;

export const CheckImageWrapper = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
`
