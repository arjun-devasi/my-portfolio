import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { BsFilePersonLines } from "react-icons/bs";
const SocialLink = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/arjun-devasi-09bb48229/",
      style: "rounded-tr-md ",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/arjun-devasi",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:arjundevasi2624@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/assets/arjun-devasi.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed md:top-[35%] lg:flex flex-col left-0 hidden">
      <ul>
        {social.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-transparent md:bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="text-white flex justify-between items-center w-full "
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLink;
