"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  techIcons: { name: string; src: string }[];
  video?: string;
};

const MOBILE_BREAKPOINT = 768;

const Projects = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // prevent hydration mismatch: wait until we know isMobile
  if (isMobile === null) return null;

  const projects: Project[] = [
    {
      id: "digital-ai-consultant",
      title: "Digital AI Process Consultant",
      description: "Integrate advanced agentic and generative AI solutions",
      image: "/LogoLargeSpace.png",
      url: "https://programmatic.it.com//",
      techIcons: [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
        { name: "Stripe", src: "/stripe.png" },
      ],
      video: undefined,
    },
    {
      id: "mobile-detailing",
      title: "Mobile Detailing Business",
      description: "Complete gallery and booking experience",
      image: "https://imperialmobilegallery.b-cdn.net/HeroPageFR.jpg",
      url: "https://www.imperialmobile.org/",
      techIcons: [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
      ],
      video: undefined,
    },
    {
      id: "clothing-store",
      title: "Clothing Store",
      description: "Complete gallery and booking experience",
      image: "https://ImperialMobileGallery.b-cdn.net/IMG_2208%202.jpg",
      url: "https://www.vetteclothing.com/",
      techIcons: [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
      ],
      video: undefined,
    },
    {
      id: "gumroad",
      title: "Gumroad Store",
      description: "Digital products marketplace",
      image: "/Gumroad.png",
      url: "https://programmatic.gumroad.com/",
      techIcons: [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
      ],
      video: undefined,
    },
    {
      id: "whop",
      title: "Whop Marketplace",
      description: "Digital products and services platform",
      image: "/Whop3.png",
      url: "https://whop.com/programmatic-078f/",
      techIcons: [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
      ],
      video: undefined,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.2,
        duration: isMobile ? 0.3 : 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: isMobile ? 8 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.25 : 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const hasBlackText = (title: string) =>
    title === "Digital AI Process Consultant" ||
    title === "Clothing Store" ||
    title === "Whop Marketplace";

  return (
    <div className="bg-black text-white py-10 md:py-20 px-4 md:px-6">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h1>

        <div className="space-y-10 md:space-y-20 lg:space-y-24">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              className="relative"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: isMobile ? "-40px 0px" : "-100px 0px",
              }}
              variants={containerVariants}
            >
              {/* Mobile Title */}
              {isMobile && (
                <motion.div
                  className="mb-3 text-center px-1"
                  variants={itemVariants}
                >
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    {project.title}
                  </p>
                  <p className="text-sm sm:text-base mt-1 text-gray-300">
                    {project.description}
                  </p>
                </motion.div>
              )}

              <motion.div
                className={`group relative overflow-hidden rounded-lg w-full ${
                  isMobile ? "px-0" : ""
                }`}
                variants={itemVariants}
              >
                <div
                  className="relative w-full h-full rounded-lg overflow-hidden"
                  style={{
                    aspectRatio: isMobile ? "16 / 9" : "5 / 3",
                    boxShadow: isMobile
                      ? "none"
                      : "inset 0 0 80px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`object-cover object-center w-full h-full rounded-lg ${
                        isMobile
                          ? "brightness-100"
                          : "brightness-100 hover:brightness-75 transition-all duration-500 ease-out group-hover:scale-110"
                      }`}
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={
                        project.title ||
                        project.description ||
                        `Project ${projectIndex + 1}`
                      }
                      fill
                      priority={projectIndex < 2}
                      sizes={
                        isMobile ? "100vw" : "(max-width: 768px) 100vw, 800px"
                      }
                      className={`object-cover object-center rounded-lg ${
                        isMobile
                          ? "brightness-100"
                          : "brightness-100 hover:brightness-75 transition-all duration-500 ease-out group-hover:scale-110"
                      }`}
                      unoptimized={project.image.startsWith("http")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
                      <p className="text-gray-400 text-sm">
                        Image coming soon
                      </p>
                    </div>
                  )}

                  {isMobile && (
                    <div className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none" />
                  )}
                </div>

                {/* Desktop title overlay – unchanged */}
                {!isMobile && (
                  <motion.div
                    className="absolute top-6 left-6 transition-all duration-300 group-hover:translate-y-4"
                    variants={itemVariants}
                  >
                    <p
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold group-hover:text-5xl lg:group-hover:text-6xl transition-all duration-300 ${
                        hasBlackText(project.title) ? "text-black" : ""
                      }`}
                    >
                      {project.title}
                    </p>
                    <p
                      className={`text-xl md:text-2xl mt-1 group-hover:text-2xl md:group-hover:text-3xl transition-all duration-300 ${
                        hasBlackText(project.title)
                          ? "text-black"
                          : "text-gray-300"
                      }`}
                    >
                      {project.description}
                    </p>
                  </motion.div>
                )}

                {/* Mobile controls */}
                {isMobile ? (
                  <motion.div
                    className="mt-3 flex items-center justify-between gap-3 px-0"
                    variants={itemVariants}
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full bg-white text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 touch-manipulation">
                        Learn More <span className="text-base">→</span>
                      </button>
                    </Link>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.techIcons.slice(0, 3).map((icon) => (
                        <Image
                          key={icon.name}
                          src={icon.src}
                          alt={icon.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                          title={icon.name}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Desktop button & icons – unchanged */}
                    <motion.div
                      className="absolute bottom-8 sm:bottom-6 left-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
                      variants={itemVariants}
                    >
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-[#181414] px-4 py-2 md:px-6 md:py-3 text-base md:text-xl rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                          Learn More{" "}
                          <span className="text-lg md:text-2xl transition-all duration-300">
                            →
                          </span>
                        </button>
                      </Link>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-8 sm:bottom-6 right-6 flex gap-3 md:gap-4 transition-all duration-300"
                      variants={itemVariants}
                    >
                      {project.techIcons.map((icon, index) => (
                        <motion.div
                          key={icon.name}
                          className="transition-all duration-500 ease-out transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                          style={{ transitionDelay: `${index * 100}ms` }}
                          variants={itemVariants}
                        >
                          <Image
                            src={icon.src}
                            alt={icon.name}
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform"
                            title={icon.name}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}

                {/* Desktop animated line – unchanged */}
                {!isMobile && (project.image || project.video) && (
                  <motion.span
                    className="absolute h-1 bg-white left-1/2 transform -translate-x-1/2"
                    style={{ bottom: "-12px" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
              </motion.div>

              {!isMobile && (project.image || project.video) && (
                <motion.span
                  className="absolute h-1 bg-white left-1/2 transform -translate-x-1/2"
                  style={{ bottom: "-12px" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
