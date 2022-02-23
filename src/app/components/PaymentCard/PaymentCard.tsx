import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, Menu, MenuItem } from "@material-ui/core";

import {
    Carddetails,
    CardEllipse,
    CardNumber,
    CardOption,
    IndividualCardDiv,
    MenuBox,
} from "./style";
import { dots, ellipse } from "../../assets/Icons/index";
import { deleteCard } from "services/PaymentServices";
import { actions } from "store/reducers/PaymentReducer";
import { IndividualCard } from "../../pages/DashboardPage/DashboardContainers/PaymentsContainer/PaymentsCardContainer";

interface PaymentCardProps {
    key?: any;
    cardData: IndividualCard;
    setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
    setCardData?: Dispatch<SetStateAction<IndividualCard>>;
    updateCards?: () => void;
}

export default function PaymentCard({
    cardData,
    setDrawerOpen,
    setCardData,
    updateCards
}: PaymentCardProps) {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditCard = () => {
        handleClose();
        setCardData?.(cardData);
        setDrawerOpen?.(true);
    };

    const handleDeleteCard = async () => {
        handleClose();
        try {
            const res: { response: any; error: any } = await deleteCard(
                cardData.id
            );
            if (res.error === null) {
                dispatch(actions.getCards());
                updateCards?.()
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <Grid item lg={4} sm={6} xs={12} xl={3}>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} onClick={handleClick} />

                <Box mt={14}>
                    <CardNumber>**** **** **** {cardData.last4}</CardNumber>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                    <Carddetails>{cardData.name}</Carddetails>
                    <Carddetails ml={5}>
                        {`${String(cardData.exp_month).padStart(2, "0")}/${
                            cardData.exp_year
                        }`}
                    </Carddetails>
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
                    {/* <MenuItem onClick={handleEditCard}>Edit Card</MenuItem> */}
                </MenuBox>
            </IndividualCardDiv>
        </Grid>
    );
}
