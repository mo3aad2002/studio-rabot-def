import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";

const Privacy = () => {
  return (
    <section className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-28">
      <Seo
        title="Privacybeleid — Studio Rabot"
        description="Lees hoe Studio Rabot omgaat met uw persoonsgegevens, welke gegevens wij verzamelen en welke rechten u heeft onder de AVG."
        path="/privacybeleid"
      />
      <Reveal>
        <p className="label-eyebrow mb-6">Privacybeleid</p>
        <h1 className="display-serif text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em] mb-12">
          Privacy<span className="italic text-accent">beleid.</span>
        </h1>
      </Reveal>

      <div className="space-y-10 text-[15px] leading-[1.8] text-foreground">
        <Reveal>
          <p className="text-muted-foreground text-sm">Laatst bijgewerkt: 11 juni 2026</p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">1. Verwerkingsverantwoordelijke</h2>
          <p>
            Studio Rabot, Rogier Christiaens, Rietstraat 102, 9000 Gent, België.
            Contact: <a href="mailto:rogier@studiorabot.be" className="link-underline">rogier@studiorabot.be</a>.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">2. Welke gegevens verzamelen wij</h2>
          <p className="mb-3">Wij verwerken uitsluitend de gegevens die u zelf aanlevert of die noodzakelijk zijn om onze website te laten functioneren:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contactformuliergegevens: naam, e-mailadres en de inhoud van uw bericht.</li>
            <li>Communicatiegegevens wanneer u ons rechtstreeks contacteert via e-mail of telefoon.</li>
            <li>Geanonimiseerde analytische gegevens (paginabezoeken, apparaattype, geografische regio) om het gebruik van de website te begrijpen en te verbeteren.</li>
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">3. Doel en rechtsgrond</h2>
          <p className="mb-3">Uw gegevens worden verwerkt op basis van de volgende grondslagen (art. 6 AVG):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uitvoering van een (pre)contractuele relatie: beantwoorden van uw aanvraag.</li>
            <li>Gerechtvaardigd belang: verbeteren van onze dienstverlening en website.</li>
            <li>Uw toestemming: voor niet-essentiële cookies en analytics.</li>
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">4. Bewaartermijn</h2>
          <p>
            Contactformulieren en correspondentie worden bewaard zolang noodzakelijk voor de afhandeling van uw aanvraag. U kan op elk moment vragen om uw gegevens te laten verwijderen door contact op te nemen via rogier@studiorabot.be. Analytische gegevens worden geanonimiseerd bewaard voor maximaal 26 maanden.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">5. Delen met derden</h2>
          <p>
            Wij verkopen uw gegevens nooit. Gegevens worden enkel gedeeld met verwerkers die noodzakelijk zijn voor de werking van de website (hosting, e-mail, analytics), telkens onder een verwerkersovereenkomst conform de AVG.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">6. Uw rechten</h2>
          <p className="mb-3">Onder de AVG heeft u recht op:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inzage in uw persoonsgegevens.</li>
            <li>Correctie van onjuiste gegevens.</li>
            <li>Verwijdering ("recht om vergeten te worden").</li>
            <li>Beperking of bezwaar tegen verwerking.</li>
            <li>Overdraagbaarheid van uw gegevens.</li>
            <li>Intrekking van uw toestemming op elk moment.</li>
          </ul>
          <p className="mt-3">
            U kan deze rechten uitoefenen via <a href="mailto:rogier@studiorabot.be" className="link-underline">rogier@studiorabot.be</a>. Klachten kan u indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">7. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik of ongeoorloofde toegang.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display-serif text-2xl mb-3">8. Wijzigingen</h2>
          <p>
            Dit privacybeleid kan worden bijgewerkt. De laatste versie is steeds beschikbaar op deze pagina.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Privacy;
