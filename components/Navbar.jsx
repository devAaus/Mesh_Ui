"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { useTheme } from 'next-themes';
import ThemeButton from './ThemeButton';

const Navbar = () => {

    const [themeIcon, setThemeIcon] = useState(true)
    const { theme, setTheme } = useTheme()

    const toogleTheme = () => {
        setThemeIcon(!themeIcon)
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const ref = useRef()
    const inView = useInView(ref, { once: true })

    return (
        <nav className='w-full z-50 fixed top-0  bg-transparent backdrop-blur-xl' ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                className='max-w-screen-2xl mx-auto py-4'
            >
                <div className='grid grid-cols-2 lg:grid-cols-3 items-center'>

                    <div className='flex gap-4 lg:gap-8 mx-auto xl:mx-0 items-center'>
                        <Link href={'/'}>
                            <Image src={'/logo.svg'} alt='logo' width={80} height={80} loading='lazy' className='' />
                        </Link>


                        <btn className='w-fit hover:bg-[#202120] rounded-xl px-4 py-2'>
                            <Link href={'/elements'} className='text-base md:text-lg font-medium text-tLight dark:text-tDark '>Components</Link>
                        </btn>

                    </div>

                    <form className='hidden border bg-white shadow-xl rounded-full lg:flex items-center px-2'>
                        <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%] bg-transparent' />

                        <button type='submit '>
                            <FaSearch size={20} color='black' />
                        </button>
                    </form>

                    <div className='flex gap-4 lg:gap-8 ml-auto md:mx-auto items-center'>

                        <h1 className='text-base font-medium text-gray-400'>v1.0</h1>

                        <Link href={'/'}>
                            <FaGithub size={20} />
                        </Link>

                        {/* <btn onClick={toogleTheme} className='cursor-pointer'>
                            {themeIcon
                                ? <LuSunMedium size={20} />
                                : <LuMoonStar size={20} />
                            }
                        </btn> */}

                        <ThemeButton />

                    </div>

                </div>
            </motion.div>

        </nav>
    )
}

export default Navbar