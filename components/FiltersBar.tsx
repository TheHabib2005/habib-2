"use client";
import React, { useEffect } from "react";
import Category from "./Category";
import BrandsList from "./BrandsList";
import PriceRange from "./PriceRange";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import BreadGrum from "./BreadGrum";

const Sidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const params = new URLSearchParams(searchParams);

  return (
    <div className=" sticky  w-1/5 md:block hidden mr-5">
      <Category />
      <BrandsList />
      <PriceRange />
    </div>
  );
};

export default Sidebar;
