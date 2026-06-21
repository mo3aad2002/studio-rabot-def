import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogPortal } from "@/components/ui/dialog";
import { ProjectEntry, projectImageUrl } from "@/data/projects";

interface ProjectLightboxProps {
  project: ProjectEntry;
  dir: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export const ProjectLightbox = ({ project, dir, index, onIndexChange, onClose }: ProjectLightboxProps) => {
  const total = project.images.length;
  const showNav = total > 1;
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const currentSrc = projectImageUrl(dir, project.folder, project.images[index]);
  const isLoaded = !!loaded[index];

  const goPrev = () => onIndexChange((index - 1 + total) % total);
  const goNext = () => onIndexChange((index + 1) % total);

  // Preload current, next, prev
  useEffect(() => {
    const toPreload = [index, (index + 1) % total, (index - 1 + total) % total];
    toPreload.forEach((i) => {
      if (loaded[i]) return;
      const img = new Image();
      img.src = projectImageUrl(dir, project.folder, project.images[i]);
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
    });
  }, [index, total, dir, project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, total]);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex flex-col p-5 md:p-8 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <DialogPrimitive.Title className="display-serif text-background text-xl md:text-2xl leading-tight">
                {project.title}
              </DialogPrimitive.Title>
              {project.credit && (
                <p className="label-eyebrow text-background/60 mt-1">i.s.m. {project.credit}</p>
              )}
            </div>
            <DialogPrimitive.Close
              aria-label="Sluiten"
              className="text-background/70 hover:text-background transition-colors shrink-0"
            >
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center min-h-0 mt-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <AnimatePresence mode="wait">
              {isLoaded ? (
                <motion.img
                  key={`img-${index}`}
                  src={currentSrc}
                  alt={`${project.title} ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <motion.div
                  key={`loader-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-10 w-10 rounded-full border-2 border-background/30 border-t-background/80 animate-spin"
                />
              )}
            </AnimatePresence>

            {showNav && (
              <>
                <button
                  type="button"
                  aria-label="Vorige"
                  onClick={goPrev}
                  className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 p-3 text-background/70 hover:text-background transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  aria-label="Volgende"
                  onClick={goNext}
                  className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 p-3 text-background/70 hover:text-background transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>

          <div className="text-center mt-4">
            <span className="label-eyebrow text-background/70">
              {index + 1} / {total}
            </span>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};
