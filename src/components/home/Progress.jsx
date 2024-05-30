

const Progress = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            About Me
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="mb-12 flex justify-center items-center">
            <div>
              <h2 data-aos="fade-up" data-aos-delay="50" className="text-3xl">
                Hi There
              </h2>
              <p data-aos="fade-up" data-aos-delay="300" className="py-4">
                This Asif A Owadud, You can call me Asif, I,m a full-stack
                developer. Specially MERN Developer.
                <br />
                <br />
                I have completed my graduation on 2019 in Textile Engineering
                being topper in my department. I am passionate about Web
                Development . I am a hard working person doing 8 hrs job and
                studing for web development regularly for which i need to work
                14hrs everyday.Thats all
                <br />
                <br />
                What you know about me, I put the some answer below, You may
                like it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div data-aos="fade-up" data-aos-delay="550">
                  <h2 className="text-xl font-bold">Name</h2>
                  <p>Asif A Owadud</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <h2 className="text-xl font-bold">Email</h2>
                  <p>asifaowadud@gmail.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div data-aos="fade-up" data-aos-delay="1050">
                  <h2 className="text-xl font-bold">Phone</h2>
                  <p>+880-1939032974</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="1250">
                  <h2 className="text-xl font-bold">Website</h2>
                  <p>www.asifawadud.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col lg:ml-12 w-full">
              <div data-aos="fade-left" data-aos-delay="950">
                <p className="my-2">
                  <strong>React JS</strong>
                </p>
                <progress
                  className="progress w-full mb-4"
                  value="100"
                  max="100"
                ></progress>
              </div>

              <div data-aos="fade-left" data-aos-delay="650">
                <p className="my-2">
                  <strong>Node JS</strong>
                </p>
                <progress
                  className="progress w-full mb-4"
                  value="60"
                  max="100"
                ></progress>
              </div>

              <div data-aos="fade-left" data-aos-delay="350">
                <p className="my-2">
                  <strong>Express JS</strong>
                </p>
                <progress
                  className="progress w-full mb-4"
                  value="45"
                  max="100"
                ></progress>
              </div>
              <div data-aos="fade-left" data-aos-delay="50">
                <p className="my-2">
                  <strong>Mongo DB</strong>
                </p>
                <progress
                  className="progress w-full mb-4"
                  value="35"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
