"use cleint";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

const PriceRange = () => {
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  useLayoutEffect(() => {
    if (params.get("price-min")) {
      setMin(Number(params.get("price-min")));
    }
    if (params.get("price-max")) {
      setMax(Number(params.get("price-max")));
    }
  }, []);
  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (min !== undefined) {
          params.set("price-min", min.toString());
        } else {
          params.delete("price-min");
        }
        if (max !== undefined) {
          params.set("price-max", max.toString());
        } else {
          params.delete("price-max");
        }

        router.replace(`${path}?${params}`);
      }}
    >
      <h1 className="text-secendery text-sm font-semibold ">PRICE</h1>
      <div className="flex mt-3  justify-between items-center gap-5 w-full">
        <div className="w-[80px]">
          <input
            type="number"
            onChange={(e) => setMin(Number(e.target.value))}
            value={min}
            placeholder="min"
            className="w-full p-1 rounded-md"
            name="min-price"
          />
        </div>

        <div className="text-white text-xl"> - </div>
        <div className="w-[80px]">
          <input
            type="number"
            className="w-full p-1 rounded-md"
            onChange={(e) => setMax(Number(e.target.value))}
            value={max}
            placeholder="max"
            name="max-price"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-3 w-full text-white  px-4 py-2 rounded-md text-sm cursor-pointer bg-[#000]"
      >
        Apply
      </button>
    </form>
  );
};

export default PriceRange;
