"use client";

import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  LineChart,
  Database,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Product Strategy & GTM",
    icon: Compass,
    description:
      "0-to-1 product builds, roadmapping, PRDs/BRDs and GTM strategy — turning ambiguous problems into shipped, revenue-generating platforms.",
    tags: ["Product Strategy", "PRDs/BRDs", "Agile (Scrum)", "GTM"],
  },
  {
    title: "Risk & Credit Infrastructure",
    icon: ShieldCheck,
    description:
      "Designing credit platforms, auto-liquidation engines and portfolio margin frameworks that govern multibillion-dollar institutional exposure.",
    tags: ["Credit Risk", "Portfolio Margining", "Liquidation Engines", "Governance"],
  },
  {
    title: "Crypto & Institutional Trading",
    icon: LineChart,
    description:
      "Direct Market Access, off-exchange settlement and trading infrastructure across Spot, Futures, Perpetuals and Options on major venues.",
    tags: ["DMA", "Binance", "OKX", "Deribit", "OXS", "Hyperliquid"],
  },
  {
    title: "Data, Tools & Analytics",
    icon: Database,
    description:
      "From SQL and dashboarding to client analytics — building the data backbone that powers risk monitoring and product decisions.",
    tags: ["SQL", "Sigma", "FullStory", "Clevertap", "Excel VBA"],
  },
  {
    title: "AI-Augmented PM",
    icon: Sparkles,
    description:
      "Embedding AI into the product workflow — from requirements and documentation to data analysis and faster decision-making.",
    tags: ["Claude Code", "Databricks Genie", "Gemini", "AI Studio"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 bg-navy overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#A0522D" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-warm-brown mb-3">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Where I Operate
          </h2>
          <p className="mt-4 text-offwhite/60 max-w-2xl">
            A blend of product craft and deep domain fluency across fintech,
            crypto and institutional risk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`${
                  i === 0 ? "lg:col-span-2" : ""
                } group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:border-warm-brown/40 hover:shadow-[0_20px_60px_-15px_rgba(160,82,45,0.4)]`}
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: "#A0522D" }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warm-brown/15 flex items-center justify-center text-warm-brown flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                </div>

                <p className="relative z-10 text-sm md:text-base text-offwhite/65 leading-relaxed">
                  {skill.description}
                </p>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-offwhite/80 bg-white/[0.02] group-hover:border-warm-brown/40 group-hover:text-warm-brown transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
