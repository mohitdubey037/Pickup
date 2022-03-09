import styled from "styled-components";

export const CustomProgressCard = styled.div`
@media (min-width:1024px){
  min-height:245px;
}
.outer-progress-bar{
  max-height:200px;
  overflow:auto;
  
  scrollbar-width: thin;
  scrollbar-color: #ddd #eee;
}
  `;



export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom:16px;
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


