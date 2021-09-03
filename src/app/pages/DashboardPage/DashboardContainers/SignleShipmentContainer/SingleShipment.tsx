import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'

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
            </FormContainer>

        </ModuleContainer >
    )
}

export default SingleShipment
