"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: '',
        username: '',
        password: ''
    });

    const onLogin = async () => {
        try {
            // const response = await axios.post('/api/signup', user);
            // console.log(response);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />

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
                onClick={onLogin}>Login</button>

                <Link href="/signup">Create account</Link>

        </div>
    )
}