import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CustomLoading = () => {
  return (
    // <div className="w-full h-screen fixed top-0 left-0 z-40 bg-black/50 flex items-center justify-center text-white text-2xl">

    // </div>
    <>
      {Array(10)
        .fill("845")
        .map((element) => {
          return (
            <div className="flex flex-col space-y-3 mt-8" key={element}>
              <Skeleton className="h-[250px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CustomLoading;
