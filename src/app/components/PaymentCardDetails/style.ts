import { createStyles, makeStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background-color: #FFF8E2;
  padding: 20px;
  border-radius: 5px;
  height: 100px;
  border-color: #FECE3E;
  flex-direction: column;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
    },
    subTotal: {
      flex: 1
    },
    taxes: {
      flex: 1
    },
    total: {
      fontWeight: 'bold',
      flex: 1
    },
    totalCount: {
      fontWeight: 'bold',
    },
    paymentDetails: {
      flex: 1, 
      fontWeight: 'bold',
      fontSize: 18
    },
    addNewPayment: {
      color: '#1B8AF0',
      textDecoration: 'underline',
      fontSize: 14
    },
    addInsurance: {
      flex: 1
    }
  }),
);

export const SubTotal = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  font-size: 14px;
`;

export const Taxes = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  font-size: 14px;
`;

export const AddInsurance = styled.div`
  display: flex;
  font-size: 14px;
`;

export const Total = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  font-size: 14px;
`;

export const PaymentDetails = styled.div`
  display: flex;
  margin: 20px 0px 20px 0px;
`;

export const TearmsConditions = styled.div`
  display: flex;
  text-decoration: underline;
  font-size: 12px;
  margin-left: 29px;
  color: #1B8AF0;
`;