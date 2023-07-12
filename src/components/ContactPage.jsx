import React from "react";
import { FaRegEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import SocialLink from "./SocialLink";
function Contact() {
  const social = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/arjun-devasi-09bb48229/",
      style: "rounded-tl-md ",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/arjun-devasi",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:arjundevasi2624@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/",
      style: "rounded-bl-md",
      download: true,
    },
  ];

  return (
    <>
      <div
        name="Contact"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white "
      >
        <div className="flex flex-col max-w-screen-lg w-full justify-center mx-auto p-4 h-full  ">
          <div className="pb-8">
            <p className="text-4xl  font-bold border-b-4 border-gray-400 inline ">
              Contact
            </p>
          </div>
          <div className="flex flex-col justify-center  w-full md:flex-row md:justify-around  ">
            <div className="flex">
              <div className="flex flex-col w-full gap-2 justify-center items-start text-gray-400 ">
                <p className="py-4 text-2xl font-bold text-gray-300">
                  Let's connect
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <FaPhone />
                  </span>
                  +91 8209430264
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <FaRegEnvelope />
                  </span>
                  arjundevasi2624@gmail.com
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <FaLocationArrow />
                  </span>
                  Jaipur,Rajasthan,India
                </p>
              </div>

              <div>
                <div className=" flex flex-col right-0 md:hidden absolute ">
                  <ul>
                    {social.map(({ id, child, href, style, download }) => (
                      <li
                        key={id}
                        className={
                          "flex justify-between items-center w-10 h-11 hover:mr-[-10px]  duration-500  bg-gray-500 " +
                          " " +
                          style
                        }
                      >
                        <a
                          href={href}
                          className="text-white flex justify-between items-center w-full mx-1 "
                          download={download}
                          target="_blank"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto  md:mx-20  ">
              <form
                className="flex flex-col gap-2 pt-5 w-full h-full outline-none "
                action="https://getform.io/f/0e7409e2-e4d1-421b-b404-8ab2098aaa91"
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></input>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></input>
                <textarea
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  type="textarea"
                  name="message"
                  rows="10"
                  placeholder="message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 py-1.5 mx-auto rounded-md mb-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
// AKfycbwwa1H39OxXSGiHmG82MnUore5P92wbaPZXnFSsNfeDjh1EtRnfgJV2vwfl23eqkW-ZNQ
// action="https://script.google.com/macros/s/AKfycbwwa1H39OxXSGiHmG82MnUore5P92wbaPZXnFSsNfeDjh1EtRnfgJV2vwfl23eqkW-ZNQ/exec"
