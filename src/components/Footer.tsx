import { Link } from "@tanstack/react-router";
import logoSrc from "../assets/dev-dham-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--border)] bg-[oklch(0.88_0.06_75_/_0.55)]">
      <div className="pattern-strip" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img src={logoSrc} alt="Dev Dham Anandashram" className="h-16 w-auto object-contain" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
            A sanctuary of Sanatan Dharma devotion, donation and the eternal way of life, nurtured by Rastriya Sanatan Sayang Sebak Sangha.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]">Wander</h4>
          <ul className="space-y-2 text-base">
            <li><Link to="/" className="hover:text-[var(--vermilion)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--vermilion)]">About the Ashram</Link></li>
            <li><Link to="/services" className="hover:text-[var(--vermilion)]">Our Nineteen Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[var(--vermilion)]">Gallery</Link></li>
            <li><Link to="/donate" className="hover:text-[var(--vermilion)]">Donate & Membership</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]">Connect</h4>
          <ul className="space-y-2 text-base">
            <li>📞 +91 62899 65155</li>
            <li>📞 +91 90731 64234</li>
            <li>✉️ official@rssss.in</li>
            <li>✉️ info@rssss.in</li>
            <li>🌐 www.rssss.in</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]">Reach Us</h4>
          <p className="text-sm leading-relaxed">
            Gazol Doba, Mouza – Jangal Mohal,<br/>
            Dodhiya, P.O. Milan Pally,<br/>
            P.S. Bharer Alo, Dist. Jalpaiguri,<br/>
            West Bengal 735133
          </p>
          <a
            href="https://www.google.com/maps/place/Dev+Dham+Anandashram/@26.7113061,88.5916827,17z"
            target="_blank" rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--vermilion)] underline-offset-4 hover:underline"
          >View on Map →</a>
        </div>
      </div>
      <div className="pattern-strip" aria-hidden />
      <div className="bg-[oklch(0.45_0.18_30)] py-4 text-center text-xs uppercase tracking-[0.3em] text-[var(--parchment)]">
        <span className="deva mr-3 text-base">ॐ नमः शिवाय</span>
        © {new Date().getFullYear()} Dev Dham Anandashram Sanatan Dharma Forever
      </div>
    </footer>
  );
}
