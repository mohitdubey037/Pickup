import styled from "styled-components";

export const CustomProgressCard = styled.div`
.heading{
  margin-bottom:24px;
}
@media (min-width:1024px){
  min-height:250px;
}
  `;



export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 8px 0;
  .name {
    width:35%;
    @media (max-width:600px){
      width:50%;
    }
  }
  .cost{
    width:10%;
  }
`;
