"use client"

import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { useParams } from 'next/navigation'

const ElementsCat = () => {

    const { slug } = useParams()
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/components`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await res.json();
                setPosts(data.posts);
            } catch (error) {
                console.error(error);

            } finally {
                const timeout = setTimeout(() => {
                    setIsLoading(false);
                }, 2000);

                return () => clearTimeout(timeout);
            }
        };

        fetchData();
    }, []);

    const filterData = posts?.filter((item) => item.catSlug === slug)

    return (
        <div className="flex py-32 antialiased overflow-hidden">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4 flex flex-col gap-8'>

                <h4 className='text-3xl text-left font-bold text-hLight dark:text-hDark'>{slug.toUpperCase()}</h4>

                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center gap-4 '>
                    {filterData?.map((item) => (
                        <Card key={item.id} item={item} isLoading={isLoading} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ElementsCat