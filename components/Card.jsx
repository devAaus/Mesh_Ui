"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import classNames from 'classnames';

const Card = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);


    const doc = `
        <html>
            <script src="https://cdn.tailwindcss.com"></script>
            <body class='w-[260px] h-[150px] mx-auto flex items-center justify-center'>${item.code}</body>
        </html>
    `

    return (
        <div
            className="h-[250px] w-full relative rounded-2xl flex items-center justify-center px-8 py-6 bg-bgBox backdrop-blur-3xl shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className='w-full h-full flex items-center justify-center'>
                <iframe
                    srcDoc={doc}
                    sandbox="allow-scripts"
                />
            </div>


            {isHovered && (
                <Link href={`/element/${item.id}`}>
                    <span className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded-xl text-white shadow-md flex gap-2 items-center">
                        <FaCode /> Get Code
                    </span>
                </Link>
            )}

            <span className='absolute top-4 right-4 text-xs text-gray-400'>{item.views} views</span>
        </div>
    )
}

export default Card
