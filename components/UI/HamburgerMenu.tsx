import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function HamburgerMenu() {
  return (
    <div
      className="absolute bg-black mt-[4.6rem] z-30 text-white w-screen overflow-hidden"
      style={{ height: 'calc(100% - 4.6rem)' }}>
      <div className="flex flex-col px-8 space-y-6 py-4">
        <a
          href="#header"
          className="text-2xl font-normal my-auto text-[#515151] hover:text-white transition-colors duration-150  lg:hidden">
          Home
        </a>
        <a
          href="/about"
          className="text-2xl font-normal my-auto text-[#515151] hover:text-white transition-colors duration-150  lg:hidden">
          About
        </a>
        <a
          href="/projects"
          className="text-2xl font-normal  my-auto text-[#515151] hover:text-white transition-colors duration-150  lg:hidden">
          Projects
        </a>
        <a
          href="/contact"
          className="text-2xl font-normal  my-auto text-[#515151] hover:text-white transition-colors duration-150  lg:hidden">
          Contact
        </a>
        <a
          className="flex flex-row space-x-2 text-2xl text-[#515151]"
          target="_blank"
          href="https://github.com/fva062001">
          <FaGithub className="my-auto" />
          <p className="font-normal">Github</p>
        </a>
        <a
          className="flex flex-row space-x-2 text-2xl text-[#515151]"
          target="_blank"
          href="https://www.linkedin.com/in/fernando-arturo-valerio-del-valle-2a1614230/">
          <FaLinkedin className="my-auto" />
          <p className=" font-normal  my-auto ">LinkedIn</p>
        </a>
        <a
          className="flex flex-row space-x-2 text-2xl text-[#515151]"
          target="_blank"
          href="https://www.instagram.com/f_va06/">
          <FaInstagram className="my-auto" />
          <p className=" font-normal  my-auto ">Instagram</p>
        </a>
      </div>
    </div>
  );
}

export default HamburgerMenu;
