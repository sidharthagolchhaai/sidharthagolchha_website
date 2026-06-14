"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const education = [
  {
    logo: "/images/imtghaziabad_logo.jpeg",
    title: "MBA, Finance",
    place: "IMT Ghaziabad",
    period: "2017 – 2019",
  },
  {
    logo: "/images/nitdurgapur_logo.jpeg",
    title: "B.Tech",
    place: "NIT Durgapur",
    period: "2010 – 2014",
  },
  {
    logo: "/images/cfaprogram_logo.jpeg",
    title: "CFA Level 2",
    place: "Completed",
    period: "",
  },
];

export default function Education() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-navy via-brown/10 to-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-warm-brown mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 overflow-hidden group"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-warm-brown to-transparent origin-left"
              />
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden mb-6">
                <Image
                  src={item.logo}
                  alt={`${item.place} logo`}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-muted mt-2">{item.place}</p>
              {item.period && (
                <p className="text-sm text-warm-brown mt-3 uppercase tracking-wide">
                  {item.period}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
