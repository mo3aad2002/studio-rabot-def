import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import portrait from "@/assets/rogier-portrait.jpg";

const office = encodeURI("/SELECTIE PROJECTEN/Studio Rabot interieur/industriële stijl baksteen muren en houten plafonds 1.webp");
const villa = encodeURI("/SELECTIE PROJECTEN/Landelijke woning + vermeld foto's ism Studio Vagant/hoeve renovatie landelijk wonen 1.webp");

const sliderImages = [
  "/SELECTIE PROJECTEN/Badkamer mortex en houten plafond/badkamer mortex en houten plafond 1.1.webp",
  "/SELECTIE PROJECTEN/Bibliotheek in burgerwoning/bibliotheek burgerwoning 1.webp",
  "/SELECTIE PROJECTEN/Haardmeubel met verwarmde zitbank/haard en verwarmd zitmeubel tadelakt 1.webp",
  "/SELECTIE PROJECTEN/Keuken inox - RVS Gent/RVS keuken 1.webp",
  "/SELECTIE PROJECTEN/Poolhouse renovatie/Poolhouse 1.webp",
  "/SELECTIE PROJECTEN/Strak landelijke keuken Gent/landelijke keuken cementtegel 1.webp",
  "/SELECTIE PROJECTEN/Dressing slaapkamer landelijk + vermeld foto's ism Nathalie Vervenne/dressing eiken balk 3.1.webp",
  "/SELECTIE PROJECTEN/Feestzaal Siliginis/feestzaal 1.webp",
].map((p) => encodeURI(p));

const diensten = [
  {
    n: "01",
    t: "Interieurprojecten",
    d: "Van een verfijnd maatwerkmeubel tot een volledige renovatie: Studio Rabot ontwerpt interieurs waarin functionaliteit, esthetiek en karakter samenkomen. Wij begeleiden uiteenlopende projecten, van keukens, badkamers en dressings tot haard- en tv-meubels, bureaus, praktijkruimtes en winkelinrichtingen. Elk ontwerp vertrekt vanuit de architectuur van de ruimte en de manier waarop u leeft, werkt of ontvangt. Ook voor totaalrenovaties bieden wij een doordachte begeleiding. Daarbij besteden we aandacht aan indeling, materiaalgebruik, technieken, isolatie en duurzaamheid, zodat het ontwerp niet alleen mooi oogt, maar ook technisch en praktisch klopt. Door architectuur, interieur en materiaalgebruik als één geheel te benaderen, creëren we tijdloze ruimtes met een sterke identiteit en een vanzelfsprekende rust.",
  },
  {
    n: "02",
    t: "Architectuurprojecten",
    d: "Voor architectuuropdrachten werken wij samen met gespecialiseerde partners om uw project van ontwerp tot omgevingsvergunning professioneel te begeleiden. Wij ondersteunen renovaties, verbouwingen, functiewijzigingen en constructieve aanpassingen zoals uitbreidingen, dakwerken, nieuwe gevelopeningen en het verwijderen van dragende muren. Tijdens het volledige traject adviseren wij over stedenbouwkundige voorschriften, technische vereisten en regelgeving. Onze kracht ligt in het ontwikkelen van een totaalconcept waarin architectuur, interieur en buitenruimte elkaar versterken. Vanuit één duidelijke visie ontstaat een samenhangend project waarin detail, materialiteit en leefkwaliteit centraal staan.",
  },
];

const steps = [
  {
    n: "01",
    t: "Kennismaking",
    d: "Elk project start met een vrijblijvend kennismakingsgesprek. Tijdens deze eerste ontmoeting bespreken we uw wensen, verwachtingen, budget en de mogelijkheden van het project. We luisteren naar uw ideeën en denken mee over de beste aanpak om uw ambities te realiseren.",
  },
  {
    n: "02",
    t: "Ontwerp & Visualisatie",
    d: "Op basis van het gesprek werken we een ontwerpvoorstel uit dat uw visie vertaalt naar een concreet concept. Afhankelijk van het project gebeurt dit aan de hand van plannen, schetsen, referentiebeelden of driedimensionale visualisaties. In deze fase kunnen we ook een eerste indicatieve kostenraming opstellen.",
  },
  {
    n: "03",
    t: "Vergunning & Uitwerking",
    d: "Na goedkeuring van het ontwerp werken we het project verder uit voor de aanvraag van de eventuele omgevingsvergunning en, indien gewenst, voor de uitvoering. We zorgen voor een duidelijke technische uitwerking die als basis dient voor een vlotte realisatie.",
  },
  {
    n: "04",
    t: "Begeleiding & Uitvoering",
    d: "Wij kunnen instaan voor de volledige projectcoördinatie of ondersteuning bieden tijdens specifieke fasen van het bouwproces. Door het overzicht te bewaren over planning, budget en uitvoering ontzorgen we u maximaal en zorgen we voor een kwalitatief eindresultaat.",
  },
  {
    n: "05",
    t: "Erelonen",
    d: "Na het kennismakingsgesprek ontvangt u een duidelijke offerte met een inschatting van onze erelonen. Afhankelijk van de aard en omvang van het project werken we met een vooraf afgesproken totaalprijs of volgens regie op basis van een uurtarief. Transparantie en duidelijke afspraken staan hierbij steeds centraal.",
  },
];

