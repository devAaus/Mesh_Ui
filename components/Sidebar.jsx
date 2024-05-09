"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Sidebar = () => {

    const [categories, setCategories] = useState([]);
    const pathName = usePathname();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getCat = async () => {
            try {
                const res = await fetch(`/api/categories`, {
                    cache: "no-store"
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await res.json();
                setCategories(data);
                setIsLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };
        getCat();
    }, []);


    return (
        <div className='w-[250px] h-screen mx-4 hidden  lg:block'>
            <div className=' flex flex-col gap-1 overflow-hidden' >

                {isLoaded &&
                    <Link href='/elements' className={`text-hLight dark:text-hDark hover:text-hDark hover:bg-[#212121] flex items-center gap-2 font-semibold px-4 mb-1 py-3 rounded-lg transition-all duration-300 ease-in-out ${pathName === '/elements' ? 'bg-[#212121] text-hDark' : ''}`}>
                        All
                    </Link>}

                {categories?.map((c) => (
                    <Link key={c.id} href={`/elements/${c.slug}`} passHref className={`text-hLight dark:text-hDark hover:text-hDark hover:bg-[#212121] flex items-center gap-2 font-semibold px-4 mb-1 py-3 rounded-lg transition-all duration-300 ease-in-out ${pathName === `/elements/${c.slug}` ? 'bg-[#212121] text-hDark' : ''}`}>
                        {c.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar