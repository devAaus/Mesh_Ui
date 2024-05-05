export const data = [
    {
        id: 1,
        name: 'Loader1',
        category: 'loader',
        code: <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
            </div>
        </div>
    },
    {
        id: 2,
        name: 'Button1',
        category: 'button',
        code: <button className=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-52 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            See more
        </button>
    },
    {
        id: 3,
        name: 'Button2',
        category: 'button',
        code: <div className="group relative">
            <button>
                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500 text-black"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </button>
            <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left text-black scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">GitHub<span>
            </span></span></div>
    },
    {
        id: 4,
        name: 'Loader2',
        category: 'loader',
        code: <button
            className="inline-block rounded-full border-2 border-rose-500 text-rose-500 hover:border-rose-600 hover:bg-rose-400 hover:bg-opacity-10 hover:text-rose-600 focus:border-rose-700 focus:text-rose-700 active:border-rose-800 active:text-rose-800 dark:border-rose-300 dark:text-rose-300 dark:hover:hover:bg-rose-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
            type="button"
        >
            <div
                role="status"
                className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            >
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                    Loading...
                </span>
            </div>
            Loading
        </button>
    },
    {
        id: 5,
        name: 'Button3',
        category: 'button',
        code: <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back">
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
            </svg>
        </button>
    },
    {
        id: 6,
        name: 'Tooltip',
        category: 'tooltip',
        code: <section className="relative flex justify-center items-center">
            <div
                className="group flex justify-center transition-all rounded-full bg-gray-200 p-1"
            >
                <svg viewBox="0 0 320 512" className="w-4 h-4">
                    <path
                        d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                    ></path>
                </svg>
                <span
                    className="absolute opacity-0 text-black group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm"
                >Information</span>
            </div>
        </section>
    },
    {
        id: 7,
        name: 'Toogle',
        category: 'toogle',
        code: <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
            </div>
        </label>
    },
    {
        id: 8,
        name: 'Loader3',
        category: 'loader',
        code: <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-8 flex justify-center items-center text-yellow-700">$</div>
    },
    {
        id: 9,
        name: 'Toogle2',
        category: 'toogle',
        code: <label className="relative block aspect-[2/0.75] cursor-pointer w-20 rounded-full  bg-gradient-to-r from-red-600 to-green-600 bg-[length:100%_100%] shadow-2xl shadow-purple-300 transition-all duration-500 [&amp;:has(input:checked)]:rotate-180  hover:bg-[length:100%_500%] focus:bg-[length:100%_500%]">
            <input type="checkbox" className="peer/input hidden" />
            <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
        </label>
    },
    {
        id: 10,
        name: 'Loader4',
        category: 'loader',
        code: <div
            className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
        >
            <div
                className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"
            ></div>
        </div>
    },
    {
        id: 11,
        name: 'Toogle2',
        category: 'toogle',
        code: <label
            className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
        >
            <input className="hidden peer" type="checkbox" />
            <div
                className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]"
            ></div>
            <div
                className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]"
            ></div>
            <div
                className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]"
            ></div>
        </label>

    },
    {
        id: 12,
        name: 'ToolTip2',
        category: 'tooltip',
        code: <section className="flex justify-center items-center">
            <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#1ED760] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                >
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
                    ></path>
                </svg>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                >
                    Spotify
                </span>
            </button>
        </section>
    },
    {
        id: 13,
        name: 'Button4',
        category: 'button',
        code:
            <div className="main flex flex-col gap-2">
                <div className="up flex gap-2">
                    <button className="card1 w-[90px] h-[90px] outline-none bg-white rounded-tl-[90px] rounded-tr-md rounded-br-md rounded-bl-md shadow-sm transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-[#cc39a4] group">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" fillRule="nonzero" className="instagram mt-[1.5em] ml-[2em] fill-[#cc39a4] group-hover:fill-white"><g fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" /></g></g></svg>
                    </button>

                    <button className="card2 w-[90px] h-[90px] outline-none bg-white rounded-tl-md rounded-tr-[90px] rounded-br-md rounded-bl-md shadow-sm transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-[#03A9F4] group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="twitter mt-[1.5em] ml-[1.5em] fill-[#03A9F4] group-hover:fill-white"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>
                    </button>
                </div>

                <div className="down flex gap-2">
                    <button className="card3 w-[90px] h-[90px] outline-none bg-white rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-[90px] shadow-sm transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-black group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="github -mt-[0.6em] ml-[2em] group-hover:fill-white">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                    </button>

                    <button className="card4 card3 w-[90px] h-[90px] outline-none bg-white rounded-tl-md rounded-tr-md rounded-br-[90px] rounded-bl-md shadow-sm transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-[#8c9eff] group">
                        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="discord -mt-[0.9em] ml-[1.5em] fill-[#8c9eff] group-hover:fill-white"><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" /></svg>
                    </button>
                </div>
            </div>
    },
    {
        id: 14,
        name: 'Button5',
        category: 'button',
        code: <button className="cta flex items-center relative m-auto px-[18px] py-[12px] [transition:all_0.2s_ease] bg-none cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:block before:rounded-[50px] before:bg-[#b1dae7] before:w-[50px] before:h-[50px] before:[transition:all_0.2s_ease] hover:before:w-[100%] hover:before:bg-[#b1dae7] group active:scale-[0.95]">

            <span className="relative font-[' Ubuntu',_sans-serif] text-[18px] font-bold tracking-wider text-[#234567]">Hover me</span>

            <svg className="relative top-[0] ml-[10px] text-[#234567] -translate-x-[5px] [transition:all_0.3s_ease] group-hover:translate-x-0" width="15" height="10" viewBox="0 0 13 10">
                <path className="stroke-current" d="M1,5 L11,5"></path>
                <polyline className="stroke-current" points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    },
    {
        id: 15,
        name: 'Input',
        category: 'input',
        code: <input type="text" placeholder="Write here..." name="text" className="w-52 rounded-[10px] outline-[3px] outline outline-[#FEBF00]  bg-[#e2e2e2] outline-offset-[3px] px-4 py-[10px] [transition:0.25s] focus:outline-offset-[5px] focus:bg-[#fff]" />
    },
    {
        id: 16,
        name: 'Button6',
        category: 'button',
        code: <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
            >
                <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
                <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
        </button>
    },
    {
        id: 17,
        name: 'Button7',
        category: 'button',
        code: <button className="button type1 h-[50px] w-[200px] relative bg-transparent cursor-pointer border-[2px] border-[solid] border-[#252525] overflow-hidden rounded-[30px] text-[#333] [transition:all_0.5s_ease-in-out] after:content-[''] after:absolute after:left-[0] after:top-[0] after:[transition:all_0.5s_ease-in-out] after:bg-[#333] after:rounded-[30px] after:invisible after:h-[10px] after:w-[10px] after:-z-[1] hover:[box-shadow:1px_1px_200px_#252525] hover:text-[#fff] hover:border-[none] hover:after:visible hover:after:scale-[100] hover:after:translate-x-[2px]">
            <span className="btn-txt font-extrabold tracking-[4px]">Hello</span>
        </button>
    },
    {
        id: 18,
        name: 'Input2',
        category: 'input',
        code: <div
            className="relative group rounded-lg w-52 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
        >
            <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
            >
                <path
                    stroke-width="4"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                    className="svg-stroke-primary"
                ></path>
            </svg>
            <select
                className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            >
                <option>HTML</option>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
                <option>Svelte</option>
            </select>
        </div>
    },
    {
        id: 19,
        name: 'Checkbox',
        category: 'checkbox',
        code: <label className="cyberpunk-checkbox-label text-[18px] text-[#000] cursor-pointer select-none flex items-center">
            <input type="checkbox" className="cyberpunk-checkbox appearance-none w-5 h-5 border-[2px] border-[solid] border-[#30cfd0] rounded-md bg-transparent inline-block relative mr-3 cursor-pointer before:content-[''] before:bg-[#30cfd0] before:block before:absolute before:top-2/4 before:left-2/4 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:w-[10px] before:h-[10px] before:rounded-[3px] before:[transition:all_0.3s_ease-in-out] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:scale-100" />
            Check me
        </label>
    }
]