import { Grid } from "@material-ui/core"
import { PaymentCard }  from "../../../../components/PaymentCard/index"
import { CardContainerDiv } from "./style"


interface IndividualCardProp{
    name:string;
    expiryDate:string;
    cardNumber:string;
    type:string;
}

interface PaymentCardContainerProps{
    heading: string;
    individualCardData: Array<IndividualCardProp>
}

export default function PaymentCardContainer({heading,individualCardData}:PaymentCardContainerProps) {
    return (
        <div style={{marginTop: '2rem'}}>
            <CardContainerDiv>
                <h3 style={{margin:'1rem 0 0 0'}}>
                    {heading}
                </h3>
            </CardContainerDiv>
            <Grid container>
                {individualCardData.map((value,idx)=>(
                    <PaymentCard key={idx} name={value.name} expiryData={value.expiryDate} cardNumber={value.cardNumber} type={value.type}/>
                ))}
            </Grid>
        </div>
    )
}
