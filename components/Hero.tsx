"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const roles = [
  "Senior Product Manager",
  "Fintech Builder",
  "Risk & Credit Expert",
  "Institutional Trading",
];

const NAME_LINE_1 = "SIDHARTHA";
const NAME_LINE_2 = "GOLCHHA";

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? 40 : 70
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-warm-brown">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-warm-brown ml-1 align-middle"
      />
    </span>
  );
}

function MagneticButton({
  children,
  className,
  href,
  download,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const nameContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const letter = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="order-2 md:order-1">
          <motion.div
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            className="font-extrabold leading-[0.95] tracking-tight"
          >
            <div className="overflow-hidden flex">
              {NAME_LINE_1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block text-[14vw] md:text-[6.5vw] lg:text-[5.5rem] text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden flex">
              {NAME_LINE_2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block text-[14vw] md:text-[6.5vw] lg:text-[5.5rem] text-gradient"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl font-medium text-offwhite/80 h-8"
          >
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#experience"
              className="px-8 py-4 rounded-full bg-warm-brown text-white font-semibold text-sm tracking-wide hover:bg-brown transition-colors inline-block"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="/resume/Sidhartha_Golchha_Resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-offwhite/30 text-offwhite font-semibold text-sm tracking-wide hover:border-warm-brown hover:text-warm-brown transition-colors inline-block"
            >
              Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative group w-[260px] h-[340px] md:w-[340px] md:h-[440px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-warm-brown/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div
              className="relative w-full h-full overflow-hidden border border-warm-brown/30 transition-all duration-700 group-hover:border-warm-brown/60"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
            >
              <Image
                src="/images/sidhartha.jpg"
                alt="Sidhartha Golchha"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-warm-brown to-transparent"
        />
      </motion.div>
    </section>
  );
}
