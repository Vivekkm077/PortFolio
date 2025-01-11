import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-300 dark:border-gray-700" />
      <footer className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Vivekkm077"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaGithub size={24} className="cursor-pointer" />
              </a>
              <a
                href=" https://x.com/vivekabhiraj456 "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaTwitter size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/vivek6143kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
              >
                <FaInstagram size={24} className="cursor-pointer" />
              </a>
              <a
                href=" https://www.linkedin.com/in/vivek-kumar-5859631b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-500"
              >
                <FaLinkedinIn size={24} className="cursor-pointer" />
              </a>
              <a
                href="mailto:vivekabhiraj456@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400"
              >
                <FaEnvelope size={24} className="cursor-pointer" />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vivek Kumar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;


