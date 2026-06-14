"use client";

import { motion } from "framer-motion";
import {
  Compass,
  LineChart,
  Wrench,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Core",
    icon: Compass,
    span: "md:col-span-2 md:row-span-2",
    items: [
      "Product Strategy",
      "GTM",
      "Stakeholder Management",
      "PRDs/BRDs",
      "Agile/Scrum",
    ],
  },
  {
    title: "Asset Classes",
    icon: LineChart,
    span: "md:col-span-2",
    items: ["Crypto", "Equities", "Fixed Income", "OTC", "Exchange-Traded Derivatives"],
  },
  {
    title: "Tools",
    icon: Wrench,
    span: "md:col-span-2",
    items: ["SQL", "JIRA", "Confluence", "Figma", "FullStory", "Clevertap", "Sigma", "Clickup", "Excel VBA"],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    span: "md:col-span-2",
    items: ["Claude Code", "Databricks Genie", "Google AI Studio", "Gemini"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 bg-navy">
      <div className="max-w-6xl mx-auto">
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
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`${cat.span} rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-5 transition-all duration-300 hover:border-warm-brown/40 hover:shadow-[0_20px_60px_-15px_rgba(160,82,45,0.4)]`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-warm-brown/15 flex items-center justify-center text-warm-brown">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border border-white/10 text-offwhite/80 bg-white/[0.02]"
                    >
                      {item}
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
