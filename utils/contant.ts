import { categoryListsTypes } from "./type";

export const categoryLists: categoryListsTypes[] = [
  {
    id: Math.round(Math.random()),
    name: "smartphones",
  },
  {
    id: Math.round(Math.random()),
    name: "laptops",
  },
  // {
  //   id: Math.round(Math.random()),
  //   name: "skincare",
  // },
  // {
  //   id: Math.round(Math.random()),
  //   name: "mens-shirts",
  // },
  // {
  //   id: Math.round(Math.random()),
  //   name: "sunglasses",
  // },
  // {
  //   id: Math.round(Math.random()),
  //   name: "mens-watches",
  // },
  // {
  //   id: Math.round(Math.random()),
  //   name: "motorcycle",
  // },
  // {
  //   id: Math.round(Math.random()),
  //   name: "mens-shoes",
  // },
];

export const delay = (time: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));
