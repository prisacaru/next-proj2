"use client";
import Link from "next/link";
import React, { use, useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        username: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("login success", response.data);
            toast.success("Login successful");
            router.push("/profile");
        } catch (error: any) {
            console.error('Error logging in:', error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length >0 
            && user.password.length > 0){
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }

    }, [user]);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "processing" : "Login"}</h1>
            <hr />

<label htmlFor="email">email</label>
            <input
            className="border border-gray-400 p-2 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"  
                ></input>


<label htmlFor="password">password</label>
            <input
            className="border border-gray-400 p-2 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"  
                ></input>


            <button
            className="border border-gray-400 p-2"
                onClick={onLogin}>Login</button>

                <Link href="/signup">Create account</Link>

        </div>
    )
}