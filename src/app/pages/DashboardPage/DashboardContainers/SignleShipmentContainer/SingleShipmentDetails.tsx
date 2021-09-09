import React from 'react';
import { Input } from 'app/components/Input';
import { Grid, Typography } from '@material-ui/core';
import { FormWrapper } from 'app/components/Input/style';



function SingleShipmentDetails() {
    return (
        <FormWrapper style={{ width: "100%", margin: "0 auto" }}>
            <Typography className="typography" variant="h1" component="h3">
                Parent Shipment
            </Typography>
            <form className="form">

                <Grid container spacing={3}>
                    <Grid item xs={12} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div className="div_select">
                            <label htmlFor="cars">Category</label>
                            <br />
                            <div>
                                <select className="select Category_select" name="cars" id="cars">
                                </select>
                            </div>

                        </div>
                        <div className="div_select">
                            <label htmlFor="cars">Customer Reference Number</label>
                            <br />
                            <div>
                                <select className="select Customer-refrence-no" name="cars" id="cars">

                                </select>
                            </div>

                        </div>
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={12}>

                            <Grid item xs={10}>
                                <Input
                                    label={"Shipment Weight"}
                                    placeholder={"Start typing"}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <div className="div_select" style={{ lineHeight: "27px" }}>
                                    <label htmlFor="cars">unit</label>
                                    <br />
                                    <div>
                                        <select className="select" style={{ width: "90px" }} name="cars" id="cars">

                                        </select>
                                    </div>
                                </div>
                            </Grid>


                        </Grid>




                    </Grid>

                </Grid>





            </form>
        </FormWrapper>
    )
}
export default SingleShipmentDetails;