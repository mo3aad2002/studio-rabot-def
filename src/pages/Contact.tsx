import { useState } from "react";
import { z } from "zod";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { toast } from "sonner";

const schema = z.object({
  naam: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  bericht: z.string().trim().min(1, "Bericht is verplicht").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ naam: "", email: "", bericht: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Bedankt. Uw bericht is verzonden.");
    setForm({ naam: "", email: "", bericht: "" });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-28">
      <Seo
        title="Contact — Studio Rabot, Interieurarchitect in Gent"
        description="Neem contact op met Studio Rabot voor een vrijblijvend gesprek over uw interieur- of renovatieproject. Rietstraat 102, 9000 Gent."
        path="/contact"
      />
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
        <div className="col-span-12 md:col-span-3">
          <Reveal><p className="label-eyebrow">Contact</p></Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal delay={0.1}>
            <h1 className="display-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              Start uw <span className="italic text-accent">project.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[16px] md:text-[17px] leading-[1.8] text-muted-foreground max-w-xl">
              Neem via onderstaande gegevens vrijblijvend contact op voor een verkennend gesprek.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Details */}
        <Reveal className="col-span-12 md:col-span-5 order-2 md:order-1" delay={0.1}>
          <div className="space-y-6">
            <div>
              <p className="display-serif text-2xl md:text-3xl leading-tight">Rogier Christiaens</p>
              <p className="text-muted-foreground text-sm mt-1">Interieurarchitect</p>
            </div>
            <div className="hairline max-w-[180px]" />
            <div className="space-y-2 text-[15px] leading-[1.8]">
              <p className="text-foreground">Rietstraat 102, 9000 Gent</p>
              <p>
                <a href="tel:+32499605827" className="link-underline text-foreground">0499 60 58 27</a>
              </p>
              <p>
                <a href="mailto:rogier@studiorabot.be" className="link-underline text-foreground">
                  rogier@studiorabot.be
                </a>
              </p>
              <p className="text-muted-foreground">BTW BE 0831 659 687</p>
              <a
                href="https://www.instagram.com/studiorabot/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Studio Rabot"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 pt-2"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="col-span-12 md:col-span-7 order-1 md:order-2" delay={0.2}>
          <form onSubmit={onSubmit} className="space-y-10">
            <div>
              <label htmlFor="contact-naam" className="label-eyebrow block mb-3">Naam</label>
              <input
                id="contact-naam"
                name="naam"
                type="text"
                value={form.naam}
                onChange={(e) => setForm({ ...form, naam: e.target.value })}
                maxLength={100}
                autoComplete="name"
                className="w-full bg-transparent border-0 border-b border-border focus:border-foreground py-3 outline-none text-foreground transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="label-eyebrow block mb-3">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                autoComplete="email"
                className="w-full bg-transparent border-0 border-b border-border focus:border-foreground py-3 outline-none text-foreground transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-bericht" className="label-eyebrow block mb-3">Bericht</label>
              <textarea
                id="contact-bericht"
                name="bericht"
                rows={5}
                value={form.bericht}
                onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                maxLength={2000}
                className="w-full bg-transparent border-0 border-b border-border focus:border-foreground py-3 outline-none text-foreground resize-none transition-colors duration-300"
              />
            </div>
            <button type="submit" className="btn-sharp">Verzenden</button>
          </form>
        </Reveal>
      </div>

      {/* Map */}
      <Reveal className="mt-20 md:mt-28">
        <p className="label-eyebrow mb-6">Locatie</p>
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-border">
          <iframe
            title="Studio Rabot, Rietstraat 102, 9000 Gent"
            src="https://www.google.com/maps?q=Rietstraat+102,+9000+Gent,+Belgium&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
