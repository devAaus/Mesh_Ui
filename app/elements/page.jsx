import Sidebar from '@/components/Sidebar'
import React from 'react'
import { data } from '../data'
import Card from '@/components/Card'

const Elements = () => {
    return (
        <div className="flex py-32 antialiased overflow-hidden">

            <Sidebar />

            <div className='max-w-screen-2xl mx-auto flex flex-col gap-8'>
                <h4 className='text-3xl font-bold text-hLight dark:text-hDark'>All Components</h4>

                <div className=' grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 items-center justify-center gap-8'>
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Elements