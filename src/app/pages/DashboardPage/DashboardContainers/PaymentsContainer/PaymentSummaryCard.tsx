import React, { Dispatch, SetStateAction } from 'react';
import { Box } from '@material-ui/core';
import { CardNumber } from 'app/components/Card/style';
import { Carddetails, IndividualCardDiv } from 'app/components/PaymentCard/style';

interface cardData {
    cardNumber?: string;
    expiryDate?: string;
    nameOnCard?: string;
}
interface PaymentCardProps{
    type: string;
    name: string;
    expiryData: string;
    cardNumber: string
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    setCardData: Dispatch<SetStateAction<cardData>>;
}


export default function PaymentSummaryCard({type,name,expiryData,cardNumber,setDrawerOpen, setCardData}:PaymentCardProps) {
    const [anchorEl, setAnchorEl] = React.useState(null);
   
    const handleEditCard = () => {
        const cardData = {
            cardNumber: cardNumber,
            expiryDate: expiryData,
            nameOnCard: name,
        }
        setCardData(cardData)
        setDrawerOpen(true)
    }

    return (
        <>
            <IndividualCardDiv>
                <Box mt={10}>
                <CardNumber>{cardNumber}</CardNumber>
                </Box>
                <Box>
                <Carddetails>{name}</Carddetails>
                <Carddetails>{expiryData}</Carddetails>
                </Box>
                <div>
                </div>
            </IndividualCardDiv>
           
        </>
    )
}
