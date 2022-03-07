import React from 'react'
import { CardEllipse, CardOption, IndividualCardDiv } from './style'
import { dots, ellipse } from '../../assets/Icons/index'
import { Skeleton } from '@material-ui/lab'
import { Box, Grid } from '@mui/material'


export default function PaymentCardSkeleton() {
    return (
        <Box mt={3}>
        <Grid container spacing={2}>
        <Grid item lg={4} sm={6} xs={12} xl={3}>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} />
                <Box mt={14}>
                <Skeleton width="90%" height={28}  className="value" />
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                <Skeleton width="40%" height={28}  className="value" />
                <Skeleton width="40%" height={28}  className="value"  style={{marginLeft:'24px'}} />
                </Box>
            </IndividualCardDiv>
            </Grid>
            <Grid item lg={4} sm={6} xs={12} xl={3}>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} />
                <Box mt={14}>
                <Skeleton width="90%" height={28}  className="value" />
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                <Skeleton width="40%" height={28}  className="value" />
                <Skeleton width="40%" height={28}  className="value"  style={{marginLeft:'24px'}} />
                </Box>
            </IndividualCardDiv>
            </Grid><Grid item lg={4} sm={6} xs={12} xl={3}>
            <IndividualCardDiv>
                <CardEllipse src={ellipse} />
                <CardOption src={dots} />
                <Box mt={14}>
                <Skeleton width="90%" height={28}  className="value" />
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                <Skeleton width="40%" height={28}  className="value" />
                <Skeleton width="40%" height={28}  className="value"  style={{marginLeft:'24px'}} />
                </Box>
            </IndividualCardDiv>
            </Grid>
        </Grid>
        </Box>
    )
}
