import { loginFormSchema } from "@/schemas/formSchema";
import { ReactNode } from "react";
import { z } from "zod";

export interface ChildrenType {
  children: ReactNode;
}

export interface UserType {
  id: number;
  email: string;
  phone: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  username: string;
  date_joined: string;
  organization: string;
  hasLoan: boolean;
  hasSavings: boolean;
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
