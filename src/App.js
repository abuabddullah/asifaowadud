import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner/Banner';
import Home from './pages/homePage/Home';
import Footer from './pages/shared/Footer';
import NavBarMenu from './pages/shared/NavBarMenu';

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBarMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
