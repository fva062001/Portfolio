import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { LiaGripLinesSolid } from 'react-icons/lia';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import { IoMdClose } from 'react-icons/io';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  const navbarContext = useContext(NavbarContext);

  return (
    <>
      <div className="absolute py-4 w-full top-0 flex flex-row justify-between z-20 text-white px-8 lg:px-40 border-b-[0.1px] border-[#333333]">
        <div className="flex flex-row space-x-6 align-middle justify-items-center">
          <a
            href="/"
            className="text-4xl font-bold">
            FV
          </a>
          <a
            href="/about"
            className="text-md font-medium my-auto text-[#515151] hover:text-white transition-colors duration-150 hidden lg:inline">
            About
          </a>
          <a
            href="/projects"
            className="text-md font-medium ml-4 my-auto text-[#515151] hover:text-white transition-colors duration-150 hidden lg:inline">
            Projects
          </a>
          <a
            href="/contact"
            className="text-md font-medium ml-4 my-auto text-[#515151] hover:text-white transition-colors duration-150 hidden lg:inline">
            Contact
          </a>
        </div>
        <div className=" flex-row justify-end text-[#515151] space-x-4 text-2xl my-auto hidden lg:flex">
          <a
            target="_blank"
            href="https://github.com/fva062001">
            <FaGithub className="hover:text-white transition-colors duration-150" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fernando-arturo-valerio-del-valle-2a1614230/">
            <FaLinkedin className="hover:text-white transition-colors duration-150" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/f_va06/">
            <FaInstagram className="hover:text-white transition-colors duration-150" />
          </a>
        </div>
        <div className="lg:hidden flex-row justify-center align-middle transition-all duration-200">
          {!navbarContext?.isNavbarOpen && (
            <LiaGripLinesSolid
              className="text-white text-4xl transition-transform duration-200 transform ease-in-out"
              onClick={navbarContext?.toggleNavbar}
            />
          )}
          {navbarContext?.isNavbarOpen && (
            <IoMdClose
              className="text-white text-4xl transition-transform duration-200 transform ease-in-out"
              onClick={navbarContext?.toggleNavbar}
            />
          )}
        </div>
      </div>
      {navbarContext?.isNavbarOpen && <HamburgerMenu />}
    </>
  );
}

export default Navbar;
