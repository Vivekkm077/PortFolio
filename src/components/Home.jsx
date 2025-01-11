import React from "react";
import pic from "../../public/photo.avif";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl dark:text-gray-300">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="dark:text-gray-300">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold dark:text-red-400"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-xl md:text-md text-justify dark:text-gray-400">
            Hello, I'm Vivek Kumar, a passionate Web Developer with a keen eye for
          MERN Stack.I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.

              </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="space-y-2">
                <h1 className="font-bold text-center dark:text-gray-300">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/vivek-kumar-5859631b6/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer dark:text-gray-300 hover:text-blue-500 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Vivekkm077" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer dark:text-gray-300 hover:text-blue-700 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCbXWzTtc_0T8KpX_mrCc3uA" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer dark:text-gray-300 hover:text-red-600 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/vivekabhiraj456" target="_blank">
                      <FaTwitter className="text-2xl cursor-pointer dark:text-gray-300 hover:text-blue-400 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Technologies */}
              <div className="space-y-2">
                <h1 className="font-bold text-center dark:text-gray-300">
                  Currently working on
                </h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-gray-300" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-gray-300" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-gray-300" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-gray-300" />
                </div>
              </div>
            </div>
            {/* Resume Download Button */}
            <div className="pt-10">
              <a
                href="https://drive.google.com/file/d/13vV2kMK0NMW2DVdst2rDSU59y0eqmhnF/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button
                  type="button"
                  className="bg-black text-white rounded-xl px-3 py-4 hover:bg-slate-700 duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
                >
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          {/* Right Section - Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] dark:border-gray-700"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className="dark:border-gray-700" />
    </>
  );
}

export default Home;