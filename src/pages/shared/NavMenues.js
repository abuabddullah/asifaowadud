import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const NavMenues = () => {
    return (
        <>
            <li><a href='#banner'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#blog'>Blogs</a></li>
            <li><a href='#complements'>Complements</a></li>
            <li><a href='#contact'>Contact</a></li>
        </>
    );
};

export default NavMenues;