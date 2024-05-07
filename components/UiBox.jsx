import React from 'react'
import ReactHtmlParser from 'html-react-parser';
import { GrFormView } from "react-icons/gr";

const UiBox = ({ code, title, views }) => {
    return (
        <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col rounded-br-xl md:rounded-br-none md:rounded-tl-xl rounded-bl-xl relative'>

            <div className='w-full flex gap-2 py-1 px-3 items-center justify-between bg-bgBox  rounded-tl-xl h-10'>
                <span className='flex items-center gap-2  text-xl text-hDark'>
                    {title}
                </span>

                <span className='flex items-center gap-2  text-sm text-hDark'>
                    <GrFormView />
                    {views} views
                </span>
            </div>

            <div className='w-full h-full bg-[#282a36] flex items-center justify-center'>
                {ReactHtmlParser(code)}
            </div>

            <div className='w-full flex gap-2 py-1 px-3 items-center bg-bgBox rounded-bl-xl h-10'>
            </div>
        </div>
    )
}

export default UiBox