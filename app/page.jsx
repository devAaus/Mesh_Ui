"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const text = `Copy, paste, customize – and use beautiful custom elements made with Tailwind CSS.`;

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/components`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await res.json();
                setPosts(data.posts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const ref = useRef()

    return (
        <div className=" w-full py-52  antialiased relative">

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-hLight dark:text-hDark bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Building Better Interfaces
                </h1>

                <div className="my-4 text-center max-w-xl mx-auto">
                    <TextGenerateEffect words={text} />
                </div>

                <div class="max-w-[1600px] w-full rounded-full h-[200px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-gray-700 to-transparent absolute left-1/2 -translate-x-1/2 md:bottom-[-70px] blur-[100px]"></div>
            </div>

            <form className='lg:hidden w-1/2 lg:w-1/3 mx-auto border-2 border-black bg-[#f3f3f2]  shadow-xl rounded-full flex items-center px-2'>
                <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%] bg-transparent' />

                <button type='submit '>
                    <FaSearch size={20} color='black' />
                </button>
            </form>


            <div className="mt-20  flex flex-col antialiased  items-center justify-center relative overflow-hidden" >

                {/* <InfiniteMovingCards
                    data={posts}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    data={posts}
                    direction="left"
                    speed="slow"
                />
                <InfiniteMovingCards
                    data={posts}
                    direction="right"
                    speed="slow"
                /> */}

            </div>
        </div>
    );
};

export default Home;
