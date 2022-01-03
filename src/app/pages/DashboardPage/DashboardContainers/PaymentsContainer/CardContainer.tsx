import { Grid } from "@material-ui/core"
import { Drawer } from "app/components/Drawer"
import { useState } from "react"
import { PaymentCard }  from "../../../../components/PaymentCard/index"
import AddCardForm from "./AddCardForm"
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

interface cardData {
    cardNumber?: string;
    expiryDate?: string;
    nameOnCard?: string;
}

export default function CardContainer({heading, individualCardData}:PaymentCardContainerProps) {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [cardData, setCardData] = useState<cardData>({})

   

    return (
        <div style={{marginTop: '2rem'}}>
            
            <Grid container>
                {individualCardData.map((value,idx)=>(
                    <PaymentCard setDrawerOpen={setDrawerOpen} setCardData={setCardData} key={idx} name={value.name} expiryData={value.expiryDate} cardNumber={value.cardNumber} type={value.type}/>
                ))}
            </Grid>
            
        </div>
    )
}
