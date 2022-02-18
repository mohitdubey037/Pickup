import React from 'react'
import ModuleContainer from 'app/components/ModuleContainer'
import { H2 } from 'app/components/Typography/Typography'
import ChildAccountForm from './ChildAccountForm'
import AdminDetails from './AdminDetails'
import Cards from './Cards'
import { Box } from '@mui/material'
export default function ChildAccount({path:string}) {
    return (
        <ModuleContainer>
        <H2 title="Create New Child" />
        
        <Box>
            <H2 title="Create Child" />
            <div style={{ marginBottom: "30px" }}>
                <ChildAccountForm />
                
            </div>
        </Box>
        <Box>
            <H2 title="Admin Details" />
            <div style={{ marginBottom: "30px" }}>
                <AdminDetails />
                
            </div>
        </Box>
        <Box>
            <H2 title="Cards" />
            <div style={{ marginBottom: "30px" }}>
                <Cards title={"Method of Payment"} />
                
            </div>
        </Box>
        </ModuleContainer>
    )
}
