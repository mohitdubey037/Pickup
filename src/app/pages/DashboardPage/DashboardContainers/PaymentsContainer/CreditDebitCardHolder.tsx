import React, { FC } from "react";
import { Grid } from "@mui/material";

import { Accordion } from "app/components/Accordion";
import { H4 } from "app/components/Typography/Typography";
import PaymentCardList from "app/components/PaymentCard/PaymentCardList";
import { AccordionOuterBox } from "app/components/CommonCss/CommonCss";
import NullState from "app/components/NullState/NullState";
import { CardType } from "../../../../../types";
import { CardsContainer } from "./style";

interface CreditDebitCardHolderProps {
  debitCardDetails?: Array<CardType>;
  creditCardDetails?: Array<CardType>;
  selectedCard?: CardType;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardType>>;
}

const CreditDebitCardHolder: FC<CreditDebitCardHolderProps> = ({
  debitCardDetails = [],
  creditCardDetails = [],
  selectedCard = {},
  setSelectedCard,
}) => {
  const getTitle = (type, cardDetails) => {
    return `${type} (${cardDetails?.length})`;
  };

  return (
    <CardsContainer>
      <H4 text="Saved cards and accounts" className="cardsTitle" />

      {creditCardDetails.length > 0 ? (
        <AccordionOuterBox>
          <Accordion
            style={{
              backgroundColor: "#FAFAFA",
            }}
            title={getTitle("Cards", creditCardDetails)}
            defaultExpanded
          >
            <Grid container spacing={2}>
              {creditCardDetails.length > 0 &&
                creditCardDetails.map((card, idx) => (
                  <Grid item md={6} xs={12} key={idx}>
                    <PaymentCardList
                      card={card}
                      selectedCard={selectedCard}
                      setSelectedCard={setSelectedCard}
                    />
                  </Grid>
                ))}
            </Grid>
          </Accordion>
        </AccordionOuterBox>
      ) : (
        <NullState message="No Card Added" />
      )}

      {debitCardDetails.length > 0 && (
        <AccordionOuterBox>
          <Accordion
            style={{
              backgroundColor: "#FAFAFA",
            }}
            title={getTitle("Debit Card", debitCardDetails)}
          >
            <Grid container spacing={2}>
              {creditCardDetails.length > 0 &&
                creditCardDetails.map((card, idx) => (
                  <Grid item md={6} xs={12} key={idx}>
                    <PaymentCardList
                      card={card}
                      selectedCard={selectedCard}
                      setSelectedCard={setSelectedCard}
                    />
                  </Grid>
                ))}
            </Grid>
          </Accordion>
        </AccordionOuterBox>
      )}
    </CardsContainer>
  );
};

export default CreditDebitCardHolder;
