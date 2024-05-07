
import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import CodeBlock from '@/components/CodeBlock';
import CopyButton from '@/components/CopyButton';

const CodeBox = ({ code }) => {


    return (
        <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl rounded-br-xl relative'>

            <div className='w-full flex gap-2 py-1 px-3 items-center bg-bgBox  rounded-tr-xl h-10'>
                <span className='flex items-center gap-2  text-xl text-hDark'>
                    <FaHtml5 color='e64c4d' />
                    HTML
                    +
                </span>

                <span className='flex items-center gap-2 text-xl text-hDark'>
                    <SiTailwindcss color='#38bdf8' />
                    TailwindCSS
                </span>

                <span className='absolute top-14 right-4'>
                    <CopyButton code={code} />
                </span>
            </div>

            <div className='w-full h-full bg-[#282a36]'>
                <CodeBlock code={code} />
            </div>

            <div className='w-full flex gap-2 py-1 px-3 items-center bg-bgBox rounded-br-xl h-10'>
            </div>
        </div>
    )
}

export default CodeBox