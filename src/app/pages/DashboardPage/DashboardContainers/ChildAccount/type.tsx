export interface companyDetails {
    singleCompanyDetails: object
}

export interface inputProps {
    singleCompanyDetails: object
    saveAction: () => void
}

export interface editChildAccountProps {
    handleCloseDrawer: () => void
    singleCompanyDetails: object
    saveAction: () => void
}