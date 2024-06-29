import { NextRequest } from "next/server";
import { onSubmit } from "../second-example/components/utils";

export async function POST(req: NextRequest) {
    try{
        const res = await req.json()
        onSubmit(res)
        console.log("This was a success!!");
        return Response.json("This was a success!!")
    } catch(e){

        return Response.error()
    } 
}