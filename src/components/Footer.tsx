import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="display-serif text-sm uppercase tracking-[0.32em] text-foreground">
          Studio Rabot
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-xs tracking-wide text-muted-foreground">
            © 2025 Studio Rabot · Rogier Christiaens · Rietstraat 102, 9000 Gent · rogier@studiorabot.be
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacybeleid" className="text-xs tracking-wide text-muted-foreground link-underline">
              Privacybeleid
            </Link>
            <Link to="/cookiebeleid" className="text-xs tracking-wide text-muted-foreground link-underline">
              Cookiebeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
