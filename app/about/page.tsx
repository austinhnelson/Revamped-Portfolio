import React from "react";

const About = () => {
  return (
    <div className="relative bg-gray-100 font-body">
      <div className="absolute top-0 left-0 w-full h-screen diagonal-lines"></div>

      <div className="relative flex flex-col items-center h-screen text-gray-700">
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-20">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-10">
          {/* My Background */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              My Background
            </h2>
            <p className="text-lg">
              My name is Austin Nelson and I am currently working as an engineer
              at Schweitzer Engineering Laboratories. I have a background in
              computer science and enjoy working with web development
              technologies as well as low-level systems.
            </p>
            <p className="text-lg mt-4">
              In my free time, I enjoy working out and exploring my cooking
              abilities. I'm always looking for opportunities to learn and grow
              both personally and professionally. In my free time, I enjoy
              working out and exploring my cooking abilities. I'm always looking
              for opportunities to learn and grow both personally and
            </p>
          </div>

          {/* My Story */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">My Story</h2>
            <p className="text-lg">
              I was raised in sunny Southern California and ventured to the
              always vibrant Boise, Idaho to pursue my passion for computer
              science at Boise State University. After graduating, I currently
              reside in Pullman, WA where I am a part of SEL's engineer rotation
              program.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center h-screen rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-10">
          {/* Life Goals */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Life Goals
            </h2>
            <p className="text-lg">
              Share some of your life goals and aspirations here. Discuss what
              motivates you and what you hope to achieve in the future.
            </p>
          </div>

          {/* Places to Go */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Places to Go
            </h2>
            <p className="text-lg">
              Talk about some of the places you dream of visiting. It could be
              destinations you've always wanted to explore or experiences you're
              eager to have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
