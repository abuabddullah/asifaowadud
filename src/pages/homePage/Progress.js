import React from 'react';
import pic from '././../../assets/images/banner.jpg'


const Progress = () => {
    return (
        <section id='progress' class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Me</h1>

                    

                <div class="mt-2">
                    <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='mb-12 flex justify-center items-center'>

                        <div>
                            <h2 className='text-3xl'>Hi There</h2>
                            <p className='py-4'>
                                This Asif A Owadud, You can call me Asif, I,m a full-stack developer. Specially MERN Developer. What you know about me, I put the some answer below, You may like it.
                            </p>


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                <div>
                                    <h2 className='text-xl font-bold'>Name</h2>
                                    <p>
                                        Asif A Owadud
                                    </p>
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>Email</h2>
                                    <p>
                                        asifaowadud@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                <div>
                                    <h2 className='text-xl font-bold'>Phone</h2>
                                    <p>
                                        +880-1939032974
                                    </p>
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>Website</h2>
                                    <p>
                                        www.asifawadud.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col-reverse lg:ml-12 w-full'>
                            <progress class="progress w-full mb-4" value="10" max="100"></progress>
                            <p className='my-2'><strong>Mongo DB</strong></p>
                            <progress class="progress w-full mb-4" value="40" max="100"></progress>
                            <p className='my-2'><strong>Express JS</strong></p>
                            <progress class="progress w-full mb-4" value="70" max="100"></progress>
                            <p className='my-2'><strong>Node JS</strong></p>
                            <progress class="progress w-full mb-4" value="100" max="100"></progress>
                            <p className='my-2'><strong>React JS</strong></p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Progress;