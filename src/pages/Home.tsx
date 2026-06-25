import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { ProjectsSection } from "@/components/ProjectsSection";
import homeAmbacht from "@/assets/Studio Rabot homepagina.jpg";
import heroImgDesktop from "@/assets/RVS keuken op homepagina van pc-scherm.png";
import contactImg from "@/assets/rural-villa.jpg";

const heroImgMobile = encodeURI("/SELECTIE PROJECTEN/Studio Rabot interieur/industriële stijl baksteen muren en houten plafonds 1.webp");

const Home = () => {
  return (
    <div>
      <Seo
        title="Studio Rabot — Interieurarchitectuur & Hoeverenovatie in Gent"
        description="Studio Rabot ontwerpt en renoveert interieurs, hoeves en historische gebouwen in Gent en omgeving. Ontdek het werk van interieurarchitect Rogier Christiaens."
        path="/"
      />
      {/* HERO */}
      <section className="relative -mt-24 h-screen min-h-[640px] w-full overflow-hidden">
        {/* Background image */}
        <img
          src={heroImgMobile}
          alt="Leefruimte met exposed brick door Studio Rabot"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          loading="eager"
        />
        <img
          src={heroImgDesktop}
          alt="RVS keuken door Studio Rabot"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          loading="eager"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />

        {/* Content */}
        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24 pt-32">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-7 lg:col-span-7">
              <Reveal delay={0.1}>
                <h1 className="display-serif text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-[-0.02em] text-background">
                  Interieur dat<br />
                  <span className="italic text-background/85">vertelt</span> waar u<br />
                  van houdt.
                </h1>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.25}>
                <p className="text-base md:text-[17px] leading-[1.7] text-background/85 max-w-md">
                  Studio Rabot ontwerpt en renoveert ruimtes met voeling voor authenticiteit, van warme landelijke woningen en hoeve renovaties tot elk authentiek interieur op maat.
                </p>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* OVER ONS TEASER */}
      <section className="mt-32 md:mt-48 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-5" y={40}>
            <img src={homeAmbacht} alt="Rogier Christiaens voor Studio Rabot in Gent" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="label-eyebrow mb-6">01 / Studio</p>
              <h2 className="display-serif text-3xl md:text-[48px] leading-[1.1] tracking-[-0.02em]">
                Achter elk project<br />
                een <span className="italic text-accent">ambacht.</span>
              </h2>
              <p className="mt-8 text-[16px] md:text-[17px] leading-[1.8] text-muted-foreground max-w-md">
                Studio Rabot werd opgericht door Rogier Christiaens. Rogier heeft als interieurarchitect een voorliefde voor tijdloze architectuur, historische panden, authentieke materialen en gepatineerde texturen.
              </p>
              <div className="mt-10">
                <Link to="/over-ons" className="btn-ghost">Bekijk ons verhaal</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REALISATIES — full projects grid */}
      <div className="mt-32 md:mt-48">
        <ProjectsSection />
      </div>

      {/* CONTACT TEASER */}
      <section className="mt-32 md:mt-48 max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <p className="label-eyebrow mb-6">03 / Contact</p>
              <h2 className="display-serif text-3xl md:text-[48px] leading-[1.1] tracking-[-0.02em]">
                Een idee, een<br />
                gebouw, een <span className="italic text-accent">gesprek.</span>
              </h2>
              <p className="mt-8 text-[16px] leading-[1.8] text-muted-foreground max-w-md">
                Vertel ons over uw plek. We luisteren eerst, ontwerpen daarna. Vrijblijvend en zonder haast.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-sharp">neem contact op</Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-6" y={40} delay={0.15}>
            <img src={contactImg} alt="Landelijke nieuwbouw" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
