import { FaArrowCircleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";
import ParticlesComponent from "../tsParticles/ParticlesComponent";

const StarterBanner = () => {
  const location = useLocation();
  if (
    location.pathname.includes("allBlogs") ||
    location.pathname.includes("projectDetails")
  )
    return null;
  return (
    <>
      <ParticlesComponent id="particles" />
      <div id="openingBanner" className="min-h-screen">
        <div
          className="relative flex flex-col items-center justify-center text-center text-white bg-cover bg-center h-[100vmin]"
          /* style={{ backgroundImage: `url(${coverPNG})` }} */
        >
          <div className="banner-after"></div>
          <p className="font-light text-[1.4vmax] font-[Lucida Sans]">Hello!</p>
          <div className="my-[2vmax]">
            <h1 className="font-semibold text-[2.5vmax] uppercase font-[Roboto]">
              <kbd>
                I'M{" "}
                <span className="border rounded-lg px-2  text-white ms-3">
                  ASIF A OWADUD
                </span>{" "}
              </kbd>
            </h1>

            <h2 className="text-2xl py-5">
              I am a <br className="block sm:hidden " />
              <span
                className="border rounded-lg px-3 bg-white text-[#1A2C41] ms-2 font-bold" /* style={{ color: "black", fontWeight: "bold" }} */
              >
                <Typewriter
                  words={[
                    " Full-Stack Developer",
                    " Frontend Developer",
                    " React Developer",
                    " JavaScript Developer",
                  ]}
                  loop={false}
                />
                ...
              </span>
            </h2>
          </div>

          <HashLink smooth to="#banner">
            <button className="btn btn-wide outline outline-1 hover:outline-white text-xl rounded-none rounded-bl-3xl rounded-tr-3xl hover:rounded-none hover:bg-transparent hover:text-white transition-all text-[#[#1A2C41]] bg-white">
              SCROLL DOWN
              <span className="ml-4">
                <FaArrowCircleDown />
              </span>
            </button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default StarterBanner;
