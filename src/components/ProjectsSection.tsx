import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProjectGrid } from "@/components/ProjectGrid";
import { cn } from "@/lib/utils";
import { projecten, schetsontwerpen, PROJECTEN_DIR, SCHETSONTWERPEN_DIR } from "@/data/projects";

type Filter = "projecten" | "schetsontwerpen";

const filters: { key: Filter; label: string }[] = [
  { key: "projecten", label: "Projecten" },
  { key: "schetsontwerpen", label: "Schetsontwerpen" },
];

// Featured order for the homepage grid: these 4 lead, the rest follow in their original order.
const FEATURED_TITLES = [
  "Haardmeubel met verwarmde zitbank",
  "Landelijke woning",
  "Leefruimte strak landelijk",
  "Kantoorruimte in bijgebouw",
];

const featuredProjecten = [
  ...FEATURED_TITLES.map((title) => projecten.find((p) => p.title === title)!),
  ...projecten.filter((p) => !FEATURED_TITLES.includes(p.title)),
];

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("projecten");

  const list = filter === "projecten" ? featuredProjecten : schetsontwerpen;
  const dir = filter === "projecten" ? PROJECTEN_DIR : SCHETSONTWERPEN_DIR;
  const items = list.map((p) => ({ ...p, dir }));

  return (
    <section id="realisaties" className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-28 scroll-mt-24">
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-3">
          <Reveal><p className="label-eyebrow">Projecten</p></Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal delay={0.1}>
            <h2 className="display-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              Realisaties.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-muted-foreground leading-[1.7]">
              Een selectie van uitgevoerde projecten, telkens een dialoog tussen plaats, materiaal en bewoner.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.25}>
        <div className="flex items-center gap-8 mb-16 md:mb-24">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "label-eyebrow pb-2 border-b transition-colors",
                filter === f.key
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <ProjectGrid items={items} />
    </section>
  );
};
