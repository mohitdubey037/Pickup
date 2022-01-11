import React from 'react'

import { useFormik } from 'formik';

import { Input } from 'app/components/Input';
import { editContactDetailsSchema } from './helper';
import { Flex } from 'app/components/Input/style';
import { Button } from 'app/components/Buttons';
import services from 'services';

interface EditContactDetailsProps {
    contactInfo: any;
    onClose : (a: boolean) => void;
}

const EditContactDetails = ({contactInfo, onClose}: EditContactDetailsProps) => {

    const initialValues = {
        companyName: contactInfo?.companyName || "",
        firstName: contactInfo?.locationFirstName || "",
        lastName: contactInfo?.locationLastName || '',
        address1: contactInfo?.locationAddressLine1 || '',
        address2: contactInfo?.locationAddressLine2 || '',
        city: contactInfo?.locationCity || "",
        postal: contactInfo?.locationPinCode || "",
        state: contactInfo?.locationProvinceCode || "",
        country: contactInfo?.locationCountry || "",
        phone: contactInfo?.locationPhone || "",
        alternate: contactInfo?.locationAlternatePhone || '',
        email: contactInfo?.locationEmail || ""
    };

    const onSubmitHandler = async (values) => {
        const body = {
            "latitude": 22.3,
            "longitude": 19.23,
            "companyName": values.companyName,
            "locationFirstName": values.firstName,
            "locationLastName": values.lastName,
            "locationAddressLine1": values.address1,
            "locationAddressLine2": values.address2,
            "locationCity": values.city,
            "locationPinCode": values.postal,
            "locationProvinceCode": values.state,
            "locationCountry": values.country,
            "locationPhone": values.phone,
            "locationAlternatePhone": values.alternate,
            "locationEmail": values.email
        };
        const res = await services.put(`location/business/location/${contactInfo.locationId}`, body, 'location')
        console.log("updateRes", res)
    }

    const { values, handleChange, handleBlur, touched, errors, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: editContactDetailsSchema,
        onSubmit: onSubmitHandler,
    });
    
    return (
        <Flex direction={"column"} style={{ gap: 16 }}>
            <Input
                id="companyName"
                name="companyName"
                label={"Company Name"}
                initValue={values.companyName}
                value={values.companyName}
                placeholder={"Example Company"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched?.companyName && errors?.companyName }
                validate
            />

            <Input
                id="firstName"
                name="firstName"
                initValue={values.firstName}
                value={values.firstName}
                label={"First Name"}
                placeholder={"John"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.firstName && errors.firstName }
                validate
            />

            <Input
                id="lastName"
                name="lastName"
                label={"Last Name"}
                initValue={values.lastName}
                value={values.lastName}
                placeholder={"Doe"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={touched.lastName && errors.lastName}
                validate
            />


            <Input
                id="address1"
                name="address1"
                label={"Address Line 1"}
                initValue={values.address1}
                value={values.address1}
                placeholder={"123 Address Street"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.address1 && errors.address1 }
                validate
            />


            <Input
                id="address2"
                name="address2"
                label={"Address Line 2"}
                placeholder={"123 Address Street"}
                initValue={values.address2}
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.address2 && errors.address2 }
                validate
            />


            <Input
                id="city"
                name="city"
                label={"City"}
                placeholder={"eg. Toronto"}
                initValue={values.city}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={touched.city && errors.city}
                validate
            />


            <Input
                id="postal"
                name="postal"
                label={"Postal Code"}
                initValue={values.postal}
                value={values.postal}
                placeholder={"ABC 123"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.postal && errors.postal}
                validate
            />


            <Input
                id="state"
                name="state"
                label={"Province/State"}
                placeholder={"eg. Ontario"}
                initValue={values.state}
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.state && errors.state}
                validate
            />


            <Input
                id="country"
                name="country"
                label={"Country"}
                initValue={values.country}
                value={values.country}
                placeholder={"eg. Canada"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={touched.country && errors.country}
                validate
            />


            <Input
                id="phone"
                name="phone"
                label={"Contact Number"}
                initValue={values.phone}
                value={values.phone}
                placeholder={"(999)-999-9999"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={ touched.phone && errors.phone}
                validate
            />


            <Input
                id="alternate"
                name="alternate"
                initValue={values.alternate}
                value={values.alternate}
                label={"Alternate Contact Number"}
                placeholder={"(999)-999-9999"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={touched.alternate && errors.alternate}
                validate
            />


            <Input
                id="email"
                name="email"
                label={"Email Address"}
                initValue={values.email}
                value={values.email}
                placeholder={"johndoe@pickups.com"}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={touched.email && errors.email}
                validate
            />

            <Flex direction="row" justifyContent={'space-between'} style={{ alignItems: 'flex-end' }} >
                <Button secondary style={{ width: 'fit-content', minWidth: '150px' }} onClick={() => onClose(false)} label="Cancel"></Button>
                <Button style={{ width: 'fit-content', minWidth: '150px' }} label="Update" onClick={handleSubmit}></Button>
            </Flex>
        </Flex>
    )
}

export default EditContactDetails
