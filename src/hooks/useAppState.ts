import { fetchUsers } from "@/configurations/fetchUsers";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useAppState = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log(data);

  // Calculate metrics when data is available
  const activeUsers =
    data?.filter((user: UserType) => user.status === "Active") || [];
  const usersWithLoans = data?.filter((user: UserType) => user.hasLoan) || [];
  const usersWithSavings =
    data?.filter((user: UserType) => user.hasSavings) || [];

  const value = { data, activeUsers, usersWithLoans, usersWithSavings };

  return value;
};
