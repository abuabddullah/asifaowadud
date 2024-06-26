import { Link } from "react-router-dom";
import TextSphere from "../textCloud/TextSphere";

const Progress = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            About Me
          </h1>
          <div className="">
            <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden">
          <div className="mb-12 flex justify-center items-center">
            <div>
              <h2
                data-aos="fade-up"
                data-aos-delay="50"
                className="text-3xl text-yellow-400"
              >
                Hi There,
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="py-4 text-white"
              >
                This Asif A Owadud, You can call me Asif, I,m a full-stack
                developer. Specially MERN Developer.
                <br />
                <br />
                Before transitioning to web development, I earned a B.Sc in
                Textile Engineering and worked as a Lab Incharge in the textile
                industry. This background has equipped me with a unique
                perspective on problem-solving and innovation. In textiles, I
                honed analytical skills, attention to detail, and a strong work
                ethic—qualities I now bring to web development.
                <br />
                <br />I am passionate about Web Development . I am a hard
                working person doing 8 hrs job and studing for web development
                regularly for which i need to work 14hrs everyday.Thats all ....
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div data-aos="fade-up" data-aos-delay="550">
                  <h2 className="text-xl font-bold text-white">Name</h2>
                  <p className="text-white">Asif A Owadud</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <h2 className="text-xl font-bold text-white">Email</h2>
                  <p className="text-white">asifaowadud@gmail.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div data-aos="fade-up" data-aos-delay="1050">
                  <h2 className="text-xl font-bold text-white">Phone</h2>
                  <p className="text-white">+880-1939032974</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="1250">
                  <h2 className="text-xl font-bold text-white">Website</h2>
                  <p className="text-white">
                    <Link target="_blank" to="https://asifaowadud.netlify.app/">
                      asifaowadud.netlify.app
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center lg:p-3 lg:mx-5">
            <TextSphere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
