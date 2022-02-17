import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import { Drawer } from "app/components/Drawer";
import { SearchTableTop } from "../SearchContainer/style";
import { Table } from "app/components/Table";
import { Button } from "app/components/Buttons";
import ContactDetailsSidebar from "./ContactDetailsSidebar";
import { getLocationList } from "../../../../../services/LocationServices/index";
import { edit, trash } from "app/assets/Icons";
import EditContactDetails from "./EditContactDetails";
import services from "services";
import FileDrawer from "./FileDrawer";
import { H3 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";

function FavoriteLocations(props: RouteComponentProps) {
  const [drawerOpenOne, setDrawerOpenOne] = useState(false);
  const [showDetailDrawer, setShowDetailDrawer] = useState(false);
  const [showEditDrawer, setShowEditDrawer] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  const [locationData, setLocationData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const res = (await getLocationList()) as any;
      if (!res.error) {
        const LocationDetails = res.response.data.data;
        console.log("data", LocationDetails);
        console.log("shipmentDetailsRes", LocationDetails);

        setLocationData(LocationDetails);
      }
    })();
  }, []);

  const drawerCloseHandler = (flag) => {
    setSelectedRow(null);
    setShowDetailDrawer(flag);
    setShowEditDrawer(flag);
  };

  const editClickHandler = (item: any) => {
    setShowEditDrawer(true);
    setSelectedRow(item);
  };

  const deleteClickHandler = async (item: any) => {
    const res = await services.delete(
      `location/business/location/${item.locationId}`,
      "location"
    );
    console.log("updateRes", res);
  };

  const getActionItem = (item) => {
    return (
      <Flex
      justifyContent="space-between"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <img
          src={edit}
          alt=""
          onClick={() => editClickHandler(item)}
          onKeyPress={(e) => e.key === "ENTER" && editClickHandler(item)}
        />
        <img
          src={trash}
          alt=""
          onClick={() => deleteClickHandler(item)}
          onKeyPress={(e) => e.key === "ENTER" && deleteClickHandler(item)}
        />
      </Flex>
    );
  };

  const getTableData = () => {
    return locationData.map((item) => {
      return {
        Client: `${item.locationFirstName} ${item.locationLastName}`,
        Email: item.locationEmail,
        Date: item.createdDate,
        Address: item.locationAddressLine1,
        City: item.locationCity,
        "Provience/State": item.locationProvinceCode,
        Country: item.locationCountry,
        Action: getActionItem(item),
      };
    });
  };

  const rowSelectHandler = (_, index) => {
    const detail = locationData[index];
    if (detail) {
      setSelectedRow(detail);
      setShowDetailDrawer(true);
    }
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${locationData.length} Orders`} className="heading" />
        <Button
          secondary={true}
          label="Import from CSV"
          size="medium"
          onClick={() => {
            setDrawerOpenOne(true);
          }}
        />
      </SearchTableTop>
    );
  };

  return (
    <>
      <ModuleContainer>
        <Table
          data={getTableData()}
          tableTop={tableTop()}
          showCheckbox={false}
          showPagination
          perPageRows={10}
          filterColumns={[0, 1, 2, 3, 4, 5]}
          onRowSelect={rowSelectHandler}
          getSelectedItems={(val) => console.log("rowselecthandler", val)}
        />
      </ModuleContainer>
      <Drawer
        open={showDetailDrawer}
        setDrawerOpen={(flag) => drawerCloseHandler(flag)}
        closeIcon={true}
        title="Contact Details"
      >
        <ContactDetailsSidebar contactInfo={selectedRow} />
      </Drawer>

      <Drawer
        open={showEditDrawer}
        setDrawerOpen={(flag) => drawerCloseHandler(flag)}
        closeIcon={true}
        title="Edit Contact Details"
      >
        <EditContactDetails
          contactInfo={selectedRow}
          onClose={drawerCloseHandler}
        />
      </Drawer>
      <Drawer
        open={drawerOpenOne}
        title="Import CSV"
        setDrawerOpen={(flag) => setDrawerOpenOne(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <FileDrawer />
      </Drawer>
    </>
  );
}

export default FavoriteLocations;
