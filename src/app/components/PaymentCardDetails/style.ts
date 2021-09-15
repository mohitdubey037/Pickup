import { createStyles, makeStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';

// import masterCard from "../../assets/Images/index";

export const CardContainer = styled.div`
  display: flex;
  background-color: #FFF8E2;
  padding: 20px;
  border-radius: 5px;
  height: 100px;
`;

export const CardInfoContainer = styled.div`
  // display: flex;
  flex: 1;
  // flow-direction: column;
`;

export const NameOnCardContainer = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  padding-left: 7px;
`;

export const CardName = styled.div`
  font-size: 12px;
  display: inline;
`;

export const CardImageName = styled.div`
  display: grid;
`;

export const useStyles = makeStyles((Theme) =>
  createStyles({
    nameOnCard: {
      marginRight: 20
    }
  }),
);

// export const CardContainer  = styled.div`
//   display:flex;
//   background-color:#FECE3E;
//   padding:20px;
//   border-radius:5px;
// `;
 
// export const CardInfoContainer=styled.div`
//   display:flex;
//   flex:1;
//   flex-direction:column;
// `;

// export const NameOnCardContainer=styled.div`
//   display:flex;
// `;

// export const CardImage=styled.img`
// `;

// export const useStyles = makeStyles((theme) =>
//   createStyles({
//     nameOnCard:{
//         marginRight:20
//     }
//   }),
// );