import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";

import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import Select from "app/components/Select";
import RadioGroup from "app/components/RadioGroup";

import { LOCATION_TYPES, BILLING_TYPES } from "../../../../../constants";

import { FavouriateWrapper } from "./style";
import { starimage, starImageEmpty } from "../../../../assets/Icons";

function SingleSipmentForm({ title, formik, index }: { title: "origin" | "destination", formik: any, index: number }) {
    
    const { handleChange, values, errors, touched, handleBlur, setFieldValue } = formik;

    const formFieldName = `orders.${index}`;
    const singleFormValues = values.orders[index];

    return (
        <FormWrapper style={{ paddingRight: 35 }}>
            <form>
                <Typography className="typography" variant="h1" component="h3" style={{ textTransform: "capitalize" }}>
                    {title}
                    <FavouriateWrapper>
                        {singleFormValues[`${title}Favorite`] ?
                            <div 
                                role="button" 
                                tabIndex={0} 
                                style={{ cursor: "pointer" }} 
                                onClick={() => setFieldValue(`${formFieldName}.${title}Favorite`, false)} 
                                onKeyPress={() => setFieldValue(`${formFieldName}.${title}Favorite`, false)}
                            >
                                <img style={{ marginRight: "4px" }} className="imageStyle" src={starimage} alt="" />Added to Favorites
                            </div>:
                            <div 
                                role="button" 
                                tabIndex={0} 
                                style={{ cursor: "pointer" }} 
                                onClick={() => setFieldValue(`${formFieldName}.${title}Favorite`, true)} 
                                onKeyPress={() => setFieldValue(`${formFieldName}.${title}Favorite`, false)}
                            >
                                <img style={{ marginRight: "4px" }} className="imageStyle" src={starImageEmpty} alt="" />Add to Favorites
                            </div>
                        }
                    </FavouriateWrapper>
                </Typography>

                <RadioGroup
                    defaultValue="0"
                    name={`${formFieldName}.${title}BillingType`}
                    onChange={(e) => setFieldValue(`${formFieldName}.${title}BillingType`, Number(e.target.value) + 1)}
                    options={BILLING_TYPES}
                />
                <Grid style={{ paddingBottom: 20, width: 290 }}>
                    <div className="div_select">
                        <label htmlFor="cars">Location type</label>
                        <br />
                        <div>
                            <Select
                                id={`${formFieldName}.${title}LocationType`}
                                name={`${formFieldName}.${title}LocationType`}
                                options={LOCATION_TYPES}
                                onSelect={handleChange}
                                value={singleFormValues[`${title}LocationType`]}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid container spacing={3} style={{ marginRight: 30 }}>
                    {singleFormValues[`${title}BillingType`] === 2 && (
                        <Grid item xs={4}>
                            <Input
                                id={`${formFieldName}.${title}CompanyName`}
                                name={`${formFieldName}.${title}CompanyName`}
                                label={"Company Name"}
                                value={singleFormValues[`${formFieldName}.${title}CompanyName`]}
                                placeholder={"Start typing"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched[`${formFieldName}.${title}CompanyName`] &&
                                    errors[`${formFieldName}.${title}CompanyName`]
                                }
                                validate
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}FirstName`}
                            name={`${formFieldName}.${title}FirstName`}
                            initValue={singleFormValues[`${formFieldName}.${title}FirstName`]}
                            label={"First Name"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}FirstName`] && errors[`${formFieldName}.${title}FirstName`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}LastName`}
                            name={`${formFieldName}.${title}LastName`}
                            label={"Last Name"}
                            initValue={singleFormValues[`${formFieldName}.${title}LastName`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${formFieldName}.${title}LastName`] && errors[`${formFieldName}.${title}LastName`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}AddressLine1`}
                            name={`${formFieldName}.${title}AddressLine1`}
                            label={"Address Line 1"}
                            initValue={singleFormValues[`${formFieldName}.${title}AddressLine1`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}AddressLine1`] &&
                                errors[`${formFieldName}.${title}AddressLine1`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}AddressLine2`}
                            name={`${formFieldName}.${title}AddressLine2`}
                            label={"Address Line 2"}
                            placeholder={"Start typing"}
                            initValue={singleFormValues[`${formFieldName}.${title}AddressLine2`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}AddressLine2`] &&
                                errors[`${formFieldName}.${title}AddressLine2`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}City`}
                            name={`${formFieldName}.${title}City`}
                            label={"City"}
                            placeholder={"Start typing"}
                            initValue={singleFormValues[`${formFieldName}.${title}City`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${formFieldName}.${title}City`] && errors[`${formFieldName}.${title}City`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}PostalCode`}
                            name={`${formFieldName}.${title}PostalCode`}
                            label={"Postal Code"}
                            initValue={singleFormValues[`${formFieldName}.${title}PostalCode`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}PostalCode`] && errors[`${formFieldName}.${title}PostalCode`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}ProvinceState`}
                            name={`${formFieldName}.${title}ProvinceState`}
                            label={"Province/State"}
                            placeholder={"Start typing"}
                            initValue={singleFormValues[`${formFieldName}.${title}ProvinceState`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}ProvinceState`] &&
                                errors[`${formFieldName}.${title}ProvinceState`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}Country`}
                            name={`${formFieldName}.${title}Country`}
                            label={"Country"}
                            initValue={singleFormValues[`${formFieldName}.${title}Country`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched[`${formFieldName}.${title}Country`] && errors[`${formFieldName}.${title}Country`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}ContactNumber`}
                            name={`${formFieldName}.${title}ContactNumber`}
                            label={"Contact Number"}
                            initValue={singleFormValues[`${formFieldName}.${title}ContactNumber`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}ContactNumber`] &&
                                errors[`${formFieldName}.${title}ContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}AlternateContactNumber`}
                            name={`${formFieldName}.${title}AlternateContactNumber`}
                            initValue={singleFormValues[`${formFieldName}.${title}AlternateContactNumber`]}
                            label={"Alternate Contact Number"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}AlternateContactNumber`] &&
                                errors[`${formFieldName}.${title}AlternateContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}EmailAddress`}
                            name={`${formFieldName}.${title}EmailAddress`}
                            label={"Email Address"}
                            initValue={singleFormValues[`${formFieldName}.${title}EmailAddress`]}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}EmailAddress`] &&
                                errors[`${formFieldName}.${title}EmailAddress`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id={`${formFieldName}.${title}AdditionalNotes`}
                            name={`${formFieldName}.${title}AdditionalNotes`}
                            label={"Additional Notes"}
                            placeholder={"Start typing"}
                            onChange={handleChange}
                            initValue={singleFormValues[`${formFieldName}.${title}AdditionalNotes`]}
                            onBlur={handleBlur}
                            error={
                                touched[`${formFieldName}.${title}AdditionalNotes`] &&
                                errors[`${formFieldName}.${title}AdditionalNotes`]
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
