import Sidebar from '@/components/Sidebar'
import React from 'react'
import CardList from '@/components/CardList'

const getData = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/components`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error("Failed");
        }

        return res.json();
    } catch (error) {
        throw new Error(error);
    }
};

const AllElements = async () => {

    const { posts } = await getData();

    return (
        <div className="flex py-32 antialiased overflow-hidden">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4 flex flex-col gap-8'>
                <h4 className='text-3xl font-bold text-hLight dark:text-hDark'>All Components</h4>

                <CardList data={posts} />
            </div>

        </div>
    )
}

export default AllElements