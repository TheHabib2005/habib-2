import useFetch from "@/hook/useFetch";
import { useFormSteps } from "@/store/useStore";
import React from "react";

const SearchBar = () => {
  const { isLoading } = useFormSteps();
  return (
    <form
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="p-2 bg-primary_bg text-white w-full border border-neutral-800 rounded-md outline-none placeholder:text-[15px]  placeholder:text-neutral-400 text-[15px] focus:border-neutral-600"
        placeholder="Search Product..."
        disabled={isLoading}
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
    </form>
  );
};

export default SearchBar;
