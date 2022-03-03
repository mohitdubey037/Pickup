import { useState } from "react";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { Box } from "@mui/material";

import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2, H3 } from "app/components/Typography/Typography";
import { checkSquare } from "app/assets/Icons";
import { Button } from "app/components/Buttons";
import { Drawer } from "app/components/Drawer";
import { SearchTableTop } from "app/components/CommonCss/CommonCss";
import { BulkOrderColoumns, OnHoldTable } from "./helper";
import { SuccessBox } from "./style";
import PayementDetailsDrawer from "./PayementDetailsDrawer";

const BulkSummary = ({ path }) => {
  const authUser = useSelector((state: any) => state.auth?.user);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [payementDrawerOpen, setPayementDrawerOpen] = useState(false);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });

  const openPaymentDrawer = () => {
    setPayementDrawerOpen(true);
  };

  const openOrderDrawer = () => {
    setDrawerOpen(true);
  };

  if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
    navigate("/non-authorized-page");
  }

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`Orders`} className="heading" />
        <Box>
          <Button
            label="Delete"
            onClick={() => {}}
            size="small"
            secondary
            disabled
            style={{ marginRight: "12px" }}
          />
          <Button
            label="Move to holding zone"
            onClick={() => {}}
            size="small"
            disabled
          />
        </Box>
      </SearchTableTop>
    );
  };

  return (
    <>
      <ModuleContainer>
        <H2 title="Bulk Orders" />
        <SuccessBox>
          <img src={checkSquare} alt="" />
          <p>
            Success! <span> 17 orders ready </span> to go and 3 orders added to
            order holding zone.
          </p>
        </SuccessBox>

        <Table
          data={OnHoldTable(openOrderDrawer)}
          coloumns={BulkOrderColoumns}
          tableTop={tableTop()}
          showPagination
          pagination={pagination}
          showCheckbox
          // onRowSelect={rowSelectHandler}
        />
        <Button
          label="Confirm Orders"
          size="medium"
          onClick={openPaymentDrawer}
          style={{ float: "right", margin: "16px 0" }}
        />
      </ModuleContainer>

      <Drawer
        open={drawerOpen}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        title="Order Items"
        closeIcon={true}
      ></Drawer>

      <Drawer
        open={payementDrawerOpen}
        setDrawerOpen={(flag) => setPayementDrawerOpen(flag)}
        title="Payment"
        closeIcon={true}
      >
        <PayementDetailsDrawer />
      </Drawer>
    </>
  );
};

export default BulkSummary;
