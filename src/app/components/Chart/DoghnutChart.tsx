import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import { DoghnutChip, DoghnutLabelContainer } from './style'

interface DoghnutProps{
    onTimePercentage: number;
    delayedPercentage: number;
    doghnutData: any
}

export default function DoghnutChart({onTimePercentage,delayedPercentage,doghnutData}:DoghnutProps) {
  // console.log(doghnutData, 'hhhhiii');
  // useEffect(() => {
  //   console.log(doghnutData);
  // },[doghnutData])
  // console.log(onTimePercentage,delayedPercentage,doghnutData, 'dlsj');
    return (
        <>
            <Box display="flex" alignItems="center">
                <Box>
                    <ReactApexChart
                        options={{
                            chart: {
                                type: 'donut',
                            },
                            labels: ['On Time', 'Delayed'],
                            plotOptions: {
                                pie: {
                                  startAngle: 0,
                                  endAngle: 360,
                                  expandOnClick: true,
                                  offsetX: 0,
                                  offsetY: 0,
                                  customScale: 1,
                                  dataLabels: {
                                      offset: 0,
                                      minAngleToShowLabel: 10
                                  }, 
                                  donut: {
                                    size: '65%',
                                    background: 'transparent',
                                    labels: {
                                      show: true,
                                      name: {
                                        show: true,
                                        fontSize: '22px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 600,
                                        color: undefined,
                                        offsetY: -10,
                                        formatter: function (val) {
                                          return val
                                        }
                                      },
                                      value: {
                                        show: true,
                                        fontSize: '16px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        color: undefined,
                                        offsetY: 16,
                                        formatter: function (val) {
                                          return val
                                        }
                                      },
                                      total: {
                                        show: true,
                                        showAlways: true,
                                        label: 'Total',
                                        fontSize: '22px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 600,
                                        color: '#373d3f',
                                        formatter: function (w) {
                                          return w.globals.seriesTotals.reduce((a, b) => {
                                            return a + b;
                                          }, 0)
                                        }
                                      }
                                    }
                                  },      
                                }
                              },
                            dataLabels: {
                                enabled: false
                            },
                            legend: {
                                show: false,
                            },
                            colors:['#FECE3E','#F99746'],
                            // responsive: [{
                            //     breakpoint: 480,
                            //     options: {
                            //         chart: {
                            //             width: 200
                            //         },
                            //         legend: {
                            //             show: true,
                            //         }
                            //     }}]
                              }}
                        series={doghnutData}
                        type="donut"
                        height={200}
                    />
                </Box>
                <Box>
                    <DoghnutLabelContainer>
                        <DoghnutChip style={{background:'#FECE3E'}}></DoghnutChip>
                        <strong><span style={{marginRight:'24px'}}>On Time</span>{onTimePercentage}%</strong>
                    </DoghnutLabelContainer>
                    <DoghnutLabelContainer>
                        <DoghnutChip style={{background:'#F99746'}}></DoghnutChip>
                        <strong><span style={{marginRight:'24px'}}>Delayed</span>{delayedPercentage}%</strong>
                    </DoghnutLabelContainer>
                </Box>
            </Box>
            
        </>
    )
}
