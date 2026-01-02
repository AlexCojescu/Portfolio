"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { PiCopyBold } from "react-icons/pi";
import {
  HiAcademicCap,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Image from "next/image";

const projects = [
  {
    id: "time-series",
    title: "Time Series Optimization Engine",
    desc: "Custom high-performance time series analytics and forecasting with Python, offering sub-second predictions on market or ops data.",
    longDesc:
      "This engine is optimized for streaming workloads, supports pluggable forecasting models (Prophet, ARIMA, deep nets), and integrates with queues and dashboards. It focuses on latency, observability, and flexible feature engineering.",
    metadata: "Python • Time series • Low-latency",
    icons: [{ Icon: HiOutlineLightBulb, label: "Innovation" }],
  },
  {
    id: "deepfake",
    title: "Python Realistic Deepfake",
    desc: "Advanced deepfake generator with custom GANs and image-to-image translation for authentic, flexible video synthesis.",
    longDesc:
      "Built with custom GAN architectures and fine-grained controls for identity, style, and expression. Includes safety tooling, dataset pipelines, and experiment tracking.",
    metadata: "GANs • Computer vision • Safety",
    icons: [{ Icon: FaGithub, label: "Code" }],
  },
  {
    id: "f1-model",
    title: "F1 Prediction Model",
    desc: "ML-driven predictive engine for F1 races, using ensemble learning and timeseries analysis. Monaco GP 2025: within 5% accuracy.",
    longDesc:
      "Combines weather, track history, driver form, and telemetry-derived features. Uses stacked ensembles and calibrated probabilities for win and podium likelihoods.",
    metadata: "ML • Sports analytics • Ensembles",
    icons: [{ Icon: HiAcademicCap, label: "Research" }],
  },
  {
    id: "chatbot",
    title: "Cultural & Language Tutor Chatbot",
    desc: "GPT-4.0-powered multilingual chatbot for language learning. NLU, reinforcement learning, and multimodal input; 60% error reduction.",
    longDesc:
      "Focuses on cultural nuance, idioms, and real-world dialogue. Includes adaptive difficulty, spaced repetition–style loops, and evaluation-driven improvements.",
    metadata: "LLMs • RL • Multilingual",
    icons: [{ Icon: HiOutlineUserGroup, label: "Team" }],
  },
  {
    id: "esrgan",
    title: "Image Upscaling using ESRGAN",
    desc: "Super-res GAN for ultra-high-fidelity image restoration. Achieved clear medical imaging results with robust benchmarking.",
    longDesc:
      "Implements ESRGAN variants tuned for sharp edges and minimal artifacts. Benchmarked with PSNR/SSIM and domain-specific metrics on medical imagery.",
    metadata: "ESRGAN • Super-resolution • Imaging",
    icons: [{ Icon: HiAcademicCap, label: "Research" }],
  },
  {
    id: "bi-pipeline",
    title: "Automated Business Intelligence Pipeline",
    desc: "Automated workflow for business prospecting—web scraping, data enrichment, CRM sync, and personalized analytics-ready datasets.",
    longDesc:
      "End-to-end lead ingestion, enrichment with third‑party APIs, scoring, and scheduled sync into CRM and reporting. Designed for low ops and clear monitoring.",
    metadata: "Automation • Data pipelines • CRM",
    icons: [{ Icon: PiCopyBold, label: "Pipeline" }],
  },
];

const projectImages = [
  "/TimeOptimization.png",
  "/DeepFake.png",
  "/F1ML.png",
  "/ChatbotChallenges.jpg",
  "/ImageUpscale.jpg",
  "/LeadGenWorkflow.png",
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
};

export default function ProjectCards() {
  const [current, setCurrent] = useState<(typeof projects)[number] | null>(
    null
  );

  const ref = useOutsideClick(() => setCurrent(null));

  const getImageFor = (p: (typeof projects)[number]) => {
    const idx = projects.findIndex((x) => x.id === p.id);
    return projectImages[idx] ?? projectImages[0];
  };

  return (
    <section className="relative min-h-screen bg-black py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Blur overlay */}
      <AnimatePresence>
        {current ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-30 bg-black/45 backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>

      {/* Expanded card */}
      <AnimatePresence>
        {current ? (
          <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
            <motion.div
              ref={ref}
              layoutId={`project-card-${current.id}`}
              className="flex max-h-[80vh] w-full max-w-xl flex-col items-start gap-4 overflow-hidden rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black p-4 sm:p-5 shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            >
              <div className="flex w-full items-start gap-3 sm:gap-4">
                <motion.div
                  layoutId={`project-image-${current.id}`}
                  className="relative h-16 w-24 sm:h-20 sm:w-28 overflow-hidden rounded-xl border border-neutral-700/70 bg-neutral-900 shrink-0"
                >
                  <Image
                    src={getImageFor(current)}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </motion.div>

                <div className="flex grow flex-col gap-1">
                  <motion.h3
                    layoutId={`project-title-${current.id}`}
                    className="text-base sm:text-lg font-semibold text-white"
                  >
                    {current.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`project-desc-${current.id}`}
                    className="text-xs sm:text-sm text-neutral-300"
                  >
                    {current.desc}
                  </motion.p>
                  <motion.div
                    layoutId={`project-meta-${current.id}`}
                    className="text-[11px] sm:text-xs text-neutral-500"
                  >
                    {current.metadata}
                  </motion.div>
                </div>

                <button
                  onClick={() => setCurrent(null)}
                  className="ml-1 rounded-full bg-neutral-900/70 px-2 py-1 text-[11px] font-medium text-neutral-300 hover:bg-neutral-800"
                >
                  Close
                </button>
              </div>

              <motion.div
                layout
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(3px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full text-xs sm:text-sm text-neutral-300 pr-1 overflow-y-auto"
              >
                {current.longDesc}
              </motion.div>

              <div className="mt-1 flex w-full flex-col gap-3 border-t border-neutral-800 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {current.icons.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-full bg-neutral-900/70 px-3 py-1 text-[11px] sm:text-xs text-neutral-300"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-neutral-500">
                  Tap outside to close
                </span>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Base content */}
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Selected <span className="text-indigo-400">Projects</span>
            </h2>
            <p className="mt-2 max-w-xl text-xs text-neutral-400 sm:text-sm md:text-base">
              A snapshot of systems, models, and tools built across AI, data, and automation.
            </p>
          </div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500 mt-1 md:mt-0">
            2019 &ndash; 2025
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              layoutId={`project-card-${proj.id}`}
              onClick={() => setCurrent(proj)}
              className="relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-black/80 p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 translate-y-[-40%] rounded-full bg-gradient-to-b from-indigo-500/40 via-purple-500/10 to-transparent opacity-0 blur-3xl" />

              <motion.div
                layoutId={`project-image-${proj.id}`}
                className="relative mb-3 h-36 w-full overflow-hidden rounded-2xl border border-neutral-700/70 bg-neutral-900 sm:h-40"
              >
                <Image
                  src={projectImages[idx]}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={idx < 2}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 mix-blend-multiply" />
              </motion.div>

              <div className="flex flex-1 flex-col">
                <motion.h3
                  layoutId={`project-title-${proj.id}`}
                  className="mb-1 text-base font-semibold text-white sm:text-lg"
                >
                  {proj.title}
                </motion.h3>
                <motion.p
                  layoutId={`project-desc-${proj.id}`}
                  className="mb-3 text-xs leading-relaxed text-neutral-300 sm:text-sm"
                >
                  {proj.desc}
                </motion.p>

                <div className="mt-auto flex items-center justify-between pt-1">
                  <motion.div
                    layoutId={`project-meta-${proj.id}`}
                    className="flex gap-2"
                  >
                    {proj.icons.map(({ Icon, label }) => (
                      <button
                        key={label}
                        type="button"
                        title={label}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-neutral-700/60"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </motion.div>
                  <span className="text-[10px] sm:text-xs text-neutral-500">
                    Tap for details
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
