import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";    
import bcryptjs from "bcryptjs";

connect();
export async function post(request: NextRequest) {
    try {
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }};