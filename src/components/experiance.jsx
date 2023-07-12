import React from "react";
import java from "../assets/image2/java.png";
import css from "../assets/image2/css.png";
import html from "../assets/image2/html.png";
import mdb from "../assets/image2/mdb.png";
import jquery from "../assets/image2/jquery.png";
import reactlogo from "../assets/image2/reactlogo.png";
import nodelogo from "../assets/image2/nodelogo.png";
import js from "../assets/image2/js.png";
import bootstrap from "../assets/image2/bootstrap.png";
import expresslogo from "../assets/image2/expresslogo.png";
import tallwind from "../assets/image2/tallwind.png";
import github from "../assets/image2/github.png";
function Experiance() {
  const logo = [
    {
      id: 1,
      src: reactlogo,
      titel: "React",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: nodelogo,
      titel: "Node js",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: html,
      titel: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      titel: "Css",
      style: "shadow-white",
    },
    {
      id: 5,
      src: js,
      titel: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: expresslogo,
      titel: "Express js",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: jquery,
      titel: "JQuery",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: bootstrap,
      titel: "bootstrap",
      style: "shadow-indigo-300",
    },
    {
      id: 9,
      src: mdb,
      titel: "mongoDB",
      style: "shadow-green-300",
    },
    {
      id: 10,
      src: java,
      titel: "Java",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: tallwind,
      titel: "Tailwind Css",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: github,
      titel: "GitHub",
      style: "shadow-gray-200",
    },
  ];
  return (
    <div
      name="Experiance"
      className=" bg-gradient-to-b from-gray-800 to-black text-white  w-full sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            EXPERIENCE
          </p>
          <p className="py-6">These are my skills</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
          {logo.map(({ id, src, titel, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg w-full ${style}`}
            >
              <img src={src} className="w-20 mx-auto  "></img>
              <p className="mt-4">{titel}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
