import Banner from "../components/home/Banner";
import Complements from "../components/home/Complements";
import Contact from "../components/home/Contact";
import MyBlog from "../components/home/MyBlog";
import MyProjects from "../components/home/MyProjects";
import MyServices from "../components/home/MyServices";
import MySkills from "../components/home/MySkills";
import Progress from "../components/home/Progress";

const Home = () => {
  return (
    <div>
      <Banner />
      <Progress />
      <MySkills />
      <MyServices />
      <MyProjects />
      <MyBlog />
      <Complements />
      <Contact />
    </div>
  );
};

export default Home;
