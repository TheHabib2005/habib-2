"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import useFetch from "@/hook/useFetch";
import Cart from "./Cart";
import { useState } from "react";
import { useFormSteps } from "@/store/useStore";
import { formatPriceWithCommas } from "@/utils";

const Header = () => {
  // const [cartOpen, setCartOpen] = useState(false)
  const { setIsCartOpen, cart } = useFormSteps();
  let r = formatPriceWithCommas(1000000);
  console.log(r);

  return (
    <header className="  w-full 2xl:p-7 py-5 px-8 flex items-center ">
      <div className="w-1/3">
        <Link href={"/"} className="text-white font-semibold text-[20px]">
          H&H STORE
        </Link>
      </div>
      <div className="w-1/3">
        <SearchBar />
      </div>
      <div className="w-1/3 flex justify-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer"

        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <div className="relative">
          <div className="absolute text-white right-[-12px] top-[-12px] z-10 w-4 flex items-center justify-center h-4 bg-[#2159D4] rounded-full "><h1 className="text-white text-[12px]">{cart.length}</h1></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => {
              setIsCartOpen(true)
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <Cart />

    </header>
  );
};

export default Header;
