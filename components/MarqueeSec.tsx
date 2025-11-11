"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image component from next/image
import { Marquee } from '@/components/magicui/marquee'; // Ensure the path is correct

const MarqueeSec = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* MODIFIED: Changed mb-6 to mb-12 to add more space below the heading */}
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl font-bold text-white relative inline-block">
            What I Work With
            {/* Underline with original 1-second duration from user's code */}
            <span className={`absolute left-0 bottom-0 h-1 bg-white -mb-2 transition-all duration-1000 ease-in-out ${isLoaded ? 'w-full' : 'w-0'}`}></span>
          </h2>
        </div>

        {/* First Marquee */}
        <div className="mb-8"> {/* This margin adds space between the two marquees */}
          <Marquee pauseOnHover={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="/python.png" alt="Python" label="Python" />
              <IconWithText src="/nodejs.png" alt="Node.js" label="Node.js" />
              <IconWithText src="/js.png" alt="JavaScript" label="JavaScript" />
              <IconWithText src="/java.png" alt="Java" label="Java" />
              <IconWithText src="/tailwind.png" alt="Tailwind" label="Tailwind" />
              <IconWithText src="/R.png" alt="R" label="R" />
            </div>
          </Marquee>
        </div>

        {/* Second Marquee (Reverse Direction, Extra Padding) */}
        <div>
          <Marquee pauseOnHover={true} reverse={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="/typescript.png" alt="TypeScript" label="TypeScript" />
              <IconWithText src="/react.png" alt="React" label="React" />
              <IconWithText src="/html.png" alt="HTML" label="HTML" />
              <IconWithText src="/css.png" alt="CSS" label="CSS" />
              <IconWithText src="/c++.png" alt="C++" label="C++" />
              <IconWithText src="/Julia.png" alt="Julia" label="Julia" />
              <IconWithText src="/langchain.png" alt="Langchain" label="Langchain" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

interface IconWithTextProps {
  src: string;
  alt: string;
  label: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ src, alt, label }) => (
  <div className="flex items-center space-x-4">
    <Image src={src} alt={alt} width={64} height={64} /> {/* Set width and height for Image */}
    <span className="text-white text-lg font-medium">{label}</span>
  </div>
);

export default MarqueeSec;
