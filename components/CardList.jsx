"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardList = () => {

    const [component, setComponent] = useState([]);

    const getdata = async () => {
        const res = await fetch(`/api/components`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await res.json()
        setComponent(data.posts);

    };

    useEffect(() => {
        getdata();
    }, []);


    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center gap-4 '>
            {component?.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CardList