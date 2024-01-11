import React from "react";
import burger from "../assets/image/yummy-burger.png";
import project4 from "../assets/image/project4.png";
import calculat from "../assets/image/calculat.png";
import gharkhana from "../assets/image/chefcompass.png";
import dice from "../assets/image/dice.png";
import spotify from "../assets/image/spotify-clone.png";
import portfolio from "../assets/image/portfolio.png";
import { Link } from "react-scroll";
const projects = [
  {
    id: 1,
    src: gharkhana,
    href: "https://chef-compass.vercel.app/",
    code: "https://github.com/arjun-devasi/chef-Compass",
    name: "chef's Compass",
    skills: "Html, Css, JavaScript",
  },
  {
    id: 2,
    src: portfolio,
    href: "https://arjun-devasi.vercel.app/",
    code: "https://github.com/arjun-devasi/my-portfolio",
    name: "My Portfolio",
    skills: "React, tailwind css",
  },

  {
    id: 3,
    src: burger,
    href: "https://burger-pro-frontend.vercel.app/",
    code: "https://github.com/arjun-devasi/burger-pro-frontend",
    name: "Yummy Burger",
    skills: "MERN STACK",
  },
  {
    id: 4,
    src: spotify,
    href: "https://arjun-devasi.github.io/learnandbuild/AJ-Music/",
    code: "https://github.com/arjun-devasi/learnandbuild",
    name: "Music-webPage",
    skills: "Html,css,Javascript",
  },
  // {
  //   id: 5,
  //   src: calculat,
  //   href: "https://arjun-devasi.github.io/js-project/calculator/",
  //   code: "https://github.com/arjun-devasi/js-project",
  //   name: "Calculator",
  //   skills: "Html,css,Javascript",
  // },

  // {
  //   id: 6,
  //   src: dice,
  //   href: "https://arjun-devasi.github.io/js-project/Dice-Roll/",
  //   code: "https://github.com/arjun-devasi/js-project/tree/main/Dice-Roll",
  //   name: "Dice game",
  //   skills: "Html,css,Javascript",
  // },
];
const Portfolio = () => {
  return (
    <>
      <div
        name="Projects"
        className=" w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
      >
        <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              MY PROJECTS
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-13 sm:px-9">
            {projects.map(({ id, src, name, skills, href, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <p className="text-gray-400 py-2 pl-2">{name} </p>
                <p className="text-gray-400 pl-2">{skills}</p>
                <div className="flex items-center justify-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-2 py-2 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-2 py-2 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
