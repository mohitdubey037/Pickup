import { Flex } from "app/components/Input/style";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2 } from "app/components/Typography/Typography";
import React, { useState, useEffect } from "react";
// import { rows, columns } from "./OrderSummaryHelper";
import { Button } from "../../../../components/Buttons";
import { Drawer } from "app/components/Drawer";
import OrderDetailsDrawer from "./OrderDetailsDrawer";
import ShipmentSummaryAndPayments from "./ShipmentSummaryAndPayments";


// import { DataGrid } from "@mui/x-data-grid";

import { navigate } from "@reach/router";
import { getShipmentDetails } from "services/SingleShipmentServices";
import { actions } from "store/reducers/SingleShipmentReducer";
import { useDispatch, useSelector } from "react-redux";
function OrderSummary({ path: string }) {

    const dispatch = useDispatch();
    const orderIds = useSelector((
        state: { singleShipment: { orderIds } }) => {
        return state.singleShipment.orderIds;
      });

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenOne, setDrawerOpenOne] = useState(false);
    const [orderSummaryData, setOrderSummaryData] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState<null|number>(null);
    const [totalCost, setTotalCost] = useState(0);

    const redirectBack = () => {
        navigate?.("/dashboard/charter-shipment/single-shipment", { replace: true });
    }

    const redirectForward = () => {
        navigate?.("/dashboard/charter-shipment/shipment-summary");
    }

    useEffect(() => {
        (async () => {
            if(orderIds?.length <= 0){
                redirectBack();
                return
            }
            const res = (await getShipmentDetails(orderIds)) as any;
            if (res.success) {
                const shipmentDetails = res.response.data.data;
                
                const data = shipmentDetails.shipmentSummary;
                const totalCost = data.reduce((acc, curr) => acc+curr.total, 0)
                dispatch(actions.setInvoice(shipmentDetails.invoiceId))
                setTotalCost(totalCost);
                setOrderSummaryData(data)
            }
        })()
    }, [orderIds, dispatch]);

    const onBackHandler = () => {
        dispatch(actions.resetOrderIds());
        redirectBack();
    }

    const onItemCountSelectHandler = (id: number) => {
        setDrawerOpen(true);
        setSelectedOrder(id);
    }

    const getOrderIdItem = (openInvoiceDrawer, value, id: any) => {
        return <span onClick={() => openInvoiceDrawer(id)} style={{ color: "#1B8AF0", cursor: "pointer" }}><u>{value}</u></span>;
    };

    const onHoldTable = (
        orderSummaryData: any[],
        openOrderDrawer: any,
    ) => {
        let makeTableData: any = [];
        if (orderSummaryData && orderSummaryData.length) {
            orderSummaryData.map((item: any) => {
                makeTableData.push({
                    "Order Id": item.refNo,
                    "Schedule": item.type,
                    "Item Count": getOrderIdItem(openOrderDrawer, item.itemCount, item.orderId),
                    "Order Cost": `$${item.total}`
                });
            });
        }
        return makeTableData;
    };
    const authUser = useSelector((state: any) => {
        return state.auth?.user;
      });
    
      if([1,2,3,4].indexOf(authUser.roleId) === -1) {
        navigate(' /non-authorized-page')
      }
    return (
        <>
            <ModuleContainer>
                <H2 title="Order Summary" />

                <Flex direction={"column"} top={20}>
                    <Table 
                        data={onHoldTable(orderSummaryData, onItemCountSelectHandler)} 
                        
                        getSelectedItems={(val) => console.log("OrderTableK", val)}
                    />
                    <Flex justifyContent="flex-end">
                        <p style={{
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            fontSize: '14px',
                            marginRight: "100px"
                        }}>Total <span style={{ paddingLeft: "35px" }}>${Number(totalCost).toFixed(2)}</span></p>
                    </Flex>

                </Flex>
                <Flex
                    style={{ marginBottom: 10, padding: "inherit" }}
                    direction={"row-reverse"}
                >
                    <Button
                        style={{ width: 190 }}
                        label="Proceed to Payment"
                        onClick={() => redirectForward()}
                    />
                    <Button
                        style={{ width: 190, marginRight: 20 }}
                        secondary
                        label="Back"
                        onClick={onBackHandler}
                    />
                    {/* <Button
                        style={{ width: 190, marginRight: 20 }}
                        secondary
                        label="drawer"
                        // onClick={() => {}}
                        onClick={() => {
                            setDrawerOpenOne(true);
                        }}
                    /> */}
                </Flex>
            </ModuleContainer>

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
                <OrderDetailsDrawer orderId={selectedOrder} setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </>
    );
}
export default OrderSummary;
