
import { Drawer } from 'app/components/Drawer'
import { Dropdown } from 'app/components/Dropdown'
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import { Radio } from 'app/components/Radio'
import Select from 'app/components/Select'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import WarningMessage from 'app/components/WarningMessage/WarningMessage'
import { useState } from 'react'
import ShipmentSummaryTable from './ShipmentSummaryTable'
import SingleShipmentDetails from './SingleShipmentDetails'
import SingleSipmentForm from './SingleSipmentForm'
import {warningIcon} from '../../../../assets/Icons'


function ShipmentSummaryItem(Shippingid: string, Shedule: string, Itemcount: number, shippingcost: string) {
    return { Shippingid, Shedule, Itemcount, shippingcost };
}
const rows = [
    ShipmentSummaryItem('TOR-0607-123', 'Right Now', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-124', 'Right Now', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-125', '09:00 - 06/06/21', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-126', 'Right Now', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-127', 'Right Now', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-128', '09:00 - 06/06/21', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-126', 'Right Now', 15, '$50'),
    ShipmentSummaryItem('TOR-0607-126', 'Right Now', 15, '$50')
];


function SingleShipment({ path: string }) {
    const [drawerOpen, setDrawerOpen] = useState(true)

    return (
        <ModuleContainer >
            <ContainerTitle>
                Single Shipment
            </ContainerTitle>
            <FormContainer elevation={2}>
                <FormContainerTitle>
                    Address Details
                </FormContainerTitle>
                <div style={{ marginBottom: "30px" }}>
                    <SingleSipmentForm title={"Origin"} />
                    <SingleSipmentForm title={"Destination"} />
                </div>
            </FormContainer>
            <FormContainer elevation={2}>
                <FormContainerTitle>
                    Shipment Details
                </FormContainerTitle>
                <SingleShipmentDetails />
            </FormContainer>
            <Drawer
                open={drawerOpen}
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                title="Dummy Drawer"
                actionButtons={true}
                cancelButtonText="Cancel"
                actionButtonText="Save"
            >
                <ShipmentSummaryTable
                    shipmentItems={rows}
                />
                <WarningMessage
                imgSrc="warningIcon"
                id="1" />

            </Drawer>
        </ModuleContainer >
    )
}

export default SingleShipment
