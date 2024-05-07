"use client"

import NextTopLoader from "nextjs-toploader";


const Loader = () => {

    return (
        <NextTopLoader
            color="#8266f6"
            initialPosition={0.08}
            crawlSpeed={500}
            height={3}
            showSpinner={false}
            speed={500}
            shadow={false}
        />
    );
}

export default Loader;
