"use client"

import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { data } from "./data";
import { FaSearch } from "react-icons/fa";


const text = `Copy, paste, customize – and with open-source freedom.`;

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const firstMovingCard = data.filter(item => item.id >= 1 && item.id <= 6);
    const secondMovingCard = data.filter(item => item.id >= 7 && item.id <= 12);
    const thirdMovingCard = data.filter(item => item.id >= 13 && item.id <= 18);


    return (
        <div className=" w-full py-52  antialiased relative">
            {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#e9e9e8"
      /> */}


            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-hLight dark:text-hDark bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {isLoaded && 'Building Better Interfaces'}
                </h1>

                <div className="my-4 text-center max-w-xl mx-auto">
                    {isLoaded && <TextGenerateEffect words={text} />}
                </div>
            </div>

            <form className='lg:hidden w-1/2 lg:w-1/3 mx-auto border-2 border-black bg-[#f3f3f2]  shadow-xl rounded-full flex items-center px-2'>
                <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%] bg-transparent' />

                <button type='submit '>
                    <FaSearch size={20} color='black' />
                </button>
            </form>

            <div className="mt-52 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                {isLoaded && (
                    <>

                        <InfiniteMovingCards
                            data={firstMovingCard}
                            direction="right"
                            speed="slow"
                        />

                        <InfiniteMovingCards
                            data={secondMovingCard}
                            direction="left"
                            speed="slow"
                        />
                        <InfiniteMovingCards
                            data={thirdMovingCard}
                            direction="right"
                            speed="slow"
                        />
                    </>
                )}
            </div>

            {/* <div dangerouslySetInnerHTML={{ __html:  }} /> */}
        </div>
    );
};

export default Home;
