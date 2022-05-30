import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner/Banner';
import Home from './pages/homePage/Home';
import NavbarDrawer from './pages/shared/NavbarDrawer';

function App() {
  return (
    <div className="App">
      <Banner/>
    <NavbarDrawer>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
    </NavbarDrawer>
    </div>
  );
}

export default App;
