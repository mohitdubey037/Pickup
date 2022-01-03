import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";

import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import Select from "app/components/Select";
import RadioGroup from "app/components/RadioGroup";

import { LOCATION_TYPES, BILLING_TYPES } from "../../../../../constants";

import { FavouriateWrapper } from "./style";
import { starimage, starImageEmpty } from "../../../../assets/Icons";

function SingleSipmentForm({ title, formik }: { title: "origin" | "destination", formik: any }) {
    
    const { handleChange, values, errors, touched, handleBlur, setFieldValue } = formik;

    return (
        <FormWrapper style={{ paddingRight: 35 }}>
            <form>
                <Typography className="typography" variant="h1" component="h3" style={{ textTransform: "capitalize" }}>
                    {title}
                    <FavouriateWrapper>
                        {values[`${title}Favorite`] ?
                            <div style={{ cursor: "pointer" }} tabIndex={0} onClick={() => setFieldValue(`${title}Favorite`, false)}><img style={{ marginRight: "4px" }} className="imageStyle" src={starimage} alt="" />Added to Favorites</div>:
                            <div style={{ cursor: "pointer" }} tabIndex={0} onClick={() => setFieldValue(`${title}Favorite`, true)}><img style={{ marginRight: "4px" }} className="imageStyle" src={starImageEmpty} alt="" />Add to Favorites</div>
                        }
                    </FavouriateWrapper>
                </Typography>

                <RadioGroup
                    defaultValue="0"
                    name={`${title}BillingType`}
                    onChange={(e) => setFieldValue(`${title}BillingType`, Number(e.target.value) + 1)}
                    options={BILLING_TYPES}
                />
                <Grid style={{ paddingBottom: 20, width: 290 }}>
                    <div className="div_select">
                        <label htmlFor="cars">Location type</label>
                        <br />
                        <div>
                            <Select
                                id={`${title}LocationType`}
                                name={`${title}LocationType`}
                                options={LOCATION_TYPES}
                                onSelect={handleChange}
                                value={values[`${title}LocationType`]}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid container spacing={3} style={{ marginRight: 30 }}>
                    {values[`${title}BillingType`] === 2 && (
                        <Grid item xs={4}>
                            <Input
                                id={`${title}CompanyName`}
                                name={`${title}CompanyName`}
                                label={"Company Name"}
                                value={values[`${title}CompanyName`]}
                                placeholder={"Start typing"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched[`${title}CompanyName`] &&
                                    errors[`${title}CompanyName`]
                                }
                                validate
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <Input
                            id={`${title}FirstName`}
                            name={`${title}FirstName`}
                            initValue={values[`${title}FirstName`]}
                            label={"First Name"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}FirstName`] && errors[`${title}FirstName`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}LastName`}
                            name={`${title}LastName`}
                            label={"Last Name"}
                            initValue={values[`${title}LastName`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${title}LastName`] && errors[`${title}LastName`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}AddressLine1`}
                            name={`${title}AddressLine1`}
                            label={"Address Line 1"}
                            initValue={values[`${title}AddressLine1`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}AddressLine1`] &&
                                errors[`${title}AddressLine1`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}AddressLine2`}
                            name={`${title}AddressLine2`}
                            label={"Address Line 2"}
                            placeholder={"Start typing"}
                            initValue={values[`${title}AddressLine2`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}AddressLine2`] &&
                                errors[`${title}AddressLine2`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}City`}
                            name={`${title}City`}
                            label={"City"}
                            placeholder={"Start typing"}
                            initValue={values[`${title}City`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${title}City`] && errors[`${title}City`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}PostalCode`}
                            name={`${title}PostalCode`}
                            label={"Postal Code"}
                            initValue={values[`${title}PostalCode`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}PostalCode`] && errors[`${title}PostalCode`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}ProvinceState`}
                            name={`${title}ProvinceState`}
                            label={"Province/State"}
                            placeholder={"Start typing"}
                            initValue={values[`${title}ProvinceState`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}ProvinceState`] &&
                                errors[`${title}ProvinceState`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}Country`}
                            name={`${title}Country`}
                            label={"Country"}
                            initValue={values[`${title}Country`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${title}Country`] && errors[`${title}Country`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}ContactNumber`}
                            name={`${title}ContactNumber`}
                            label={"Contact Number"}
                            initValue={values[`${title}ContactNumber`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}ContactNumber`] &&
                                errors[`${title}ContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}AlternateContactNumber`}
                            name={`${title}AlternateContactNumber`}
                            initValue={values[`${title}AlternateContactNumber`]}
                            label={"Alternate Contact Number"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}AlternateContactNumber`] &&
                                errors[`${title}AlternateContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${title}EmailAddress`}
                            name={`${title}EmailAddress`}
                            label={"Email Address"}
                            initValue={values[`${title}EmailAddress`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}EmailAddress`] &&
                                errors[`${title}EmailAddress`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id={`${title}AdditionalNotes`}
                            name={`${title}AdditionalNotes`}
                            label={"Additional Notes"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            initValue={values[`${title}AdditionalNotes`]}
                            onBlur={handleBlur}
                            error={
                                touched[`${title}AdditionalNotes`] &&
                                errors[`${title}AdditionalNotes`]
                            }
                            validate
                        />
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    );
}
export default SingleSipmentForm;
