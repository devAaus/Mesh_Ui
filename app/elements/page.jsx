import Sidebar from '@/components/Sidebar'
import React from 'react'
import CardList from '@/components/CardList'

const AllElements = () => {

    return (
        <div className="flex py-32 antialiased overflow-hidden">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4 flex flex-col gap-8'>
                <h4 className='text-3xl font-bold text-hLight dark:text-hDark'>All Components</h4>

                <CardList />
            </div>

        </div>
    )
}

export default AllElements