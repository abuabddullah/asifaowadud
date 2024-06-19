import { HashLink } from "react-router-hash-link";
import myImg from "./../../assets/images/social proPic.png";

const Banner = () => {
  return (
    <section id="banner" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center overflow-hidden">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            Welcome to my
            <br className="hidden lg:inline-block" />
            <span className="text-[#DD5703]"> Portfolio</span>
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="mb-8 leading-relaxed"
          >
            <p>
              I am a full-stack web developer and lifelong learner specializing
              in the MERN stack (MongoDB, Express, React, Node), and I am
              proficient in Git. My passion lies in creating visually appealing
              and highly functional websites. Through rigorous self-learning, I
              completed a comprehensive Web Development course and earned the
              prestigious "Black Belt" rank.
            </p>

            <p>
              I build websites like service providers, E-commerce, Portfolio,
              and Stock tracking. I regularly Learn web development in deeper. I
              am passionate about full-stack web development. I work hard and am
              very much focused on my interest field.
            </p>
            <p>So I can help to make full stack web sites...</p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <HashLink
              smooth
              data-aos="fade-down"
              data-aos-delay="700"
              to="/home#contact"
              className="inline-flex text-white bg-[#361408] border-0 py-2 px-6 focus:outline-none black rounded text-lg"
            >
              Hire Me
            </HashLink>
            <a
              data-aos="fade-down"
              data-aos-delay="700"
              href="https://drive.usercontent.google.com/u/0/uc?id=1D9aZD4VYWkjRXLjGFxhNNLE0I_qSsz-7&export=download"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full bg-rose-500"
            alt="hero"
            src={myImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
