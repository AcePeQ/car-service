export function FadeIn(direction, delay, value, duration, type, ease) {
  return {
    hidden: {
      y: direction === "up" ? value : direction === "down" ? value : 0,
      x: direction === "left" ? value : direction === "right" ? value : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        type: type,
        ease: ease,
        delay: delay,
      },
    },
  };
}
