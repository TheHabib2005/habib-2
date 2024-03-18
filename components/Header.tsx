"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import CartBar from "./CartBar";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollPosition) {
        setIsHeaderShow(false);
      } else {
        setIsHeaderShow(true);
      }
    } else {
      setIsHeaderShow(false);
    }

    setLastScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(isHeaderShow);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, setLastScrollPosition]);

  return (
    <header
      className={`${
        isHeaderShow
          ? " fixed  transition-all top-0 left-0 w-full z-10 flex items-center justify-between p-4 lg:px-6"
          : "relative flex items-center justify-between p-4 lg:px-6"
      } bg-[#171717] app-header`}
    >
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <h1 className="text-bold text-white text-md">
            <Link href={"/"}>ACME STORE </Link>
          </h1>
          <div className="flex items-center gap-5 ml-8">
            <Link
              className="text-secendery text-[15px] font-semibold"
              href={"/products"}
            >
              Products
            </Link>
            <Link
              className="text-secendery text-[15px] font-semibold"
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <div className="relative w-full">
            <Input
              placeholder="Search of products..."
              className="bg-transparent outline-none border border-neutral-800  focus:border-neutral-700 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" text-white w-4 h-4 absolute top-[50%] right-3 translate-y-[-50%] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-end md:w-1/3">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>

            <div
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="cursor-pointer w-[40px] h-[40px] justify-center flex items-center border border-neutral-700 rounded-md "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CartBar isOpen={isCartOpen} setOpen={setIsCartOpen} />
    </header>
  );
};

export default Header;
