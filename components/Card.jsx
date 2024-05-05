import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const Card = ({ item }) => {
    return (
        <div className="w-[300px] h-[250px] max-w-full relative rounded-2xl border border-b-0 flex  items-center justify-center border-slate-700 px-8 py-6 bg-[#e9e9e8] backdrop-blur-3xl shadow-xl ">

            <span>{item.code}</span>

            <Link href={`elements/${item.id}`}>
                <span className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded-xl text-white shadow-md flex gap-2 items-center">
                    <FaCode /> Get Code
                </span>
            </Link>

            <span className='absolute top-2 right-2 text-xs'>Views</span>
        </div>
    )
}

export default Card