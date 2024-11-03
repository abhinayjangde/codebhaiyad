"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { VscColorMode } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import Link from 'next/link';
import Image from 'next/image';
// import { useSession } from "next-auth/react"

const Navbar = () => {
    const { setTheme } = useTheme();
    const [mode, setMode] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    // const { data: session } = useSession();
    const { data: session } = {data:true}
    return (
        <nav className="shadow-md w-full sticky top-0 z-10" >
            <div className="flex justify-between items-center px-2 py-1 md:px-2 md:py-2 backdrop-blur bg-background/50 bg-white dark:bg-dark">
                <div className="flex items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
                        <Image
                            alt="logo"
                            src="https://codebhaiya.s3.ap-south-1.amazonaws.com/images/logo.png"
                            width={100}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className="w-10 rounded-full"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        />
                        <span className="block sm:hidden underline dark:decoration-white underline-offset-8 ml-3 text-xl tracking-tighter text-black dark:text-gray-200 dark:hover:text-white">
                            CB
                        </span>
                        <span className="hidden sm:block underline dark:decoration-white underline-offset-8 ml-3 text-xl tracking-tighter text-black dark:text-gray-200 dark:hover:text-white">
                            CODEBHAIYA
                        </span>
                    </Link>
                    <ul className="text-[16px] hidden md:flex items-center gap-2 mx-2">
                        <li><Link href="/" >Home</Link></li>
                        <li><Link href="/blogs" >Blogs</Link></li>
                        <li><Link href="/courses" >Courses</Link></li>
                        <li><Link href="/contact" >Contact</Link></li>
                    </ul>
                </div>
                <div className="text-[16px] flex flex-col md:flex-row gap-2 items-center" >
                    <ul className="hidden md:flex flex-col md:flex-row gap-2">

                        {session ? <li className="cursor-pointer">Logout</li> : <>
                            <li><Link href={"/signup"}>Signup</Link></li>
                            <li><Link href={"/login"}>Login</Link></li>
                        </>
                        }
                    </ul>
                    <div className="flex items-center gap-2">

                        <VscColorMode onClick={() => { if (mode === "dark") { setTheme("light"); setMode("light"); } else { setTheme("dark"); setMode("dark"); } }} className="text-3xl cursor-pointer" />

                        {
                            isOpen ? <IoMdClose onClick={() => setIsOpen(!isOpen)} className="md:hidden text-4xl cursor-pointer" /> :
                                <IoMdMenu onClick={() => setIsOpen(!isOpen)} className="md:hidden text-4xl cursor-pointer" />
                        }

                    </div>
                </div>
            </div>
            <div className={`md:hidden shadow-md py-2 bg-white dark:bg-dark absolute md:z-auto z-[-1] w-full right-0 transition-all duration-500 ease-in ${isOpen ? "top-14" : "-top-32"}`}>
                <ul className="text-[16px] flex items-end flex-col px-4">
                    <li><Link href={"/"} >Home</Link></li>
                    <li><Link href={"/blogs"} >Blogs</Link></li>
                    <li><Link href={"/courses"} >Courses</Link></li>
                    <li><Link href={"/contact"} >Contact</Link></li>
                    {session ? <li className="cursor-pointer">Logout</li> : <>
                        <li><Link href={"/signup"}>Signup</Link></li>
                        <li><Link href={"/login"}>Login</Link></li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar