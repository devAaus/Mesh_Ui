"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import { useState } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState(true)

    return (
        <nav className='w-full fixed top-0 bg-transparent backdrop-blur-xl border-b border-gray-400'>
            <div className='max-w-screen-2xl mx-auto py-4'>
                <div className='grid grid-cols-3 items-center'>

                    <div className='flex gap-8'>
                        <Image src={'/logo.png'} width={100} height={100} alt='logo' />

                        <div className='flex gap-4 h-full'>
                            <Link href={'/'} className='text-lg font-medium text-gray-400 hover:text-gray-300'>Docs</Link>
                            <Link href={'/'} className='text-lg font-medium text-gray-400 hover:text-gray-300'>Components</Link>

                        </div>
                    </div>

                    <form className=' border bg-white shadow-xl rounded-xl flex items-center'>
                        <input type="text " placeholder='Search ....' className='p-2 rounded-xl outline-none w-[93%]' />

                        <button>
                            <FaSearch size={20} />
                        </button>
                    </form>

                    <div className='flex gap-4 mx-auto'>

                        <h1 className='text-base font-medium text-gray-400'>v1.0</h1>

                        <FaGithub size={20} color='white' />

                        <btn onClick={() => setTheme(!theme)} className='cursor-pointer'>
                            {theme
                                ? <LuSunMedium size={20} color='white' />
                                : <LuMoonStar size={20} color='white' />
                            }
                        </btn>

                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar