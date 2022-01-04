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

export const CardWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div<CardProp>`
  position: relative;
  display: flex;
  background-color: ${({ active }) => (active ? "#FFF8E2" : "#F6F9F9")};
  border: ${({ active }) =>
    active ? "1.3px solid #FECE3E" : "1.3px solid #C1D4D7"};
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  padding: 20px;
  width: 400px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
`;

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
