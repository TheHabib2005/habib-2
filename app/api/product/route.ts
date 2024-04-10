import { connect } from "@/db/config/conncet";
import { Product } from "@/db/schema/Product";
import { delay } from "@/utils/contant";
import { NextResponse } from "next/server";
connect();
export const POST = async (request) => {
  try {
    const reqbody = await request.json();
    // console.log(reqbody);

    // // // await delay(1000);
    const product = await Product.find(reqbody);
    console.log(product);

    return NextResponse.json(product);
  } catch (error) {}
};
