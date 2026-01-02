"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const License = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="text-center mb-10 md:mb-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block">
        {title}
        <span
          className={`absolute left-0 bottom-0 h-1 bg-white -mb-1 md:-mb-2 transition-all ease-in-out ${
            isLoaded ? 'w-full' : 'w-0'
          }`}
          style={{ transitionDuration: '2000ms' }}
        ></span>
      </h1>
    </div>
  );

  const Card = ({
    imgSrc,
    imgAlt,
    title,
    subtitle,
    org,
    issued,
    linkText,
    linkUrl,
  }: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    org: string;
    issued: string;
    linkText: string;
    linkUrl: string;
  }) => (
    <div className="flex flex-row flex-wrap items-start gap-4 sm:gap-6 md:gap-8 text-left">
      <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0">
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover rounded-none" />
      </div>
      <div className="flex-1 min-w-[200px]">
        <p className="text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
        {subtitle && <p className="text-base sm:text-lg md:text-xl">{subtitle}</p>}
        <p className="text-sm sm:text-base md:text-lg">{org}</p>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          Issued {issued} •{' '}
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            {linkText}
          </a>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 sm:pl-6 pl-10">

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto mb-16 md:mb-24">
        <SectionTitle title="Experience" />
        <div className="space-y-8 md:space-y-10">
          <Card
            imgSrc="/TechLiberate.jpg"
            imgAlt="TechLiberate Logo"
            title="Software Engineer"
            subtitle="Backend Software Implementor"
            org="AI Consultant Firm, TechLiberate.com"
            issued="Nov 2025"
            linkText="alexandru@techliberate.com"
            linkUrl="mailto:alexandru@techliberate.com"
          />
          <Card
            imgSrc="/Certificate1.jpg"
            imgAlt="Stanford Online Certificate"
            title="Machine Learning Specialization"
            subtitle="Machine Learning Specialization"
            org="DeepLearning.AI, Stanford University"
            issued="Jan 2025"
            linkText="View Certificate"
            linkUrl="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
          />
          <Card
            imgSrc="/Icon2.png"
            imgAlt="edX Certificate"
            title="edX Verified Certificate for Machine Learning and AI with Python"
            subtitle="Machine Learning and AI with Python"
            org="edX, Harvard College"
            issued="March 2025"
            linkText="View Certificate"
            linkUrl="https://courses.edx.org/certificates/4d80002fa63d4ae689f90391098faa0a"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-4xl mx-auto mb-16 md:mb-24">
        <SectionTitle title="Courses" />
        <div className="space-y-8 md:space-y-10">
          <Card
            imgSrc="/DLIcon.png"
            imgAlt="DeepLearning AI Course Icon"
            title="Supervised Machine Learning: Regression and Classification"
            subtitle=""
            org="DeepLearning.AI, Stanford University"
            issued="Dec 2024"
            linkText="View Certificate"
            linkUrl="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
          />
          <Card
            imgSrc="/DLIcon.png"
            imgAlt="DeepLearning AI Course Icon"
            title="Advanced Learning Algorithms"
            subtitle=""
            org="DeepLearning.AI, Stanford University"
            issued="Jan 2025"
            linkText="View Certificate"
            linkUrl="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
          />
          <Card
            imgSrc="/DLIcon.png"
            imgAlt="DeepLearning AI Course Icon"
            title="Unsupervised Learning, Recommenders, Reinforcement Learning"
            subtitle=""
            org="DeepLearning.AI, Stanford University"
            issued="Jan 2025"
            linkText="View Certificate"
            linkUrl="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
          />
        </div>
      </section>
    </div>
  );
};

export default License;
