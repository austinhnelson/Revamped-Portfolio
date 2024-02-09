import React from "react";

const LatestWork = () => {
  return (
    <section className="bg-gray-100 py-12 font-body ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Things going on in my life right now!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-white p-6 rounded-lg vertical-lines shadow-2xl hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Start of a New Journey
            </h3>
            <p className="text-gray-600 ">
              I recently relocated to the scenic landscapes of Pullman,
              Washington, where I&apos;m poised to embark on an exciting journey
              with SEL. Thrilled to kickstart my tenure as an associate
              engineer, I&apos;ll be diving into the dynamic engineer rotation
              program for the next exciting 18 months!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg vertical-lines shadow-2xl hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Exploring Reinforcement Learning
            </h3>
            <p className="text-gray-600">
              I&apos;ve been diving into the world of machine learning by
              attempting to learn more about reinforcement learning and create a
              project to reiterate this. I&apos;ve begun working on a lunar
              landing game (made in Pygame) and then creating a model to
              correctly master the game.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg vertical-lines shadow-2xl hover:bg-gray-200 hover:outline hover:outline-teal-600 hover:text-black">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              College Graduate!
            </h3>
            <p className="text-gray-600">
              After 3.5 years, I can officially say that I am a college graduate
              with a Bachelor&apos;s Degree in Computer Science from Boise State
              University! I&apos;ve deferred the commencement ceremony until the
              Spring, where I can celebrate with all of my friends and enjoy the
              moment together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
