import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlogs from './pages/allBlogsPage/AllBlogs';
import StartBanner from './pages/StartBanner/StartBanner';
import Home from './pages/homePage/Home';
import ProjectDetails from './pages/projectsPage/ProjectDetails';
import Footer from './pages/shared/Footer';
import NavBarMenu from './pages/shared/NavBarMenu';

function App() {
  return (
    <div className="App">
      <StartBanner />
      <NavBarMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:_id" element={<ProjectDetails />} />
        <Route path="/allBlogs" element={<AllBlogs />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
