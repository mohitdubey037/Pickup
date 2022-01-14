import React, { useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";

import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import Select from "app/components/Select";
import RadioGroup from "app/components/RadioGroup";

import { LOCATION_TYPES, BILLING_TYPES } from "../../../../../constants";

import { FavouriateWrapper } from "./style";
import { starimage, starImageEmpty } from "../../../../assets/Icons";

function SingleSipmentForm({ title, formik, index, disabled=false, canBeDisabled=false }: { title: "origin" | "destination", formik: any, index: number, disabled?: boolean, canBeDisabled ?: boolean }) {
    
    const { handleChange, values, errors, touched, handleBlur, setFieldValue } = formik;

    const formFieldName = `orders.${index}`;
    const singleFormValues = values.orders[index];

    const singleFormErrors = errors?.orders?.[index];
    const singleFormTouched = touched?.orders?.[index];

    const updateAllFieldsHandler = (name: string, value: string | number | boolean) => {
        values.orders.forEach((item, idx) => {
            setFieldValue(`orders.${idx}.${name}`, value)
        })
    }

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
                                style={{ cursor: "pointer", opacity: disabled ? 0.5 : 1 }} 
                                // onClick={() => setFieldValue(`${formFieldName}.${title}Favorite`, false)} 
                                onClick={() => !disabled && canBeDisabled ? updateAllFieldsHandler(`${title}Favorite`, false): setFieldValue(`${formFieldName}.${title}Favorite`, false)}
                                onKeyPress={(e) => e.key === "Enter" && canBeDisabled ? updateAllFieldsHandler(`${title}Favorite`, false): setFieldValue(`${formFieldName}.${title}Favorite`, false)}
                            >
                                <img style={{ marginRight: "4px" }} className="imageStyle" src={starimage} alt="" />Added to Favorites
                            </div>:
                            <div 
                                role="button" 
                                tabIndex={0} 
                                style={{ cursor: "pointer", opacity: disabled ? 0.5 : 1 }} 
                                // onClick={() => setFieldValue(`${formFieldName}.${title}Favorite`, true)} 
                                onClick={() => !disabled && canBeDisabled ? updateAllFieldsHandler(`${title}Favorite`, true): setFieldValue(`${formFieldName}.${title}Favorite`, true)}
                                onKeyPress={(e) => e.key === "Enter" && canBeDisabled ? updateAllFieldsHandler(`${title}Favorite`, true): setFieldValue(`${formFieldName}.${title}Favorite`, true)}
                            >
                                <img style={{ marginRight: "4px" }} className="imageStyle" src={starImageEmpty} alt="" />Add to Favorites
                            </div>
                        }
                    </FavouriateWrapper>
                </Typography>

                <RadioGroup
                    defaultValue={singleFormValues?.[`${title}BillingType`] ? String(singleFormValues?.[`${title}BillingType`]-1) : "0"}
                    value={singleFormValues?.[`${title}BillingType`] ? String(singleFormValues?.[`${title}BillingType`]-1) : "0"}
                    name={`${formFieldName}.${title}BillingType`}
                    // onChange={(e) => setFieldValue(`${formFieldName}.${title}BillingType`, Number(e.target.value) + 1)}
                    onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}BillingType`, Number(event.target.value) + 1) : setFieldValue(`${formFieldName}.${title}BillingType`, Number(event.target.value) + 1)}
                    options={!disabled ? BILLING_TYPES : BILLING_TYPES.map(item => ({...item, disabled: true}))}
                />
                {!disabled && (
                    <>
                    
                <Grid style={{ paddingBottom: 20, width: 290 }}>
                    <div className="div_select">
                        <label htmlFor="cars">Location type</label>
                        <br />
                        <div>
                            <Select
                                id={`${formFieldName}.${title}LocationType`}
                                name={`${formFieldName}.${title}LocationType`}
                                options={LOCATION_TYPES}
                                onSelect={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}LocationType`, event.target.value): handleChange(event)}
                                value={singleFormValues[`${title}LocationType`]}
                                disabled={disabled}
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
                                initValue={singleFormValues[`${title}CompanyName`]}
                                value={singleFormValues[`${title}CompanyName`]}
                                disabled={disabled}
                                placeholder={"Start typing"}
                                onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}CompanyName`, event.target.value) : handleChange(event)}
                                onBlur={handleBlur}
                                error={
                                    singleFormTouched?.[`${title}CompanyName`] &&
                                    singleFormErrors?.[`${title}CompanyName`]
                                }
                                validate
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}FirstName`}
                            name={`${formFieldName}.${title}FirstName`}
                            initValue={singleFormValues[`${title}FirstName`]}
                            value={singleFormValues[`${title}FirstName`]}
                            disabled={disabled}
                            label={"First Name"}
                            placeholder={"Start typing"}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}FirstName`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}FirstName`] && singleFormErrors?.[`${title}FirstName`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}LastName`}
                            name={`${formFieldName}.${title}LastName`}
                            label={"Last Name"}
                            initValue={singleFormValues[`${title}LastName`]}
                            value={singleFormValues[`${title}LastName`]}
                            disabled={disabled}
                            placeholder={"Start typing"}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}LastName`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={singleFormTouched?.[`${title}LastName`] && singleFormErrors?.[`${title}LastName`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}AddressLine1`}
                            name={`${formFieldName}.${title}AddressLine1`}
                            label={"Address Line 1"}
                            initValue={singleFormValues[`${title}AddressLine1`]}
                            value={singleFormValues[`${title}AddressLine1`]}
                            disabled={disabled}
                            placeholder={"Start typing"}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}AddressLine1`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}AddressLine1`] &&
                                singleFormErrors?.[`${title}AddressLine1`]
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
                            initValue={singleFormValues[`${title}AddressLine2`]}
                            value={singleFormValues[`${title}AddressLine2`]}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}AddressLine2`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}AddressLine2`] &&
                                singleFormErrors?.[`${title}AddressLine2`]
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
                            initValue={singleFormValues[`${title}City`]}
                            value={singleFormValues[`${title}City`]}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}City`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={singleFormTouched?.[`${title}City`] && singleFormErrors?.[`${title}City`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}PostalCode`}
                            name={`${formFieldName}.${title}PostalCode`}
                            label={"Postal Code"}
                            initValue={singleFormValues[`${title}PostalCode`]}
                            value={singleFormValues[`${title}PostalCode`]}
                            disabled={disabled}
                            placeholder={"Start typing"}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}PostalCode`, event.target.value): handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}PostalCode`] && singleFormErrors?.[`${title}PostalCode`]
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
                            initValue={singleFormValues[`${title}ProvinceState`]}
                            value={singleFormValues[`${title}ProvinceState`]}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}ProvinceState`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}ProvinceState`] &&
                                singleFormErrors?.[`${title}ProvinceState`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}Country`}
                            name={`${formFieldName}.${title}Country`}
                            label={"Country"}
                            initValue={singleFormValues[`${title}Country`]}
                            value={singleFormValues[`${title}Country`]}
                            placeholder={"Start typing"}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}Country`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={singleFormTouched?.[`${title}Country`] && singleFormErrors?.[`${title}Country`]}
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}ContactNumber`}
                            name={`${formFieldName}.${title}ContactNumber`}
                            label={"Contact Number"}
                            initValue={singleFormValues[`${title}ContactNumber`]}
                            value={singleFormValues[`${title}ContactNumber`]}
                            placeholder={"Start typing"}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}ContactNumber`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}ContactNumber`] &&
                                singleFormErrors?.[`${title}ContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}AlternateContactNumber`}
                            name={`${formFieldName}.${title}AlternateContactNumber`}
                            initValue={singleFormValues[`${title}AlternateContactNumber`]}
                            value={singleFormValues[`${title}AlternateContactNumber`]}
                            label={"Alternate Contact Number"}
                            placeholder={"Start typing"}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}AlternateContactNumber`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}AlternateContactNumber`] &&
                                singleFormErrors?.[`${title}AlternateContactNumber`]
                            }
                            validate
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            id={`${formFieldName}.${title}EmailAddress`}
                            name={`${formFieldName}.${title}EmailAddress`}
                            label={"Email Address"}
                            initValue={singleFormValues[`${title}EmailAddress`]}
                            value={singleFormValues[`${title}EmailAddress`]}
                            placeholder={"Start typing"}
                            disabled={disabled}
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}EmailAddress`, event.target.value) : handleChange(event)}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}EmailAddress`] &&
                                singleFormErrors?.[`${title}EmailAddress`]
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
                            onChange={(event) => canBeDisabled ? updateAllFieldsHandler(`${title}AdditionalNotes`, event.target.value) : handleChange(event)}
                            initValue={singleFormValues[`${title}AdditionalNotes`]}
                            disabled={disabled}
                            value={singleFormValues[`${title}AdditionalNotes`]}
                            onBlur={handleBlur}
                            error={
                                singleFormTouched?.[`${title}AdditionalNotes`] &&
                                singleFormErrors?.[`${title}AdditionalNotes`]
                            }
                            validate
                        />
                    </Grid>
                </Grid>
                </>
                )}
            </form>
        </FormWrapper>
    );
}
export default SingleSipmentForm;
