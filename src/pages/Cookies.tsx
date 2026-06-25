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
          <p className="text-muted-foreground text-sm">Laatst bijgewerkt: 25 juni 2026</p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">1. Wat zijn cookies</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op uw toestel worden geplaatst wanneer u een website bezoekt. Sommige cookies zijn noodzakelijk voor het correct functioneren van de website, andere worden geplaatst door externe diensten.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">2. Welke cookies gebruiken wij</h2>

          <div className="mt-4 space-y-6">
            <div>
              <p className="label-eyebrow mb-2">Functionele cookies</p>
              <p>
                Deze website maakt gebruik van Google Fonts voor de weergave van lettertypes. Hierbij worden verzoeken gestuurd naar servers van Google, wat mogelijk cookies kan plaatsen. Deze zijn noodzakelijk voor de correcte weergave van de website.
              </p>
            </div>

            <div>
              <p className="label-eyebrow mb-2">Cookies van derden</p>
              <p>
                Op de contactpagina is een Google Maps-kaart ingebed. Google kan via deze embed cookies plaatsen op uw toestel. Wij hebben geen controle over deze cookies. Raadpleeg het privacybeleid van Google voor meer informatie: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="link-underline">policies.google.com/privacy</a>.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">3. Uw toestemming beheren</h2>
          <p>
            U kunt cookies beheren of verwijderen via uw browserinstellingen. Het uitschakelen van bepaalde cookies kan de weergave van de website beïnvloeden.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">4. Meer informatie</h2>
          <p>
            Voor vragen over dit cookiebeleid kunt u terecht via <a href="mailto:rogier@studiorabot.be" className="link-underline">rogier@studiorabot.be</a>. Zie ook ons privacybeleid voor een ruimer overzicht van hoe wij met uw gegevens omgaan.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Cookies;
