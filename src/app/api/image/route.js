import { NextResponse } from "next/server";

export async function POST(req,res){
   const formData = await req.formData();
   console.log(formData);
   return NextResponse.json({status:200});
}
