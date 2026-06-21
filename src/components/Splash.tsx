import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Splash = () => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#F7F4EF" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <p className="display-serif text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-5">
              Interieurarchitectuur
            </p>
            <h1 className="display-serif text-3xl md:text-5xl tracking-[-0.01em] text-foreground">
              Studio <span className="italic text-accent">Rabot</span>
            </h1>
          </motion.div>

          <div className="mt-12 w-[180px] md:w-[220px] h-px bg-foreground/15 overflow-hidden">
            <div
              className="h-full bg-foreground origin-left"
              style={{ width: `${progress * 100}%`, transition: "width 80ms linear" }}
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            {Math.round(progress * 100).toString().padStart(2, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
