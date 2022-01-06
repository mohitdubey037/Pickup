import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { Drawer } from "app/components/Drawer";
import { SearchTableTop } from "../SearchContainer/style";
import { Table } from "app/components/Table";
import { searchTable } from "./helper";
import { Button } from "app/components/Buttons";
import ContactDetailsSidebar from "./ContactDetailsSidebar";
import {getLocationList} from "../../../../../services/LocationServices/index"
import { find } from "shelljs";

function FavoriteLocations(props: RouteComponentProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [LocationData, setLocationData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const res = (await getLocationList()) as any;
      if (!res.error) {
        const LocationDetails = res.response.data.data;
        console.log("data");
        console.log("shipmentDetailsRes", LocationDetails);
        
        setLocationData(LocationDetails);
      }
    })();
  }, []);
  const getTableData=()=>{
    return LocationData.map((item) => {
      return {
        "Client": `${item.locationFirstName} ${item.locationLastName}`,
        "Email": item.locationEmail,
        "Date": item.createdDate,
        "Address": item.locationAddressLine1,
        "City": item.locationCity,
        "Provience/State": item.locationProvinceCode,
        "Country":item.locationCountry
      };
    });
  }
  const tableTop = () => {
    
    return (
      <SearchTableTop>
        <Flex style={{ alignItems: "center" }}>
          <p style={{ flex: 1, textAlign: "start" }}>
            {searchTable.length} Shipments
          </p>
          <Button
            secondary={true}
            label="Import from CSV"
            onClick={() => {}}
            style={{ width: 150 }}
          />
        </Flex>
      </SearchTableTop>
    );
  };

  return (
    <>
      <ModuleContainer>
     
        <Flex direction="column" style={{ marginTop: 20 }}>
          <Table
            data={getTableData()}
            tableTop={tableTop()}
            showCheckbox={false}
            showPagination
            perPageRows={10}
            filterColumns={[0, 1, 2, 3, 4, 5]}
            onRowSelect={(row) => {
              find()
              setSelectedRow(row);
              setDrawerOpen(true);
            }}
          />
        </Flex>
      </ModuleContainer>
      <Drawer
        open={drawerOpen}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        title="Contact Details"
        actionButtons={true}
        cancelButtonText="Delete"
        actionButtonText="Edit"
        cancelButtonType="secondary"
      >
        <ContactDetailsSidebar contactInfo={selectedRow} />
      </Drawer>
    </>
  );
}

export default FavoriteLocations;
