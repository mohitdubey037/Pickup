import { useState } from "react"
import { Input } from "app/components/Input"
import { Flex } from "app/components/Input/style"
import { Button } from "app/components/Buttons"

const CardDetails = ({ cardData, setDrawerOpen }) => {

    // Card types 0: Credit, 1: Debit
    const [cardType, setCardType] = useState(0)

    return (
            <Flex direction="column" style={{ height: '100%' }}>
                <div>
                    <h2>Edit your card</h2>
                    <Flex>
                        <Input label="Credit Card Number" initValue={cardData.cardNumber}/>
                    </Flex>
                    <Flex direction="row" style={{ gap: '20px', gridGap: '20px' }}>
                        <Input label="Expiration Date" initValue={cardData.expiryDate}/>
                        <Input label="CVC" value="1234567890"/>
                    </Flex>
                    <Flex>
                        <Input label="Name on Card" initValue={cardData.nameOnCard}/>
                    </Flex>
                    <Flex>
                        <Input label="Pin Code" initValue="123"/>
                    </Flex>
                    <Flex>
                        <Input label="Nickname (optional)" initValue="John Doe"/>
                    </Flex>
                </div>
                <Flex direction="row" style={{ alignItems: 'flex-end' }} >
                    <Button onClick={() => setDrawerOpen(false)} label="Cancel"></Button>
                    <Button label="Save"></Button>
                </Flex>
            </Flex>
    )
}

export default CardDetails
