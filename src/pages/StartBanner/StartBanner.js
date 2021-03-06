import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from './../../assets/images/banner.gif'
import { FaArrowCircleDown } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { Typewriter,useTypewriter } from 'react-simple-typewriter'

const StartBanner = () => {

    const {text} = useTypewriter({
      words: [' Frontend Developer', ' React Developer', ' JavaScript Developer', ' FullStack Developer'],
      loop: 0, // Infinite loop
    })
  
    return (
        <div id='openingBanner'>
            <div className="hero min-h-screen bg-[#B1C0CB]">
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    <img src={bannerImg} alt="" className='md:h-[600px] md:w-1/2 object-cover hidden lg:block' />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-4xl sm:text-6xl font-bold">Hello! I'M <span className='text-black'>ASIF</span> </h1>
                        <h2 className='text-3xl py-6'>
                            I am a <br className="block sm:hidden" /><span style={{ color: 'black', fontWeight: 'bold' }}>{text}_</span></h2>
                        <HashLink smooth to='/home#banner'><button className="btn btn-wide btn-outline text-xl rounded-none rounded-bl-3xl rounded-tr-3xl hover:rounded-none transition-all">
                            Let's start
                            <span
                                className='ml-4'><FaArrowCircleDown /></span>
                        </button></HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartBanner;













