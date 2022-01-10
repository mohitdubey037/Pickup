export const shipmentDetailsItemInitValue = {
    quantity: '',
    orderCost: '',
    description: "",
    height: '',
    length: '',
    width: '',
    weight: '',
    sizeDimension: '',
    weightDimension: '',
    document: ""
}


export const singleShipmentInitValues = {

    originFavorite: false,
    originBillingType: 1,
    originLocationType: 1,
    originCompanyName: "",
    originFirstName: "",
    originLastName: "",
    originAddressLine1: "",
    originAddressLine2: "",
    originCity: "",
    originPostalCode: "",
    originProvinceState: "",
    originCountry: "",
    originContactNumber: "",
    originAlternateContactNumber: "",
    originEmailAddress: "",
    originAdditionalNotes: "",

    destinationFavorite: false,
    destinationBillingType: 1,
    destinationLocationType: 1,
    destinationCompanyName: "",
    destinationFirstName: "",
    destinationLastName: "",
    destinationAddressLine1: "",
    destinationAddressLine2: "",
    destinationCity: "",
    destinationPostalCode: "",
    destinationProvinceState: "",
    destinationCountry: "",
    destinationContactNumber: "",
    destinationAlternateContactNumber: "",
    destinationEmailAddress: "",
    destinationAdditionalNotes: "",

    categoryId: "",
    customerRefNo: "",
    dropOption: "",
    fragile: 1,

    shipmentDetails: [
        { ...shipmentDetailsItemInitValue }
    ],

    // SCHEDULE SHIPMENT
    scheduleType: "",
    shipmentTime: "",
    shipmentDate: "",
};

export const singleShipmentInitValues1 = {

    originFavorite: false,
    originBillingType: 1,
    originLocationType: 1,
    originCompanyName: "Torinit",
    originFirstName: "First",
    originLastName: "Last",
    originAddressLine1: "Address 1",
    originAddressLine2: "Address 2",
    originCity: "City",
    originPostalCode: "Post",
    originProvinceState: "STate",
    originCountry: "Country",
    originContactNumber: "1111111",
    originAlternateContactNumber: "2222222",
    originEmailAddress: "a@a.com",
    originAdditionalNotes: "Additional notes",

    destinationFavorite: false,
    destinationBillingType: 1,
    destinationLocationType: 1,
    destinationCompanyName: "Company",
    destinationFirstName: "Name",
    destinationLastName: "Surname",
    destinationAddressLine1: "Add 1",
    destinationAddressLine2: "Add 2",
    destinationCity: "Dest City",
    destinationPostalCode: "111111",
    destinationProvinceState: "State 2",
    destinationCountry: "Country 2",
    destinationContactNumber: "2222222222",
    destinationAlternateContactNumber: "666666666",
    destinationEmailAddress: "b@b.com",
    destinationAdditionalNotes: "Additional notes",

    categoryId: "",
    customerRefNo: "qqqq",
    dropOption: "10",
    fragile: 1,

    shipmentDetails: [
        { ...shipmentDetailsItemInitValue }
    ],

    // SCHEDULE SHIPMENT
    scheduleType: "17",
    shipmentTime: "",
    shipmentDate: "",
};

export const shipmentInitValues = {
    orders: [
        {...singleShipmentInitValues}
    ]
}

export const transformPayloadToBackend = (values: any) => {
    const payload = {
        categoryId: values.categoryId,
        distance: 0,
        customerReferenceNumber: values.customerRefNo,
        dropLocation: {
            latitude: 21.11704845,
            longitude: 79.04402281,
            details: values.destinationAdditionalNotes,
            saveLocation: values.destinationFavorite ? 1 : 0,
            type: values.destinationBillingType,
            addressType: values.destinationLocationType,
            locationCompanyName: values.destinationCompanyName,
            locationFirstName: values.destinationFirstName,
            locationLastName: values.destinationLastName,
            locationPhone: values.destinationContactNumber,
            locationAlternatePhone: values.destinationAlternateContactNumber,
            locationEmail: values.destinationEmailAddress,
            locationBillingType: values.destinationBillingType,
            locationAddressLine1: values.destinationAddressLine1,
            locationAddressLine2: values.destinationAddressLine2,
            locationCity: values.destinationCity,
            locationPinCode: values.destinationPostalCode,
            locationProvinceCode: values.destinationProvinceState,
            locationCountry: values.destinationCountry
        },
        pickupLocation: {
            latitude: 21.11704845,
            longitude: 79.04402281,
            details: values.originAdditionalNotes,
            saveLocation: values.originFavorite ? 1 : 0,
            type: values.originBillingType,
            addressType: values.originLocationType,
            locationCompanyName: values.originCompanyName,
            locationFirstName: values.originFirstName,
            locationLastName: values.originLastName,
            locationPhone: values.originContactNumber,
            locationAlternatePhone: values.originAlternateContactNumber,
            locationEmail: values.originEmailAddress,
            locationBillingType: values.originBillingType,
            locationAddressLine1: values.originAddressLine1,
            locationAddressLine2: values.originAddressLine2,
            locationCity: values.originCity,
            locationPinCode: values.originPostalCode,
            locationProvinceCode: values.originProvinceState,
            locationCountry: values.originCountry
        },
        shipmentCost: "111",
        shipmentTime: values.shipmentTime,
        shipmentDate: values.shipmentDate,
        note: "note",
        type: Number(values.scheduleType),
        items: values.shipmentDetails,
        picture: "",
        dropOption: values.dropOption
    }


    return payload
}


export const getNextOrderValues = (order: any) => {
    return ({
        ...order,
        destinationFavorite: false,
        destinationBillingType: 1,
        destinationLocationType: 1,
        destinationCompanyName: "",
        destinationFirstName: "",
        destinationLastName: "",
        destinationAddressLine1: "",
        destinationAddressLine2: "",
        destinationCity: "",
        destinationPostalCode: "",
        destinationProvinceState: "",
        destinationCountry: "",
        destinationContactNumber: "",
        destinationAlternateContactNumber: "",
        destinationEmailAddress: "",
        destinationAdditionalNotes: "",

        shipmentDetails: [
            { ...shipmentDetailsItemInitValue }
        ],
    })
}
