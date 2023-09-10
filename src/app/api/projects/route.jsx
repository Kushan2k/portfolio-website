import { NextResponse } from "next/server";

async function Handler(req) {
  
  return NextResponse.json({msg:"recived"})
}

export {Handler as GET}