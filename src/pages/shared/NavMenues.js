import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const NavMenues = () => {
    return (
        <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='skills'>Skills</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='projects'>Projects</Link></li>
            <li><Link to='blog'>Blogs</Link></li>
            <li><Link to='complements'>Complements</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </>
    );
};

export default NavMenues;