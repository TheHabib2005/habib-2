import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectedFilters from "./selectedFilters";
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";

import { useFormSteps } from "@/store/useStore";
import { delay } from "@/utils/contant";
import Fetch from "@/hook/useFetch";
import useFetch from "@/hook/useFetch";

const FilterBar = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return (
    <div className="p-4">
      <div>
        <h1 className=" text-[12px] text-neutral-300">Filter The Products</h1>
        {params.size > 0 && <SelectedFilters />}
        <BrandFilter />
        <RatingFilter />
        <PriceFilter />
      </div>
    </div>
  );
};

export default FilterBar;
