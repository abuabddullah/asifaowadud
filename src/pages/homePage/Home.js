import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Complements from './Complements';
import Contact from './Contact';
import MySkills from './MySkills';
import Progress from './Progress';

const Home = () => {
    return (
        <div>
            <Banner />
            <MySkills/>
            <Progress/>
            <Blog/>
            <Complements/>
            <Contact/>
        </div>
    );
};

export default Home;