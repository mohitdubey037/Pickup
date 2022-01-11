
export interface AuthUser {
    userId:      number;
    firstName:   string;
    lastName:    string;
    emailId:     string;
    typeId:      number;
    status:      number;
    createdAt:   Date;
    updatedAt:   Date;
    createdBy:   null;
    updatedBy:   null;
    companyId:   number;
    roleId:      number;
    userDetails: UserDetails;
}

export interface UserDetails {
    detailsId:    number;
    emailStatus:  number;
    signUpStatus: number;
    phoneNo:      string;
}
 
export interface CardType {
    card_id?: number;
    number?: string;
    name?: string;
    expiryDate?: string;
    expiry_month?: string;
    expiry_year?: string;
    card_type?: string;
}