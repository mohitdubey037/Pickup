import { useState } from "react";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { Grid } from "@mui/material";

import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import Select from "app/components/Select";
import { SearchTableTop } from "app/components/CommonCss/CommonCss";
import { reportsColoumns, reportsTable } from "./helper";

function ReportsContainer({ path }) {
  const authUser = useSelector((state: any) => state.auth?.user);

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
          <Select />
        </Grid>
      </Grid>

      <Table
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
