import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import templeHero from "@/assets/ashram.png";
import landscape from "@/assets/ashram-landscape.jpg";
import landscapeAlt from "@/assets/ashram-landscape1.jpeg";
import aarti from "@/assets/aarti-ceremony.jpg";
import shikhara from "@/assets/temple-shikhara.jpg";
import kali from "@/assets/maa-kali.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Dev Dham Anandashram" },
      { name: "description", content: "Sacred glimpses of Dev Dham Anandashram, its temples, prayers, and serene landscapes." },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_ITEMS = [
  { src: templeHero, alt: "Dev Dham temple complex", label: "Temple Complex" },
  { src: landscape, alt: "Ashram in the hills", label: "Ashram Landscape" },
  { src: landscapeAlt, alt: "Ashram and mountains", label: "Sacred Hills" },
  { src: aarti, alt: "Aarti ceremony", label: "Evening Aarti" },
  { src: shikhara, alt: "Temple shikhara", label: "Shikhara" },
  { src: kali, alt: "Maa Dakshina Kali", label: "Maa Dakshina Kali" },
];

function GalleryPage() {
  return (
    <Layout>
      <section className="relative isolate">
        <img src={templeHero} alt="Dev Dham Gallery" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.92_0.05_82_/_0.4)] to-[oklch(0.92_0.05_82)]" />
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="deva text-2xl text-[var(--vermilion)]">|| ॐ ||</p>
          <h1 className="mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl">Gallery</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg italic leading-relaxed">
            Visual moments from prayer, service, and life at Dev Dham Anandashram.
          </p>
        </div>
      </section>

      <div className="pattern-strip" aria-hidden />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.label} className="ink-card overflow-hidden rounded-sm">
              <img src={item.src} alt={item.alt} className="h-64 w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-sm uppercase tracking-[0.18em] text-[var(--vermilion)]">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
