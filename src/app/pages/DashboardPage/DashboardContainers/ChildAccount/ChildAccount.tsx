import React from 'react'
import { FormContainer } from 'app/components/ModuleContainer/style'
import ModuleContainer from 'app/components/ModuleContainer'
import { H2 } from 'app/components/Typography/Typography'
import ChildAccountForm from './ChildAccountForm'
import AdminDetails from './AdminDetails'
import Cards from './Cards'
export default function ChildAccount({path:string}) {
    return (
        <ModuleContainer>
        <H2 title="Create New Child" />
        
        <FormContainer elevation={2}>
            <H2 title="Create Child" />
            <div style={{ marginBottom: "30px" }}>
                <ChildAccountForm />
                
            </div>
        </FormContainer>
        <FormContainer elevation={2}>
            <H2 title="Admin Details" />
            <div style={{ marginBottom: "30px" }}>
                <AdminDetails />
                
            </div>
        </FormContainer>
        <FormContainer elevation={2}>
            <H2 title="Cards" />
            <div style={{ marginBottom: "30px" }}>
                <Cards title={"Method of Payment"} />
                
            </div>
        </FormContainer>
        </ModuleContainer>
    )
}
