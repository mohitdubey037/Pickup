import { masterCard, scotiaBank, selectedCardCheck } from "app/assets/Icons";
import { FC } from "react";
import { CardType } from "types";
import { Flex } from "../Input/style";
import { CardWrapper, Card, CardLeft, CardRight, Text, CheckImageWrapper } from "./style";

interface PaymentCardListProps {
    cards: CardType[];
    setSelectedCard: (a: CardType) => void;
    selectedCard: CardType;
}

const PaymentCardList: FC<PaymentCardListProps> = ({ cards = [], setSelectedCard, selectedCard = {} }) => {
    return (
        <CardWrapper>
            {cards.length > 0 &&
                cards.map((card, i) => {
                    return (
                        <Card active={selectedCard?.card_id === card?.card_id ? true : false} key={i} onClick={() => setSelectedCard(card)}>
                            <CardLeft>
                                <Text fontSize="16px" letterSpacing="3px" fontWeight="700" marginBottom="10px">
                                    {card?.number}
                                </Text>
                                <Flex>
                                    <Text fontSize="10px" letterSpacing="1.3px" fontWeight="400" marginRight="30px">
                                        {card?.name?.toUpperCase()}
                                    </Text>
                                    <Text fontSize="10px" letterSpacing="1.3px" fontWeight="400">
                                        {`${card.expiry_month}/${card.expiry_year}`}
                                    </Text>
                                </Flex>
                            </CardLeft>
                            <CardRight>
                                <img src={card?.card_type === "MC" ? masterCard : scotiaBank} alt="bank-icon" />
                            </CardRight>
                            {selectedCard?.card_id === card.card_id && (
                                <CheckImageWrapper>
                                    <img src={selectedCardCheck} alt="selected card" />
                                </CheckImageWrapper>
                            )}
                        </Card>
                    );
                })}
        </CardWrapper>
    );
};

export default PaymentCardList;
