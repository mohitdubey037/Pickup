import React from 'react'
import { Carddetails, CardEllipse,CardNumber, CardOption, IndividualCardDiv } from './style'
import { dots, ellipse } from '../../assets/Icons/index'
import { Box, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'


export default function PaymentCardNullState() {

    return (
        <>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} />
                <Box mt={14}>
                <CardNumber> <Skeleton width="80%" height={32}  className="value" /> </CardNumber>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                <Carddetails><Skeleton width="100px" height={28}  className="value" /> </Carddetails>
                <Carddetails ml={5}><Skeleton width="80px" height={28}  className="value" /> </Carddetails>
                </Box>
            </IndividualCardDiv>
        </>
    )
}
