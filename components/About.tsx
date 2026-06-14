"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Industry Domains", value: 3, suffix: "" },
  { label: "Companies", value: 4, suffix: "" },
  { label: "Asset Classes", value: 0, suffix: "", custom: "Multiple" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, value, count, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-navy via-brown/10 to-navy overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl italic font-medium text-offwhite leading-snug max-w-4xl"
        >
          &ldquo;Product leader with 10+ years building 0-to-1 financial
          products across <span className="text-warm-brown">fintech</span>,{" "}
          <span className="text-warm-brown">institutional trading</span>, and{" "}
          <span className="text-warm-brown">risk infrastructure</span>.&rdquo;
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-start">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-muted leading-relaxed"
          >
            I&apos;m a product manager who thrives at the intersection of
            finance and technology &mdash; designing credit platforms,
            institutional trading systems, and risk infrastructure that
            scale. From building lending engines for crypto exchanges to
            modelling exotic fixed income portfolios, I bring a rare blend
            of deep domain expertise and product execution. I care about
            building systems that are robust, intuitive, and that earn the
            trust of the institutions that rely on them.
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-warm-brown/40 pl-4"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white">
                  {stat.custom ?? <Counter value={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="text-sm text-muted mt-2 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
