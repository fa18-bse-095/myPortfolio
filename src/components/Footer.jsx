import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-8 justify-center py-10 px-5 bg-gray-900 text-white border-t border-gray-800">
      
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          About
        </Link>
        <Link to="technologies" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          Technologies
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          Experience
        </Link>
        <Link to="project" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 transition-colors duration-300">
          Contact
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/Yasinahmadkhan34" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/yasin-ahmad-9263331b2" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.instagram.com/yasinahmadkhan39/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" className="hover:scale-110 transition-transform duration-300" />
        </a>
        
      
        {/* WhatsApp Contact */}
        <a
          href="https://wa.me/923411190506"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/whatsapp.png"
            alt="WhatsApp"
            className="hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 font-medium text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Yasin Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
