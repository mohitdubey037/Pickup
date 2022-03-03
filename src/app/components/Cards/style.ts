import styled from "styled-components";

export const CustomProgressCard = styled.div`
@media (min-width:1024px){
  min-height:245px;
}
  `;



export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0;
  .name {
    width:60%;
    @media (max-width:768px){
      width:100%;
    }
  }
  .cost{
    width:100px;
  }
`;


