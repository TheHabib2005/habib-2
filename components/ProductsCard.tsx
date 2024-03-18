"use client";
import useFetchProducts from "@/hooks/useFetchProducts";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { SelectDemo } from "./select";
import BreadGrum from "./BreadGrum";

const ProductsCard = () => {
  const { isLoading, result } = useFetchProducts(
    "http://localhost:3000/api/me"
  );
  console.log(result);
  return (
    <div className=" products-card-wrapper flex-1 h-[100vh]  overflow-hidden overflow-y-scroll ">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <header className="flex justify-between mb-3 items-center px-3">
            <BreadGrum />
            <SelectDemo />
          </header>
          <div className=" grid gap-4 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
            {result?.map((element: any, index: number) => (
              <ProductCard info={element} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
