export interface CompanyDetailsType {
  avatar: string;
  CompanyName: string;
  BusinessNumber: string;
  Industry: string;
  EmployeeStrength: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Pincode: string;
  Province: string;
  Country: string;
  HSTNumber: string;
}

export interface AdminDetailsType {
  avatar: string;
  emailId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export interface ColleagueDetailsType {
  avatar: string;
  companyId: number;
  emailId: string;
  firstName: string;
  inviteId: number;
  lastName: string;
  notification: number;
  notificationFrequency: string;
  phoneNo: string;
  role: number;
  roleDesignation: string;
  type: number;
}
