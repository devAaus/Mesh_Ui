"use client"

import { useTheme } from 'next-themes';
import React, { useState } from 'react'
import { LuSunMedium, LuMoonStar } from "react-icons/lu";

const ThemeButton = () => {

    const { theme, setTheme } = useTheme();
    const [isChecked, setIsChecked] = useState(theme === 'dark');

    const toggleTheme = () => {
        setIsChecked(!isChecked);
        setTheme(isChecked ? 'light' : 'dark');
    };

    return (
        <div className='relative'>
            <input
                type="checkbox"
                id="react-option"
                value=""
                className="hidden peer"
                required=""
                checked={isChecked}
                onChange={toggleTheme}
            />

            <label
                htmlFor="react-option"
                className="flex z-10 items-center peer relative justify-center w-8 h-8 duration-300  cursor-pointer"
            >
            </label>
            <span
                className="absolute top-1 left-0 text-sky-300 w-12 h-23 duration-500 peer-checked:opacity-100 opacity-0"
            >
                <LuMoonStar size={22} />
            </span>

            <span
                className="absolute top-1 left-0 text-yellow-500 w-12 h-23 duration-500 peer-checked:opacity-0 opacity-100"
            >
                <LuSunMedium size={24} />
            </span>

        </div>
    )
}

export default ThemeButton