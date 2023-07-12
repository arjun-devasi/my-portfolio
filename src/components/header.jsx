// import React from "react";
// import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [nav, setNav] = useState(false);
  const Linkss = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Experiance" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black px-5 text-white fixed z-10 ">
      <div>
        <h1 className="font-signature text-6xl pt-4   text-green-500">Arjun</h1>
      </div>
      <ul className="hidden md:flex">
        {Linkss.map((item) => (
          <li
            key={item.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <ScrollLink
              to={item.link}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
              {item.link}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer px-3 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex justify-center items-center flex-col h-screen w-full absolute left-0 top-0 bg-gradient-to-b from-black to-gray-600 ">
          {Linkss.map((item) => (
            <li
              key={item.id}
              className="py-4 text-2xl btn btn-ghost cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
              <ScrollLink
                onClick={() => setNav(!nav)}
                to={item.link}
                smooth={true}
                duration={500}
              >
                {item.link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;
