import { useAppState } from "@/hooks/useAppState";
import { AppContextType, ChildrenType } from "@/types";
import { createContext, useContext, FC } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useDashboardContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a ContextProvider"
    );
  }
  return context;
};

const ContextProvider: FC<ChildrenType> = ({ children }) => {
  const state = useAppState();
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default ContextProvider;
