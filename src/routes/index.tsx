import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/ashram.png";
import landscape from "@/assets/ashram-landscape1.jpeg";
import kali from "@/assets/maa-kali.jpeg";
import bagala from "@/assets/maa-bagalamukhi.avif";
import aarti from "@/assets/Temple.png";
import shikhara from "@/assets/temple-shikhara.jpg";
import servicesHexagons from "@/assets/Services-Hexagons.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev Dham Anandashram — Home" },
      { name: "description", content: "A vintage Sanatan ashram nestled in the foothills, devoted to Maa Dakshina Kali and Maa Bagalamukhi." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="relative isolate">
        <img src={hero} alt="Rishi meditating on a hillside at sunrise with ancient temple" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.92_0.05_82)] via-[oklch(0.92_0.05_82_/_0.55)] to-[oklch(0.92_0.05_82_/_0.2)]" />
        <div className="mx-auto max-w-5xl px-6 pb-32 pt-28 text-center md:pt-40">
          <p className="deva text-3xl text-[var(--vermilion)]">॥ ॐ नमः शिवाय ॥</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--vermilion)] drop-shadow-[0_2px_0_rgba(255,235,200,0.6)] md:text-7xl">
            Dev Dham Anandashram
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-[var(--ink)] md:text-2xl">
            “Where the eternal way of Sanatan Dharma breathes in stone, soil and silence.”
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-vintage rounded-sm px-7 py-3 text-sm">Our Services</Link>
            <Link to="/donate" className="btn-vintage rounded-sm px-7 py-3 text-sm" style={{ background: "linear-gradient(180deg, oklch(0.72 0.18 60), oklch(0.55 0.18 55))" }}>Become a Member</Link>
          </div>
        </div>
      </section>

      <div className="pattern-strip" aria-hidden />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ स्वागतम् ॥</span></div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="vintage-frame">
            <img src={landscape} alt="Ashram complex in lush hills at golden hour" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-[var(--vermilion)]">The Eternal Way of Life</h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink)]">
              A spiritual retreat grounded in the principles of Sanatan Dharma, proposed by
              <em> Rastriya Sanatan Sayang Sevak Sangha </em> to demonstrate the principle of the eternal way of life.
              Far from worldly distractions, the Ashram nurtures meditation, yoga, chanting and scriptural study under
              the watch of revered Gurus — a harmonious family of seekers walking toward Moksha.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]">
              500+ air-conditioned rooms for devotees, a 25-bed clinic, modern ambulance services, a 10,000 sft.
              main Dakshina Kali Temple flanked by five sister temples — all wrapped in the womb of nature.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[var(--vermilion)] underline-offset-4 hover:underline">Read our Story →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="ink-card h-full rounded-sm p-8 lg:p-10">
            <div className="om-divider mb-4"><span className="deva text-xl">॥ उद्देश्य ॥</span></div>
            <h2 className="font-display text-4xl text-[var(--vermilion)]">Object</h2>
            <p className="mt-6 text-base leading-relaxed">
              The Ashram stands as a living center of Sanatan Dharma, dedicated to preserving and promoting its timeless
              principles through the Main Temple of Maa Dakshina Kali and five other temples.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              It provides a complete environment for meditation, yoga, scriptural study and devotional rituals, while
              serving community welfare through healthcare, training, sustainable livelihood, and cultural education.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Through these spiritual, social, and educational initiatives, the Ashram strengthens devotion and moral
              values, making Sanatan Dharma practical and relevant in modern life.
            </p>
          </div>

          <div className="ink-card min-w-0 overflow-hidden rounded-sm p-6 lg:p-8">
            <h3 className="text-center font-display text-3xl text-[var(--vermilion)]">All Nineteen Services</h3>
            <div className="mt-8 flex h-full items-center justify-center pb-4 lg:pb-6">
              <img
                src={servicesHexagons}
                alt="All nineteen services shown in a sacred hexagon layout"
                className="mx-auto w-full max-w-[46rem] rounded-sm object-contain lg:max-h-[41rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[oklch(0.91_0.05_80_/_0.55)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="om-divider mb-8"><span className="deva text-2xl">॥ कुलदेवी ॥</span></div>
          <h2 className="text-center font-display text-4xl text-[var(--vermilion)]">Our Presiding Deities</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg italic text-[var(--muted-foreground)]">
            Worshipped at dawn and dusk in the sanctum of Dev Dham.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              { img: kali, name: "Maa Dakshina Kali", text: "The fierce, compassionate Mother — destroyer of ego, bestower of liberation. Her sanctum is the heart of our 10,000 sft. main temple." },
              { img: bagala, name: "Maa Bagalamukhi", text: "The golden goddess who stills the storms of speech and mind, granting devotees victory over inner adversaries." },
            ].map((d) => (
              <article key={d.name} className="ink-card rounded-sm p-6">
                <div className="vintage-frame mb-5">
                  <img src={d.img} alt={d.name} loading="lazy" className="aspect-square w-full object-cover" />
                </div>
                <h3 className="font-display text-2xl text-[var(--vermilion)]">{d.name}</h3>
                <p className="mt-3 text-base leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative isolate overflow-hidden py-24">
        <img src={aarti} alt="Guru and disciples performing aarti" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[oklch(0.25_0.1_30_/_0.65)]" />
        <div className="mx-auto max-w-3xl px-6 text-center text-[var(--parchment)]">
          <p className="deva text-2xl text-[var(--gold)]">॥ सर्वे भवन्तु सुखिनः ॥</p>
          <h2 className="mt-4 font-display text-4xl">May All Beings Be Free</h2>
          <p className="mt-6 text-lg italic leading-relaxed">
            From sunrise aarti to the lamp-lit Sandhya, every hour at Dev Dham is consecrated to donation, compassion,
            and service to fellow beings, to ancestors, and to the soil that holds us.
          </p>
          <Link to="/donate" className="btn-vintage mt-8 inline-block rounded-sm px-7 py-3 text-sm">Offer Your Donation</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "19", l: "Sacred Services" },
            { n: "06", l: "Temples in Complex" },
            { n: "500+", l: "Devotee Rooms" },
            { n: "24x7", l: "Medical Care" },
          ].map((s) => (
            <div key={s.l} className="ink-card rounded-sm p-6 text-center">
              <p className="font-display text-5xl text-[var(--vermilion)]">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={shikhara} alt="Ancient temple shikhara at sunrise" className="h-[55vh] w-full object-cover" />
        <div className="absolute inset-0 grid place-items-center bg-[oklch(0.2_0.08_30_/_0.4)]">
          <div className="text-center text-[var(--parchment)]">
            <p className="deva text-xl text-[var(--gold)]">॥ वसुधैव कुटुम्बकम् ॥</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">The World is One Family</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
