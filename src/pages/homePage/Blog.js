import React from 'react';
import { BiLinkExternal } from "react-icons/bi";
import blog1 from './../../assets/images/blog1.png'

const blogs = [
    {
        title: 'What is the purpose of JWT and how does it work',
        details: "JWT stands for Json Web Token. Which is an open standard it helps to share information between client...",
        image: "https://i.ibb.co/5R1P6QK/jwt.png",
        url: 'https://thirstydrinks-11.web.app/blogs/626f4d65bd49ccaf469da148'
    },
    {
        title: 'Differences Between SQL And NoSQL Databases',
        details: "SQL stands for Structured Query Language. It helps us to get, create, read data from database depending on query...",
        image: "https://i.ibb.co/9wHFtQ7/sql-vs-nosql.png",
        url: 'https://thirstydrinks-11.web.app/blogs/626f4ce2bd49ccaf469da147'
    },
    {
        title: 'When Should You Use Nodejs And When Should You Use Mongodb',
        details: "NodeJS is used for backend development. Its a JS runtime environment . We apply Get, Post, Update, Delete etc. method by the help of NodeJS...",
        image: "https://i.ibb.co/1K3qqvy/node-vs-mongodb.png",
        url: 'https://thirstydrinks-11.web.app/blogs/626f4c96bd49ccaf469da146'
    },
    {
        title: 'Difference Between Javascript And Nodejs',
        details: "JavaScript (i.e. vanilla JS) is scripting programming language. Its the very basic language for the web development...",
        image: "https://i.ibb.co/nQrJ474/js-vs-node.png",
        url: 'https://thirstydrinks-11.web.app/blogs/626f4c0ebd49ccaf469da145'
    }
]

const Blog = () => {
    return (

        <section id='blog' class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">My Blogs</h1>

                <div class="mt-2">
                    <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>

                <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div class="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                        {
                            blogs.map((blog, index) =>
                                <div class="space-y-3 hover:shadow-md p-4 rounded-lg"
                                key={index}
                                >

                                    <img src={blog.image} alt="" className='h-24 w-full object-cover' />


                                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{blog.title}</h1>

                                    <p class="text-gray-500 dark:text-gray-300">
                                        {blog.details}
                                    </p>
                                    <p class="text-gray-500 dark:text-gray-300">
                                        <a href={blog.url} target="_blank" rel="noopener noreferrer">Read More<BiLinkExternal />
                                        </a>
                                    </p>
                                </div>
                            )
                        }

                    


                    </div>

                    <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;