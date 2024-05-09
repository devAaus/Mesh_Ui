"use client"

import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'
import CardList from '@/components/CardList'


const AllElements = () => {

    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/components`);

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await res.json();
                setPosts(data.posts);
                setLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="min-h-screen py-32 flex  antialiased overflow-hidden">

            <Sidebar />

            <div className='w-screen  xl:w-[calc(100%-250px)] mx-auto px-2 md:px-4 flex flex-col gap-8'>
                <h4 className='text-3xl font-bold text-hLight dark:text-hDark'>All Components</h4>

                {loaded && <CardList data={posts} loaded={loaded} />}
            </div>

        </div>
    )
}

export default AllElements