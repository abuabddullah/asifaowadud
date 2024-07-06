import { Link } from "react-router-dom";

// make sure the variale project of Portfolio.js and ProjectDetails.js are same
const projects = [
  {
    _id: "project1",
    title: "Loyal Auto Parts",
    link: "https://loyalautoparts.netlify.app/",
    gitHub: "https://github.com/abuabddullah/loyalAutoParts-client.git",
    homePage: "https://i.ibb.co/jTrn6Jz/Screenshot-2024-07-07-031334.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/fSYyf5v/screencapture-loyalcars12-web-app-dash-Board-2022-06-10-22-43-36.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/yScFCBC/screencapture-loyalcars12-web-app-all-Parts-2022-06-10-22-47-51.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project3",
    title: "Thirsty Drinks",
    link: "https://thirstydrinks.netlify.app/",
    gitHub: "https://github.com/abuabddullah/thirstDyrinksWareHouseManagement",
    homePage: "https://i.ibb.co/61YdY9v/Screenshot-2024-07-07-031502.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/8jMXxPZ/screencapture-thirstydrinks-11-web-app-blogs-2022-06-10-22-57-14.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/88f8MZB/screencapture-thirstydrinks-11-web-app-all-Items-2022-06-10-22-57-02.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project14",
    title: "Kormo kando",
    link: "https://kormokando.netlify.app/",
    gitHub: "https://github.com/abuabddullah/kormoKandoFrontend.git",
    homePage: "https://i.ibb.co/YpPWQ14/image.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "fgdsfgdfgdfgdfdg",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "dffsfsdfsdfsdf",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project15",
    title: "BooKeVents",
    link: "https://boo-ke-vents.netlify.app/",
    gitHub: "https://github.com/abuabddullah/booKeVents-client.git",
    homePage: "https://i.ibb.co/pR9Lw4B/Screenshot-2024-07-07-031721.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "fgdsfgdfgdfgdfdg",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "dffsfsdfsdfsdf",
    thirdPageDetail3: "this is the 3rd Page",
  },
  /* 
  {
    _id: "project2",
    title: "Doctors Portal",
    link: "https://finalprojects-doctorsportal.web.app/",
    gitHub: "https://github.com/abuabddullah/doctors-portal-client",
    homePage:
      "https://i.ibb.co/W6WGFMw/screencapture-finalprojects-doctorsportal-web-app-2022-06-02-20-21-14.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/VMmn7nQ/screencapture-finalprojects-doctorsportal-web-app-appointment-2022-06-10-22-52-41.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/QfhvTBP/screencapture-finalprojects-doctorsportal-web-app-dashboard-2022-06-10-22-52-54.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project4",
    title: "EmaJhon Shopping",
    link: "https://emajhon-shopping-ecommerce.netlify.app/",
    gitHub: "https://github.com/abuabddullah/Ema-Jhon",
    homePage:
      "https://i.ibb.co/McfjCX2/screencapture-emajhon-shopping-ecommerce-netlify-app-shop-2022-06-10-22-59-15.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/vYDw2sK/screencapture-emajhon-shopping-ecommerce-netlify-app-orders-2022-06-10-22-59-27.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/G0VVjWQ/screencapture-emajhon-shopping-ecommerce-netlify-app-login-2022-06-10-22-59-41.png",
    thirdPageDetail3: "this is the 3rd Page",
  }, */
  {
    _id: "project5",
    title: "Service Provider Asif",
    link: "https://myassignment-10.web.app/",
    gitHub: "https://github.com/abuabddullah/assignment10-doctorAsif",
    homePage: "https://i.ibb.co/ZW0Y0PL/10.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/Rzch1gx/screencapture-myassignment-10-web-app-about-2022-06-10-23-02-04.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/MDGmcJ7/screencapture-myassignment-10-web-app-blogs-2022-06-10-23-01-52.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project6",
    title: `Burger's Hub 2`,
    link: "https://myassignment9.netlify.app/home",
    gitHub: "https://github.com/abuabddullah/assignment9-burgerHub2-reactChart",
    homePage: "https://i.ibb.co/nR951C2/9.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/w66kFVV/screencapture-myassignment9-netlify-app-dashboard-2022-06-10-23-06-00.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/18S6Hdk/screencapture-myassignment9-netlify-app-reviews-2022-06-10-23-05-51.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project7",
    title: `Burger's Hub 1`,
    link: "https://myassignment8.netlify.app/",
    gitHub:
      "https://github.com/abuabddullah/assignment8-burgerHub1-chooseRandomBurger-",
    homePage: "https://i.ibb.co/jztQMjQ/8.png",
    homePageDetail1: "this is the Home Page",
    secondPage: "https://i.ibb.co/vVBYzZy/Screenshot-9.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage: "https://i.ibb.co/PZkdvRq/Screenshot-8.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project8",
    title: `Insta-Sohor`,
    link: "https://instashohorassignment7.netlify.app/",
    gitHub: "https://github.com/abuabddullah/assignment7-instaShohor",
    homePage:
      "https://i.ibb.co/QdpwwyV/screencapture-instashohorassignment7-netlify-app-2022-06-02-20-04-27.png",
    homePageDetail1: "this is the Home Page",
    secondPage: "https://i.ibb.co/LJMzVPc/Screenshot-8.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/kyqhPL0/screencapture-instashohorassignment7-netlify-app-2022-06-10-23-18-40.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project9",
    title: `Phone Hub`,
    link: "https://myassignments6.netlify.app/",
    gitHub: "https://github.com/abuabddullah/assignment6-phoneHunter",
    homePage:
      "https://i.ibb.co/xFHKtyN/screencapture-myassignments6-netlify-app-2022-06-02-20-09-11.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/SBLjnFR/screencapture-myassignments6-netlify-app-2022-06-10-23-25-12.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/Rbj4wF5/screencapture-myassignments6-netlify-app-2022-06-10-23-25-32.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project10",
    title: `Bismillah Savings`,
    link: "https://bismillahmoneymaster.netlify.app/",
    gitHub: "https://github.com/abuabddullah/assignmetn5-moneyMaster",
    homePage:
      "https://i.ibb.co/K2PgCWf/screencapture-bismillahmoneymaster-netlify-app-2022-06-02-20-11-21.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/Qj4DBXP/screencapture-bismillahmoneymaster-netlify-app-2022-06-10-23-27-39.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/WsZqBTR/screencapture-bismillahmoneymaster-netlify-app-2022-06-10-23-28-02.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project11",
    title: `Party Convention
        `,
    link: "https://myprogrammingheroassignment3.netlify.app/",
    gitHub: "https://github.com/abuabddullah/assignment3-partyConvention",
    homePage:
      "https://i.ibb.co/88LS3Mf/screencapture-myprogrammingheroassignment3-netlify-app-2022-06-02-20-13-10.png",
    homePageDetail1: "this is the Home Page",
    secondPage: "https://i.ibb.co/029Tz0m/Screenshot-10.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage: "https://i.ibb.co/RvCjCw3/Screenshot-9.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project12",
    title: `Influencer products
        `,
    link: "https://abuabddullah.github.io/myAssignments-2/",
    gitHub: "https://github.com/abuabddullah/assignment2-influencerProducts",
    homePage:
      "https://i.ibb.co/H7KkP24/screencapture-abuabddullah-github-io-my-Assignments-2-2022-06-02-20-15-17.png",
    homePageDetail1: "this is the Home Page",
    secondPage: "https://i.ibb.co/0nVkVpQ/Screenshot-12.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage: "https://i.ibb.co/R4b90dS/Screenshot-11.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
  {
    _id: "project13",
    title: `Portfolio
        `,
    link: "https://abuabddullah.github.io/myAssignments-1/",
    gitHub: "https://github.com/abuabddullah/assignment1-portfolio",
    homePage:
      "https://i.ibb.co/dp9Y602/screencapture-abuabddullah-github-io-my-Assignments-1-2022-06-02-20-17-38.png",
    homePageDetail1: "this is the Home Page",
    secondPage: "https://i.ibb.co/xD7CmRr/Screenshot-1sdd2.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage: "https://i.ibb.co/pw4Ks9F/SASsdaw-Dcreenshot-9.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
];

const MyProjects = () => {
  return (
    <>
      <section id="projects" className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Projects
            </h1>
            <div className="">
              <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
            </div>
          </div>

          <div className="containerProject grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {projects.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center my-5 mx-2 glass"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="card w-80 bg-transparent rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl">
                  <div className="relative">
                    <img
                      src={item.homePage}
                      alt="Project Thumbnail"
                      className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-90 transition duration-500 flex justify-center items-center">
                      <div className="text-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white mx-2 px-4 py-2 bg-[#1A2C41] hover:bg-[#131f2ebd] rounded-full"
                        >
                          Live
                        </a>
                        <a
                          href={item.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white mx-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mt-4">
                      <Link
                        to={`/projectDetails/${item._id}`}
                        className="text-blue-500 hover:text-blue-700 text-3xl transform transition duration-500 hover:scale-125"
                      >
                        →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProjects;
