import { Typography } from "@material-ui/core"
import { Accordion } from "app/components/Accordion"
import PaymentCardList from "app/components/PaymentCardList"
import React, { FC } from "react"
import { CardType } from "../../../../../types"

interface CreditDebitCardHolderProps {
    debitCardDetails?: Array<CardType>;
    creditCardDetails?: Array<CardType>;
    selectedCard?: CardType;
    setSelectedCard: React.Dispatch<React.SetStateAction<CardType>>;
}

const CreditDebitCardHolder: FC<CreditDebitCardHolderProps> = ({ debitCardDetails = [], creditCardDetails = [], selectedCard = {}, setSelectedCard }) => {

    const getTitle = (type, cardDetails) => {
        return `${type} (${cardDetails?.length})`
    }

    return (
        <div>
            <Typography style={{ paddingBottom: 10, textAlign: "left" }}>
                Saved cards and accounts
            </Typography>
            {creditCardDetails.length > 0 && <Accordion style={{ border: "1px solid #C4C4C4", marginBottom: "20px", borderRadius: "8px" }} title={getTitle("Card Card", creditCardDetails)}>
                <PaymentCardList cards={creditCardDetails} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            </Accordion>}
            {debitCardDetails.length > 0 && <Accordion style={{ border: "1px solid #C4C4C4", marginBottom: "20px", borderRadius: "8px" }} title={getTitle("Debit Card", debitCardDetails)}>
                <PaymentCardList cards={debitCardDetails} selectedCard={selectedCard}  setSelectedCard={setSelectedCard}/>
            </Accordion> }
        </div>
    )
}

export default CreditDebitCardHolder
