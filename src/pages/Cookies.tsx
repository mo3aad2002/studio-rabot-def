import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";

const Cookies = () => {
  return (
    <section className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-28">
      <Seo
        title="Cookiebeleid — Studio Rabot"
        description="Ontdek welke cookies Studio Rabot gebruikt op deze website en hoe u uw cookievoorkeuren kan beheren."
        path="/cookiebeleid"
      />
      <Reveal>
        <p className="label-eyebrow mb-6">Cookiebeleid</p>
        <h1 className="display-serif text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em] mb-12">
          Cookie<span className="italic text-accent">beleid.</span>
        </h1>
      </Reveal>

      <div className="space-y-10 text-[15px] leading-[1.8] text-foreground">
        <Reveal>
          <p className="text-muted-foreground text-sm">Laatst bijgewerkt: 11 juni 2026</p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">1. Wat zijn cookies</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op uw toestel worden geplaatst wanneer u onze website bezoekt. Ze helpen de website correct te laten functioneren en stellen ons in staat het gebruik te analyseren.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">2. Welke cookies gebruiken wij</h2>

          <div className="mt-4 space-y-6">
            <div>
              <p className="label-eyebrow mb-2">Functionele cookies</p>
              <p>Noodzakelijk voor het functioneren van de website (bv. sessie- en voorkeursinstellingen). Deze worden zonder toestemming geplaatst.</p>
            </div>

            <div>
              <p className="label-eyebrow mb-2">Analytische cookies</p>
              <p>
                Wij gebruiken geanonimiseerde analytische cookies om te begrijpen hoe bezoekers onze website gebruiken (paginabezoeken, sessieduur, apparaattype). Deze cookies worden enkel geplaatst na uw toestemming.
              </p>
            </div>

            <div>
              <p className="label-eyebrow mb-2">Cookies van derden</p>
              <p>
                Bij het bekijken van ingebedde content (zoals de Google Maps kaart op onze contactpagina) kunnen cookies van derden geplaatst worden. Raadpleeg het privacybeleid van die partijen voor meer informatie.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">3. Uw toestemming beheren</h2>
          <p>
            U kan op elk moment uw cookie-instellingen aanpassen via uw browserinstellingen. Daarnaast kan u uw voorkeuren ook op elk moment wijzigen via de cookie-instellingen op onze website. Het uitschakelen van bepaalde cookies kan de werking van onze website beperken.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">4. Bewaartermijn</h2>
          <p>
            Sessiecookies worden verwijderd wanneer u uw browser sluit. Persistente cookies blijven maximaal 26 maanden bewaard.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">5. Meer informatie</h2>
          <p>
            Voor vragen over ons cookiebeleid kan u terecht via <a href="mailto:rogier@studiorabot.be" className="link-underline">rogier@studiorabot.be</a>. Zie ook ons privacybeleid voor een ruimer overzicht van hoe wij met uw gegevens omgaan.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Cookies;
