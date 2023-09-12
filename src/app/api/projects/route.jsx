import { NextResponse } from "next/server";
import { data } from "../data";

async function Handler(req) {
  
  return NextResponse.json({data:data})
}

export {Handler as GET}