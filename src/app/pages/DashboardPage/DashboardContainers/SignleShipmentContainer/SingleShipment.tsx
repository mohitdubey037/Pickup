
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import Select from 'app/components/Select'
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
             <Select/>
            </FormContainer>

        </ModuleContainer >
    )
}

export default SingleShipment
