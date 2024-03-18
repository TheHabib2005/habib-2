"use client";

import { categoryies } from "@/utils/constant";
import { categoryTypes } from "@/utils/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Category = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  const [categoryLists, setCategory] = useState<categoryTypes[]>(categoryies);
  const [selectedCategory, setSelectedCategory] = useState<any>(
    new Set(params.get("category")?.split(",")) || []
  );
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCheckBox = (e: any, brand: any) => {
    let updatedCategory = [...categoryLists];
    updatedCategory.map((item, index) => {
      if (item.id === brand.id) {
        if (item.isChecked === true) {
          item.isChecked = false;
          selectedCategory.delete(item.name);
        } else {
          item.isChecked = true;
          selectedCategory.add(item.name);
        }
      }
    });

    setCategory(updatedCategory);

    let paramsString = Array.from(selectedCategory);

    if (selectedCategory.size > 0) {
      params.set("category", paramsString.join(","));
    } else {
      params.delete("category");
    }
    router.replace(`${path}?${params}`);
  };

  const renderCategoryList = () => {
    let sortedCategory = categoryLists.filter((element) =>
      element.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return sortedCategory.length > 0 ? (
      sortedCategory.map((category) => {
        return (
          <div
            key={category.id}
            className="flex items-center gap-3 text-white cursor-pointer"
          >
            <input
              type="checkbox"
              checked={category.isChecked}
              onChange={(e) => handleCheckBox(e, category)}
              name=""
              id={`${category.id}input`}
            />
            <label
              className={`cursor-pointer ${
                category.isChecked && "text-blue-600"
              }`}
              htmlFor={`${category.id}input`}
            >
              {category.name}
            </label>
          </div>
        );
      })
    ) : (
      <div className="text-secendery capitalize text-md">no category found</div>
    );
  };

  useLayoutEffect(() => {
    let category_from_url = params.get("category")?.split(",");
    let updatedCategory = [...categoryLists];
    category_from_url?.map((u_params) => {
      updatedCategory.map((item, index) => {
        if (item.name === u_params) {
          item.isChecked = true;
        }
      });
    });
    setCategory(updatedCategory);
  }, []);

  return (
    <div className="category-container">
      <div>
        <div className="flex justify-between items-center ">
          <h1 className="text-secendery font-bold text-[14px]">CATEGORIES</h1>
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
              className="px-3 py-1 text-sm bg-transparent placeholder:text-neutral-400 text-neutral-200 border border-neutral-700 rounded-md focus:outline-none "
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
      <ul>{renderCategoryList()}</ul>
    </div>
  );
};

export default Category;
