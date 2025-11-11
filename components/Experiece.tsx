"use client";

import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after the component mounts to trigger the animation
    setIsLoaded(true);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="bg-black py-20 px-6">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-bold text-white relative inline-block">
          Skills & Experience
          {/* MODIFIED: Changed duration-1000 to duration-[2000ms] for a 2-second animation */}
          <span className={`absolute left-0 bottom-0 h-1 bg-white -mb-2 transition-all duration-\\[2000ms\\] ease-in-out ${isLoaded ? 'w-full' : 'w-0'}`}></span>
        </h1>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line with responsive height adjustments */}
        <div className="absolute left-6 w-2 bg-white
          /* Base height for mobile/portrait */
          top-12 bottom-24
          /* Medium screens */
          md:bottom-20
          /* Larger screens */
          lg:bottom-16
          /* Transition for smooth resizing */
          transition-all duration-400"></div>

        {/* Imperial Mobile */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">Imperial Mobile</h2>
          <div className="relative">
            {/* Circle Marker */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Founder and Owner of Imperial Mobile Detail</h3>
          </div>
          <p className="text-sm text-zinc-400">October 2021 - Currently</p>
          <p className="text-zinc-300 mt-2">
            Adding features to an already built page. Minor website modifications. The project was ended in March 2024.
            <a href="https://imperialmobile.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit ImperialMobile</a>
          </p>
        </div>

        {/* Imperial Mobile */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">Programmatic.it</h2>
          <div className="relative">
            {/* Circle Marker */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Founder and Owner of Programmatic</h3>
          </div>
          <p className="text-sm text-zinc-400">October 2025 - Currently</p>
          <p className="text-zinc-300 mt-2">
          Our AI-powered automation solutions are tailored to boost your efficiency, drive data-backed decisions, and give you a competitive edge
            <a href="https://programmatic.it.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit Programmatic</a>
          </p>
        </div>

        {/* TechLiberate */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">TechLiberate</h2>
          <div className="relative">
            {/* Circle Marker */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Software Engineer</h3>
          </div>
          <p className="text-sm text-zinc-400">March 2025 - Currently  alexandru@techliberate.com</p>
          <p className="text-zinc-300 mt-2">
            Adding features to an already built page. Minor website modifications
            <a href="https://techliberate.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit TechLiberate</a>
          </p>
        </div>

        {/* OpenSource */}
        <div className="relative pl-20">
          <h2 className="text-lg font-bold text-teal-400">Machine Learning and AI</h2>
          <div className="relative">
            {/* Circle Marker */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Machine Learning and AI</h3>
          </div>
          <p className="text-sm text-zinc-400">May 2023 - Present</p>
          <p className="text-zinc-300 mt-2">
            I actively try to contribute to Open Source on my GitHub.
            <a href="https://github.com/alexcojsecu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">github.com/alexcojescu</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
