"use client"

import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from "react-icons/md";

const CopyButton = ({ code }) => {

    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <CopyToClipboard text={code}>
            <button className='flex items-center gap-2 px-3 py-1 rounded-xl shadow-md bg-black/50 text-white' onClick={handleClick}>
                <MdOutlineContentCopy />
                <span className='text-base font-semibold'>
                    {copied ? 'Copied' : 'Copy'}
                </span>
            </button>
        </CopyToClipboard>
    )
}

export default CopyButton