This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

"use client";
import { brandsList } from "@/utils/constant";
import { brandTypes } from "@/utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useLayoutEffect, useState } from "react";

const BrandsList = () => {
const dataFromLocalStroge: any =
localStorage.getItem("brands") && localStorage.getItem("brands");
const [brands, setBrands] = useState<brandTypes[]>(
localStorage.getItem("brands")
? JSON.parse(dataFromLocalStroge)
: brandsList
);

const searchParams = useSearchParams();
const params = new URLSearchParams(searchParams);
const path = usePathname();
const router = useRouter();

const handleParams = (obj: brandTypes[]) => {
const checkedObj = obj.filter((item) => item.isChecked === true);
let selectedBrands = checkedObj.map((element) => {
return element.name;
});
if (selectedBrands.length > 0) {
params.set("brands", selectedBrands.toString().toLowerCase());
router.replace(`${path}?${params}`);
} else {
params.delete("brands");
}
const brandsParams = params.get("brands")?.split(",");

    if (brandsParams === undefined) {
      params.delete("brands");
      router.replace(`${path}?${params}`);
    }

};

const handleCheckBox = (e: any, brand: brandTypes) => {
let updatedBrands = [...brands];
updatedBrands.map((item, index) => {
if (item.id === brand.id) {
if (item.isChecked === true) {
item.isChecked = false;
} else {
item.isChecked = true;
}
}
});
setBrands(updatedBrands);
};

useEffect(() => {
handleParams(brands);
return () => {
params.delete("brands");
};
}, [brands, params]);

useLayoutEffect(() => {
if (params.get("brands")) {
const paramsArray = params?.get("brands")?.toLowerCase().split(",");
let arr = [...brands];
arr.map((brand) => {
if (paramsArray?.includes(brand.name.toLowerCase())) {
brand.isChecked = true;
} else {
brand.isChecked = false;
}
});
setBrands(arr);
}
return () => {
params.delete("brands");
};
}, []);

return (
<div className="brandList-container ">
<h1 className="text-white text-lg">Brands</h1>

      <ul>
        {brands.map((brand, index) => {
          return (
            <div
              key={brand.id}
              className="flex items-center gap-2 py-2 cursor-pointer"
              onClick={(e) => handleCheckBox(e, brand)}
            >
              <input
                type="checkbox"
                name={brand.name}
                id=""
                checked={brand.isChecked}
                onChange={(e) => handleCheckBox(e, brand)}
              />
              <p
                className={`${
                  brand.isChecked ? "text-blue-500" : "text-neutral-500"
                }`}
              >
                {brand.name}
              </p>
            </div>
          );
        })}
      </ul>
    </div>

);
};

export default BrandsList;
