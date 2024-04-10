import { categoryLists } from "@/utils/contant";
import Link from "next/link";
import React from "react";

const PopularCategory = () => {
  return (
    <div className="w-full p-6">
      <div className="mt-[25px] text-center ">
        <h1 className="text-white text-lg font-semibold  relative ">
          Popular Categories
        </h1>
        <div className="  mt-[40px] grid grid-cols-4 gap-4 mx-auto items-center">
          {categoryLists.map((category) => {
            return (
              <Link
                className=" p-3 rounded-md bg-[#2b2a2a] text-sm capitalize  text-white "
                href={`/product/${category.name}`}
                key={category.id}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
