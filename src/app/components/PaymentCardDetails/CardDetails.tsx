import { Accordion } from "../Accordion";
import ShipmentSummary from "./ShipmentSummary";
import {
  useStyles,
  CardContainer,
  NameOnCardContainer,
  CardImage,
  CardInfoContainer,
  CardName,
  CardImageName,
  PaymentDetails,
} from "./style";

interface CardDetailsProps {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: Date;
  cardType: string;
  cardImage: any;
}

function CardDetails(props: CardDetailsProps) {
  const { cardNumber, nameOnCard, expiryDate, cardType, cardImage } = props;
  const classes = useStyles();
  return (
    <>
      {/* <ShipmentSummary
        subTotal={320.4}
        taxes={12.0}
        addInsurance={"12"}
        total={332.42}
      /> */}
      <hr />
      <PaymentDetails>
        <span className={classes.paymentDetails}>Payment Details</span>
        <span className={classes.addNewPayment}>+ Add New Payment</span>
      </PaymentDetails>
      <div style = {{ fontSize: "16px" }}>Saved cards and accounts</div>
      <Accordion title={"Credit Card"}>
        {/* First Card */}
        <CardContainer>
          <CardInfoContainer>
            <div>{cardNumber}</div>
            <CardImageName>
              <CardImage src={cardImage} />
              <CardName>{cardType}</CardName>
            </CardImageName>
          </CardInfoContainer>
          <NameOnCardContainer>
            <span className={classes.nameOnCard}>
              {nameOnCard.toUpperCase()}
            </span>
            <span>
              {expiryDate.getMonth() + "/" + expiryDate.getFullYear()}
            </span>
          </NameOnCardContainer>
        </CardContainer>
      </Accordion>

      <Accordion title={"Debit Card"}>
        {/* Second Card */}
        <CardContainer>
          <CardInfoContainer>
            <div>{cardNumber}</div>
            <NameOnCardContainer>
              <span className={classes.nameOnCard}>
                {nameOnCard.toUpperCase()}
              </span>
              <span>
                {expiryDate.getMonth() + "/" + expiryDate.getFullYear()}
              </span>
            </NameOnCardContainer>
          </CardInfoContainer>
          <CardImageName>
            <CardImage src={cardImage} />
            <CardName>{cardType}</CardName>
          </CardImageName>
        </CardContainer>
      </Accordion>
    </>
  );
}

export default CardDetails;