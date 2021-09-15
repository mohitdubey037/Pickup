import { useStyles, CardContainer, NameOnCardContainer, CardImage, CardInfoContainer, CardName, CardImageName } from "./style";

interface CardDetailsProps {
  cardNumber: string,
  nameOnCard: string,
  expiryDate: Date,
  cardType: string,
  cardImage: any;
}

function CardDetails(props: CardDetailsProps) {
  const { cardNumber, nameOnCard, expiryDate, cardType, cardImage } = props;
  const classes = useStyles();
  return (
    <>
      <CardContainer>
        <CardInfoContainer>
          <div>{cardNumber}</div>
          <NameOnCardContainer>
            <span className = {classes.nameOnCard}>{nameOnCard.toUpperCase()}</span>
            <span>{expiryDate.getMonth() + '/' + expiryDate.getFullYear()}</span>
          </NameOnCardContainer>
        </CardInfoContainer>
        <CardImageName>
          <CardImage src = {cardImage} />
          <CardName>{cardType}</CardName>
        </CardImageName>
      </CardContainer>
    </>
  )
}

export default CardDetails;

// import {
//   useStyles,
//   CardContainer,
//   NameOnCardContainer,
//   CardImage,
//   CardInfoContainer,
// } from "./style";

// interface CardDetailsProps {
//   cardNumber: string;
//   nameOnCard: string;
//   expiryDate: Date;

//   cardTypeImage: any;
// }

// function CardDetails(props: CardDetailsProps) {
//   const { cardNumber, nameOnCard, expiryDate, cardTypeImage } = props;
//   const classes = useStyles();
//   return (
//     <>
//       <CardContainer>
//         <CardInfoContainer>
//           <div>{cardNumber}</div>
//           <NameOnCardContainer>
//             <span className={classes.nameOnCard}>{nameOnCard}</span>
//             <span>
//               {expiryDate.getMonth() + "/" + expiryDate.getFullYear()}
//             </span>
//           </NameOnCardContainer>
//         </CardInfoContainer>
//         <CardImage src={cardTypeImage} />
//       </CardContainer>
//     </>
//   );
// }

// export default CardDetails;
