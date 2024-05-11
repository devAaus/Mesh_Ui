"use client"

import React, { useState } from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import CodeBlock from '@/components/CodeBlock';
import CopyButton from '@/components/CopyButton';

const ComponentBox = ({ post }) => {

    const [html, setHtml] = useState(post.code)

    const doc = (`
        <html>
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries"></script>
            <body class='w-full h-[150px] flex items-center justify-center '>${html}</body>
        </html>
    `);


    return (
        <div className='max-w-screen-2xl h-[850px] lg:h-[650px] grid grid-cols-1 lg:grid-cols-2 bg-bgLight rounded-xl shadow-xl gap-2 mb-4 mx-4 md:mx-2'>


            {/* ui box */}
            <div className='grid-cols-2 lg:grid-cols-1 flex flex-col gap-2 rounded-xl relative'>

                <div className='flex gap-2 py-1 px-3 items-center justify-between bg-bgBox  rounded-xl h-10'>
                    <span className='flex items-center gap-2  text-xl text-hDark'>
                        {post.title}
                    </span>

                    <span className='flex items-center text-sm text-hDark'>
                        {post.views} views
                    </span>
                </div>

                <div className='w-full h-[200px] lg:h-[650px] bg-[#2a2734] flex items-center justify-center rounded-xl '>
                    <iframe
                        srcDoc={doc}
                        sandbox='allow-scripts'
                    />
                </div>

            </div>


            {/* code box */}
            <div className='grid-cols-2 lg:grid-cols-1rounded-xl relative flex flex-col gap-2'>

                <div className='w-full flex gap-2 py-1 px-3 items-center bg-bgBox  rounded-xl h-10'>
                    <span className='flex items-center gap-2  text-xl text-hDark'>
                        <FaHtml5 color='e64c4d' />
                        HTML
                        +
                    </span>

                    <span className='flex items-center gap-2 text-xl text-hDark'>
                        <SiTailwindcss color='#38bdf8' />
                        TailwindCSS
                    </span>


                </div>

                <div className='w-full h-[650px] lg:h-[650px] bg-[#2a2734] group overflow-auto rounded-xl p-2'>
                    <CodeBlock language='xml' displayName='HTML' value={html} onChange={setHtml} />

                    <span className='absolute top-14 right-4 group-hover:opacity-100 opacity-0'>
                        <CopyButton code={html} />
                    </span>
                </div>

            </div>

        </div>
    )
}

export default ComponentBox