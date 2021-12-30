import { Grid } from "@material-ui/core"
import { Drawer } from "app/components/Drawer"
import { useState } from "react"
import { PaymentCard }  from "../../../../components/PaymentCard/index"
import CardDetails from "./CardDetails"
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

export default function PaymentCardContainer({heading,individualCardData}:PaymentCardContainerProps) {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [cardData, setCardData] = useState<cardData>({})

    return (
        <div style={{marginTop: '2rem'}}>
            <CardContainerDiv>
                <h3 style={{margin:'1rem 0 0 0'}}>
                    {heading}
                </h3>
            </CardContainerDiv>
            <Grid container>
                {individualCardData.map((value,idx)=>(
                    <PaymentCard setDrawerOpen={setDrawerOpen} setCardData={setCardData} key={idx} name={value.name} expiryData={value.expiryDate} cardNumber={value.cardNumber} type={value.type}/>
                ))}
            </Grid>
            <Drawer
                open={drawerOpen}
                title="Edit you card"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <CardDetails setDrawerOpen={setDrawerOpen} cardData={cardData} />
            </Drawer>
        </div>
    )
}
