import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projecten, schetsontwerpen, PROJECTEN_DIR, SCHETSONTWERPEN_DIR } from "@/data/projects";

// Deterministic shuffle (fixed seed) so the order stays the same on every visit.
function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let s = seed;
  const random = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const projectenItems = projecten.map((p) => ({ ...p, dir: PROJECTEN_DIR }));
const schetsontwerpenItems = schetsontwerpen.map((p) => ({ ...p, dir: SCHETSONTWERPEN_DIR }));

// First 3 tiles: fixed at 2 projecten + 1 schetsontwerp. The rest is shuffled (but fixed) below.
const firstThree = [projectenItems[0], schetsontwerpenItems[0], projectenItems[1]];
const rest = seededShuffle([...projectenItems.slice(2), ...schetsontwerpenItems.slice(1)], 42);

const items = [...firstThree, ...rest];

const Projecten = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-28">
      <Seo
        title="Projecten — Realisaties van Studio Rabot in Gent en omgeving"
        description="Bekijk een overzicht van interieur- en renovatieprojecten van Studio Rabot: van hoeverenovaties tot keukens, badkamers en totaalrenovaties."
        path="/projecten"
      />
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
              Een overzicht van projecten en schetsontwerpen, telkens een dialoog tussen plaats, materiaal en bewoner.
            </p>
          </Reveal>
        </div>
      </div>

      <ProjectGrid items={items} />
    </section>
  );
};

export default Projecten;
