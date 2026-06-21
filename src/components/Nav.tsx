import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/projecten", label: "Projecten" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent + light text only on home when at top. Solid + dark text otherwise.
  const overHero = isHome && !scrolled;
  const textColor = overHero ? "text-background" : "text-foreground";
  const textColorMuted = overHero ? "text-background/80" : "text-foreground/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        overHero
          ? "bg-transparent py-6 border-b border-transparent"
          : "bg-background/95 backdrop-blur-md py-4 border-b border-border"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link
          to="/"
          className={`display-serif text-base md:text-lg uppercase tracking-[0.32em] transition-colors duration-700 ${textColor} hover:text-accent`}
          onClick={() => setOpen(false)}
        >
          Studio Rabot
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `link-underline text-[13px] tracking-wide transition-colors duration-700 ${textColorMuted} hover:${textColor} ${
                  isActive ? `active ${textColor}` : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors duration-700 ${textColor}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border mt-4">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-wide ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
