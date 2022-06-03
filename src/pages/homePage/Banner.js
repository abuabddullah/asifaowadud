import React from 'react';
import myImg from './../../assets/images/RC-1280.jpg'


const Banner = () => {
    return (
        <section id='banner' class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to my
                        <br class="hidden lg:inline-block" /><span className='text-red-500'> Portfolio</span>
                    </h1>
                    <p class="mb-8 leading-relaxed">I am a hard working passionate developer and  veritably flexible and adaptive to learning new stuff. I like to take challenge. I am expert in React js, vanilla javascript, HTML 5, CSS 3, Bootstrap 5, Tailwind. And comfotable with Node, MongoDB.
                    
                    {/* I'm sure I'll be suitable to contribute entity equal to the growth of the company. My last project in Operations has lessoned me how to be a team player, and work in concurrency.  */}
                    
                    So I can help to make full stack web sites...</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Hire Me</button>
                        <a target='_blank'
                        href='https://drive.google.com/u/0/uc?id=13mz9p1VnaC6bJ5bcvtceuyt2HGtJVyqB&export=download'
                        class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Resume</a>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded rounded-full" alt="hero" src={myImg} />
                </div>
            </div>
        </section>
    );
};

export default Banner;