"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ProductsData } from "@/api";
import Link from "next/link";
import SelectedFilters from "@/components/(root)/selectedFilters";
import BreadGrum from "@/components/(root)/BreadGrum";

import CustomLoading from "@/components/(root)/CustomLoading";
import Cart from "@/components/(root)/Cart";
import { useFormSteps } from "@/store/useStore";

const Category = ({ params }) => {
  console.log("randering", Math.round(Math.random() * 5));

  const [brandList, setbrandList] = useState(
    (params.category === "smartphones" && [
      {
        id: Math.random(),
        name: "apple",
        isChecked: false,
      },

      {
        id: Math.random(),
        name: "poco",
        isChecked: false,
      },
      {
        id: Math.random(),
        name: "samsung",
        isChecked: false,
      },
      {
        id: Math.random(),
        name: "oneplus",
        isChecked: false,
      },
    ]) ||
    (params.category === "laptops" && [
      {
        id: Math.random(),
        name: "apple",
        isChecked: false,
      },
      {
        id: Math.random(),
        name: "chuwi",
        isChecked: false,
      },
      {
        id: Math.random(),
        name: "hp",
        isChecked: false,
      },
      {
        id: Math.random(),
        name: "microsoft",
        isChecked: false,
      },
    ])
  );
  const [selectedBrand, setSelectedBrands] = useState(new Set([]));
  const { isLoading, addToCart, totalAmount, setLoading, loadProduct } =
    useFormSteps();


  const [sortedValue, setsortedValue] = useState("[asc");
  const searchParams = useSearchParams();
  const urlParams = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/api/product/";
  const handleCheckbox = (item, index) => {
    let updatedBrand = [...brandList];
    if (!item.isChecked) {
      updatedBrand[index].isChecked = true;
      selectedBrand.add(item.name);
      // selectedBrand.includes(item.name) && selectedBrand.push(item.name);
    } else {
      updatedBrand[index].isChecked = false;
      selectedBrand.delete(item.name);
      // setSelectedBrands(selectedBrand.filter((e) => e !== item.name));
    }

    const selected = [...selectedBrand];

    setbrandList(updatedBrand);

    if (selected.length > 0) {
      urlParams.set("brand", selected.join(" "));
      router.replace(`${path}?${urlParams}`);
    } else {
      urlParams.delete("brand");
      router.replace(`${path}?${urlParams}`);
    }
    fetchData();
  };

  const updateState = () => {
    const getParams = urlParams.get("brand")?.split(" ");
    setSelectedBrands(new Set(getParams));
    if (getParams?.length > 0) {
      let updateSelectedBrand = [...brandList];
      updateSelectedBrand.map((brand, index) => {
        if (getParams?.includes(brand.name) && getParams.length > 0) {
          updateSelectedBrand[index].isChecked = true;
        } else {
          return;
        }
      });
      setbrandList(updateSelectedBrand);
    }
  };

  const fetchData = async () => {
    let query = {};
    let brandArray = urlParams.get("brand")?.split(" ");
    let category = params.category;
    if (brandArray) {
      query.brand = { $in: brandArray };
    }
    if (category) {
      query.category = category;
    }
    try {
      setLoading(true);
      const response = await axios.post(url, query);
      loadProduct(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    updateState();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex  gap-3  w-full p-6">
      <div className="w-1/4 bg-[#1e1e1e] p-4">
        <div className="flex  flex-col ">
          {urlParams.size > 0 && <SelectedFilters />}
          <h1 className="text-white ml-2">Brand</h1>
          {brandList.map((item, index) => {
            return (
              <label
                htmlFor={item.name}
                key={Math.random()}
                className="p-2 flex text-white gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name=""
                  id={item.name}
                  onChange={() => {
                    handleCheckbox(item, index);
                  }}
                  checked={item.isChecked}
                />
                <span className="capitalize">{item.name}</span>
              </label>
            );
          })}
        </div>

        {/*  */}
      </div>

      <div className="w-3/4 bg-[#1e1e1e] text-white p-4">
        <header className="flex justify-between">
          <BreadGrum />
          <select
            name="sort"
            id=""
            value={sortedValue}
            onChange={(e) => {
              setsortedValue(e.target.value);
            }}
          >
            <option value={"asc"}>sort by default </option>
            <option value="asc">high to low </option>
            <option value="desc">low to high </option>
          </select>
        </header>
        {isLoading ? (
          <CustomLoading />
        ) : (
          data.map((element) => {
            return (
              <div

                key={element.id + Math.random()}
                className="flex   gap-5 mt-4"
              >
                <div className="relative">
                  <svg
                    onClick={(e) => {

                      alert("add to wishList");
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white  absolute top-2 right-2 bg cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <Image
                    width={170}
                    height={170}
                    src={element.thumbnail}
                    alt="image"
                  />
                </div>
                <div className="mt-7">
                  <Link href={`${path}/${element._id}/`} className=" ">{element.title.substring(0, 100)}</Link>
                  <p>price: ${element.price}</p>
                  <p>brand: {element.brand}</p>
                  <button className="text-white p-2 capitalize bg-[#000] cursor-pointer mt-4 rounded-md" onClick={() => {
                    let currentObj = element
                    let newObj = { ...currentObj, quentity: 1 }
                    console.log(newObj);
                    addToCart(newObj);
                    totalAmount()
                  }}>
                    add to cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Category;
