import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

const loadBD = async () => {
    await ConnectDB()
}
loadBD();
export async function GET(request) {
    return NextResponse.json({ msg: "get meethod hit" })
}