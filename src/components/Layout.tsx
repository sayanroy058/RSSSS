import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Link
        to="/donate"
        className="btn-vintage donate-blink fixed bottom-4 right-4 z-50 flex h-20 w-20 items-center justify-center rounded-full p-2 text-center text-[10px] leading-tight sm:bottom-6 sm:right-6 sm:h-24 sm:w-24 sm:text-xs"
        aria-label="Donate now"
      >
        Donate Now
      </Link>
    </div>
  );
}
