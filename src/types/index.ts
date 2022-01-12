export interface AuthUser {
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
