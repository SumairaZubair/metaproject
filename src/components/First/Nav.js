// import '../cssComponents/nav.css'
// import logo from '../../Assest/Logo.png'
// // import bg from '../../Assest/bgimg.png'
// import group from '../../Assest/Group.png'
// import group1 from '../../Assest/Group1.png'
// import stak from '../../Assest/stak.png'
// // import hero from '../../Assest/hero1.png'
// import NavText from './NavText'
// import { useState } from 'react'
// const Nav = () => {
//     const [isMenuOpen , setIsMenuOpen] = useState(false);
    
//  const toggle = ()=>{
//    setIsMenuOpen(!isMenuOpen)
//  }
//     return (
//         <div className='main'>
// <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
//                 {/* <img src={bg} alt='bgimg'/> */}
//                 <div className='logo'>
//                     <img src={logo} alt='M logo' />
//                 </div>
//                 <div className={`text ${isMenuOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li>Story</li>
//                         <li>roadmap</li>
//                         <li>specs and traits</li>
//                         <li>team</li>
//                         <li>FAQ</li>
//                         <li><img src={group} alt='group' className='li' /></li>
//                         <li><img src={group1} alt='group1' className='li'/></li>
//                         <img src={stak} alt='stak' className='stack' />

//                     </ul>
//                 </div>
//                 <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//     </div>
//             </div>
//             <NavText/>
//             {/* <div className='imgtext'>
//                 <div className='heading'>
//                     <h1>Welcome to Meta Moose World</h1>
                   
//                     <p>The woodland of Metaverse is home to 8,888 programmatically 
//                         generated Moose. They are massive, majestic, 
//                         6 feet tall, and super strong. Meta Moose is
//                          lovingly crafted collection that is powered by
//                  the Ethereum Blockchain. Come have
//                   a look around!</p>
//                   <div className='btn'>
//                   <button className='disc'>DISCORD</button>
//                   <button className='tweet'>TWITTER</button>

//                   </div>
//                 </div>

//                 <div className='image'>
//                     <img src={hero} alt='hero' />
//                 </div>
//             </div> */}
//         </div>
//     )
// }

// export default Nav
 

// import React, { useState } from 'react';
// import logo from '../../Assest/Logo.png';
// import group from '../../Assest/Group.png';
// import group1 from '../../Assest/Group1.png';
// import stak from '../../Assest/stak.png';
// import NavText from './NavText';
// import { FaTimes } from 'react-icons/fa'; // Import close icon
// // import { useState } from 'react';
// import '../cssComponents/nav.css'; // Make sure to import the CSS file

// const Nav = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <div className='main'>
//             <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
//                 <div className='logo'>
//                     <img src={logo} alt='M logo' />
//                 </div>
//                 <div className={`text ${isMenuOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li>Story</li>
//                         <li>roadmap</li>
//                         <li>specs and traits</li>
//                         <li>team</li>
//                         <li>FAQ</li>
//                         <li><img src={group} alt='group' className='li' /></li>
//                         <li><img src={group1} alt='group1' className='li' /></li>
//                         <img src={stak} alt='stak' className='stack' />
//                     </ul>
//                     {/* <button className='close-button' onClick={closeMenu}>
//                         {/* <FaTimes /> Close icon */}
//                     {/* </button>  */}
//                 </div>
//                 <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
//                     {/* <div className='bar'></div>
//                     <div className='bar'></div>
//                     <div className='bar'></div> */}
//                 </div>
//             </div>
//             <NavText />
//         </div>
//     );
// };

// export default Nav;







//  git hab coooodeeeeegubufjdliw





import React, { useState } from 'react';
import logo from '../../Assest/Logo.png';
import group from '../../Assest/Group.png';
import group1 from '../../Assest/Group1.png';
import stak from '../../Assest/stak.png';
import NavText from './NavText';
import { FaTimes } from 'react-icons/fa'; // Import close icon
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
                    {isMenuOpen && (
                        <button className='close-button' onClick={closeMenu}>
                            <FaTimes /> {/* Close icon */}
                        </button>
                    )}
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
