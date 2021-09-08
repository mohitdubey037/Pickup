import React from 'react'
import { IndividualCardDetailsContainer, IndividualCardDiv, IndividualCardNumberContainer } from './style'
import { dots, masterCard, ellipse } from '../../assets/Icons/index'
import { Menu, MenuItem } from '@material-ui/core'

interface PaymentCardProps{
    type: string;
    name: string;
    expiryData: string;
    cardNumber: string
}


export default function PaymentCard({type,name,expiryData,cardNumber}:PaymentCardProps) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IndividualCardDiv>
                <img src={ellipse} style={{position:'absolute',top: '-2px', right: '-2px' , opacity:0.1}}/>
                <img src={dots} onClick={handleClick} style={{position:'absolute',top: '20px', right: '20px' , cursor:'pointer'}}/>
                <div style={{display:'flex', width:'100%'}}>
                    <img src={type}/>
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
                <MenuItem onClick={handleClose}>Edit Card</MenuItem>
                <MenuItem onClick={handleClose}>Delete Card</MenuItem>
            </Menu>
        </>
    )
}
