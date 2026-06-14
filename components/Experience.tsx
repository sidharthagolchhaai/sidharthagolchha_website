"use client";

import { motion } from "framer-motion";
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
  bullets: string[];
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
      "Leading Risk, Credit, and DMA at FalconX — scaling institutional-grade systems across credit exposure and off-exchange assets, balancing growth, governance, and operational excellence.",
    bullets: [
      "Led the build and scale of FalconX's institutional Crypto Credit product from 0-1 across multiple loan types and a growing base of institutional counterparties, enabling leveraged trading for clients.",
      "Designed and launched the Auto-Liquidation Engine, significantly reducing manual interventions, and built a unified portfolio margin framework across OTC and exchange accounts to cut credit discrepancies.",
      "Owned and scaled the Direct Market Access (DMA) platform across Binance, OKX, Bybit, Deribit and Coinbase, restoring healthy trading performance while driving strong client adoption growth.",
      "Led Off-Exchange Settlement (OXS) integrations with Ceffu and Copper, migrating institutional assets off-exchange, and initiated Hyperliquid (DeFi) and CME expansion to broaden venue access.",
      "Led end-to-end design of the FalconX360 platform — intuitive dashboards across Credit, Risk, DMA and OXS — improving self-serve controls and reducing client onboarding time.",
      "Drove GTM strategy and pre-sales through extensive client demos across DMA, Credit and OXS, contributing to higher client onboarding, while leveraging AI tools to accelerate execution.",
    ],
    highlights: [
      ["Credit Platform", "Loan Management System", "Counterparty Onboarding"],
      ["Auto-Liquidation Engine", "Portfolio Margining", "Risk Hub"],
      ["Direct Market Access", "Binance", "OKX", "Bybit", "Deribit", "Coinbase"],
      ["Off-Exchange Settlement", "Ceffu", "Copper", "Hyperliquid", "CME"],
      ["FalconX360 UI/UX", "GTM & Pre-Sales", "AI-Driven Workflows"],
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
    bullets: [
      "Led development and launch of the InvestorAI Crypto app, enabling automated trading on major exchanges like Binance and OKX — defining user journeys and product specs end-to-end.",
      "Spearheaded development and validation of quantitative models for equities and crypto trading strategies, partnering with data scientists to optimize algorithm performance.",
      "Coordinated relationships with B2B fintech clients through demos, webinars and training, integrating feedback into iterations to improve adoption and satisfaction.",
      "Streamlined data pipeline processes from multiple market data vendors and conducted UAT to ensure accuracy and high-quality releases.",
    ],
    highlights: [
      ["InvestorAI Crypto App", "Automated Trading", "Binance", "OKX"],
      ["Quant Trading Models", "Algo Trading", "Real-Time Analytics"],
      ["B2B Fintech", "Client Enablement", "Data Pipelines & UAT"],
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
    bullets: [
      "Liaised with traders, brokers, back-office and technology teams to ensure timely settlements, confirmations and smooth end-to-end processing.",
      "Gained exposure across exotic FX options, forward contracts and IRS, setting up products from Bloomberg and Reuters and managing fund reference data.",
      "Built loan portfolio modelling capability on the Arcesium platform, ensuring correct modelling of fixed income securities, repos, mortgage pools, currency forwards and exotic derivatives.",
      "Automated several manual processes using Python and Excel VBA, reducing turnaround time and errors.",
    ],
    highlights: [
      ["Fixed Income", "Exotic FX Options", "IRS", "Repos & Mortgage Pools"],
      ["Loan Portfolio Modelling", "Python & VBA Automation"],
      ["Bloomberg", "Reuters", "Reference Data"],
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
    bullets: [
      "Contributed to Portfolio Management solutions providing production support to one of the largest financial services companies in the UK.",
      "Analyzed business requirements and developed a web-enabled platform for loan underwriting and portfolio management.",
      "Worked within a delivery team analyzing performing and non-performing loan portfolios backed by residential mortgages, commercial real estate, corporate, SME and consumer loans.",
      "Led a portion of the offshore team as liaison to the onshore product team, handling L2/L3 support, maintenance and root-cause analysis.",
    ],
    highlights: [
      ["Portfolio Management", "Loan Underwriting", "Web Platform"],
      ["Mortgages", "Commercial Real Estate", "SME & Consumer Loans"],
      ["UK Financial Services", "L2/L3 Support", "Offshore-Onshore Liaison"],
    ],
  },
];

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 md:p-10 overflow-hidden group hover:border-warm-brown/40 transition-colors duration-500"
    >
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
        style={{ background: job.accent }}
      />

      <div className="relative z-10">
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
        <p className="mt-4 text-sm md:text-base text-offwhite/70 leading-relaxed max-w-3xl">
          {job.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 grid md:grid-cols-2 gap-x-8 gap-y-6">
        <ul className="flex flex-col gap-2.5">
          {job.bullets.map((b, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: bi * 0.05 }}
              className="flex gap-3 text-sm text-offwhite/70 leading-relaxed"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: job.accent }}
              />
              <span>{b}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 content-start md:pt-1">
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
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative bg-navy py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading />
        <div className="flex flex-col gap-6 md:gap-8 mt-12">
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
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
