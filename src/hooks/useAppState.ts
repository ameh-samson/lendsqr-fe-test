import { useState } from "react";

export const useAppState = () => {
  const [test, setTest] = useState("Hello");

  const value = { test, setTest };

  return value;
};
