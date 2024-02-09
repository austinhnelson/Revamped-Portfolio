import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-800 top-0 font-body">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          {/* Left side: Navigation */}
          <ul className="flex gap-x-6 text-white flex-wrap">
            <li className="hover:text-teal-600">
              <Link href="/">
                <p>home</p>
              </Link>
            </li>
            <li className="hover:text-teal-600">
              <Link href="/about">
                <p>about</p>
              </Link>
            </li>
            <li className="hover:text-teal-600">
              <Link href="/experience">
                <p>experience</p>
              </Link>
            </li>
            <li className="hover:text-teal-600">
              <Link href="/projects">
                <p>projects</p>
              </Link>
            </li>
          </ul>
          {/* Right side: Social Icons */}
          <div className="flex gap-x-6 mt-4 lg:mt-0">
            <a
              href="https://linkedin.com/in/austinhnelson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/austinhnelson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-600"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:nelsonhaustin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-600"
            >
              <IoIosMail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
