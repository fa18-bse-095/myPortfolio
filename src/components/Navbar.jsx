// import React, { useState } from 'react';
// import { FaLeaf, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';
// // import ResponsiveMenu from './ResponsiveMenu';
// // import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';
// import ResponsiveMenu from './ResponsiveMenu';

// import { Link, NavLink } from 'react-router-dom';
// import ko from '../assets/th.jpg'



// const NavbarMenu = [
//   { id: 1, title: 'Home', link: '/' },
//   { id: 2, title: 'Work', link: '/work' },
//   { id: 3, title: 'About', link: '/about' },
//   { id: 5, title: 'Contact', link: '/contact' },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   return (
//     <>
//       <nav>
//         <motion.div
//         initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
         
//           className=" flex justify-between items-center py-2 md:pt-4 w-[100%] container mx-auto m-4 px-8  "
//         >
//           {/* Logo section */}
//           <div className="text-2xl flex items-center gap-2 uppercase font-bold md:gap-1">
//           <img src= {ko}alt="" className=' w-20 h-20 rounded-3xl' />
//             <p className="text-white">Portfolio</p>
//             {/* <p className="text-white">Ahmad</p> */}
//              {/* <img src={ho} className=' w-20 h-10' alt="" /> */}
//             {/* <FaLeaf className="text-green-500" /> */}
//           </div>
//           {/* Menu section */}
//           <div className="hidden md:block">
//             <ul className="flex items-center md:gap-1 lg:gap-6 text-white">
//               {NavbarMenu.map((item) => (
//                 <li key={item.id}>
//                   <NavLink
//                     to={item.link}
//                     className="inline-block py-1 px-3 hover:text-sky-400 hover:shadow-[0_2px_0_-1px] font-semibold"
//                   >
//                     {item.title}
//                   </NavLink>
//                 </li>
//               ))}
              
//             </ul>
//           </div>
//           <div className="md:hidden hover:cursor-auto">
//             <button onClick={() => setOpen(!open)}>
//               {open ? <FaTimes size={30} className=' hover:cursor-pointer' /> : <FaBars size={30} className=' hover: cursor-pointer' />}
//             </button>
//           </div>
//         </motion.div>
//       </nav>
//       <ResponsiveMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { FaTimes, FaBars } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import ResponsiveMenu from './ResponsiveMenu';
// import { NavLink } from 'react-router-dom';
// import ko from '../assets/th.jpg';

// const NavbarMenu = [
//   { id: 1, title: 'Home', link: '/' },
//   { id: 2, title: 'Work', link: '/work' },
//   { id: 3, title: 'About', link: '/about' },
//   { id: 5, title: 'Contact', link: '/contact' },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-gray-900">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="flex justify-between items-center py-2 md:pt-4 w-full container mx-auto m-4 px-8"
//         >
//           {/* Logo section */}
//           <div className="text-2xl flex items-center gap-2 uppercase font-bold md:gap-1">
//             <img src={ko} alt="Logo" className="w-20 h-20 rounded-3xl" />
//             <p className="text-white">Portfolio</p>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <ul className="flex items-center md:gap-1 lg:gap-6 text-white">
//               {NavbarMenu.map((item) => (
//                 <li key={item.id}>
//                   <NavLink
//                     to={item.link}
//                     className="inline-block py-1 px-3 hover:text-sky-400 hover:shadow-[0_2px_0_-1px] font-semibold"
//                   >
//                     {item.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden hover:cursor-auto">
//             <button onClick={() => setOpen(!open)}>
//               {open ? (
//                 <FaTimes size={30} className="hover:cursor-pointer" />
//               ) : (
//                 <FaBars size={30} className="hover:cursor-pointer" />
//               )}
//             </button>
//           </div>
//         </motion.div>
//       </nav>

//       {/* Mobile Responsive Menu */}
//       <ResponsiveMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { FaTimes, FaBars } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import ResponsiveMenu from './ResponsiveMenu';
// import { Link } from 'react-scroll';
// import ko from '../assets/th.jpg';

// const NavbarMenu = [
//   { id: 1, title: 'Home', link: 'home' },
//   { id: 2, title: 'Work', link: 'work' },
//   { id: 3, title: 'About', link: 'about' },
//   { id: 4, title: 'Contact', link: 'contact' },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-gray-900">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex justify-between items-center py-3 container mx-auto px-6"
//         >
//           {/* Logo */}
//           <div className="text-2xl flex items-center gap-2 uppercase font-bold">
//             <img src={ko} alt="Logo" className="w-14 h-14 rounded-3xl" />
//             <p className="text-white">Portfolio</p>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <ul className="flex items-center gap-6 text-white">
//               {NavbarMenu.map((item) => (
//                 <li key={item.id}>
//                   <Link
//                     to={item.link}
//                     smooth={true}
//                     duration={600}
//                     offset={-80}
//                     spy={true}
//                     className="cursor-pointer py-1 px-3 hover:text-sky-400 font-semibold"
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setOpen(!open)}>
//               {open ? <FaTimes size={30} /> : <FaBars size={30} />}
//             </button>
//           </div>
//         </motion.div>
//       </nav>

//       {/* Responsive Menu */}
//       <ResponsiveMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-scroll';
import ko from '../assets/th.jpg';

const NavbarMenu = [
  { id: 1, title: 'Home', link: 'home' },
  { id: 2, title: 'About', link: 'about' },
  { id: 3, title: 'Technologies', link: 'technologies' },
  { id: 4, title: 'Experience', link: 'experience' },
  { id: 5, title: 'Project', link: 'project' },
  { id: 6, title: 'Contact', link: 'contact' },
  { id: 7, title: 'CV', link: 'https://fa18-bse-095.github.io/my-first-cv/', external: true }, // Added external flag
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar style dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item.external) {
      // For external links, open in new tab
      window.open(item.link, '_blank');
    }
    // For internal links, react-scroll will handle the scrolling automatically
  };

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-3 container mx-auto px-6"
        >
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 uppercase font-bold">
            <img src={ko} alt="Logo" className="w-14 h-14 rounded-3xl" />
            <p className="text-white">Portfolio</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  {item.external ? (
                    // External link - use regular anchor tag
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer py-1 px-3 hover:text-sky-400 font-semibold transition-colors duration-200"
                      onClick={() => handleNavClick(item)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    // Internal link - use react-scroll
                    <Link
                      to={item.link}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      spy={true}
                      activeClass="text-sky-400"
                      className="cursor-pointer py-1 px-3 hover:text-sky-400 font-semibold transition-colors duration-200"
                      onClick={() => handleNavClick(item)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Responsive Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;


