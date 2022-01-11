import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import { Flex } from "app/components/Input/style";

import { Drawer } from "app/components/Drawer";
import { SearchTableTop } from "../SearchContainer/style";
import { Table } from "app/components/Table";

import { Button } from "app/components/Buttons";
import ContactDetailsSidebar from "./ContactDetailsSidebar";
import { getLocationList } from "../../../../../services/LocationServices/index"

import { edit, trash } from "app/assets/Icons"
import EditContactDetails from "./EditContactDetails";
import services from "services";

function FavoriteLocations(props: RouteComponentProps) {
    
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
    }

    const editClickHandler = (item: any) => {
        setShowEditDrawer(true);
        setSelectedRow(item);
    }

    const deleteClickHandler = async(item: any) => {
        const res = await services.delete(`location/business/location/${item.locationId}`, 'location');
        console.log("updateRes", res);
    }

    const getActionItem = (item) => {
        return (
            <div style={{ display: 'flex', gap: '20px' }} onClick={(e) => {e.preventDefault(); e.stopPropagation();}}>
                <img src={edit} alt='' onClick={() => editClickHandler(item)} onKeyPress={(e) => e.key === "ENTER" && editClickHandler(item)} />
                <img src={trash} alt='' onClick={() => deleteClickHandler(item)} onKeyPress={(e) => e.key === "ENTER" && deleteClickHandler(item)} />
            </div>
        )
    }

    const getTableData = () => {
        return locationData.map((item) => {
            return {
                "Client": `${item.locationFirstName} ${item.locationLastName}`,
                "Email": item.locationEmail,
                "Date": item.createdDate,
                "Address": item.locationAddressLine1,
                "City": item.locationCity,
                "Provience/State": item.locationProvinceCode,
                "Country": item.locationCountry,
                "Action": getActionItem(item)
            };
        });
    }

    const rowSelectHandler = (_, index) => {
        const detail = locationData[index];
        if(detail){
            setSelectedRow(detail);
            setShowDetailDrawer(true);
        }
    }

    const tableTop = () => {
        return (
            <SearchTableTop>
                <Flex style={{ alignItems: "center" }}>
                    <p style={{ flex: 1, textAlign: "start" }}>
                        {locationData.length} Shipments
                    </p>
                    <Button
                        secondary={true}
                        label="Import from CSV"
                        onClick={() => { }}
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
                        onRowSelect={rowSelectHandler}
                        getSelectedItems={(val) => console.log("rowselecthandler", val)}
                    />
                </Flex>
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
                <EditContactDetails contactInfo={selectedRow} onClose={drawerCloseHandler} />
            </Drawer>
        </>
    );
}

export default FavoriteLocations;
