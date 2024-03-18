"use client";

import { brands, categoryies } from "@/utils/constant";
import { brandTypes } from "@/utils/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandsList = () => {
  const [brandLists, setBrands] = useState<brandTypes[]>(brands);

  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  const [selectedBrands, setSelectedBrands] = useState<any>(
    new Set(params.get("brands")?.split(",")) || []
  );

  const handleCheckBox = (e: any, brand: any) => {
    let updatedBrands = [...brandLists];
    updatedBrands.map((item, index) => {
      if (item.id === brand.id) {
        if (item.isChecked === true) {
          item.isChecked = false;
          selectedBrands.delete(item.name);
        } else {
          item.isChecked = true;
          selectedBrands.add(item.name);
        }
      }
    });
    setBrands(updatedBrands);
    let paramsString = Array.from(selectedBrands);

    if (selectedBrands.size > 0) {
      params.set("brands", paramsString.join(","));
    } else {
      params.delete("brands");
    }
    router.replace(`${path}?${params}`);
  };

  const renderBrandsList = () => {
    let sortedBrand = brandLists.filter((element) =>
      element.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return sortedBrand.length > 0 ? (
      sortedBrand.map((brand) => {
        return (
          <div
            key={brand.id}
            className="flex items-center gap-3 text-white cursor-pointer"
          >
            <input
              type="checkbox"
              checked={brand.isChecked}
              onChange={(e) => handleCheckBox(e, brand)}
              name=""
              id={`${brand.id}input`}
            />
            <label
              className={`cursor-pointer ${brand.isChecked && "text-blue-600"}`}
              htmlFor={`${brand.id}input`}
            >
              {brand.name}
            </label>
          </div>
        );
      })
    ) : (
      <div className="text-neutral-400 capitalize text-md">no brand found</div>
    );
  };

  useEffect(() => {
    let brandList_from_url = params.get("brands")?.split(",");
    console.log(brandList_from_url);

    let updatedCategory = [...brandLists];
    brandList_from_url?.map((u_params) => {
      updatedCategory.map((item, index) => {
        if (item.name === u_params) {
          item.isChecked = true;
        }
      });
    });
    setBrands(updatedCategory);
  }, []);

  return (
    <div className="category-container">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-secendery font-bold text-[14px]">BRAND</h1>
          <button
            className="text-white mr-3"
            onClick={(e) => setIsSearchBarOpen(!isSearchBarOpen)}
          >
            {isSearchBarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" text-white w-4 h-4  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            )}
          </button>
        </div>

        {isSearchBarOpen && (
          <div className="mt-2">
            <input
              type="text"
              className="px-3 py-1 text-sm bg-transparent placeholder:text-neutral-400 text-neutral-200 border border-neutral-700 rounded-md focus:outline-none border-neutral-500"
              placeholder="search category..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // console.log(categoryLists);
              }}
              value={searchQuery}
            />
          </div>
        )}
      </div>
      <ul>{renderBrandsList()}</ul>
    </div>
  );
};

export default BrandsList;
