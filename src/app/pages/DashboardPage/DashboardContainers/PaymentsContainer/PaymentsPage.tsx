import React from 'react'
import { Container } from './style'
import ModuleContainer from 'app/components/ModuleContainer'
import { Grid } from '@material-ui/core'
import { Button } from 'app/components/Buttons'
import PaymentCardContainer from './PaymentsCardContainer'
import { masterCard, scotiaBank } from 'app/assets/Icons'

const individualCardData = [
    {
        name: 'John Doe',
        type: masterCard,
        cardNumber: '**** **** **** 1734',
        expiryDate: '05/24'
    },
    {
        name: 'John Doe',
        type: scotiaBank,
        cardNumber: '**** **** **** 1734',
        expiryDate: '05/24'
    }
]


export default function PaymentsPage({path:string}) {
    return (
        <ModuleContainer>
            <Grid container justifyContent='flex-end'>
                <Grid item xl={12} lg={12} sm={12} md={12} xs={12} style={{ textAlign:'right' }} >
                    <div style={{ maxWidth:'160px', display:'inline-flex'}}>
                        <Button label='+ Add New Payment' size='small'/>
                    </div>
                    <PaymentCardContainer heading='Credit Card' individualCardData={individualCardData}/>
                    <PaymentCardContainer heading='Debit Card' individualCardData={individualCardData}/>
                    <PaymentCardContainer heading='Bank Account' individualCardData={individualCardData}/>
                </Grid>
            </Grid>
        </ModuleContainer>
    )
}
