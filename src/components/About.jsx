import React from "react";
const About = () => {
  return (
    <>
      <div
        name="About"
        className="pt-10  w-full bg-gradient-to-b from-gray-800 to-black text-white   "
      >
        <div className="px-2  flex flex-col md:px-40 ">
          <div>
            <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
              ABOUT ME
            </h1>
          </div>
          <div className="text-1x mt-10 text-gray-400">
            <p>
              I'm final year B. Tech student at Jaipur Engineering College,
              aspiring to become a full stack developer. Having experience with
              programming languages such as Java and JavaScript, as well as web
              development frameworks or libraries like TailWind CSS, React JS,
              Express JS and Node.js. And I used MongoDB as a Database
            </p>
            <p className="text-1x pt-1">
              Currently pursuing a B.Tech degree in Computer Science, with a
              focus on developing a strong foundation in programming,
              algorithms, and software development.
            </p>
            <p className="text-1x pt-1">
              Demonstrating a passion for learning and applying theoretical
              concepts to real-world projects through coursework and practical
              assignments in the field of computer science.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-1xl font-bold inline border-b-2 border-gray-500">
              EDUCATION
            </h2>
          </div>
          <div className="mt-3 text-gray-400">
            <h2>Jaipur Engineering College,Jaipur</h2>
            <p>Bachelor of Technology ( B.Tech )</p>
            <p>Computer Science [ 2020-24 ]</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
