"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import ReactHtmlParser from 'html-react-parser';

const Card = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="h-[250px] relative rounded-2xl flex items-center justify-center px-8 py-6 bg-bgBox backdrop-blur-3xl shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='z-20'>{ReactHtmlParser(item.code)}</div>

            {isHovered && (
                <Link href={`/element/${item.id}`}>
                    <span className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded-xl text-white shadow-md flex gap-2 items-center">
                        <FaCode /> Get Code
                    </span>
                </Link>
            )}

            <span className='absolute top-2 right-2 text-xs text-gray-400'>{item.views} views</span>
        </div>
    )
}

export default Card
