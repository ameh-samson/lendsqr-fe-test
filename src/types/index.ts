import { loginFormSchema } from "@/schemas/formSchema";
import { ReactNode } from "react";
import { z } from "zod";

export interface ChildrenType {
  children: ReactNode;
}

export interface UserType {
  id: string;
  avatar: string;
  email: string;
  phone: string;
  gender: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  full_name: string;
  children: string;
  date_joined: string;
  organization: string;
  hasLoan: boolean;
  hasSavings: boolean;
  bvn: string;
  bank: string;
  user_tier: number;
  marital_status: string;
  residence: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  education_and_employment: {
    income: {
      main_income: string;
      monthly_income: string;
    };

    office_email: string;
    loan_repayment: number;
    employment_status: string;
    level_of_education: string;
    sector_of_employment: string;
    duration_of_employment: string;
  };

  guarantor: {
    name: string;
    email: string;
    phone: string;
    address: string;
    relationship: string;
  };
}

export interface AppContextType {
  data: UserType[];
  activeUsers: UserType[];
  usersWithLoans: UserType[];
  usersWithSavings: UserType[];
}

export type LoginFormType = z.infer<typeof loginFormSchema>;

export interface sidebarLinkType {
  href: string;
  title: string;
  icon: string;
}

export interface metricCardDataType {
  image: string;
  title: string;
  value: number;
}

export interface UserDetailsCardType {
  avatar: string;
  name: string;
  id: string;
  userTier: number;
  mainIncome: string;
  bvn: string;
  bank: string;
}

export interface otherDetailsType {
  name: string;
  number: string;
  levelOfEdu: string;
  gender: string;
  email: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  employmentStatus: string;
  employmentSector: string;
  bvn: string;
  employmentDuration: string;
  officialEmail: string;
  monthlyIncome: string;
  loanPayment: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantorName: string;
  guarantorPhoneNumber: string;
  guarantorEmail: string;
  guarantorRelationship: string;
}

export interface FilterFormFilteredType {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phone?: string;
  status?: "active" | "inactive" | "blacklisted";
}
