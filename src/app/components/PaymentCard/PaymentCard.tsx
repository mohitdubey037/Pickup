import React, { Dispatch, SetStateAction } from 'react'
import { CardEllipse, CardOption, IndividualCardDetailsContainer, IndividualCardDiv, IndividualCardNumberContainer } from './style'
import { dots, masterCard, ellipse } from '../../assets/Icons/index'
import { Menu, MenuItem } from '@material-ui/core'

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


export default function PaymentCard({type,name,expiryData,cardNumber,setDrawerOpen, setCardData}:PaymentCardProps) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <CardEllipse src={ellipse} />
                <CardOption src={dots} onClick={handleClick}/>
                <div style={{display:'flex', width:'100%'}}>
                    <img src={type} alt={'payment-icon'}/>
                </div>
                <IndividualCardNumberContainer>
                    <strong>
                        {cardNumber}
                    </strong>
                </IndividualCardNumberContainer>
                <IndividualCardDetailsContainer>
                    <span>
                        {name}
                    </span>
                    <span>
                        {expiryData}
                    </span>
                </IndividualCardDetailsContainer>
                <div>
                </div>
            </IndividualCardDiv>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleEditCard()}>Edit Card</MenuItem>
                <MenuItem onClick={handleClose}>Delete Card</MenuItem>
            </Menu>
        </>
    )
}
