import { HashLink } from "react-router-hash-link";
import myImg from './../../assets/images/social proPic.png';



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
            <span className="text-red-500"> Portfolio</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="mb-8 leading-relaxed"
          >
            I am a hard working passionate developer and veritably flexible and
            adaptive to learning new stuff. I like to take challenge. I am
            expert in React js, vanilla javascript, HTML 5, CSS 3, Bootstrap 5,
            Tailwind. And comfotable with Node, MongoDB.
            {/* I'm sure I'll be suitable to contribute entity equal to the growth of the company. My last project in Operations has lessoned me how to be a team player, and work in concurrency.  */}
            So I can help to make full stack web sites...
          </p>
          <div className="flex justify-center overflow-hidden">
            <HashLink
              smooth
              data-aos="fade-down"
              data-aos-delay="700"
              to="/home#contact"
              className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg"
            >
              Hire Me
            </HashLink>
            <a
              data-aos="fade-down"
              data-aos-delay="700"
              href="https://drive.google.com/u/0/uc?id=13mz9p1VnaC6bJ5bcvtceuyt2HGtJVyqB&export=download"
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
