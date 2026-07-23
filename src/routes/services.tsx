import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import servicesHexagons from "@/assets/Services-Hexagons-1.png";
import {
  Users, Home as HomeIcon, Pill, Stethoscope, Activity, Ambulance, Truck,
  Flame, GraduationCap, Bus, Store, Landmark, Sprout, Sparkles, Trees,
  Lightbulb, ShieldAlert, Cog as CowIcon, BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Dev Dham Anandashram" },
      { name: "description", content: "Nineteen core services at Dev Dham Anandashram, including temple worship, healthcare, housing, training and community welfare." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Users,
    label: "Community Built-up",
    description: "Community building is rooted in the eternal nature of the soul, encouraging compassion, dharma and shared responsibility across generations.",
  },
  {
    icon: HomeIcon,
    label: "Old Age Home",
    description: "A 500-bedded fully air-conditioned facility with single, double and triple occupancy, plus dining, activity, indoor games and 24x7 security.",
  },
  {
    icon: Pill,
    label: "24x7 Retail Medicine Store",
    description: "A round-the-clock medicine store with qualified pharmacists, prescription and OTC medicines, supplements and first-aid essentials.",
  },
  {
    icon: Stethoscope,
    label: "24x7 Advanced Medical Clinic with Emergency",
    description: "A state-of-the-art clinic operating 24x7 with diagnostics, emergency units and trained medical staff for routine and urgent care.",
  },
  {
    icon: Activity,
    label: "Day Care OPD Facility",
    description: "Comprehensive OPD care without overnight admission, offering expert consultation, treatment and follow-up across specialties.",
  },
  {
    icon: Ambulance,
    label: "24x7 Advanced Cardiac/non Cardiac AC Ambulance",
    description: "Advanced air-conditioned ambulance support for emergency transport and timely access to critical medical care.",
  },
  {
    icon: Truck,
    label: "24x7 AC Dead Body Carrier",
    description: "Dignified and hygienic transport for the deceased with trained staff and compassionate support for families.",
  },
  {
    icon: Flame,
    label: "Ceremony Hall",
    description: "Twin halls for Shraddha, Upanayan, marriage and devotional gatherings with serene ambiance and modern amenities.",
  },
  {
    icon: GraduationCap,
    label: "Vocational Training",
    description: "Skill-development programs for self-help groups in practical fields to build self-reliance and sustainable livelihoods.",
  },
  {
    icon: Bus,
    label: "AC Bus & Car Service",
    description: "Comfortable and reliable transport for daily travel, special events, pilgrimages and group movement.",
  },
  {
    icon: Store,
    label: "Day Time Retail Shop",
    description: "A daytime outlet for Ashram-made products, spiritual items and essentials that support self-reliance initiatives.",
  },
  {
    icon: Landmark,
    label: "Main Temple of Maa Dakshina Kali with Five Co-Temples",
    description: "The spiritual core of the Ashram with the main Maa Dakshina Kali temple and shrines of Shiva, Vishnu, Hanuman, Ganesha and Lakshmi.",
  },
  {
    icon: Sprout,
    label: "Promoting Agriculture & Fisheries",
    description: "Eco-friendly agriculture and fisheries programs combining modern methods and traditional wisdom for sustainability.",
  },
  {
    icon: Sparkles,
    label: "Light & Sound Presenting Vedic Reincarnation",
    description: "An immersive presentation of karma, dharma, birth, death and rebirth through narration, light and sound.",
  },
  {
    icon: Trees,
    label: "Large Landscape",
    description: "A vast, serene landscape with gardens, sacred trees and water features designed for peace and spiritual calm.",
  },
  {
    icon: Lightbulb,
    label: "Adequate Security with Landscape Lighting",
    description: "CCTV, trained security personnel, controlled access and ambient lighting for safe and well-illuminated movement.",
  },
  {
    icon: ShieldAlert,
    label: "24x7 Police Outpost for Security & Safety",
    description: "A dedicated police outpost in coordination with local law enforcement for discipline, safety and quick assistance.",
  },
  {
    icon: CowIcon,
    label: "Goushala",
    description: "A dedicated cow shelter with Jersey cows, veterinary care and support for ethical dairy and spiritual stewardship.",
  },
  {
    icon: BookOpen,
    label: "Library & Activity Room for Residents",
    description: "Library and activity spaces for reading, learning, workshops, indoor games and balanced personal growth.",
  },
];

const FAQS = [
  { q: "Who manages Dev Dham Anandashram?", a: "The Ashram is proposed and managed by Rashtriya Sanatan Sayang Sebak Sangha, a community devoted to preserving and promoting Sanatan Dharma." },
  { q: "Which deities are worshipped at the main temple?", a: "The main temple is dedicated to Maa Dakshina Kali, with five co-temples for Lord Shiva, Lord Vishnu (Balaji), Lord Bajrangbali, Lord Ganesha and Maa Lakshmi." },
  { q: "Can devotees stay overnight at the Ashram?", a: "Yes. Accommodation includes modern air-conditioned rooms in different occupancy categories, based on eligibility and availability." },
  { q: "What medical facilities are offered?", a: "The Ashram provides a 24x7 medical clinic with emergency support, day-care OPD, medicine store, ambulance and dead body carrier services." },
  { q: "How can I support the Ashram?", a: "By becoming a member or by offering a one-time donation through the Donate & Membership page." },
];

function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.93_0.05_82)] to-[oklch(0.9_0.06_78)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-4 px-6 py-12 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img src={servicesHexagons} alt="Services Hexagons" className="w-full max-w-md object-contain" />
          </div>
          <div className="text-left md:pl-4">
            <p className="deva text-2xl text-[var(--vermilion)]">॥ सेवा परमो धर्मः॥</p>
            <h1 className="mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl">Our Services</h1>
            <p className="mt-4 text-xl italic">All services available at the Ashram</p>
          </div>
        </div>
      </section>

      <div className="pattern-strip" aria-hidden />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.label} className="ink-card rounded-sm p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--vermilion)] text-[var(--parchment)]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-xl text-[var(--ink)]">{s.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted-foreground)]">{s.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ प्रश्नोत्तर ॥</span></div>
        <h2 className="text-center font-display text-4xl text-[var(--vermilion)]">Frequently Asked Questions</h2>
        <p className="mt-3 text-center text-lg italic text-[var(--muted-foreground)]">
          Answers from the keepers of the Ashram.
        </p>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="ink-card rounded-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-lg text-[var(--ink)]">{f.q}</span>
                <span className="text-2xl text-[var(--vermilion)]">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && (
                <div className="border-t border-[var(--border)] px-5 py-4 text-base leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/donate" className="btn-vintage rounded-sm px-7 py-3 text-sm">Support with Donation</Link>
        </div>
      </section>
    </Layout>
  );
}

