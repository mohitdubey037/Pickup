import React, { Dispatch, SetStateAction } from 'react'
import { CardEllipse, CardOption, IndividualCardDetailsContainer, IndividualCardDiv, IndividualCardNumberContainer } from './style'
import { dots, masterCard, ellipse } from '../../assets/Icons/index'
import { Menu, MenuItem } from '@material-ui/core'
import { deleteCard } from 'services/PaymentServices';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'store/reducers/PaymentReducer';
import {IndividualCard} from "../../pages/DashboardPage/DashboardContainers/PaymentsContainer/PaymentsCardContainer"

interface PaymentCardProps{
    cardData:IndividualCard;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    setCardData: Dispatch<SetStateAction<IndividualCard>>;
}


export default function PaymentCard({cardData,setDrawerOpen, setCardData}:PaymentCardProps) {
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
        
        setCardData(cardData)
        setDrawerOpen(true)
    }

    const handleDeleteCard = async () => {
        handleClose();
        try{
        const res: { response: any, error: any } = await deleteCard(customerCode,cardData.card_id);
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
                        {cardData.number}
                    </strong>
                </IndividualCardNumberContainer>
                <IndividualCardDetailsContainer>
                    <span>
                        {cardData.name}
                    </span>
                    <span>
                        {`${cardData.expiry_month}/${cardData.expiry_year}`}
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
                {/* <MenuItem onClick={() => handleEditCard()}>Edit Card</MenuItem> */}
                <MenuItem onClick={handleDeleteCard}>Delete Card</MenuItem>
            </Menu>
        </>
    )
}
