import conncetToDB from "@/db/config/connectDB";
import Product from "@/db/schema/product.schema";

import { NextRequest, NextResponse } from "next/server";
conncetToDB();
export const POST = async (req: NextRequest) => {
  console.log(await req.json());

  let result = await Product.find({});
  return NextResponse.json(result);
};
