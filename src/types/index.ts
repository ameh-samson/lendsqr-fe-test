import { loginFormSchema } from "@/schemas/formSchema";
import { ReactNode } from "react";
import { z } from "zod";

export interface ChildrenType {
  children: ReactNode;
}

export interface AppContextType {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
}

export type LoginFormType = z.infer<typeof loginFormSchema>;
