import React from 'react';
import pic from '././../../assets/images/banner.jpg'


const Progress = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Progression</h1>
                </div>


                <div class="hero ">
                    <div class="hero-content flex-col lg:flex-row-reverse">


                        <div className='flex flex-col-reverse lg:ml-12'>
                            <progress class="progress w-56 mb-4" value="10" max="100"></progress>
                            <p><strong>Mongo DB</strong></p>
                            <progress class="progress w-56 mb-4" value="40" max="100"></progress>
                            <p><strong>Express JS</strong></p>
                            <progress class="progress w-56 mb-4" value="70" max="100"></progress>
                            <p><strong>Node JS</strong></p>
                            <progress class="progress w-56 mb-4" value="100" max="100"></progress>
                            <p><strong>React JS</strong></p>
                        </div>
                        <div>
                            <img src={pic} class="shadow-2xl w-full h-full object-cover" alt='' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Progress;