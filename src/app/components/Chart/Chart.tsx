import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { CardContainer} from './style'
import { AreaChartOptions } from './helper'
import { arrowUp } from 'app/assets/Icons'
import { Box, Grid } from '@material-ui/core'
import { H2, H3, H5 } from '../Typography/Typography';

interface ChartProps{
    marketPriceNumber : number;
    labelMarketPrice: string;
    spentNumber: number;
    labelSpentNumber: string;
    savedNumber: number;
    labelSavedNumber: string;
    chartData?: any;
    chartSeries?: any;
}


const ChartDashboard:React.FC<ChartProps>=({marketPriceNumber, labelMarketPrice, spentNumber, labelSpentNumber, savedNumber, labelSavedNumber, chartData, chartSeries})=>{
    return (
        <CardContainer>
            <Grid container spacing={2}>
                <Grid item sm={4} lg={2} xs={12}>
                        <H3 text="Market Price" />
                        <H2 title={`${marketPriceNumber}`} className='markerprice count' />
                        <Box display="flex" mb={2.5}>
                            <img src={arrowUp} alt="" className='icon' />
                            <H5 text={labelMarketPrice} />
                        </Box>
                        
                        <H3 text="You Spent" />
                        <H2 title={`${spentNumber}`} className='spentNumber count' />
                        <Box display="flex" mb={2.5}>
                            <img src={arrowUp} alt="" className='icon'  />
                            <H5 text={labelSpentNumber} />
                        </Box>
                        
                        <H3 text="You Saved" />
                        <H2 title={`${savedNumber}`} className='savedNumber count' />
                        <Box display="flex">
                            <img src={arrowUp} alt="" className='icon' />
                            <H5 text={labelSavedNumber} />
                        </Box>
                </Grid>
                <Grid item sm={8} lg={10} xs={12}>
                    <ReactApexChart
                        options={{
                            stroke: {
                                curve: 'straight',
                              },
                            chart: {
                              height: 280,
                              type: "area",
                              toolbar:{
                                  show: false
                              }
                            },
                            dataLabels: {
                              enabled: false
                            },
                            fill: {
                              type: "gradient",
                              gradient: {
                                shadeIntensity: 1,
                                opacityFrom: 0.7,
                                opacityTo: 0.9,
                                stops: [0, 90, 100]
                              }
                            },
                            colors:['#F99746','#2FC87F','#1b8af0'],
                            xaxis: {
                              categories: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dev"
                              ]
                            },
                            legend:{
                                show: false
                            }
                          }}
                        series={chartSeries || []}
                        type="area"
                        height={280}
                      />
                </Grid>
            </Grid>
        </CardContainer>
    )
}

export default ChartDashboard
