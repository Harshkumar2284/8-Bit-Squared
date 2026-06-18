import React from 'react'
import Button from '../ui/Button'
export default function Login() {
    return (
        <div className="w-1/3">
            <h1 className="text-[#e0e0e0] tracking-wider font-heading text-5xl ml-2">Or Join Us</h1>
            <div className="flex flex-col mt-4">
                <div className="border-2 border-black rounded-lg">
                    <input type="email" placeholder="Email" className="border-2 rounded-lg text-2xl font-heading w-full  bg-white py-1 px-2 border-[#AAB8C5]"/>
                </div>
                <div className="border-2 mt-2 border-black rounded-lg">
                    <input type="text" placeholder="Username" className="border-2 rounded-lg text-2xl font-heading w-full  bg-white py-1 px-2 border-[#AAB8C5]"/>
                </div>
                <div className="border-2 mt-2 border-black rounded-lg">
                    <input type="password" placeholder="Password" className="border-2 rounded-lg text-2xl font-heading w-full  bg-white py-1 px-2 border-[#AAB8C5]"/>
                </div>
                <Button variant="secondary" className="mt-3 text-xl tracking-tight font-bold">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}
