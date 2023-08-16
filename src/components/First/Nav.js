
// import React, { useState } from 'react';
import logo from '../../Assest/Logo.png';
import group from '../../Assest/Group.png';
import group1 from '../../Assest/Group1.png';
import stak from '../../Assest/stak.png';
import NavText from './NavText';
import { FaTimes } from 'react-icons/fa'; // Import close icon
import { useState } from 'react';
import '../cssComponents/nav.css'; // Make sure to import the CSS file

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='main'>
            <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <div className='logo'>
                    <img src={logo} alt='M logo' />
                </div>
                <div className={`text ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>Story</li>
                        <li>roadmap</li>
                        <li>specs and traits</li>
                        <li>team</li>
                        <li>FAQ</li>
                        <li><img src={group} alt='group' className='li' /></li>
                        <li><img src={group1} alt='group1' className='li' /></li>
                        <img src={stak} alt='stak' className='stack' />
                    </ul>
                    <button className='close-button' onClick={closeMenu}>
                        {/* <FaTimes /> Close icon */}
                    </button>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            <NavText />
        </div>
    );
};

export default Nav;
