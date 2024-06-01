"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserProfile({params}: any) { 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>user profile</h1>
            <hr />


            <p>
                Profile page 
                <span className="p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>


            <Link href="/login">Log out</Link>

        </div>
    )   
}