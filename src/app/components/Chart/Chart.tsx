import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { CardContainer, GeneralTypo, GeneralTypoheading, GeneralTypolabel, LabelContainer } from './style'
import { AreaChartOptions } from './helper'
import { arrowUp } from 'app/assets/Icons'
import { Grid } from '@material-ui/core'

interface ChartProps{
    marketPriceNumber : number;
    labelMarketPrice: string;
    spentNumber: number;
    labelSpentNumber: string;
    savedNumber: number;
    labelSavedNumber: string;
    chartData?: any;
}

const seriesChart = [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2,45, 52, 38, 45, 19]
    },
    {
      name: "Series 2",
      data: [15, 42, 58, 95, 9, 13, 92, 9, 13, 92, 13, 92]
    }
]

const ChartDashboard:React.FC<ChartProps>=({marketPriceNumber, labelMarketPrice, spentNumber, labelSpentNumber, savedNumber, labelSavedNumber, chartData})=>{
    return (
        <CardContainer>
            <Grid container>
                <Grid item lg={3} style={{textAlign:'left'}}>
                    <div style={{marginBottom:'0.5rem'}}>
                        <GeneralTypoheading>Market Price</GeneralTypoheading>
                        <GeneralTypo style={{color:'#F99746'}}>$ {marketPriceNumber}</GeneralTypo>
                        <LabelContainer>
                            <img src={arrowUp}/>
                            <GeneralTypolabel>{labelMarketPrice}</GeneralTypolabel>
                        </LabelContainer>
                    </div>
                    <div style={{marginBottom:'0.5rem'}}>
                        <GeneralTypoheading>You Spent</GeneralTypoheading>
                        <GeneralTypo style={{color:'#2FC87F'}}>$ {spentNumber}</GeneralTypo>
                        <LabelContainer>
                            <img src={arrowUp}/>
                            <GeneralTypolabel>{labelSpentNumber}</GeneralTypolabel>
                        </LabelContainer>
                    </div>
                    <div>
                        <GeneralTypoheading>You Saved</GeneralTypoheading>
                        <GeneralTypo style={{color:'#1B8AF0'}}>$ {spentNumber}</GeneralTypo>
                        <LabelContainer>
                            <img src={arrowUp}/>
                            <GeneralTypolabel>{labelSavedNumber}</GeneralTypolabel>
                        </LabelContainer>
                    </div>
                </Grid>
                <Grid item lg={9}>
                    <ReactApexChart
                        options={{
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
                            colors:['#F99746','#2FC87F'],
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
                        series={seriesChart}
                        type="area"
                        height={250}
                      />
                </Grid>
            </Grid>
        </CardContainer>
    )
}

export default ChartDashboard
