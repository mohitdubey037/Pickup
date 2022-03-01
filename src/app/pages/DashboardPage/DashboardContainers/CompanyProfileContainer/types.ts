export interface CompanyDetailsType {
  companyProfileImage: string;
  companyName: string;
  businessNumber: string;
  industry: string;
  employeeStrength: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  province: string;
  country: string;
  hstNumber: string;
  companyId: string;
}

export interface AdminDetailsType {
  profileImage: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  role: string;
  emailId: string;
}

export interface ColleagueDetailsType {
  inviteId: number;
  profileImage: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  role: number;
  emailId: string;
  notificationFrequency: string;
  roleDesignation: string;
  notification: number;
  type: number;
  companyId: number;
}
