import React, { Dispatch, SetStateAction } from 'react'
import { CardEllipse, CardOption, IndividualCardDetailsContainer, IndividualCardDiv, IndividualCardNumberContainer } from './style'
import { dots, masterCard, ellipse } from '../../assets/Icons/index'
import { Menu, MenuItem } from '@material-ui/core'
import { deleteCard } from 'services/PaymentServices';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'store/reducers/PaymentReducer';

interface cardData {
    cardNumber?: string;
    expiryDate?: string;
    nameOnCard?: string;
}
interface PaymentCardProps{
    id:string;
    name: string;
    expiryData: string;
    cardNumber: string;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    setCardData: Dispatch<SetStateAction<cardData>>;
}


export default function PaymentCard({id,name,expiryData,cardNumber,setDrawerOpen, setCardData}:PaymentCardProps) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const customerCode = useSelector((state: any) => state.paymentCard.paymentCardsData.customer_code);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditCard = () => {
        handleClose();
        const cardData = {
            cardNumber: cardNumber,
            expiryDate: expiryData,
            nameOnCard: name,
        }
        setCardData(cardData)
        setDrawerOpen(true)
    }

    const handleDeleteCard = async () => {
        handleClose();
        try{
        const res: { response: any, error: any } = await deleteCard(customerCode,id);
        if(res) {
            dispatch(actions.getCards());
        }
       } 
       catch (error) {
           console.log('error', error)
       }
    }
    return (
        <>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} onClick={handleClick}/>
                <div style={{display:'flex', width:'100%'}}>
                    <img src={masterCard} alt={'payment-icon'}/>
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
                <MenuItem onClick={handleDeleteCard}>Delete Card</MenuItem>
            </Menu>
        </>
    )
}
