import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, IconButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ellipse } from "app/assets/Icons";
import { IndividualCard } from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/PaymentsCardContainer";
import { deleteCard } from "services/PaymentServices";
import { actions } from "store/reducers/PaymentReducer";
import { showConfirmAlert } from "utils";
import {
  Carddetails,
  CardEllipse,
  CardNumber,
  IndividualCardDiv,
  MenuBox,
} from "./style";

interface PaymentCardProps {
  key?: any;
  cardData: IndividualCard;
  setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
  setCardData?: Dispatch<SetStateAction<IndividualCard>>;
  saveAction?: () => void;
  cardFrom?: boolean;
}

export default function PaymentCard({
  cardData,
  setDrawerOpen,
  setCardData,
  saveAction,
  cardFrom,
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

  const handleDeleteCard = () => {
    showConfirmAlert({
      title: "Delete Card",
      message: "Are you sure you want to delete this card?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const res: any = await deleteCard({
              cardId: cardData.id,
              cardFrom,
              customerId: cardData.customer,
            });
            if (res.error === null) {
              dispatch(actions.getCards());
              saveAction?.();
            }
            handleClose();
          },
        },
      ],
    });
  };

  return (
    <Grid item xl={4} sm={6} xs={12}>
      <IndividualCardDiv>
        <CardEllipse src={ellipse} />
        <IconButton className="card-options" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>

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
          <MenuItem onClick={handleDeleteCard}>Delete Card</MenuItem>
          {/* <MenuItem onClick={handleEditCard}>Edit Card</MenuItem> */}
        </MenuBox>
      </IndividualCardDiv>
    </Grid>
  );
}
