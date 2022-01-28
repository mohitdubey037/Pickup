import React, { Dispatch, SetStateAction } from 'react'
import { Carddetails, CardEllipse,CardNumber, CardOption, IndividualCardDiv, MenuBox } from './style'
import { dots, ellipse } from '../../assets/Icons/index'
import { Box, Grid, Menu, MenuItem } from '@material-ui/core'
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
        <Grid item md={4} xs={12}>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} onClick={handleClick}/>
                <Box mt={14}>
                <CardNumber>{cardData.number}</CardNumber>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                <Carddetails>{cardData.name}</Carddetails>
                <Carddetails ml={5}>{`${cardData.expiry_month}/${cardData.expiry_year}`}</Carddetails>
                </Box>
                <MenuBox
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="menulist"
            >
                {/* <MenuItem onClick={() => handleEditCard()}>Edit Card</MenuItem> */}
                <MenuItem onClick={handleDeleteCard}>Delete Card</MenuItem>
            </MenuBox>
            </IndividualCardDiv>
            </Grid>
        </>
    )
}
