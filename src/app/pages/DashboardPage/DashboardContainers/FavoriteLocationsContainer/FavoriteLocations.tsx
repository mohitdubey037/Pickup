import React from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { SearchTableTop, SearchFieldsWrapper } from "../SearchContainer/style";
import { Table } from "app/components/Table";
import { searchTable } from "../SearchContainer/helper";
import { Button } from "app/components/Buttons";

function FavoriteLocations(props: RouteComponentProps) {
  const tableTop = () => {
    return (
      <SearchTableTop>
        <Flex style={{alignItems:'center'}}>
          <p style={{flex:1,textAlign:'start'}}>{searchTable.length} Shipments</p>
          <Button
          secondary={true}
          label="Import from CSV" onClick={() => {}}
          style={{width:150}}
          />
        </Flex>
      </SearchTableTop>
    );
  };

  return (
    <ModuleContainer>
      <Flex direction={"row-reverse"}>
        <Select label={""} style={{ backgroundColor: "white" }} />
      </Flex>
      <Flex direction="column" style={{marginTop:20}}>
        <Table
          data={searchTable}
          tableTop={tableTop()}
          showCheckbox={false}
          showPagination
          perPageRows={10}
          filterColumns={[0, 1, 2, 3, 4, 5]}
        />
      </Flex>
    </ModuleContainer>
  );
}

export default FavoriteLocations;
