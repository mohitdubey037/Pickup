import { Box, Grid } from "@material-ui/core"
import { Drawer } from "app/components/Drawer"
import { ContainerTitle } from "app/components/Typography/Typography"
import { useState } from "react"
import { PaymentCard }  from "../../../../components/PaymentCard/index"
import AddCardForm from "./AddCardForm"


interface IndividualCardProp{
    card_id: string;
    card_type: string;
    name:string;
    expiry_month: string;
    expiry_year: string;
    function: string;
    number:string;
}

interface PaymentCardContainerProps{
    individualCardData: Array<IndividualCardProp>
}

interface cardData {
    cardNumber?: string;
    expiryDate?: string;
    nameOnCard?: string;
}

export default function PaymentCardContainer({ individualCardData}:PaymentCardContainerProps) {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [cardData, setCardData] = useState<cardData>({})

    const saveCard = () => {
        console.log("Save card called")
    }

    return (
     <Box>
            
            <ContainerTitle title="Card"  />
            <Grid container spacing={2}>
                {individualCardData?.map((value,idx)=>(
                    <PaymentCard setDrawerOpen={setDrawerOpen} setCardData={setCardData} key={idx} id={value.card_id} name={value.name} expiryData={`${value.expiry_month}/${value.expiry_year}`} cardNumber={value.number.substring(12,16).padStart(16, '*').replace(/(.{4})/g, '$1 ').trim()}/>
                ))}
            </Grid>
            <Drawer
                open={drawerOpen}
                title="Edit you card"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddCardForm setDrawerOpen={setDrawerOpen} saveAction={saveCard}/>
            </Drawer>
        </Box>
    )
}
