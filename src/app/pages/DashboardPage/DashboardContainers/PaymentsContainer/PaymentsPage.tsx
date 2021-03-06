import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";

import ModuleContainer from "app/components/ModuleContainer";
import { Button } from "app/components/Buttons";
import { Drawer } from "app/components/Drawer";
import { H2 } from "app/components/Typography/Typography";
import PaymentCardSkeleton from "app/components/PaymentCard/PaymentCardSkeleton";
import PaymentCardContainer from "./PaymentsCardContainer";
import { actions } from "store/reducers/PaymentReducer";
import AddCardForm from "./AddCardForm";

export default function PaymentsPage({ path: string }) {
  const dispatch = useDispatch();
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  const cardsData = useSelector((state: any) => state.paymentCard);

  const loading = useSelector((state: { globalState: { showLoader } }) => {
    return state.globalState.showLoader;
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(actions.getCards());
  }, []);

  if ([4].indexOf(authUser?.roleId) === -1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <Box display="flex" justifyContent="space-between">
        <H2 title="Cards" />
        <Button
          label="+ Add New Card"
          size="small"
          onClick={() => setDrawerOpen(true)}
        />
      </Box>

      {loading ? (
        <PaymentCardSkeleton />
      ) : (
        <PaymentCardContainer individualCardData={cardsData.paymentCardsData} />
      )}

      <Drawer
        open={drawerOpen}
        title="Add New Card"
        setDrawerOpen={setDrawerOpen}
        closeIcon
      >
        <AddCardForm setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </ModuleContainer>
  );
}
