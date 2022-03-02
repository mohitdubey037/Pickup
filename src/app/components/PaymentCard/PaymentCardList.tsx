import { Box } from "@mui/system";
import { selectedCardCheck } from "app/assets/Icons";
import { FC } from "react";
import { CardType } from "types";
import { Flex } from "../CommonCss/CommonCss";
import { Carddetails, CardNumber } from "../PaymentCard/style";
import {
    Card,
    CheckImageWrapper,
} from "./style";

interface PaymentCardListProps {
    card: CardType;
    setSelectedCard: (a: CardType) => void;
    selectedCard: CardType;
}

const PaymentCardList: FC<PaymentCardListProps> = ({
    card = {},
    setSelectedCard,
    selectedCard = {},
}) => {
    return (
        <Card
            active={selectedCard?.id === card?.id ? true : false}
            onClick={() =>
                selectedCard?.id === card?.id
                    ? setSelectedCard({})
                    : setSelectedCard(card)
            }
        >
            <Flex direction="column" justifyContent="space-between" alignItems="flex-start">
                <Box>
                    <CardNumber>**** **** **** {card.last4}</CardNumber>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                    <Carddetails>{card?.name?.toUpperCase()}</Carddetails>
                    <Carddetails ml={5}>
                        {`${String(card.exp_month).padStart(2, "0")}/${
                            card.exp_year
                        }`}
                    </Carddetails>
                </Box>
            </Flex>
            {/* <CardRight>
                                <img src={card?.card_type === "MC" ? masterCard : scotiaBank} alt="bank-icon" />
                            </CardRight> */}
            {selectedCard?.id === card.id && (
                <CheckImageWrapper>
                    <img src={selectedCardCheck} alt="selected card" />
                </CheckImageWrapper>
            )}
        </Card>
    );
};

export default PaymentCardList;
