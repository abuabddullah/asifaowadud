import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "What is the purpose of JWT and how does it work",
    details:
      "JWT stands for Json Web Token. Which is an open standard it helps to share information between client...",
    image: "https://i.ibb.co/5R1P6QK/jwt.png",
    url: "https://thirstydrinks-11.web.app/blogs/626f4d65bd49ccaf469da148",
  },
  {
    title: "Differences Between SQL And NoSQL Databases",
    details:
      "SQL stands for Structured Query Language. It helps us to get, create, read data from database depending on query...",
    image: "https://i.ibb.co/9wHFtQ7/sql-vs-nosql.png",
    url: "https://thirstydrinks-11.web.app/blogs/626f4ce2bd49ccaf469da147",
  },
  {
    title: "When Should You Use Nodejs And When Should You Use Mongodb",
    details:
      "NodeJS is used for backend development. Its a JS runtime environment . We apply Get, Post, Update, Delete etc. method by the help of NodeJS...",
    image: "https://i.ibb.co/1K3qqvy/node-vs-mongodb.png",
    url: "https://thirstydrinks-11.web.app/blogs/626f4c96bd49ccaf469da146",
  },
  {
    title: "Difference Between Javascript And Nodejs",
    details:
      "JavaScript (i.e. vanilla JS) is scripting programming language. Its the very basic language for the web development...",
    image: "https://i.ibb.co/nQrJ474/js-vs-node.png",
    url: "https://thirstydrinks-11.web.app/blogs/626f4c0ebd49ccaf469da145",
  },
];
const MyBlog = () => {
  return (
    <section id="blog" className=" dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto overflow-hidden">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
          My Blogs
        </h1>
        <div className="">
          <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2 overflow-hidden">
            {blogs.map((blog, index) => (
              <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                className="space-y-3 hover:shadow-md p-4 rounded-lg glass"
                key={index}
              >
                <img
                  src={blog.image}
                  alt=""
                  className="h-24 w-full object-cover"
                />

                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                  {blog.title}
                </h1>

                <p className="text-gray-300 dark:text-gray-300">
                  {blog.details}
                </p>
                <p className="text-gray-300 dark:text-gray-300">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    Read More
                    <BiLinkExternal />
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/allBlogs" className="btn btn-wide bg-[#1a2c419d] text-white hover:bg-inherit text-lg">
            All Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyBlog;
