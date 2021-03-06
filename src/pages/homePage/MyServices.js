











import React from 'react';
import { BsCodeSlash, BsPhone } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
const MyServices = () => {
    return (
        <section id='services' className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto  overflow-hidden">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Services</h1>


                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                    </div>
                </div>

                <div
                    data-aos="fade-right"
                    data-aos-duration="400"
                    className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-black transition-all overflow-hidden">

                    <div className="stat text-center">
                        <span className='bg-black text-white p-4 rounded-full text-3xl mx-auto'>
                            <BsPhone />
                        </span>
                        <div className="stat-value whitespace-normal mt-4">Responsive Development</div>
                        <div className="stat-title whitespace-normal py-4">Responsive web development is most import cause user visit site PC,Mobile or Tab</div>
                        <div className="stat-desc">Expert</div>
                    </div>

                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-black transition-all">

                    <div className="stat text-center">
                        <span className='bg-black text-white p-4 rounded-full text-3xl mx-auto'>
                            <AiOutlineAntDesign />
                        </span>
                        <div className="stat-value whitespace-normal mt-4">Web Design</div>
                        <div className="stat-title whitespace-normal py-4">Web Design is the main part for an website, It's satisfy user experience and attract user.</div>
                        <div className="stat-desc">Expert</div>
                    </div>

                </div>

                <div
                    data-aos="fade-left"
                    data-aos-duration="400"
                    className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-black transition-all overflow-hidden">

                    <div className="stat text-center">
                        <span className='bg-black text-white p-4 rounded-full text-3xl mx-auto'>
                            <BsCodeSlash />
                        </span>
                        <div className="stat-value whitespace-normal mt-4">Web Development</div>
                        <div className="stat-title whitespace-normal py-4">A MERN Stack web application I provide every kind of website I can create</div>
                        <div className="stat-desc">Expert</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MyServices;