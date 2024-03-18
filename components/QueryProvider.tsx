"use client";
import React, { useState } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function QueryProvider({ children }: any) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
}

export { QueryProvider };
