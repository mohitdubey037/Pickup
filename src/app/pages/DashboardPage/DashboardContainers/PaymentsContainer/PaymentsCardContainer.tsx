import { Grid } from "@material-ui/core"
import { Drawer } from "app/components/Drawer"
import { useState } from "react"
import { PaymentCard }  from "../../../../components/PaymentCard/index"
import AddCardForm from "./AddCardForm"
import { CardContainerDiv } from "./style"


export interface IndividualCard{
    card_id: string;
    card_type: string;
    name:string;
    expiry_month: string;
    expiry_year: string;
    function: string;
    number:string;
}

interface PaymentCardContainerProps{
    heading: string;
    individualCardData: Array<IndividualCard>
}

export interface cardData {
    cardNumber?: string;
    expiryDate?: string;
    nameOnCard?: string;
    cvc?:string;
    pinCode?:string;
    nickName?:string;
}

export default function PaymentCardContainer({heading, individualCardData}:PaymentCardContainerProps) {

    const initialCardValue={
        card_id: "",
    card_type: "",
    name:"",
    expiry_month: "",
    expiry_year: "",
    function: "",
    number:""
    }
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [cardData, setCardData] = useState<IndividualCard>(initialCardValue)

    const saveCard = () => {
        console.log("Save card called")
    }

    return (
        <div style={{marginTop: '2rem'}}>
            <CardContainerDiv>
                <h3 style={{margin:'1rem 0 0 0', fontSize: '24px'}}>
                    {heading}
                </h3>
            </CardContainerDiv>
            <Grid container>
                {individualCardData?.map((value,idx)=>(
                    // <PaymentCard setDrawerOpen={setDrawerOpen} setCardData={setCardData} key={idx} id={value.card_id} name={value.name} expiryData={`${value.expiry_month}/${value.expiry_year}`} cardNumber={value.number.substring(12,16).padStart(16, '*').replace(/(.{4})/g, '$1 ').trim()}/>
                    <PaymentCard setDrawerOpen={setDrawerOpen} setCardData={setCardData} key={idx} cardData={value}/>
                    
                ))}
            </Grid>
            <Drawer
                open={drawerOpen}
                title="Edit you card"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddCardForm setDrawerOpen={setDrawerOpen} saveAction={saveCard} cardData={cardData}/>
            </Drawer>
        </div>
    )
}
