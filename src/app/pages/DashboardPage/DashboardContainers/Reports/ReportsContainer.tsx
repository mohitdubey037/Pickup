import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { TableNew } from "app/components/Table";
import Select from "app/components/Select";
import { reportsColoumns, reportsTable } from "./helper";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { Grid } from "@mui/material";
import { SearchTableTop } from "../SearchContainer/style";
import { useState } from "react";
import SelectNew from "app/components/Select/SelectNew";

function ReportsContainer({ path: string }) {
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });
  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${reportsTable.length} Orders`} className="heading" />
        <Button
          label="Download All"
          onClick={() => {}}
          size="small"
          secondary
        />
      </SearchTableTop>
    );
  };
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if ([2, 3].indexOf(authUser?.roleId) === -1) {
    navigate(" /non-authorized-page");
  }
  return (
    <ModuleContainer>
        <Grid container alignItems="center">
            <Grid item md={10} sm={9} xs={6}>
                <H2 title="Reports" />
            </Grid>
            <Grid item md={2} sm={3} xs={6}>
                <SelectNew />
            </Grid>
        </Grid>
        
        <TableNew
          data={reportsTable}
          coloumns={reportsColoumns}
          tableTop={tableTop()}
          showPagination
          pagination={pagination}
        />
    </ModuleContainer>
  );
}

export default ReportsContainer;
