import { masterCard, scotiaBank, selectedCardCheck } from "app/assets/Icons"
import { FC } from "react"
import { Flex } from "../Input/style"
import { CardWrapper, Card, CardLeft, CardRight, Text, CheckImageWrapper } from "./style"

interface CardType {
    cardId?: number;
    cardNumber?: string;
    nameOnCard?: string;
    expiryDate?: string;
    cardType?: string;
}

interface PaymentCardListProps{
    cards: CardType[];
    setSelectedCard: (a: CardType) => void;
    selectedCard: CardType;
}

const PaymentCardList: FC<PaymentCardListProps> = ({ cards = [], setSelectedCard, selectedCard = {} }) => {


    return (
        <CardWrapper>
            {
                cards.map((card, i) => {
                    return (
                        <Card active={selectedCard.cardId === card.cardId ? true : false} key={i} onClick={() => setSelectedCard(card)} >
                            <CardLeft>
                                <Text fontSize="16px" letterSpacing="3px" fontWeight="700" marginBottom="10px">{card.cardNumber}</Text>
                                <Flex>
                                    <Text fontSize="12px" letterSpacing="1.5px" fontWeight="400" marginRight="30px">{card.nameOnCard}</Text>
                                    <Text fontSize="12px" letterSpacing="1.5px" fontWeight="400">{card.expiryDate}</Text>
                                </Flex>
                            </CardLeft>
                            <CardRight>
                                <img src={ card.cardType === 'MC' ? masterCard : scotiaBank } alt="bank-icon" />
                            </CardRight>
                            {selectedCard.cardId === card.cardId && <CheckImageWrapper>
                                <img src={selectedCardCheck} alt="selected card"/>
                            </CheckImageWrapper>}
                        </Card>
                    )
                })
            }
        </CardWrapper>
    )
}

export default PaymentCardList
