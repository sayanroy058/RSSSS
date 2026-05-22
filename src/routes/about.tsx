import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import aarti from "@/assets/aarti-ceremony.jpg";
import landscape from "@/assets/ashram-landscape.jpg";
import shikhara from "@/assets/temple-shikhara.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dev Dham Anandashram" },
      { name: "description", content: "Our community is built on Sanatan Dharma, soul, donation and the eternal cycle of life — guided by Rastriya Sanatan Sayang Sevak Sangha." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="relative isolate">
        <img src={landscape} alt="Ashram landscape" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.92_0.05_82_/_0.4)] to-[oklch(0.92_0.05_82)]" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="deva text-2xl text-[var(--vermilion)]">॥ धर्मो रक्षति रक्षितः ॥</p>
          <h1 className="mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl">About the Ashram</h1>
          <p className="mt-6 text-xl italic leading-relaxed">
            A spiritual family, an eternal vow — to preserve, practice and pass on Sanatan Dharma in modern life.
          </p>
        </div>
      </section>

      <div className="pattern-strip" aria-hidden />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ परिचय ॥</span></div>
        <h2 className="font-display text-4xl text-[var(--vermilion)]">Introduction</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Dev Dham Anandashram is a spiritual retreat grounded in the principles of Sanatan Dharma, proposed by
          <em> Rastriya Sanatan Sayang Sevak Sangha </em> to demonstrate the principle of the eternal way of life.
          Drawing from the timeless ashrama system, the Ashram provides a setting away from worldly distractions for
          residents and visitors to focus on spiritual growth through meditation, yoga, chanting and scriptural study —
          the ultimate goal being moksha.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          A supportive community fosters a sense of spiritual family — seekers from diverse backgrounds living together,
          united by their spiritual purpose with nature. The Ashram extends its service to the larger community through
          educational programs, social and medical services, and religious guidance — reflecting the avatara concept of
          the Bhagavad Gita.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          The complex hosts 500+ fully air-conditioned modern rooms for devotees, a 25-bed clinic with OPD, modern medical
          stores, advanced cardiac and non-cardiac ambulances, and dead-body carrier services at no cost. At its heart
          stands a 10,000 sft. fully air-conditioned main <strong>Maa Dakshina Kali</strong> temple, surrounded by five
          co-temples and a grand prayer & meditation hall — an ambience that beckons every soul toward moksha.
        </p>
      </section>

      <section className="bg-[oklch(0.91_0.05_80_/_0.5)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="om-divider mb-8"><span className="deva text-2xl">॥ समुदाय ॥</span></div>
          <h2 className="text-center font-display text-4xl text-[var(--vermilion)]">Community Built-Up</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed">
            The Sangha believes that life is a sacred journey of the soul — eternal, continuous, guided by divine law.
            The Atman is immortal, passing through countless births in its quest for liberation. Our community-building
            is rooted in this eternal truth.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { t: "Eternal Awareness", d: "Awareness of the soul's eternal nature and its divine purpose." },
              { t: "Dharma & Donation", d: "Living a life guided by righteousness and compassionate giving." },
              { t: "Vasudhaiva Kutumbakam", d: "Honoring all living beings as part of one universal family." },
              { t: "Purification", d: "Inspiring individuals to purify thoughts and actions across lifetimes." },
            ].map((p) => (
              <div key={p.t} className="ink-card rounded-sm p-6">
                <h3 className="font-display text-2xl text-[var(--vermilion)]">{p.t}</h3>
                <p className="mt-2 text-base leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={aarti} alt="Aarti ceremony at temple" className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 grid place-items-center bg-[oklch(0.2_0.08_30_/_0.55)] text-center text-[var(--parchment)]">
          <div className="max-w-2xl px-6">
            <p className="deva text-2xl text-[var(--gold)]">॥ श्रद्धावान् लभते ज्ञानम् ॥</p>
            <h2 className="mt-3 font-display text-4xl">Faith. Knowledge. Service.</h2>
            <p className="mt-4 text-lg italic leading-relaxed">
              A society that embodies the divine essence of Sanatan Dharma in every generation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ स्थान ॥</span></div>
        <h2 className="font-display text-4xl text-[var(--vermilion)]">Where We Reside</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="text-lg leading-relaxed">
            <p><strong>Ashram Location:</strong> Gazol Doba, Jalpaiguri, West Bengal — near Bhorer Alo Dam Project and on the way to Bhamri Devi Temple.</p>
            <ul className="mt-4 space-y-2">
              <li>🚉 Nearest Railway Station — NGP</li>
              <li>✈️ Airport — Bagdogra</li>
              <li>🚏 Nearest Bus Stop — NoukaHaat, Siliguri</li>
            </ul>
            <a href="https://www.google.com/maps/place/Dev+Dham+Anandashram/@26.7113061,88.5916827,17z" target="_blank" rel="noreferrer" className="btn-vintage mt-6 inline-block rounded-sm px-6 py-2.5 text-xs">Open in Google Maps</a>
          </div>
          <div className="vintage-frame">
            <iframe
              title="Dev Dham Anandashram Location"
              src="https://www.google.com/maps?q=Dev+Dham+Anandashram&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={shikhara} alt="Temple shikhara sunrise" className="h-[40vh] w-full object-cover" />
        <div className="absolute inset-0 grid place-items-center bg-[oklch(0.2_0.08_30_/_0.45)]">
          <div className="text-center text-[var(--parchment)]">
            <h2 className="font-display text-3xl md:text-4xl">Walk with us on the eternal path</h2>
            <Link to="/donate" className="btn-vintage mt-6 inline-block rounded-sm px-7 py-3 text-sm">Become a Member</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
