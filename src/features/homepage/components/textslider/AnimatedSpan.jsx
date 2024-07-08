import { motion } from "framer-motion";

export default function AnimatedSpan({
  children,
  windowWidth,
  duration,
  repeatDelay,
  delay = 0,
  keyNumber,
}) {
  return (
    <motion.span
      key={windowWidth + keyNumber}
      initial={{ x: `-${windowWidth}px` }}
      animate={{ x: `${windowWidth}px` }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: repeatDelay,
        delay: delay,
      }}
    >
      {children}
    </motion.span>
  );
}
