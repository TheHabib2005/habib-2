"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const dummyList = [
  {
    id: 1,
    name: "Microsoft",
    isChecked: false,
  },
  {
    id: 2,
    name: "Goggle",
    isChecked: false,
  },
  {
    id: 1,
    name: "Facebook",
    isChecked: false,
  },
];
const ShowProductByCategory = () => {
  const [brandList, setbrandList] = useState(dummyList);
  const [selectedBrand, setSelectedBrands] = useState(new Set([]));

  const [sortedValue, setsortedValue] = useState("[asc");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const path = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
      params.set("brand", selected.join(" "));
      router.replace(`${path}?${params}`);
    } else {
      params.delete("brand");
      router.replace(`${path}?${params}`);
    }
    fetchData();
  };

  const updateState = () => {
    const getParams = params.get("brand")?.split(" ");
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
    let categoryArray = params.get("brand")?.split(" ");
    if (categoryArray) {
      query.brand = { $in: categoryArray };
    }
    // console.log(query);

    try {
      setIsLoading(true);
      const response = await axios.post(url, query);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
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
    <div className="flex  w-full p-6">
      <div className="w-1/4 bg-purple-300">
        <div className="flex flex-col gap-3">
          {brandList.map((item, index) => {
            return (
              <label
                htmlFor={item.name}
                key={index}
                className="p-2 flex gap-3 cursor-pointer"
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
                <span>{item.name}</span>
              </label>
            );
          })}
        </div>

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
        {sortedValue}
      </div>
      <div className="w-3/4 bg-purple-500">
        {isLoading
          ? "Loading"
          : brandList.map((element) => {
              return (
                element.isChecked && (
                  <span key={element.id}>{element.name}</span>
                )
              );
            })}
      </div>
    </div>
  );
};

export default ShowProductByCategory;
