"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy, near-instant follow for the dot
  const dotSpring = { damping: 40, stiffness: 1000, mass: 0.15 };
  const dotXSpring = useSpring(cursorX, dotSpring);
  const dotYSpring = useSpring(cursorY, dotSpring);

  // Slightly looser ring, but still fast
  const ringSpring = { damping: 35, stiffness: 600, mass: 0.25 };
  const ringXSpring = useSpring(cursorX, ringSpring);
  const ringYSpring = useSpring(cursorY, ringSpring);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setHidden(false);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-hover], input, textarea"
      );
      setIsPointer(!!interactive);
    };

    const handleLeave = () => setHidden(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[100] border border-warm-brown/50"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          opacity: isPointer ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Main dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[100] bg-warm-brown mix-blend-difference"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 10 : 7,
          height: isPointer ? 10 : 7,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
