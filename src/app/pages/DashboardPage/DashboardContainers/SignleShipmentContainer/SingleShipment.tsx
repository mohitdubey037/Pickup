
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import { Radio } from 'app/components/Radio'
import Select from 'app/components/Select'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import { ChartDashboard } from 'app/components/Chart'

function SingleShipment() {
    return (
        <ModuleContainer >
            <ContainerTitle>
                Single Shipment
            </ContainerTitle>
            <FormContainer elevation={2}>
                {/* <FormContainerTitle>
                    Address Details
                </FormContainerTitle> */}
               <ChartDashboard 
                    labelMarketPrice='4% more than last Month' 
                    labelSpentNumber='4% more than last Month' 
                    labelSavedNumber='4% more than last Month' 
                    marketPriceNumber={42032} 
                    spentNumber={32032} 
                    savedNumber={10000}
                />
            </FormContainer>

        </ModuleContainer >
    )
}

export default SingleShipment
