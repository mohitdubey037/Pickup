import { Box } from "@mui/material";
import { FullCard } from "app/components/Input/style";
import styled from "styled-components";

export const OnHoldFieldsWrapper = styled.div`
  margin-top: 54px;
  margin-bottom:28px;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  img{
    align-self:center;
    cursor:pointer;
  }
  input {
    width: 152px;
  }
  button {
    height: 42px;
  }
`;

export const OnHoldTableTop = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  padding:0 12px;
  justify-content: space-between;
  img{
      cursor:pointer;
  }
  p{
      color:#F99746;
  }
  button{
      width:114.19px;
      margin-right:16px;
      height:32px;
  }
`;

export const BulkShipmentWrapper = styled(FullCard)`
.label{
  color: #515151;
  margin:24px 0 12px;
}
`;

export const SuccessBox = styled(Box)`
background: #CFFFE8;
border-radius: 6px;
padding:24px;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
margin:16px 0;
@media (max-width: 600px) {
  padding:12px;
}
p{
color:#1EAA67;
font-size: 18px;
line-height: 21px;
font-family:"Roboto";
margin:0;
@media (max-width: 600px) {
  font-size: 14px;
  line-height: 18px;
}
}
span{
  font-family:"Roboto-Bold";
  margin:0 5px;
}
img{
  margin-right:8px;
}
`;



export const CustomProgressCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
  border-radius: 8px;
  padding: 20px;
  `;

// export const ProgressCardHeader = styled.div`
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 21px;
//   color: #343434;
//   margin-bottom: 10px;
//   text-align: left;
// `;

// export const ProgressRow = styled.div`
//   display: flex;
//   align-items: ce nter;
//   gap: 20px;
//   padding: 5px 0;
//   span {
//     display: flex;
//     font-size: 14px;
//     line-height: 16px;
//     width:14%;
//   }
// `;
