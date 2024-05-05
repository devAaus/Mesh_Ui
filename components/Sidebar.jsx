"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const title = [
    {
        id: 1,
        name: 'All',
        link: '/elements'
    },
    {
        id: 2,
        name: 'Buttons',
        link: '/elements/buttons'
    },
    {
        id: 3,
        name: 'Inputs',
        link: '/elements/inputs'
    },
    {
        id: 4,
        name: 'Loader',
        link: '/elements/loader'
    },
    {
        id: 5,
        name: 'Tooltips',
        link: '/elements/tooltips'
    },
    {
        id: 6,
        name: 'Toogle',
        link: '/elements/toogle'
    },
    {
        id: 7,
        name: 'Checkboxes',
        link: '/elements/checkboxes'
    }
]

const Sidebar = () => {

    const pathName = usePathname()

    return (
        <div className='w-[250px] min-h-screen mx-4 sticky top-0 left-0 pb-4 hidden xl:flex flex-col gap-3 overflow-hidden' >
            {title.map((t) => (
                <Link key={t.id} href={t.link} className={`text-hLight dark:text-hDark hover:text-hDark hover:bg-[#212121] flex items-center gap-2 font-semibold px-4 mb-1 py-3 rounded-lg transition-all duration-300 ease-in-out ${pathName === t.link ? 'bg-[#212121] text-hDark' : ''}`}>
                    {t.name}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar