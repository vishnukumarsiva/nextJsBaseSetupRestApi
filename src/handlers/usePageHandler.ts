"use client";

// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useUserController } from "@/controller/user-data/useUserController";

export const useUserPageHandler = () => {
  const { getUsers } = useUserController();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getUsers,
  });

  return {
    isLoading,
    userData,
  };
};
