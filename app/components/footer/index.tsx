import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-zinc-900 py-8 font-body">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>
              Made with ❤️ using <span className="text-teal-600">Next.js </span>
              and
              <span className="text-teal-600"> Tailwind</span>
            </p>
          </div>
          <div>
            <div className="flex gap-x-6">
              {/* Add your icons here */}
              <FaLinkedin className="text-zinc-900 text-xl hover:text-teal-600" />
              <FaGithub className="text-zinc-900 text-xl hover:text-teal-600" />
              <IoIosMail className="text-zinc-900 text-xl hover:text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
