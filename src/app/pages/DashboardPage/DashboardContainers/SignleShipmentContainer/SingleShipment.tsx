import { useState } from 'react';
import { Drawer } from 'app/components/Drawer'
import { Dropdown } from 'app/components/Dropdown'
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import { Radio } from 'app/components/Radio'
import Select from 'app/components/Select'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import SingleShipmentDetails from './SingleShipmentDetails'
import SingleSipmentForm from './SingleSipmentForm'
import { CardDetails } from 'app/components/PaymentCardDetails';
// import { mastercard } from 'app/assets/Images';
import { masterCard } from "../../../../assets/Images/index";

function SingleShipment({path:string}) {
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
                setDrawerOpen={(flag)=>setDrawerOpen(flag)} 
                closeIcon={true} 
                title="Dummy Drawer"
                actionButtons={true}
                cancelButtonText="Cancel"
                actionButtonText="Save"
            >
                <CardDetails cardNumber = {"1234 5678 1234 3421"} nameOnCard = {"Deepak Pathak"} expiryDate = {new Date()} cardTypeImage = {masterCard}/>
            </Drawer>
        </ModuleContainer >
    )
}

export default SingleShipment
