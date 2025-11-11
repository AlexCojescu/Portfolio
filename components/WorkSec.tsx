import React from 'react';
import { FaGithub } from "react-icons/fa"; // FaGlobe removed
import { PiCopyBold } from "react-icons/pi";
import { HiAcademicCap, HiOutlineLightBulb, HiOutlineUserGroup } from "react-icons/hi2";
import Image from "next/image"; // Next.js Image import

const projects = [
  {
    title: "Time Series Optimization Engine",
    desc: "Custom high-performance time series analytics and forecasting with Python, offering sub-second predictions on market or ops data.",
    icons: [
      { Icon: HiOutlineLightBulb, label: "Innovation" }
    ]
  },
  {
    title: "Python Realistic Deepfake",
    desc: "Advanced deepfake generator with custom GANs and image-to-image translation for authentic, flexible video synthesis.",
    icons: [
      { Icon: FaGithub, label: "Code" }
    ]
  },
  {
    title: "F1 Prediction Model",
    desc: "ML-driven predictive engine for F1 races, using ensemble learning and timeseries analysis. Monaco GP 2025: within 5% accuracy.",
    icons: [
      { Icon: HiAcademicCap, label: "Research" }
    ]
  },
  {
    title: "Cultural & Language Tutor Chatbot",
    desc: "GPT-4.0-powered multilingual chatbot for language learning. NLU, reinforcement learning, and multimodal input; 60% error reduction.",
    icons: [
      { Icon: HiOutlineUserGroup, label: "Team" }
    ]
  },
  {
    title: "Image Upscaling using ESRGAN",
    desc: "Super-res GAN for ultra-high-fidelity image restoration. Achieved clear medical imaging results with robust benchmarking.",
    icons: [
      { Icon: HiAcademicCap, label: "Research" }
    ]
  },
  {
    title: "Automated Business Intelligence Pipeline",
    desc: "Automated workflow for business prospecting—web scraping, data enrichment, CRM sync, and personalized analytics-ready datasets.",
    icons: [
      { Icon: PiCopyBold, label: "Pipeline" }
    ]
  }
];

// Placeholder images (ensure these exist in /public)
const projectImages = [
  "/TimeOptimization.png",
  "/DeepFake.png",
  "/F1ML.png",
  "/ChatbotChallenges.jpg",
  "/ImageUpscale.jpg",
  "/LeadGenWorkflow.png"
];

export default function ProjectCards() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-8 md:px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            className="flex flex-col items-start bg-neutral-800 rounded-3xl w-full p-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]"
          >
            <div className="w-full h-40 bg-gradient-to-t from-neutral-800 via-neutral-700 to-neutral-600 rounded-xl mb-4 flex items-end justify-center relative overflow-hidden">
              <Image
                src={projectImages[idx]}
                alt={proj.title}
                fill
                className="object-cover w-full h-full rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={idx < 2}
                unoptimized={false} // Set true for external images or if outside /public
              />
            </div>
            <h2 className="font-semibold text-2xl mb-3 text-white">{proj.title}</h2>
            <p className="text-gray-200 mb-4">{proj.desc}</p>
            <div className="flex gap-4">
              {proj.icons.map(({ Icon, label }) => (
                <Icon
                  key={label}
                  title={label}
                  className="w-7 h-7 text-white hover:text-indigo-400 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
