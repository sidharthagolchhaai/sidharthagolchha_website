"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Job {
  company: string;
  website: string;
  logo: string;
  period: string;
  role: string;
  location: string;
  accent: string;
  description: string;
  highlights: string[][];
}

const jobs: Job[] = [
  {
    company: "FalconX",
    website: "https://falconx.io",
    logo: "/images/thefalconx_logo.jpeg",
    period: "Mar 2023 – Present",
    role: "Senior Product Manager",
    location: "Bengaluru",
    accent: "#A0522D",
    description:
      "Leading the credit and risk product suite for institutional crypto lending — from loan origination and management to real-time liquidation and counterparty risk controls across major exchanges and custodians.",
    highlights: [
      ["Credit Platform", "Institutional Crypto Lending", "Loan Management System"],
      ["Auto-Liquidation Engine", "Counterparty Risk Mitigation"],
      ["Direct Market Access", "Binance", "OKX", "Bybit", "Deribit", "Coinbase"],
      ["Off-Exchange Settlement", "Ceffu", "Copper", "Hyperliquid", "CME"],
      ["FalconX360 UI/UX", "Portfolio Margining", "Risk Hub", "Real-Time Monitoring"],
    ],
  },
  {
    company: "Bridgeweave",
    website: "https://www.bridgeweave.com",
    logo: "/images/bridgeweave_logo.jpeg",
    period: "Oct 2021 – Mar 2023",
    role: "Product Manager",
    location: "Bengaluru",
    accent: "#5C3D2E",
    description:
      "Owned product for InvestorAI, a B2B crypto investing app powered by quantitative trading models — partnering with algo trading teams and enterprise clients to ship and scale the platform.",
    highlights: [
      ["InvestorAI Crypto App", "Quantitative Trading Models"],
      ["Algo Trading", "B2B Fintech", "Client Enablement"],
    ],
  },
  {
    company: "Arcesium (DE Shaw Group)",
    website: "https://www.arcesium.com",
    logo: "/images/arcesium_logo.jpeg",
    period: "May 2019 – Oct 2021",
    role: "Senior Product Analyst",
    location: "Hyderabad",
    accent: "#A0522D",
    description:
      "Worked on fixed income and exotic FX/IRS portfolio infrastructure — building loan portfolio models and automating analyst workflows with Python and VBA against Bloomberg and Reuters data feeds.",
    highlights: [
      ["Fixed Income", "Exotic FX Options", "IRS"],
      ["Loan Portfolio Modelling", "Python & VBA Automation"],
      ["Bloomberg", "Reuters"],
    ],
  },
  {
    company: "Tata Consultancy Services",
    website: "https://www.tcs.com",
    logo: "/images/tata_consultancy_services_logo.jpeg",
    period: "Jul 2014 – May 2017",
    role: "System Engineer",
    location: "Pune",
    accent: "#5C3D2E",
    description:
      "Supported portfolio management and loan underwriting systems for a UK financial services client, providing L2/L3 production support and acting as the offshore-onshore liaison for delivery teams.",
    highlights: [
      ["Portfolio Management", "Loan Underwriting"],
      ["UK Financial Services", "L2/L3 Support", "Offshore-Onshore Liaison"],
    ],
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <div className="relative w-full md:w-[60vw] lg:w-[45vw] flex-shrink-0 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="md:h-[65vh] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10 flex flex-col overflow-hidden relative group hover:border-warm-brown/40 transition-colors duration-500"
      >
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          style={{ background: job.accent }}
        />

        <div className="relative z-10 flex-shrink-0">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-4 group/logo"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white group-hover/logo:text-warm-brown transition-colors">
                {job.company}
              </h3>
            </a>
            <span className="text-xs md:text-sm uppercase tracking-widest text-muted">
              {job.period}
            </span>
          </div>
          <p className="mt-3 text-lg text-warm-brown font-semibold">
            {job.role}
          </p>
          <p className="text-sm text-muted mt-1">{job.location}</p>
          <p className="mt-4 text-sm md:text-base text-offwhite/70 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div className="relative z-10 mt-6 flex flex-col gap-3 md:overflow-y-auto pr-1 md:flex-1 content-start">
          {job.highlights.map((group, gi) => (
            <div key={gi} className="flex flex-wrap gap-2">
              {group.map((tag, ti) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 + ti * 0.03 }}
                  className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border border-white/10 text-offwhite/80 bg-white/[0.02] hover:border-warm-brown/50 hover:text-warm-brown transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // total scrollable width relative to viewport, roughly jobs.length * cardWidth
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);

  return (
    <section id="experience" className="relative bg-navy">
      {/* Mobile: vertical stack */}
      <div className="md:hidden py-24 px-4 flex flex-col gap-8">
        <SectionHeading />
        {jobs.map((job) => (
          <div key={job.company} className="w-full">
            <JobCard job={job} />
          </div>
        ))}
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div ref={containerRef} className="hidden md:block relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          <div className="pt-28 pb-6 flex-shrink-0">
            <SectionHeading />
          </div>
          <motion.div style={{ x }} className="flex gap-0 flex-1 items-center pb-12">
            {jobs.map((job) => (
              <JobCard key={job.company} job={job} />
            ))}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="px-6 md:px-12 mb-4 md:mb-0"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-warm-brown mb-3">
        Career Journey
      </p>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.15] pb-1">
        Experience
      </h2>
    </motion.div>
  );
}
