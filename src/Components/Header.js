import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineFileText,
  AiOutlineMail,
} from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="flex justify-between items-center font-bold bg-purple-600 text-white px-5 py-2">
      <a href="/" className="logo text-2xl md:text-4xl font-bold">
        WELCOME DEVELOPER
      </a>
      <nav className="p-4 md:flex hidden">
        <ul className="flex">
          <li className="px-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer font-semibold text-[25px]"
            >
              <AiOutlineUser size={24} className="mr-2" />
              About
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer font-semibold text-[25px]"
            >
              <AiOutlineProject size={24} className="mr-2" />
              Projects
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="blogs"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer font-semibold text-[25px]"
            >
              <AiOutlineFileText size={24} className="mr-2" />
              Blog
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer font-semibold text-[25px]"
            >
              <AiOutlineMail size={24} className="mr-2" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`p-4 md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 transition-transform duration-500 ${
          toggle ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button onClick={handleToggle} className="absolute top-4 right-4">
          {toggle ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
        <ul className="flex flex-col mt-12 space-y-8">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer"
              onClick={handleToggle}
            >
              <AiOutlineUser size={20} className="mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer"
              onClick={handleToggle}
            >
              <AiOutlineProject size={20} className="mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="blogs"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer"
              onClick={handleToggle}
            >
              <AiOutlineFileText size={20} className="mr-2" />
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center hover:text-blue-500 cursor-pointer"
              onClick={handleToggle}
            >
              <AiOutlineMail size={20} className="mr-2" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={handleToggle}>
          {toggle ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>
    </header>
  );
};
export default Header;
