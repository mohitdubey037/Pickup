import React from 'react'
import { FormContainer } from 'app/components/ModuleContainer/style'
import ModuleContainer from 'app/components/ModuleContainer'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import ChildAccountForm from './ChildAccountForm'
import AdminDetails from './AdminDetails'
import Cards from './Cards'
export default function ChildAccount({path:string}) {
    return (
        <ModuleContainer >
        <ContainerTitle>
        Create New Child
        </ContainerTitle>
        <FormContainer elevation={2}>
            <FormContainerTitle>
            Create Child
            </FormContainerTitle>
            <div style={{ marginBottom: "30px" }}>
                <ChildAccountForm />
                
            </div>
        </FormContainer>
        <FormContainer elevation={2}>
            <FormContainerTitle>
            Admin Details
            </FormContainerTitle>
            <div style={{ marginBottom: "30px" }}>
                <AdminDetails />
                
            </div>
        </FormContainer>
        <FormContainer elevation={2}>
            <FormContainerTitle>
            Cards
            </FormContainerTitle>
            <div style={{ marginBottom: "30px" }}>
                <Cards title={"Method of Payment"} />
                
            </div>
        </FormContainer>
        </ModuleContainer>
    )
}
