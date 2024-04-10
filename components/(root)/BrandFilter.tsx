// import useFetch from "@/hook/useFetch";
// import { useFormSteps } from "@/store/useStore";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import React, { useState } from "react";

// const BrandFilter = () => {
//   // console.log("filter");

//   const { fetchData } = useFetch();
//   const { isLoading } = useFormSteps();
//   const searchparams = useSearchParams();
//   const params = new URLSearchParams(searchparams);
//   const router = useRouter();
//   const path = usePathname();
//   const [lists, setLists] = useState([
//     {
//       id: Math.round(Math.random()),
//       name: "Apple",
//       isChecked: false,
//     },
//     {
//       id: Math.round(Math.random()),
//       name: "Amazon",
//       isChecked: false,
//     },
//     {
//       id: Math.round(Math.random()),
//       name: "Microsoft",
//       isChecked: false,
//     },
//     {
//       id: Math.round(Math.random()),
//       name: "Google",
//       isChecked: false,
//     },

//     {
//       id: Math.round(Math.random()),
//       name: "Xioami",
//       isChecked: false,
//     },
//     {
//       id: Math.round(Math.random()),
//       name: "Walton",
//       isChecked: false,
//     },
//   ]);
//   const addParam = async (list) => {
//     params.set("brand", list.name);
//     router.replace(`${path}?${params}`);
//     // fetchData();
//   };
//   const [count, setCount] = useState(1);
//   return (
//     <div className="mt-4">
//       <h1 className="text-white px-3 py-1 text-sm">Brands</h1>

//       <ul className="flex flex-col  p-3 w-[60%] ">
//         {lists.map((list) => (
//           <label
//             className="w-full flex items-center gap-5 text-white text-sm cursor-pointer mb-5"
//             htmlFor={`${list.id}`}
//             key={list.name}
//           >
//             <input
//               type="checkbox"
//               // checked={list.isChecked}
//               name=""
//               id={`${list.id}`}
//               onChange={() => {
//                 addParam(list);
//               }}
//               disabled={isLoading}
//             />
//             {list.name}
//           </label>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BrandFilter;

import React from "react";

const BrandFilter = () => {
  return <div>BrandFilter</div>;
};

export default BrandFilter;
