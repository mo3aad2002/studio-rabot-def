import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { ProjectEntry, projectImageUrl } from "@/data/projects";

export type ProjectGridItem = ProjectEntry & { dir: string };

export const ProjectGrid = ({ items }: { items: ProjectGridItem[] }) => {
  const [lightbox, setLightbox] = useState<{ item: ProjectGridItem; index: number } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
        {items.map((p, i) => (
          <Reveal
            key={`${p.dir}-${p.folder}`}
            delay={(i % 3) * 0.08}
            className={i % 3 === 1 ? "lg:mt-16" : ""}
          >
            <figure className="group cursor-pointer" onClick={() => setLightbox({ item: p, index: 0 })}>
              <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src={projectImageUrl(p.dir, p.folder, p.images[0])}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-all duration-700 flex items-end p-5 md:p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700">
                    <p className="label-eyebrow text-background/70 mb-2">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="display-serif text-background text-xl md:text-2xl leading-tight">
                      {p.title}
                    </h3>
                    {p.credit && (
                      <p className="label-eyebrow text-background/70 mt-2">i.s.m. {p.credit}</p>
                    )}
                  </div>
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <ProjectLightbox
          project={lightbox.item}
          dir={lightbox.item.dir}
          index={lightbox.index}
          onIndexChange={(index) => setLightbox((current) => current && { ...current, index })}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};
