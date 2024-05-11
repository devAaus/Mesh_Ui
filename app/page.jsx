"use client";

import HomeCard from "@/components/HomeCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const text = `Copy, paste, customize – and use beautiful custom elements made with Tailwind CSS.`;

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/components');

                if (res.status !== 200) {
                    throw new Error('Failed to fetch data');
                }

                const data = res.data;
                setPosts(data.posts);
            } catch (error) {
                console.error(error);
            } finally {
                const timeout = setTimeout(() => {
                    setIsLoading(false);
                }, 2000);

                return () => clearTimeout(timeout);
            }
        };
        fetchData();
    }, []);




    return (
        <div className=" w-full py-52  antialiased relative">

            <div className="max-w-7xl mx-auto relative z-10 w-full">


                <div className="max-w-[1600px] w-full rounded-full h-[200px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-gray-600 to-transparent absolute left-1/2 -translate-x-1/2 md:bottom-[-70px] blur-[100px]"></div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-hLight dark:text-hDark bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Building Better Interfaces
                </h1>

                <div className="my-4 text-center max-w-xl mx-auto">
                    <TextGenerateEffect words={text} />
                </div>
            </div>

            <form className='lg:hidden w-[75%] sm:w-1/2 mx-auto border-2 border-black bg-[#f3f3f2]  shadow-xl rounded-full flex items-center px-2'>
                <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%] bg-transparent' />

                <button type='submit '>
                    <FaSearch size={20} color='black' />
                </button>
            </form>


            {isLoading === false && (
                <div className="w-screen mx-auto mt-20 flex flex-col gap-4 z-10  relative py-6">

                    <div className="flex items-center justify-center gap-4 transition-all duration-300 ease-in-out">
                        {posts.slice(-8).reverse().map((item) => (
                            <HomeCard key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 transition-all duration-300 ease-in-out">
                        {posts.slice(-15, -8).map((item) => (
                            <HomeCard key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 transition-all duration-300 ease-in-out">
                        {posts.slice(-21, -15).map((item) => (
                            <HomeCard key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="absolute z-20 bottom-0  -left-[30%] -right-[30%] w-auto h-[400px] pointer-events-none bg-gradient-to-b from-transparent from-0% via-95% to-100% via-bgDark to-transparent"></div>

                    <Link href={'/elements'} className="flex items-center px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700  cursor-pointer z-20 w-fit -mt-10 mx-auto">
                        <span className="text-white text-base font-semibold">Browse all elements</span>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default Home;
