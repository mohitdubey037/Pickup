import React, { useEffect } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import { OnHoldTableTop } from "../OnHoldShipment/Style";
import { useNavigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";

export default function ChildAccountList({ path: string }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(actions.getCards());
}, []);

  const addChild = () => {
    navigate("/dashboard/my-account/child-account");
  };
  const childDetails = () => {
    navigate("/dashboard/my-account/child-account-details");
  };

  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p> Accounts</p>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Child Accounts" />
        <Button size="medium" label="child Details" onClick={childDetails} />
        <Button size="medium" label="Create New" onClick={addChild} />
      </Flex>
      <Table
        data={[]}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={10}
      />
    </ModuleContainer>
  );
}
