"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function SignUpPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: '',
        username: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("sigup success", response.data);
            router.push("/login");
        } catch (error: any) {
            toast.error(error.message);
            console.error('Error signing up:', error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length >0 
            && user.password.length > 0 
        && user.username.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing": "Signup"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
            className="border border-gray-400 p-2 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username"  
                ></input>


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
            className="border border-gray-400 p-2 text-black mb-4 focus:outline-none"
                id="password"
                type="passowrd"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"  
                ></input>


            <button
            className="border border-gray-400 p-2"
                onClick={onSignUp}      
                >{buttonDisabled ? "no sign up": "Sign up"}</button>

<Link href="/login">Login here</Link>

        </div>
    )
}