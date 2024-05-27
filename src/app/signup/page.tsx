"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";


export default function SignUpPage() {
    const [user, setUser] = React.useState({
        email: '',
        username: '',
        password: ''
    });

    const onSignUp = async () => {
        try {
            // const response = await axios.post('/api/signup', user);
            // console.log(response);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
            className="border border-gray-400 p-2"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username"  
                ></input>


<label htmlFor="email">email</label>
            <input
            className="border border-gray-400 p-2"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"  
                ></input>


<label htmlFor="password">password</label>
            <input
            className="border border-gray-400 p-2"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"  
                ></input>


            <button
            className="border border-gray-400 p-2"
                onClick={onSignUp}      
                >Sign up</button>

<Link href="/login">Login here</Link>

        </div>
    )
}