export interface AuthUser {
    profileImage?: string;
  userId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  typeId: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: null;
  updatedBy: null;
  companyId: number;
  roleId: number;
  userDetails: UserDetails;
  roleDesignation: string;
}

export interface UserDetails {
  detailsId: number;
  emailStatus: number;
  signUpStatus: number;
  phoneNo: string;
}

export interface CardType {
  id?: string;
  number?: string;
  name?: string;
  customer?: string;
  expiryDate?: string;
  exp_month?: string;
  exp_year?: string;
  card_type?: string;
  last4?: string;
}
