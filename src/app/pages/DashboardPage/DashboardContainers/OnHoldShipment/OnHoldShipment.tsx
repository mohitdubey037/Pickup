import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTableTop } from "./Style";
import { sliders } from "app/assets/Icons";
import { useEffect, useState } from "react";
import { getHoldingShipments } from "services/HoldingService";

import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Grid } from "@material-ui/core";
import { Drawer } from "app/components/Drawer";
import OrderDetailsDrawer from "../SignleShipmentContainer/OrderDetailsDrawer";
import { searchTable } from "./helper";

export interface OnHoldDataType {
    category: string;
    invoiceId: string;
    invoiceNumber: string;
    itemCount: number;
    orderId: number;
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
    const [orderId, setOrderId] = useState<string>("")

    useEffect(() => {
        (async () => {
            const res: { response: any, error: any } = await getHoldingShipments(filters)
            if (res.response) {
                setHoldData(res.response.data.data)
            }
        })()
    }, [filters]);

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
                    <Button label="Delete" secondary={true} onClick={() => { }} style={{ borderColor: '#C94C43', color: '#C94C43' }} />
                    <Button label="Schedule" onClick={() => { }} />
                </div>
            </OnHoldTableTop>
        );
    };

    const singleScheduleHandler = (id: number) => {
        console.log("singleScheduleHandler", id)
    }

    return (
        <ModuleContainer>
            <ContainerTitle>On Hold Shipments</ContainerTitle>
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
                data={searchTable(onHoldData, openInvoiceDrawer, singleScheduleHandler)}
                tableTop={tableTop()}
                showCheckbox
                showPagination
                perPageRows={15}
                filterColumns={[0, 1, 2, 3, 4, 5]}
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
                open={drawerOpen}
                title={"Order Items"}
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <OrderDetailsDrawer orderId={orderId} setDrawerOpen={setDrawerOpen} />
            </Drawer>

        </ModuleContainer>
    );
};

export default OnHoldShipmentContainer;
