import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import './Navbar.scss';
import Resume from '../../assets/resume.pdf'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h1 className='py-4 text-gray-700 app-head'>
                     <span className='text-[#3c8ffc]'> A</span>
                    </h1>
            </div>
            <ul className="app__navbar-links">
                {['home', 'work', 'about','experience', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`} className='text-gray-700'>{item} </a>
                    </li>
                ))}
            </ul>
            <div className="button">
                <a href={Resume}>
                    <button className='resume__btn'>Resume</button>
                </a>
            </div>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX className='x-icon' onClick={() => setToggle(false)} />

                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>



                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;