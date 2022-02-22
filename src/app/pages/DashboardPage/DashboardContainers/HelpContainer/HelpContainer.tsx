import { Box } from '@mui/material'
import { navigate } from '@reach/router'
import { Accordion } from 'app/components/Accordion'
import { HelpContact } from 'app/components/HelpContact'
import ModuleContainer from 'app/components/ModuleContainer'
import React from 'react'
import { useSelector } from 'react-redux'

export default function HelpContainer({path:string}) {
   
    const authUser = useSelector((state: any) => {
        return state.auth?.user;
      });
    
      if([1,2,3,4].indexOf(authUser?.roleId) === -1) {
        navigate(' /non-authorized-page')
      }
    return (
        <ModuleContainer>
            <h3 style={{margin:0}}>
                Help
            </h3>
            <Box>
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
            </Box>
        </ModuleContainer>
    )
}
