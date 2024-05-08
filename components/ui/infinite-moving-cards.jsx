"use client";

import { cn } from "@/lib/util";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa";

export const InfiniteMovingCards = ({
    data,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };


    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {data
                    .filter((item) => item.isFeatured === true)
                    .map((item, idx) => {

                        const doc = `
                            <html>
                                <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
                                <body class='w-[260px] h-[150px] mx-auto flex items-center justify-center'>${item.code}</body>
                            </html>
                            
                        `;

                        return (
                            <li
                                className="w-[300px] h-[250px] max-w-full relative rounded-2xl flex items-center justify-center px-8 py-6 bg-bgBox backdrop-blur-3xl shadow-xl"
                                key={item.id}
                            >
                                <iframe
                                    srcDoc={doc}
                                    sandbox='allow-scripts'
                                    loading="eager"
                                />


                                <Link href={`/element/${item.id}`}>
                                    <span className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded-xl text-white shadow-md flex gap-2 items-center">
                                        <FaCode /> Get Code
                                    </span>
                                </Link>

                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};
