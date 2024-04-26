"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const Navbar = () => {

    const [theme, setTheme] = useState(true)

    const ref = useRef()
    const inView = useInView(ref, { once: true })

    return (
        <nav className='w-full z-50 fixed top-0  bg-transparent backdrop-blur-xl' ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                className='max-w-screen-2xl mx-auto py-4'
            >
                <div className='grid grid-cols-3 items-center'>

                    <div className='flex gap-8'>
                        <Image src={'/logo.svg'} alt='logo' width={80} height={80} />


                        <btn className='w-fit hover:bg-[#202120] rounded-xl px-4 py-2'>
                            <Link href={'/'} className='text-lg font-medium text-[#f2f2eb] '>Docs</Link>
                        </btn>

                        <btn className='w-fit hover:bg-[#202120] rounded-xl px-4 py-2'>
                            <Link href={'/'} className='text-lg font-medium text-[#f2f2eb] '>Components</Link>
                        </btn>



                    </div>

                    <form className=' border bg-white shadow-xl rounded-full flex items-center px-2'>
                        <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%]' />

                        <button>
                            <FaSearch size={20} />
                        </button>
                    </form>

                    <div className='flex gap-4 mx-auto'>

                        <h1 className='text-base font-medium text-gray-400'>v1.0</h1>

                        <Link href={'/'}>
                            <FaGithub size={20} color='white' className='hover:scale-125 transition-all' />
                        </Link>

                        <btn onClick={() => setTheme(!theme)} className='cursor-pointer'>
                            {theme
                                ? <LuSunMedium size={20} color='white' />
                                : <LuMoonStar size={20} color='white' />
                            }
                        </btn>

                    </div>

                </div>
            </motion.div>

        </nav>
    )
}

export default Navbar