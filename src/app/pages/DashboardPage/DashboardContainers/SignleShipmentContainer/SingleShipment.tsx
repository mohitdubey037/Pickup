
import { Dropdown } from 'app/components/Dropdown'
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import { Radio } from 'app/components/Radio'
import Select from 'app/components/Select'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import SingleShipmentDetails from './SingleShipmentDetails'
import SingleSipmentForm from './SingleSipmentForm'

function SingleShipment() {
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

        </ModuleContainer >
    )
}

export default SingleShipment
