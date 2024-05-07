import Sidebar from '@/components/Sidebar';
import React from 'react'
import CodeBox from '@/components/CodeBox';
import UiBox from '@/components/UiBox';

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
    const data = await getData(id);

    return (
        <div className="flex pt-28 antialiased overflow-hidden lg:h-screen">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4'>

                <div className='w-full h-[850px] md:h-[650px] flex flex-col md:flex-row bg-gray-200 rounded-xl shadow-xl gap-1 mb-4'>

                    <UiBox code={data.code} title={data.title} views={data.views} />

                    <CodeBox code={data.code} />

                </div>

            </div>

        </div>
    )
}

export default SingleElement