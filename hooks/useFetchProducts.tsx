"use client";

import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useFetchProducts = (url: string) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<any>([]);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      let data = "dgfg";
      // const rr = await axios.post(url, data);
      let res = await fetch("http://localhost:3000/api/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsLoading(false);
      setResult(await res.json());
    } catch (error) {
      console.log(error);

      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { result, isLoading, error };
};

export default useFetchProducts;
