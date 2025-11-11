import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const ResponsiveMenu = ({ open, setOpen }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen]);

  const menuItems = [
   { id: 1, title: 'Home', link: 'home' },
  { id: 2, title: 'About', link: 'about' },
  { id: 3, title: 'Technologies', link: 'technologies' },
  { id: 4, title: 'Experience', link: 'experience' },
  { id: 5, title: 'Project', link: 'project' },
  { id: 6, title: 'Contact', link: 'contact' },
  ];

  const handleLinkClick = () => {
    setTimeout(() => setOpen(false), 100);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 w-full h-screen z-40 md:hidden bg-black bg-opacity-80"
        >
          <div className="flex flex-col items-center justify-center h-full text-xl font-semibold uppercase text-white gap-10">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                smooth={true}
                duration={600}
                offset={-80} // adjust if you have a fixed navbar
                onClick={handleLinkClick}
                className="cursor-pointer text-white hover:text-sky-300 transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
