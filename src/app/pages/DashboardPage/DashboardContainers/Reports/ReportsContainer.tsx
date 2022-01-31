import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import Select from "app/components/Select";

import { ReportsTableTop } from "./styles";
import { reportsTable } from "./helper";
import { Flex } from "app/components/Input/style";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";

function ReportsContainer({ path: string }) {
  const tableTop = () => {
    return (
      <ReportsTableTop>
        <p>{reportsTable.length} Shipments</p>
        <div>
          <Button
            label="Download All"
            secondary={true}
            style={{ width: 150 }}
            onClick={() => {}}
          />
        </div>
      </ReportsTableTop>
    );
  };
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if([2,3].indexOf(authUser.roleId) === -1) {
    navigate(' /non-authorized-page')
  }
  return (
    <ModuleContainer>
      <Flex>
        <Flex flex={1}>
          <ContainerTitle title="Reports" />
        </Flex>
        <div style={{ width: 300 }}>
          <Select style={{ backgroundColor: "white" }} />
        </div>
      </Flex>

      <Flex direction={"column"} top={20}>
        <Table
          data={reportsTable}
          tableTop={tableTop()}
          
          showPagination
          perPageRows={10}
          filterColumns={[0, 1, 2, 3, 4, 5]}
        />
      </Flex>
    </ModuleContainer>
  );
}

export default ReportsContainer;
