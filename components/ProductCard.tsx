"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SkeletonCard } from "./SkeletionCard";

const ProductCard = ({ info }) => {
  const imageRef = useRef(null);
  const [view, setView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // setTimeout(() => {
        //   setView(true);
        // }, 5000);
        setView(true);
      }
    });
  };

  useEffect(() => {
    const intersection = new IntersectionObserver(callback);
    if (imageRef?.current) {
      intersection.observe(imageRef.current);
    }
    return () => {
      intersection.disconnect();
    };
  }, [info]);

  return (
    <div
      className="border border-white/20 hover:border-blue-800 transition-all cursor-pointer bg-black rounded-md overflow-hidden relative"
      ref={imageRef}
    >
      {view ? (
        <>
          <Image
            width={200}
            height={200}
            className="object-contain w-full hover:scale-110 transition-all"
            alt="image-1"
            src={info?.thumbnail || ""}
          />
          <div className="flex bg-black/80 border border-secendery items-center justify-between px-3 py-1 rounded-full outline-none w-[80%] absolute bottom-3 translate-x-[-50%] left-[50%]">
            <p className="text-white">{info?.title}</p>
            <button className="py-1 px-3 cursor-pointer bg-blue-600 text-white rounded-full">
              ${info?.price}
            </button>
          </div>
        </>
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
};

export default ProductCard;
