// import { CardContainer } from "../Chart/style";
import { CardContainerBlock, MainDiv } from "../PaymentCardDetails/style";

interface CardDetailsProps {
    cardNumber: string,
    nameOnCard: string,
    expiryDate: Date,

    cardTypeImage: any;
}

function CardDetails (props: CardDetailsProps) {
    const { cardNumber, nameOnCard, expiryDate, cardTypeImage } = props;
    return (
        <> 
            <CardContainerBlock>
                <MainDiv>
                    <div className="NameDiv">
                        <p>{cardNumber}</p>
                        {nameOnCard} 
                        {expiryDate.toUTCString()} 
                    </div>
                    <div className = "PicDiv">
                        <img src={cardTypeImage} alt="MasterPic"/>
                    </div>
                </MainDiv>
           </CardContainerBlock>
        </>
    );
}

export default CardDetails;