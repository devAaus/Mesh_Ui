"use client"

import React from 'react'
import Card from './Card'

const CardList = ({ data }) => {

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center gap-4 '>
            {data?.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CardList