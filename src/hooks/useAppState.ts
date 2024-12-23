import { fetchUsers } from "@/configurations/fetchUsers";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const useAppState = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [localData, setLocalData] = useState<UserType[] | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  // Load data from localStorage when the component initializes
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setLocalData(JSON.parse(storedData));
    }
  }, []);

  // Fetch data using Tanstack Query
  const { data: fetchedData, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Update localStorage and localData when fetch is successful
  useEffect(() => {
    if (isSuccess && fetchedData) {
      localStorage.setItem("myData", JSON.stringify(fetchedData));
      setLocalData(fetchedData);
    }
  }, [isSuccess, fetchedData]);

  // Use localData as the primary data source
  const data = localData || fetchedData;

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
    showProfileMenu,
    setShowProfileMenu,
  };

  return value;
};
