"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const BreadGrum = () => {
  const paths = usePathname();
  console.log(paths);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  console.log(params.get("category"));

  return (
    <div>
      <h1 className="text-white text-[16px]">
        Home
        <span> {paths}</span>
      </h1>
      <p className="text-[14px] text-white/50">
        T-Shirts For Men & Women - 241349
      </p>
    </div>
  );
};

export default BreadGrum;
