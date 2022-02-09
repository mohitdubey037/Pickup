import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    color: #c94c43;
`;

export const CardsContainer = styled.div`
    margin: 30px 0px;
    .cardsTitle {
        margin-bottom: 15px;
    }
`;

export const DrawerHeaderBox = styled.div`
   text-align:center;
    .divider {
        margin: 24px -32px;
        @media (max-width: 600px) {
            margin: 24px -16px;
        }
    }
    .title{
        margin:16px 0;
    }
`;

export const InvoiceDetailsBox = styled.div`
   .value{
       color:#000;
       margin-left:16px;
   }
   .label{
    font-family:"Roboto-bold";
    color:#000;
   }
`;

export const FilterFlexBox = styled(Box)`
  display:flex;
  align-items:center;
  height:100%;
  margin-bottom:16px;
  justify-content:space-between;
  img{
      cursor:pointer;
  }
`;