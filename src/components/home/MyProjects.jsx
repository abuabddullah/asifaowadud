
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

// make sure the variale project of Portfolio.js and ProjectDetails.js are same
const projects = [
  {
    _id: "project1",
    title: "Loyal Auto Parts",
    link: "https://loyalcars12.web.app/",
    gitHub: "https://github.com/abuabddullah/loyalAutoParts-client",
    homePage: "https://i.ibb.co/wymmDFp/12.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/fSYyf5v/screencapture-loyalcars12-web-app-dash-Board-2022-06-10-22-43-36.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/yScFCBC/screencapture-loyalcars12-web-app-all-Parts-2022-06-10-22-47-51.png",
    thirdPageDetail3: "this is the 3rd Page",
  },
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
    _id: "project3",
    title: "Thirsty Drinks",
    link: "https://thirstydrinks-11.web.app/",
    gitHub: "https://github.com/abuabddullah/thirstDyrinksWareHouseManagement",
    homePage: "https://i.ibb.co/SvWtZmq/11.png",
    homePageDetail1: "this is the Home Page",
    secondPage:
      "https://i.ibb.co/8jMXxPZ/screencapture-thirstydrinks-11-web-app-blogs-2022-06-10-22-57-14.png",
    secondPageDetail2: "this is the 2nd Page",
    thirdPage:
      "https://i.ibb.co/88f8MZB/screencapture-thirstydrinks-11-web-app-all-Items-2022-06-10-22-57-02.png",
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
  },
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
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              My Projects
            </h1>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>

          <div className="containerProject grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {projects.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                className="card1"
              >
                <img
                  src={item.homePage}
                  alt="12"
                  border="0"
                  className="h-20 w-full object-cover mb-4 rounded-md"
                />
                <h3>{item.title}</h3>
                <p className="small">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Live{" "}
                  </a>
                  |
                  <a
                    href={item.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Git{" "}
                  </a>
                  <BiLinkExternal />
                </p>
                <div className="go-corner cursor-pointer" href="#">
                  <div title="see details" className="go-arrow">
                    <Link to={`/details/${item?._id}`}>→</Link>
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
