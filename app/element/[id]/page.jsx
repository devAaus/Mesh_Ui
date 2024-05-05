import Sidebar from '@/components/Sidebar';
import React from 'react'
import ReactHtmlParser from 'html-react-parser';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import CodeBlock from '@/components/CodeBlock';

const getData = async (id) => {
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
};

const SingleElement = async ({ params }) => {

    const { id } = params;
    const data = await getData(id);

    return (
        <div className="flex pt-28 antialiased overflow-hidden lg:h-screen">

            <Sidebar />

            <div className='w-screen xl:w-full mx-auto px-2 md:px-4 flex flex-col gap-8'>
                <h4 className='text-xl lg:text-3xl font-bold text-hLight dark:text-hDark'>
                    {data.title}
                </h4>

                <div className='w-full h-[850px] md:h-[650px] flex flex-col md:flex-row bg-gray-500 rounded-xl shadow-xl gap-1 p-1 mb-4'>

                    <div className='flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full bg-bgLight dark:bg-bgDark rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl'>
                        <div>{ReactHtmlParser(data.code)}</div>
                    </div>

                    <div className='w-full md:w-1/2 h-1/2 md:h-full bg-bgLight dark:bg-bgDark  flex flex-col rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl rounded-br-xl'>

                        <div className='w-full flex gap-2 py-1 px-3 items-center bg-[#212121] rounded-tr-xl'>
                            <span className='flex items-center gap-2  text-xl'>
                                <FaHtml5 color='e64c4d' />
                                HTML
                                +
                            </span>

                            <span className=' flex items-center gap-2 text-xl'>
                                <SiTailwindcss color='#38bdf8' />
                                TailwindCSS
                            </span>
                        </div>

                        <div className='py-3 px-4'>
                            <CodeBlock code={data.code} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SingleElement