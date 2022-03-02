import { useEffect, useState } from "react";

import ModuleContainer from "app/components/ModuleContainer";
import { Drawer } from "app/components/Drawer";
import { TableNew } from "app/components/Table";
import { Button } from "app/components/Buttons";
import { H2, H3 } from "app/components/Typography/Typography";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";
import {
  deleteSavedLocation,
  getLocationList,
} from "services/LocationServices";
import { SearchTableTop } from "../SearchContainer/style";
import ContactDetailsSidebar from "./ContactDetailsSidebar";
import EditContactDetails from "./EditContactDetails";
import FileDrawer from "./FileDrawer";
import { favoriteLocationColoumns, getLocationData } from "./helper";
import { Flex } from "app/components/CommonCss/CommonCss";

const DRAWER_TITLE = {
  contactDetails: "Contact Details",
  editContactDetails: "Edit Contact Details",
  importCSV: "Import CSV",
};

function FavoriteLocations({ path }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [locationData, setLocationData] = useState<any>([]);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 0,
  });
  const [sorting, setSorting] = useState({
    field: "createdDate",
    type: "desc",
  });

  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (type: string, item?: any) => {
    if (type === "contactDetails" || type === "editContactDetails") {
      setSelectedLocation(item);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const deleteLocation = async (locationId: string) => {
    const res: any = await deleteSavedLocation(locationId);
    if (res.error === null) {
      getLocationListData();
    }
  };

  const tableTop = () => {
    return (
      <SearchTableTop>
        <H3 text={`${locationData.length} Locations`} className="heading" />
      </SearchTableTop>
    );
  };

  useEffect(() => {
    getLocationListData();
  }, []);

  const getLocationListData = async (
    page?: number,
    sort?: { field: string; type: string }
  ) => {
    let urlParams = "";
    let params: any = {
      page: page !== undefined ? page + 1 : pagination.page + 1,
      chunk: 10,
      sortingField: sort !== undefined ? sort.field : sorting.field,
      sortingType: sort !== undefined ? sort.type : sorting.type,
    };
    if (sort) {
      setSorting({
        field: sort.field,
        type: sort.type,
      });
    }
    let tempLen = Object.entries(params).length;
    Object.entries(params).forEach(
      ([key, value], index) =>
        (urlParams += value
          ? `${key}=${value}${index === tempLen - 1 ? "" : "&"}`
          : "")
    );
    const res: any = await getLocationList(urlParams);
    if (res?.error === null) {
      const data = res.response.data.data;
      setLocationData(data.list);
      setPagination({
        count: data.pageMetaData.total,
        page: data.pageMetaData.page - 1,
      });
    } else {
      setLocationData([]);
    }
    setLoading(false);
  };

  const closeEditLocationDrawer = (isUpdate?: boolean) => {
    setDrawerOpen(false);
    isUpdate && getLocationListData();
  };

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Favourite Locations" />
        <Button
          size="medium"
          label="Import from CSV"
          onClick={() => openDrawer("importCSV")}
        />
      </Flex>

      {loading ? (
        <TableSkeleton />
      ) : locationData?.length > 0 ? (
        <TableNew
          tableTop={tableTop()}
          coloumns={favoriteLocationColoumns}
          data={getLocationData(locationData, openDrawer, deleteLocation)}
          showPagination
          pagination={pagination}
          onPageChange={(page) => getLocationListData(page)}
          sorting={sorting}
          onSortChange={(field, type) =>
            getLocationListData(undefined, { field, type })
          }
        />
      ) : (
        <NullState />
      )}

      <Drawer
        open={drawerOpen}
        title={DRAWER_TITLE?.[drawerType] || ""}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
      >
        {drawerType === "contactDetails" ? (
          <ContactDetailsSidebar contactInfo={selectedLocation} />
        ) : drawerType === "editContactDetails" ? (
          <EditContactDetails
            data={selectedLocation}
            onClose={closeEditLocationDrawer}
          />
        ) : drawerType === "importCSV" ? (
          <FileDrawer />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
}

export default FavoriteLocations;
