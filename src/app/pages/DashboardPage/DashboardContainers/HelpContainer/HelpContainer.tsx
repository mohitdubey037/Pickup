import { Accordion } from 'app/components/Accordion'
import { HelpContact } from 'app/components/HelpContact'
import ModuleContainer from 'app/components/ModuleContainer'
import { FormContainer } from 'app/components/ModuleContainer/style'
import React from 'react'

export default function HelpContainer({path:string}) {
    return (
        <ModuleContainer>
            <h3 style={{margin:0}}>
                Help
            </h3>
            <FormContainer elevation={0}>
                <h4 style={{margin:'0 0 1.5rem 0'}}>
                    Frequently Asked Questions
                </h4>
                <Accordion title="Lorem non deserunt ullamco est sit aliqua dolor do amet sint.">
                    Test
                </Accordion>
                <Accordion title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.">
                    Test
                </Accordion>
                <Accordion title="Non deserunt ullamco est sit aliqua dolor do amet sint.">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet.
                </Accordion>
                <HelpContact/>
            </FormContainer>
        </ModuleContainer>
    )
}