const OverOns = () => {
  const [openStep, setOpenStep] = useState<string | null>(null);
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-28">
      <Seo
        title="Over ons — Rogier Christiaens, Interieurarchitect bij Studio Rabot"
        description="Maak kennis met Studio Rabot en interieurarchitect Rogier Christiaens. Ontdek onze diensten, werkwijze en visie op authentieke renovatie en interieurontwerp in Gent."
        path="/over-ons"
      />
      {/* INTRO — editorial asymmetric */}
      <section className="grid grid-cols-12 gap-6 md:gap-10">
        <aside className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="label-eyebrow">Over ons</p>
          </Reveal>
        </aside>

        <div className="col-span-12 md:col-span-6">
          <Reveal delay={0.1}>
            <h1 className="display-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              Oud en nieuw<br />
              <span className="italic text-accent">in balans.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hairline mt-12 mb-12 max-w-xs" />
            <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.8] text-foreground/85 max-w-xl">
              <p>Studio Rabot is een ontwerpstudio voor architectuur- en interieurprojecten, voor nieuwbouw en renovatie. Elk ontwerp vertrekt vanuit een dialoog met de opdrachtgever en wordt functioneel, esthetisch en persoonlijk uitgewerkt.</p>
              <p>Onze expertise ligt in de authentieke renovatie en restauratie van historische gebouwen, stadswoningen, herenhuizen, hoeves en industriële lofts. Hierbij respecteren we het bestaande patrimonium en versterken het met hedendaagse ingrepen. Nieuwbouwprojecten, van moderne hoeve en pastoriewoning tot landelijke nieuwbouw, ontwerpen we geïnspireerd op tijdloze en ecologische architectuur, met aandacht voor historisch correcte verhoudingen en authentieke materiaalkeuzes.</p>
              <p>Van conceptontwikkeling en schetsontwerp tot vergunningsaanvragen en uitvoeringsdossiers: bij Studio Rabot staan we in voor het volledige ontwerpproces.</p>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-3 md:mt-24">
          <Reveal delay={0.2} y={40}>
            <img
              src={portrait}
              alt="Rogier Christiaens, interieurarchitect Studio Rabot"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="mt-4">
              <p className="display-serif text-lg leading-tight">Rogier Christiaens</p>
              <p className="text-xs text-muted-foreground tracking-wide mt-1">Interieurarchitect</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STUDIO — full bleed image */}
      <section className="mt-32 md:mt-48 grid grid-cols-12 gap-6 md:gap-10 items-center">
        <Reveal className="col-span-12 md:col-span-7" y={40}>
          <img src={office} alt="Studio Rabot, werkruimte met exposed brick" className="w-full aspect-[4/3] object-cover" />
        </Reveal>
        <div className="col-span-12 md:col-span-5 md:pl-6">
          <Reveal>
            <p className="label-eyebrow mb-6">Studio</p>
            <h2 className="display-serif text-3xl md:text-[44px] leading-[1.1] tracking-[-0.02em]">
              Een plek waar <span className="italic text-accent">licht</span>, materiaal en stilte ontwerpen.
            </h2>
            <p className="mt-8 text-[16px] leading-[1.8] text-muted-foreground max-w-md">
              Onze studio in Gent is zelf een weerspiegeling van onze ontwerpvisie: blootgelegd metselwerk, historische houten plafonds en elementen in massief staal. Authentieke materialen, natuurlijke texturen gecombineerd met modern meubilair. Een werkomgeving die hetzelfde ademt als de projecten die er ontstaan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIENSTEN — embedded as numbered list */}
      <section className="mt-32 md:mt-48">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal><p className="label-eyebrow">Diensten</p></Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="display-serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em]">
                Wat wij <span className="italic text-accent">doen.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3 hidden md:block">
            <div
              className="relative h-[520px] overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
              }}
              aria-hidden="true"
            >
              <div className="vertical-marquee flex flex-col gap-4">
                {[...sliderImages, ...sliderImages].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
          <ol className="col-span-12 md:col-span-9 list-none">
            {diensten.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="border-t border-border last:border-b py-6 md:py-8">
                  <div className="flex items-start gap-6">
                    <span className="display-serif italic text-accent text-sm w-10 shrink-0 mt-1">{s.n}</span>
                    <div className="flex-1">
                      <p className="display-serif text-xl md:text-[28px] leading-[1.2] text-foreground">{s.t}</p>
                      <p className="mt-4 text-[15px] md:text-[16px] leading-[1.8] text-foreground/80 max-w-xl">{s.d}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* WERKWIJZE — horizontal steps with villa image alongside */}
      <section className="mt-32 md:mt-48 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-5" y={40}>
          <img src={villa} alt="Renovatie hoeve, landelijke woning i.s.m. Studio Vagant" className="w-full aspect-[4/3] object-cover" />
        </Reveal>

        <div className="col-span-12 md:col-span-7 md:pl-6">
          <Reveal>
            <p className="label-eyebrow mb-6">Werkwijze</p>
            <h2 className="display-serif text-3xl md:text-[44px] leading-[1.1] tracking-[-0.02em] mb-12">
              Hoe wij <span className="italic text-accent">werken.</span>
            </h2>
          </Reveal>

          <ol className="space-y-0">
            {steps.map((s, i) => {
              const isOpen = openStep === s.n;
              return (
                <Reveal key={s.n} delay={i * 0.06}>
                  <li className="border-t border-border last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpenStep(isOpen ? null : s.n)}
                      aria-expanded={isOpen}
                      className="w-full flex items-baseline gap-6 py-5 text-left group"
                    >
                      <span className="display-serif italic text-accent text-sm w-8 shrink-0">{s.n}</span>
                      <span className="display-serif text-xl md:text-2xl leading-tight flex-1 transition-colors duration-500 group-hover:text-accent">
                        {s.t}
                      </span>
                      <Plus
                        size={18}
                        strokeWidth={1.5}
                        className={`shrink-0 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-14 pr-4 pb-6 text-[15px] md:text-[16px] leading-[1.8] text-foreground/80 max-w-xl">
                          {s.d}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

    </div>
  );
};

export default OverOns;
