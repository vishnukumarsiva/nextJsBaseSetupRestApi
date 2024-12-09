"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useQueryController } from "@/controller/api-managers/query-controller";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { queryClient } = useQueryController();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
