import { AiOutlineAntDesign } from "react-icons/ai";
import { BsCodeSlash, BsPhone } from "react-icons/bs";

const MyServices = () => {
  return (
    <section id="services" className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto  overflow-hidden">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            My Services
          </h1>
          <div className="">
            <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-[#1A2C41] transition-all overflow-hidden group duration-1000 bg-transparent glass"
        >
          <div className="stat text-center">
            <span className="bg-black text-white p-4 rounded-full text-3xl mx-auto group-hover:bg-white group-hover:text-black ">
              <BsCodeSlash />
            </span>
            <div className="stat-value whitespace-normal mt-4">
              Web Development
            </div>
            <div className="stat-title whitespace-normal py-4 text-gray-300 group-hover:text-white">
              A MERN Stack web application I provide every kind of website I can
              create
            </div>
            <div className="stat-desc group-hover:text-white text-yellow-400">Expert</div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-[#1A2C41] transition-all group duration-1000 bg-transparent glass"
        >
          <div className="stat text-center">
            <span className="bg-black text-white p-4 rounded-full text-3xl mx-auto group-hover:bg-white group-hover:text-black ">
              <AiOutlineAntDesign />
            </span>
            <div className="stat-value whitespace-normal mt-4">Web Design</div>
            <div className="stat-title whitespace-normal py-4 text-gray-300 group-hover:text-white">
              Web Design is the main part for an website, It's satisfy user
              experience and attract user.
            </div>
            <div className="stat-desc group-hover:text-white text-yellow-400">Expert</div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="stats grid stats-vertical lg:stats-horizontal shadow mb-8 hover:text-white hover:bg-[#1A2C41] duration-700 transition-all overflow-hidden group duration-1000 bg-transparent glass"
        >
          <div className="stat text-center">
            <span className="bg-black text-white p-4 rounded-full text-3xl mx-auto group-hover:bg-white group-hover:text-black">
              <BsPhone />
            </span>
            <div className="stat-value whitespace-normal mt-4">
              Responsive Development
            </div>
            <div className="stat-title whitespace-normal py-4 text-gray-300 group-hover:text-white">
              Responsive web development is most import cause user visit site
              PC,Mobile or Tab
            </div>
            <div className="stat-desc group-hover:text-white text-yellow-400">Expert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
