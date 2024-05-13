"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaCode } from 'react-icons/fa'

const Card = ({ item, isLoading }) => {
    const [isHovered, setIsHovered] = useState(false);

    const doc = `
        <html>
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries"></script>
            <body class='w-[250px] h-[150px] mx-auto flex items-center justify-center'>${item.code}</body>
        </html>
    `

    return (

        <>
            {isLoading === true ? (
                <div
                    className="h-[250px] w-full relative rounded-2xl flex items-center justify-center px-8 py-6 bg-bgBox backdrop-blur-3xl shadow-xl"
                >

                    <div className='w-[230px] h-[120px] flex items-center justify-center bg-slate-400 rounded-xl animate-pulse'>
                    </div>

                    <Link href={`/element/${item.id}`}>
                        <span className="w-28 h-8 absolute bottom-4 right-4 bg-slate-400 rounded-xl shadow-md animate-pulse">
                        </span>
                    </Link>

                    <span className='bg-slate-400 w-12 h-4 rounded-xl absolute top-4 right-4 animate-pulse'></span>
                </div>
            ) : (
                <div
                    className="h-[250px] w-full relative rounded-2xl flex items-center justify-center px-8 py-6 bg-bgBox backdrop-blur-3xl shadow-xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    <div className='w-full h-full flex items-center justify-center '>
                        <iframe
                            srcDoc={doc}
                            sandbox="allow-scripts"
                            loading='eager'
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
            )}
        </>

    )
}

export default Card
