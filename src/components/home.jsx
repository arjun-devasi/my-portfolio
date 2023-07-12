import React from "react";
import heroImage from "../assets/image/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      className=" w-f 
     bg-gradient-to-b from-black to-gray-800 pt-40 md:h-screen "
    >
      <div className="flex  flex-col items-center justify-center max-w-screen-lg mx-auto h-full pt-3 px-4 md:flex-row ">
        <div className=" text-white h-full flex flex-col justify-center">
          <h2 className="text-3xl  sm:text-7xl font-bold">
            <span className="text-5xl text-blue-500 "> Hii</span>, I'm a Arjun
            Devasi
          </h2>
          <h1 className="mt-1 font-bold text-2xl">Full Stack Developer</h1>
          <p className="text-gray-400 py-4 max-w-md">
            I am a MERN (MongoDB, Express.js, React.js, Node.js) stack developer
            with a passion for crafting high-quality web applications. With a
            strong foundation in JavaScript and a comprehensive understanding of
            the MERN stack, I am adept at creating robust, scalable, and
            user-friendly solutions.
          </p>
          <div>
            <ScrollLink to="Projects" smooth={true} duration={500} offset={-50}>
              {" "}
              <button className="group text-white flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-3 rounded-md w-fit my-3 ">
                Projects
                <span className="group-hover:rotate-90 text-2xl duration-200">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </button>
            </ScrollLink>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full "
            alt="myImage"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
