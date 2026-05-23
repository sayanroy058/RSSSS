import { Link } from "@tanstack/react-router";

export function Header() {
  const link = "uppercase tracking-[0.2em] text-sm font-semibold text-[var(--ink)] hover:text-[var(--vermilion)] transition-colors";
  return (
    <header className="relative z-20 border-b border-[var(--border)] bg-[oklch(0.95_0.04_85_/_0.85)] backdrop-blur-sm">
      <div className="pattern-strip" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--vermilion)] bg-[var(--parchment)] text-[var(--vermilion)] deva text-2xl shadow-[inset_0_0_0_2px_var(--gold)]">ॐ</span>
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-widest text-[var(--vermilion)]">Dev Dham</span>
            <span className="block text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Anandashram</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Home</Link>
          <Link to="/about" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>About Us</Link>
          <Link to="/services" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Services</Link>
          <Link to="/gallery" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Gallery</Link>
          <Link to="/donate" className={link} activeProps={{ className: link + " text-[var(--vermilion)]" }}>Donate & Membership</Link>
        </nav>
        <Link to="/donate" className="btn-vintage hidden rounded-sm px-5 py-2.5 text-xs md:inline-block">Donate Now</Link>
      </div>
      <div className="pattern-strip" aria-hidden />
    </header>
  );
}
