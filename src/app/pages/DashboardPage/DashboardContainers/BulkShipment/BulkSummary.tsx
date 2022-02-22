
import ModuleContainer from "app/components/ModuleContainer";
import { TableNew } from "app/components/Table";
import { H2, H3 } from "app/components/Typography/Typography";
import { BulkOrderColoumns, OnHoldTable } from "./helper";
import { OnHoldTableTop, SuccessBox } from "./style";
import { dots3 } from "app/assets/Icons";
import {checkSquare} from "app/assets/Icons"
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { useState } from "react";
import { SearchTableTop } from "../SearchContainer/style";
import { Button } from "app/components/Buttons";
import { Box } from "@mui/material";
const BulkSummary = ({ path: string }) => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  if([1,2,3,4].indexOf(authUser?.roleId) === -1) {
    navigate('/non-authorized-page')
  }
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });

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
        /></Box>
      </SearchTableTop>
    );
  };

  return (
    <ModuleContainer>
      <H2 title="Bulk Orders" />

        <SuccessBox>
        <img src={checkSquare} alt="" />
       <p> Success! <span> 17 orders ready </span>  to go and 3 orders added to order holding zone.</p>
        </SuccessBox>

      {/* <Table 
        data={OnHoldTable}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      /> */}
        <TableNew
          data={OnHoldTable}
          coloumns={BulkOrderColoumns}
          tableTop={tableTop()}
          showPagination
          pagination={pagination}
          showCheckbox
          // onRowSelect={rowSelectHandler}
        />
    </ModuleContainer>
  );
};

export default BulkSummary;
