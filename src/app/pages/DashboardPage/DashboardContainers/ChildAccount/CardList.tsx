import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import PaymentCardList from "app/components/PaymentCard/PaymentCardList";
import NullState from "app/components/NullState/NullState";



const CardList: FC = () => {
  const [selectedCard, setSelectedCard] = useState<any>({});
  const paymentCards = useSelector(
    (state: { paymentCard: { paymentCardsData } }) =>
        state.paymentCard.paymentCardsData
);
  return (
        <>
        <DrawerInnerContent>
            {paymentCards.length > 0 ?
                paymentCards.map((card, idx) => (
                  <PaymentCardList
                    key={idx}
                    card={card}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                  />
                ))
                :
                <NullState message="No Cards Found" />
                }
            
            </DrawerInnerContent>
            {paymentCards.length > 0 &&
              (
              <DrawerFooter>
                <Button
                secondary
                label="Cancel"
                size="medium"
                />
                <Button
                label="Confirm"
                size="medium"
                />
            </DrawerFooter>
              )
            }
        </>
  );
}

export default CardList;