import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const NavMenues = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Skills</Link></li>
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/'>portfolio</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Complements</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </>
    );
};

export default NavMenues;