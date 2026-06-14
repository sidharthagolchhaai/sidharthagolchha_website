"use client";

import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  org: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2010 – 14",
    title: "B.Tech",
    org: "NIT Durgapur",
    description: "Laid the engineering foundation for a career across fintech systems.",
  },
  {
    year: "2014 – 17",
    title: "System Engineer",
    org: "Tata Consultancy Services",
    description: "Started in financial services, supporting portfolio management and loan underwriting for a major UK client.",
  },
  {
    year: "2017 – 19",
    title: "MBA, Finance",
    org: "IMT Ghaziabad",
    description: "Sharpened the business and finance lens to bridge product, strategy and capital markets.",
  },
  {
    year: "2019 – 21",
    title: "Sr. Product Analyst",
    org: "Arcesium (DE Shaw Group)",
    description: "Worked across fixed income, exotic FX and IRS — modelling loan portfolios for institutional funds.",
  },
  {
    year: "2021 – 23",
    title: "Product Manager",
    org: "Bridgeweave",
    description: "Shipped InvestorAI, a B2B crypto investing app, and led quant trading models to production.",
  },
  {
    year: "2023 – 26",
    title: "Senior PM",
    org: "FalconX",
    description: "Leading Risk, Credit & DMA — scaling systems behind institutional credit exposure and off-exchange assets.",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-warm-brown mb-3">
            The Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            2010 — 2026
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative overflow-x-auto pb-6 px-6 md:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative flex min-w-max gap-10 md:gap-16 px-2">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[14px] h-px bg-gradient-to-r from-transparent via-warm-brown/60 to-transparent" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative w-[240px] sm:w-[260px] flex-shrink-0 pt-10"
            >
              {/* dot */}
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-warm-brown bg-navy z-10" />

              <span className="text-sm uppercase tracking-widest text-warm-brown font-semibold">
                {m.year}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mt-2">
                {m.title}
              </h3>
              <p className="text-muted text-sm mt-1">{m.org}</p>
              <p className="text-offwhite/60 text-sm mt-3 leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="md:hidden text-center text-xs text-muted mt-4 px-6">
        ← Swipe to explore the timeline →
      </p>
    </section>
  );
}
