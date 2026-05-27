import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoSrc from "../assets/dev-dham-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const link = "uppercase tracking-[0.2em] text-sm font-semibold text-[var(--ink)] hover:text-[var(--vermilion)] transition-colors";
  const mobileLink = "block w-full py-3 px-4 uppercase tracking-[0.2em] text-sm font-semibold text-[var(--ink)] hover:text-[var(--vermilion)] hover:bg-[oklch(0.92_0.05_80_/_0.5)] transition-colors border-b border-[var(--border)] last:border-b-0";
  return (
    <header className="relative z-20 border-b border-[var(--border)] bg-[oklch(0.95_0.04_85_/_0.85)] backdrop-blur-sm">
      <div className="pattern-strip" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Dev Dham Anandashram" className="h-17 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Home</Link>
          <Link to="/about" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>About Us</Link>
          <Link to="/services" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Services</Link>
          <Link to="/gallery" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Gallery</Link>
          <Link to="/donate" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Donate & Membership</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/donate" className="btn-vintage hidden rounded-sm px-5 py-2.5 text-xs md:inline-block">Donate Now</Link>
          {/* Mobile menu button */}
          <button
            className="flex md:hidden flex-col items-center justify-center gap-[5px] p-2 rounded-md border border-[var(--border)] bg-[var(--parchment)] text-[var(--vermilion)] hover:bg-[oklch(0.92_0.05_80)] transition-colors"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="block h-[3px] w-[3px] rounded-full bg-current" />
            <span className="block h-[3px] w-[3px] rounded-full bg-current" />
            <span className="block h-[3px] w-[3px] rounded-full bg-current" />
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[oklch(0.95_0.04_85_/_0.95)] backdrop-blur-sm">
          <Link to="/" className={mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className={mobileLink} onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/services" className={mobileLink} onClick={() => setOpen(false)}>Services</Link>
          <Link to="/gallery" className={mobileLink} onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/donate" className={mobileLink} onClick={() => setOpen(false)}>Donate & Membership</Link>
          <div className="p-4">
            <Link to="/donate" className="btn-vintage block w-full text-center rounded-sm px-5 py-2.5 text-xs" onClick={() => setOpen(false)}>Donate Now</Link>
          </div>
        </div>
      )}
      <div className="pattern-strip" aria-hidden />
    </header>
  );
}
