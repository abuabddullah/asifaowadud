import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from './../../assets/images/banner.gif'
import { FaArrowCircleDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div id='openingBanner'>
            <div class="hero min-h-screen bg-[#B1C0CB]">
                <div class="hero-content flex-col lg:flex-row-reverse text-white">
                    <img src={bannerImg} alt="" className='md:h-[600px] md:w-1/2 object-cover hidden lg:block' />
                    <div>
                        <h1 class="text-5xl font-bold">Hello! I'M <span className='text-black'>ASIF</span> </h1>
                        <h2 className='text-3xl py-6'>I am a <span className='font-bold text-red-500'>Web Developer</span></h2>
                        <a href='/#banner'><button class="btn btn-wide btn-outline text-xl rounded-none rounded-bl-3xl rounded-tr-3xl hover:rounded-none transition-all">
                            Let's start 
                            <span 
                            className='ml-4'><FaArrowCircleDown/></span>
                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;