import { Box } from "@mui/system";
import { selectedCardCheck } from "app/assets/Icons";
import { FC } from "react";
import { CardType } from "types";
import {
    // CardWrapper,
    Card,
    CardLeft,
    CheckImageWrapper,
    Carddetails,
    CardNumber,
} from "./style";

interface PaymentCardListProps {
    cards: CardType[];
    setSelectedCard: (a: CardType) => void;
    selectedCard: CardType;
}

const PaymentCardList: FC<PaymentCardListProps> = ({
    cards = [],
    setSelectedCard,
    selectedCard = {},
}) => {
    return (
        <>
            {cards.length > 0 &&
                cards.map((card, i) => {
                    return (
                        <Card
                            active={
                                selectedCard?.card_id === card?.card_id
                                    ? true
                                    : false
                            }
                            key={i}
                            onClick={() =>
                                selectedCard?.card_id === card?.card_id
                                    ? setSelectedCard({})
                                    : setSelectedCard(card)
                            }
                        >
                            <CardLeft>
                                <Box>
                                <CardNumber>{card?.number}</CardNumber>
                                </Box>
                                <Box mt={1} display="flex" alignItems="center">
                                <Carddetails> {card?.name?.toUpperCase()}</Carddetails>
                                <Carddetails ml={5}> {`${card.expiry_month}/${card.expiry_year}`}</Carddetails>
                                </Box>
                              
                            </CardLeft>
                            {/* <CardRight>
                                <img src={card?.card_type === "MC" ? masterCard : scotiaBank} alt="bank-icon" />
                            </CardRight> */}
                            {selectedCard?.card_id === card.card_id && (
                                <CheckImageWrapper>
                                    <img
                                        src={selectedCardCheck}
                                        alt="selected card"
                                    />
                                </CheckImageWrapper>
                            )}
                        </Card>
                    );
                })}
        </>
    );
};

export default PaymentCardList;
