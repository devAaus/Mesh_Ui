import Sidebar from '@/components/Sidebar';
import React from 'react'
import ComponentBox from '@/components/ComponentBox';

const getData = async (id) => {
    try {
        const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/components/${id}`,
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

const SingleElement = async ({ params }) => {

    const { id } = params;
    const { post } = await getData(id);

    return (
        <div className="flex pt-28 antialiased overflow-hidden lg:h-screen">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4'>

                <ComponentBox post={post} />

            </div>

        </div>
    )
}

export default SingleElement