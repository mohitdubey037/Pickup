import { Flex } from "app/components/Input/style";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import React, { useState } from "react";
import OrderHoldingComponent from "./OrderHoldingComponent";
import { rows, columns } from "./OrderSummaryHelper";
import { Button } from "../../../../components/Buttons";
import { Drawer } from "app/components/Drawer";
import OrderDetailsDrawer from "./OrderDetailsDrawer";
import ShipmentSummaryAndPayments from "./ShipmentSummaryAndPayments"
import { useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";


import { navigate } from '@reach/router'
function OrderSummary({ path: string }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenOne, setDrawerOpenOne] = useState(false);
    const orders = useSelector((state: { order: { orders: any[] } }) => state.order.orders)
    return (
        <>
            <ModuleContainer>
                <Flex>
                    <Flex flex={1}>
                        <ContainerTitle>Order Summary</ContainerTitle>
                    </Flex>
                    <div style={{ width: 300 }}></div>
                </Flex>

                <Flex direction={"column"} top={20}>

                    <Table data={orders} />

                    {/* <Table data={OrderSummaryTable} /> */}
                    <DataGrid rows={rows} columns={columns} checkboxSelection />

                </Flex>
            </ModuleContainer>
            <div
                style={{
                    display: "inline-flex",
                    justifyContent: "space-evenly",
                    paddingLeft: 400,
                }}
            >
                <ContainerTitle>Total</ContainerTitle>
            </div>
            <div
                style={{
                    display: "inline-flex",
                    justifyContent: "space-evenly",
                    paddingLeft: 150,
                }}
            >
                <ContainerTitle>$250</ContainerTitle>
            </div>
            <div
                style={{
                    marginLeft: 600,
                    padding: 10,
                    paddingTop: 30,
                    paddingBottom: 40,
                }}
            >
                <OrderHoldingComponent />
            </div>
            <Flex
                style={{ marginBottom: 10, padding: "inherit" }}
                direction={"row-reverse"}
            >
                <Button
                    style={{ width: 190 }}
                    label="Proceed to Payment"
                    // onClick={() => {
                    //   setDrawerOpen(true);
                    // }}
                    onClick={() => {
                        navigate?.("shipment-summary")
                    }}

                />
                <Button
                    style={{ width: 190, marginRight: 20 }}
                    secondary
                    label="Back"
                    // onClick={() => {}}
                    onClick={() => {
                        setDrawerOpen(true);
                    }}
                />
                <Button
                    style={{ width: 190, marginRight: 20 }}
                    secondary
                    label="drawer"
                    // onClick={() => {}}
                    onClick={() => {
                        setDrawerOpenOne(true);
                    }}
                />
            </Flex>
            <Drawer
                open={drawerOpenOne}
                title="Payments"
                setDrawerOpen={(flag) => setDrawerOpenOne(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <ShipmentSummaryAndPayments />
            </Drawer>
            <Drawer
                open={drawerOpen}
                title="Order Details"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <OrderDetailsDrawer orderId={6677544333} setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </>
    );
}
export default OrderSummary;
