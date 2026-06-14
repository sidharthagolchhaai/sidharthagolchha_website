"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link2, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "sidhartha.golchha03@gmail.com",
    href: "mailto:sidhartha.golchha03@gmail.com",
  },
  {
    icon: Phone,
    label: "+91-7028631487",
    href: "tel:+917028631487",
  },
  {
    icon: Link2,
    label: "linkedin.com/in/sidharthagolchha",
    href: "https://linkedin.com/in/sidharthagolchha",
  },
  {
    icon: MapPin,
    label: "Bengaluru, India",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-32 overflow-hidden bg-navy"
    >
      {/* Animated gradient blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-brown/30 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-warm-brown/20 blur-[100px] pointer-events-none"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-5xl md:text-8xl font-black text-center text-white tracking-tight leading-none"
      >
        LET&apos;S BUILD
        <br />
        SOMETHING.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-16 flex flex-col items-center gap-6"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const content = (
            <span className="group inline-flex items-center gap-3 text-lg md:text-xl text-offwhite/90 hover:text-warm-brown transition-colors">
              <Icon size={20} className="text-warm-brown" />
              <span className="relative">
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-warm-brown transition-all duration-300 group-hover:w-full" />
              </span>
            </span>
          );

          return link.href ? (
            <a key={link.label} href={link.href} data-cursor-hover target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={link.label}>{content}</div>
          );
        })}
      </motion.div>

      <p className="relative z-10 mt-24 text-xs text-muted/60 tracking-widest uppercase">
        © {new Date().getFullYear()} Sidhartha Golchha
      </p>
    </section>
  );
}
