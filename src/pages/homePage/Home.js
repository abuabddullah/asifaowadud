import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Complements from './Complements';
import Contact from './Contact';
import MyServices from './MyServices';
import MySkills from './MySkills';
import PortFolio from './PortFolio';
import Progress from './Progress';

const Home = () => {
    return (
        <div>
            <Banner />
            <Progress/>
            <MySkills/>
            <MyServices/>
            <PortFolio/>
            <Blog/>
            <Complements/>
            <Contact/>
        </div>
    );
};

export default Home;