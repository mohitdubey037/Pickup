

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Input } from 'app/components/Input';
import { FormWrapper } from 'app/components/Input/style';


function SingleSipmentForm({title}) {
    return <FormWrapper>
        <form>
            <Typography className="typography" variant="h1" component="h3">
           {title}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}  >
                    <div className="div_select">
                        <label htmlFor="cars">Location type</label>
                        <br />
                        <div>
                            <select className="select" name="cars" id="cars">
                                {/* <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option> */}
                            </select>
                        </div>

                    </div>

                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Company Name"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"First Name"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Last Name"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Address Line 1"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Address Line 2"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"City"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Postal Code"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Province/State"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Country"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Contact Number"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Alternate Number"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        label={"Email Address"}
                        placeholder={"Start typing"} />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        label={"Additional Notes"}
                        placeholder={"Start typing"} />
                </Grid>
            </Grid>

        </form>
    </FormWrapper>


}
export default SingleSipmentForm