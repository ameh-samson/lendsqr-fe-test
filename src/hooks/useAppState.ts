import { fetchUsers } from "@/configurations/fetchUsers";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useAppState = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Calculate metrics when data is available
  const activeUsers =
    data?.filter((user: UserType) => user.status === "Active") || [];
  const usersWithLoans = data?.filter((user: UserType) => user.hasLoan) || [];
  const usersWithSavings =
    data?.filter((user: UserType) => user.hasSavings) || [];

  const value = {
    data,
    activeUsers,
    usersWithLoans,
    usersWithSavings,
    toggleSidebar,
    setToggleSidebar,
  };

  return value;
};
