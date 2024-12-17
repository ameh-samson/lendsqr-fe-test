import { ReactNode } from "react";

export interface ChildrenType {
  children: ReactNode;
}

export interface AppContextType {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
}
