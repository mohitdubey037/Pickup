export interface companyDetails {
    singleCompanyDetails: object
}

export interface inputProps {
    singleCompanyDetails: any
    saveAction: () => void
}

export interface editChildAccountProps {
    handleCloseDrawer: () => void
    singleCompanyDetails: any
    saveAction: () => void
}