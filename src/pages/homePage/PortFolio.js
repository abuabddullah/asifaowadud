












import React from 'react';
import { BiLinkExternal } from "react-icons/bi";


const project = [
    {
        title: 'Loyal Auto Parts',
        link: 'https://loyalcars12.web.app/',
        image: 'https://i.ibb.co/wymmDFp/12.png'
    },
    {
        title: 'EmaJhon Shopping',
        link: 'https://emajhon-shopping-ecommerce.netlify.app/',
        image: 'https://i.ibb.co/7Qgsytz/screencapture-emajhon-shopping-ecommerce-netlify-app-2022-06-02-20-18-59.png'
    },
    {
        title: 'Doctors Portal',
        link: 'https://finalprojects-doctorsportal.web.app/',
        image: 'https://i.ibb.co/W6WGFMw/screencapture-finalprojects-doctorsportal-web-app-2022-06-02-20-21-14.png'
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
    {
        title: `Insta-Sohor`,
        link: 'https://instashohorassignment7.netlify.app/',
        image: 'https://i.ibb.co/QdpwwyV/screencapture-instashohorassignment7-netlify-app-2022-06-02-20-04-27.png'
    },
    {
        title: `Phone Hub`,
        link: 'https://myassignments6.netlify.app/',
        image: 'https://i.ibb.co/xFHKtyN/screencapture-myassignments6-netlify-app-2022-06-02-20-09-11.png'
    },
    {
        title: `Bismillah Savings`,
        link: 'https://bismillahmoneymaster.netlify.app/',
        image: 'https://i.ibb.co/K2PgCWf/screencapture-bismillahmoneymaster-netlify-app-2022-06-02-20-11-21.png'
    },
    {
        title: `Party Convention
        `,
        link: 'https://myprogrammingheroassignment3.netlify.app/',
        image: 'https://i.ibb.co/88LS3Mf/screencapture-myprogrammingheroassignment3-netlify-app-2022-06-02-20-13-10.png'
    },
    {
        title: `Influencer products
        `,
        link: 'https://abuabddullah.github.io/myAssignments-2/',
        image: 'https://i.ibb.co/H7KkP24/screencapture-abuabddullah-github-io-my-Assignments-2-2022-06-02-20-15-17.png'
    },
    {
        title: `Portfolio
        `,
        link: 'https://abuabddullah.github.io/myAssignments-1/',
        image: 'https://i.ibb.co/dp9Y602/screencapture-abuabddullah-github-io-my-Assignments-1-2022-06-02-20-17-38.png'
    },
]


const PortFolio = () => {
    return (
        <section id='projects' class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Projects</h1>



                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                        <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                        <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                    </div>
                </div>

                <div class="containerProject grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
                    {
                        project.map((item, index) => <div 
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                        class="card1" >
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