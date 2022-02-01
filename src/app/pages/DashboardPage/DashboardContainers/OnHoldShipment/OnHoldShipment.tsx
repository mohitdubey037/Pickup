import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2 } from "app/components/Typography/Typography";
import { OnHoldTableTop } from "./Style";
import { sliders } from "app/assets/Icons";
import { useCallback, useEffect, useState } from "react";
import { getHoldingShipmentsService, scheduleShipmentService, deleteShipmentService } from "services/HoldingService";

import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Grid } from "@material-ui/core";
import { Drawer } from "app/components/Drawer";
import OrderDetailsDrawer from "../SignleShipmentContainer/OrderDetailsDrawer";
import { getOrderIdListFromIndexList, onHoldTable } from "./helper";
import ScheduleShipmentsDrawer from "./ScheduleShipmentsDrawer";
import { showToast } from "utils";

export interface OnHoldDataType {
    category: string;
    invoiceId: string;
    invoiceNumber: string;
    itemCount: number;
    orderId: string;
    shipmentCost: number;
    shippingDate: string;
    shippingReference: string;
    status: string;
    total: string;
    type: string;
}

interface FilterType {
    invoiceNumber: string;
    shippingId: string;
    fromDate: string;
    toDate: string;
}

const OnHoldShipmentContainer = ({ path: string }) => {

    const initialFilter = {
        invoiceNumber: "",
        shippingId: "",
        fromDate: "",
        toDate: ""
    }

    const [onHoldData, setHoldData] = useState<OnHoldDataType[]>([])
    const [filters, setFilters] = useState<FilterType>(initialFilter)
    const [fromDateOpen, setFromDateOpen] = useState<boolean>(false)
    const [toDateOpen, setToDateOpen] = useState<boolean>(false)
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [singleScheduleDrawerOpen, setScheduleDrawerOpen] = useState<boolean>(false)
    const [orderId, setOrderId] = useState<string>("")
    const [selectedIndex, setSelectedIndex] = useState<number[]>([])

    const getOnHoldDataHandler = async () => {
        const res: { response: any, error: any } = await getHoldingShipmentsService(filters)
            if (res.response) {
                setHoldData(res.response.data.data)
        }
    }

    const deleteShipmentHandler = async () => {
        const res: { response: any, error: any } = await deleteShipmentService(orderId)
            if (res.response) {
                showToast(`Order ${orderId} ${res.response.data.message}`, "success")
                // setHoldData(res.response.data.data)
        }
    }

    const getOnHoldDatahandlerCallback = useCallback(getOnHoldDataHandler, [filters])

    useEffect(() => {
        getOnHoldDatahandlerCallback()
    }, [getOnHoldDatahandlerCallback]);

    const onChangeHandler = (e, type, val) => {
        const updatedFilter = { ...filters }
        if (type === "invoiceNumber") updatedFilter.invoiceNumber = e.target.value
        if (type === "shippingId") updatedFilter.shippingId = e.target.value
        if (type === "fromDate") updatedFilter.fromDate = val
        if (type === "toDate") updatedFilter.toDate = val
        setFilters(updatedFilter)
    }

    const openInvoiceDrawer = (id: string) => {
        setOrderId(id);
        setDrawerOpen(true);
    }

    const tableTop = () => {
        return (
            <OnHoldTableTop>
                <p>{onHoldData.length} orders</p>
                <div>
                    <Button label="Delete" secondary={true} onClick={() => deleteShipmentHandler()} style={{ borderColor: '#C94C43', color: '#C94C43' }} />
                    <Button label="Schedule" onClick={() => setScheduleDrawerOpen(true)} />
                </div>
            </OnHoldTableTop>
        );
    };

    const handleSubmitHandler = async (shippingSchedule: string, date: string | null, time: string | null) => {
        const orderIdList = await getOrderIdListFromIndexList(onHoldData, selectedIndex)
        console.log('orderIdList', orderIdList)
        const data = {
            scheduleType: shippingSchedule,
            orderAt: date,
            shipment: orderIdList
        }
        const res: { response: any, error: any } = await scheduleShipmentService(data)
        if(!res.error){
            setSelectedIndex([])

        }
    }

    const singleScheduleHandler = (id: string, index: number) => {
        setOrderId(id);
        setSelectedIndex([index]);
        setScheduleDrawerOpen(true);
    }

    const multipleScheduleHandler = (values: any) => {
        setSelectedIndex([...values]);
    }

    return (
        <ModuleContainer>
            <H2 title="On Hold Shipments" />
            <Grid container spacing={4} alignItems="center" style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Grid item xs={2}>
                    <Input label="Invoice Number" value={filters.invoiceNumber} onChange={(e) => onChangeHandler(e, 'invoiceNumber', null)} placeholder="eg. 123,321" />
                </Grid>
                <Grid item xs={2}>
                    <Input label="Order Id" value={filters.shippingId} onChange={(e) => onChangeHandler(e, 'shippingId', null)} placeholder="eg. 123,321" />
                </Grid>
                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="From Order Date"
                            value={filters.fromDate || null}
                            onChange={(val) => onChangeHandler(null, "fromDate", val)}
                            open={fromDateOpen}
                            onOpen={() => setFromDateOpen(true)}
                            onClose={() => setFromDateOpen(false)}
                            renderInput={(params) => (
                                <TextField
                                    label="Date"
                                    placeholder={"e.g 06/06/2021"}
                                    {...params}
                                    onClick={() => setFromDateOpen(true)}
                                    defaultValue={""}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="To Order Date"
                            value={filters.toDate || null}
                            onChange={(val) => onChangeHandler(null, "toDate", val)}
                            open={toDateOpen}
                            onOpen={() => setToDateOpen(true)}
                            onClose={() => setToDateOpen(false)}
                            renderInput={(params) => (
                                <TextField
                                    label="Date"
                                    placeholder={"e.g 06/06/2021"}
                                    {...params}
                                    onClick={() => setToDateOpen(true)}
                                    defaultValue={""}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={2}>
                    <img src={sliders} alt="" />
                </Grid>
            </Grid>

            <Table
                data={onHoldTable(onHoldData, openInvoiceDrawer, singleScheduleHandler)}
                tableTop={tableTop()}
                showCheckbox
                showPagination
                perPageRows={10}
                filterColumns={[0, 1, 2, 3, 4, 5]}
                getSelectedItems={multipleScheduleHandler}
                selectedItems={selectedIndex}
            />

            <Drawer
                open={drawerOpen}
                title={"Order Items"}
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <OrderDetailsDrawer orderId={orderId} setDrawerOpen={setDrawerOpen} />
            </Drawer>
            
            <Drawer
                open={singleScheduleDrawerOpen}
                title={"Order Items"}
                setDrawerOpen={(flag) => setScheduleDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <ScheduleShipmentsDrawer handleSubmit={handleSubmitHandler} submitButtonLabel={"Save"} setDrawerOpen={setScheduleDrawerOpen} />
            </Drawer>

        </ModuleContainer>
    );
};

export default OnHoldShipmentContainer;
