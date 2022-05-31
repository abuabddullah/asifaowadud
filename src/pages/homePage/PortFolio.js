import React from 'react';
import { BiLinkExternal } from "react-icons/bi";


const project = [
    {
        title: 'Loyal Auto Parts',
        link: 'https://loyalcars12.web.app/',
        image: 'https://i.ibb.co/wymmDFp/12.png'
    },
    {
        title: 'Thirsty Drinks',
        link: 'https://thirstydrinks-11.web.app/',
        image: 'https://i.ibb.co/SvWtZmq/11.png'
    },
    {
        title: 'Service Provider Asif',
        link: 'https://myassignment-10.web.app/',
        image: 'https://i.ibb.co/ZW0Y0PL/10.png'
    },
    {
        title: `Burger's Hub 2`,
        link: 'https://myassignment9.netlify.app/home',
        image: 'https://i.ibb.co/nR951C2/9.png'
    },
    {
        title: `Burger's Hub 1`,
        link: 'https://myassignment8.netlify.app/',
        image: 'https://i.ibb.co/jztQMjQ/8.png'
    },
]


const PortFolio = () => {
    return (
        <section id='portfolio' class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Portfolio</h1>
                    
                    

                <div class="mt-2">
                    <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
                </div>

                <div class="containerProject grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        project.map((item, index) => <div class="card1" >
                            <img src={item.image} alt="12" border="0" className='h-20 w-full object-cover mb-4 rounded-md' />
                            <h3>{item.title}</h3>
                            <p class="small">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">Live Link<BiLinkExternal /></a>
                            </p>
                            <div class="go-corner cursor-pointer" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default PortFolio;