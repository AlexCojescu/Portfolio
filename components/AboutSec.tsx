"use client";

import React, { useEffect, useState } from "react";

const AboutSec = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-10 md:mb-14 flex justify-center md:justify-start">
          <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight relative inline-block">
            About Me
            <span
              className={`absolute bottom-0 h-[2px] bg-white/70 -mb-2 transition-all duration-1000 ease-in-out ${
                isLoaded ? "w-full" : "w-0"
              } left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0`}
            ></span>
          </h1>
        </div>

        <div className="space-y-8 md:space-y-10 text-sm md:text-base leading-relaxed text-gray-300">
          {/* Block 1 – Origin & Agency */}
          <div
            style={{ transitionDelay: "100ms" }}
            className={`bg-zinc-950/60 p-6 md:p-8 rounded-lg border border-zinc-800 transform transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-4">
              As a beginning freshman student, the idea of carving my own path and making a tangible
              difference quickly became more than a curiosity—it became a mandate. My drive for
              problem‑solving, paired with an early focus on artificial intelligence and automation,
              pushed me beyond “just writing code” into building systems that turn creative ideas into
              reality.
            </p>
            <p>
              At 18, that instinct turned into action when I launched an AI consulting and data systems
              business. What began as an experiment in entrepreneurship evolved into a lab for creative
              problem‑solving and technical growth—where market research, workflow design, and long‑term
              automation strategy all converged. The agency grew into a dependable partner for more than
              ten businesses, but the real value was in the proof that thoughtful engineering can move
              real companies forward.
            </p>
          </div>

          {/* Block 2 – MyProgrammatic & Technical Craft */}
          <div
            style={{ transitionDelay: "200ms" }}
            className={`bg-zinc-950/60 p-6 md:p-8 rounded-lg border border-zinc-800 transform transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-4">
              That early spark matured into MyProgrammatic.com, my AI consulting agency founded during
              college. I treat every client challenge as a design problem: how to turn messy data into
              predictive insight. Projects like my Time Series Optimization Engine and Cultural &amp;
              Language Tutor Chatbot are the result of combining algorithmic thinking, domain research,
              and user empathy into something genuinely new.
            </p>
            <p className="mb-4">
              The chatbot, for example, demanded multimodal thinking—blending NLP, reinforcement
              learning, and pedagogical design into a single product. Work like this taught me that AI
              development is fundamentally creative: you imagine new possibilities, design simple but
              powerful systems, and iterate until the implementation matches the vision.
            </p>
            <p>
              Alongside client work, I build open‑source tools, ship digital teaching products that have
              reached hundreds of learners, and mentor peers through ACM and the Machine Learning Club.
              As I move into upper‑division CS, I bring not just a business story but a creative
              philosophy: that engineering is problem‑solving elevated to art—and I want to keep
              deepening that craft through advanced algorithms, research, and impactful systems.
            </p>
          </div>

          {/* Block 3 – Academics, Foundations & Community */}
          <div
            style={{ transitionDelay: "300ms" }}
            className={`bg-zinc-950/60 p-6 md:p-8 rounded-lg border border-zinc-800 transform transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-4">
              Computer and data science shape how I think about problems, structure projects, and ship
              reliable systems. At UC Merced, I&apos;ve completed core CS and math sequences—including
              Advanced Programming, Discrete Math, Data Structures, calculus, and probability—which have
              strengthened my algorithmic intuition and disciplined debugging habits.
            </p>
            <p className="mb-4">
              To close the gap between coursework and industry, I completed Harvard&apos;s ML &amp; AI
              with Python and Stanford&apos;s Machine Learning Specialization. These programs deepened my
              understanding of supervised and unsupervised learning, neural networks, and model
              validation—concepts I immediately pushed into production‑style projects.
            </p>
            <p className="mb-4">
              As founder of MyProgrammatic and a leader in ACM and the Machine Learning Club, I focus on
              making advanced CS and AI accessible. Through workshops, team projects, and open‑source
              work, I help peers deploy models, review code with intent, and explain their work to
              employers.
            </p>
            <p>
              I pay particular attention to students who feel intimidated or underrepresented in tech.
              In ACM and ML Club, I organize beginner‑friendly sessions and outreach, prioritizing clear
              explanations, patient troubleshooting, and an environment where questions are expected—not
              judged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
