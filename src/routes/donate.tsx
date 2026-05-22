import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Layout } from "@/components/Layout";
import kali from "@/assets/maa-kali.jpeg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate & Become a Member - Dev Dham Anandashram" },
      { name: "description", content: "Become a Patron, Life, Executive, Ordinary or Special Donor Member of Rastriya Sanatan Sayang Sevak Sangha, and support Sanatan Dharma." },
    ],
  }),
  component: Donate,
});

const TIERS = [
  {
    name: "Patron Member",
    fee: "₹ 10,000",
    amount: "10000",
    period: "12 Months",
    accent: false,
    benefits: [
      "Free Entry to the Ashram premises at any time (no limit)",
      "Free Stay in the Guest House up to 7 days (Single/Double)",
      "Free Meals & Bhog Prasad for 7 days",
      "Free Transportation up to 3 times (Airport/Railway/Bus Stop)",
      "Free Medical Check-up during the 7-day stay",
    ],
  },
  {
    name: "Special Donor Member",
    fee: "₹ 25,000",
    amount: "25000",
    period: "12 Months - Group of 4",
    accent: true,
    benefits: [
      "Includes group package for 4 persons (member + 3)",
      "Free Entry at any time (no limit)",
      "Free Stay up to 7 days (Single/Double)",
      "Free Meals & Bhog Prasad for 7 days",
      "Free Transportation up to 3 times",
      "Free Medical Check-up during the 7-day stay",
    ],
  },
  {
    name: "Life Member",
    fee: "₹ 7,500",
    amount: "7500",
    period: "12 Months",
    accent: false,
    benefits: [
      "Free Entry at any time (no limit)",
      "Free Stay up to 4 days (Single/Double)",
      "Free Meals & Bhog Prasad for 4 days",
      "Free Transportation up to 2 times",
      "Free Medical Check-up during the 4-day stay",
    ],
  },
  {
    name: "Executive Member",
    fee: "₹ 5,000",
    amount: "5000",
    period: "12 Months",
    accent: false,
    benefits: [
      "Free Entry at any time (no limit)",
      "Free Stay up to 2 days (Double/Triple)",
      "Free Meals & Bhog Prasad for 2 days",
      "Free Transportation up to 1 time",
      "Free Medical Check-up during the 2-day stay",
    ],
  },
  {
    name: "Ordinary Member",
    fee: "₹ 500",
    amount: "500",
    period: "12 Months",
    accent: false,
    benefits: [
      "Free Entry at any time (no limit)",
      "50% Concession on stay up to 2 days (Triple)",
      "Free Meals & Bhog Prasad for 2 days",
      "Free Medical Check-up during the 2-day stay",
    ],
  },
];

const QUALIFICATIONS = [
  "Shall be at least 18 years of age.",
  "Shall be legally capable of entering into contractual obligation.",
  "Should be dedicated to the object of the institution.",
  "Should be willing to work towards attainment of the aims and objects of the institution.",
  "Shall not have been convicted of an offence involving moral turpitude.",
  "Shall be physically and mentally capable to work toward the institution's object.",
  "Shall sign the prescribed application form; the Managing Committee's decision is final and binding.",
];

const PAYMENT_METHODS = ["UPI", "Credit Card", "Debit Card", "Netbanking"];

function Donate() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [membershipId, setMembershipId] = useState("");
  const [memberForm, setMemberForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    gotro: "",
    paymentMethod: "UPI",
  });

  const resetMemberForm = () => {
    setMemberForm({ name: "", phone: "", email: "", address: "", gotro: "", paymentMethod: "UPI" });
  };

  const handleChoosePlan = (tierName: string) => {
    setSelectedTier(tierName);
    setShowSuccessModal(false);
    setShowDetailsModal(true);
  };

  const generateMembershipId = () => {
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `DDS-${randomPart}`;
  };

  const getAmountFromPlan = (plan: string | null) => {
    const matched = TIERS.find((tier) => tier.name === plan);
    return matched?.amount ?? "";
  };

  const handleMemberSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newMembershipId = generateMembershipId();
    const amount = getAmountFromPlan(selectedTier);

    const payload = {
      ...memberForm,
      plan: selectedTier,
      membershipId: newMembershipId,
      amount,
      paymentMethod: memberForm.paymentMethod,
      transactionNo: "",
      paid: true,
      submittedAt: new Date().toISOString(),
    };

    sessionStorage.setItem("donationMembership", JSON.stringify(payload));

    setMembershipId(newMembershipId);
    setShowDetailsModal(false);
    setShowSuccessModal(true);
    resetMemberForm();
  };

  return (
    <Layout>
      <section className="relative isolate">
        <img src={kali} alt="Maa Dakshina Kali" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.92_0.05_82_/_0.85)] to-[oklch(0.9_0.06_78)]" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="deva text-2xl text-[var(--vermilion)]">॥ दानं परं धर्मः ॥</p>
          <h1 className="mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl">Donate & Become a Member</h1>
          <p className="mt-6 text-xl italic leading-relaxed">
            Walk hand in hand with Rastriya Sanatan Sayang Sevak Sangha - your donation sustains the eternal flame of Sanatan Dharma.
          </p>
        </div>
      </section>

      <div className="pattern-strip" aria-hidden />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ सदस्यता ॥</span></div>
        <h2 className="text-center font-display text-4xl text-[var(--vermilion)]">Membership Categories</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-lg italic text-[var(--muted-foreground)]">
          Five paths of devotion - choose the one that calls to your heart.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:[grid-auto-rows:1fr] lg:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`ink-card relative flex h-full flex-col rounded-sm p-7 ${t.accent ? "ring-2 ring-[var(--vermilion)]" : ""}`}
            >
              {t.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-[var(--vermilion)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--parchment)]">
                  Most Generous
                </span>
              )}
              <h3 className="font-display text-2xl text-[var(--vermilion)]">{t.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{t.period}</p>
              <p className="mt-4 font-display text-4xl text-[var(--ink)]">{t.fee}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed">
                {t.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-[var(--vermilion)]">❖</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(t.name)}
                className="btn-vintage mt-8 w-full rounded-sm px-5 py-2.5 text-xs"
              >
                Choose {t.name.split(" ")[0]}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="om-divider mb-6"><span className="deva text-2xl">॥ अर्हता ॥</span></div>
        <h2 className="text-center font-display text-4xl text-[var(--vermilion)]">Qualification of Members</h2>
        <ol className="mt-10 space-y-4">
          {QUALIFICATIONS.map((q, i) => (
            <li key={i} className="ink-card flex gap-4 rounded-sm p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--vermilion)] font-display text-[var(--parchment)]">
                {i + 1}
              </span>
              <p className="text-base leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>
      </section>

      {showDetailsModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4">
          <div className="ink-card w-full max-w-xl rounded-sm p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Membership Form</p>
                <h3 className="mt-1 font-display text-2xl text-[var(--vermilion)]">{selectedTier}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDetailsModal(false)}
                className="rounded-sm border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.15em]"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleMemberSubmit} className="mt-6 space-y-4">
              <Field label="Name" value={memberForm.name} onChange={(v) => setMemberForm({ ...memberForm, name: v })} required />
              <Field label="Phone No." value={memberForm.phone} onChange={(v) => setMemberForm({ ...memberForm, phone: v })} required />
              <Field label="Email" type="email" value={memberForm.email} onChange={(v) => setMemberForm({ ...memberForm, email: v })} required />
              <Field label="Address" value={memberForm.address} onChange={(v) => setMemberForm({ ...memberForm, address: v })} required />
              <Field label="Gotro" value={memberForm.gotro} onChange={(v) => setMemberForm({ ...memberForm, gotro: v })} required />

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">Payment Method</span>
                <select
                  value={memberForm.paymentMethod}
                  onChange={(e) => setMemberForm({ ...memberForm, paymentMethod: e.target.value })}
                  className="w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] focus:border-[var(--vermilion)] focus:outline-none"
                >
                  {PAYMENT_METHODS.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </label>

              <button type="submit" className="btn-vintage mt-2 w-full rounded-sm py-3 text-sm">
                Submit & Pay
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4">
          <div className="ink-card w-full max-w-lg rounded-sm p-8 text-center">
            <p className="deva text-2xl text-[var(--vermilion)]">॥ धन्यवादः ॥</p>
            <h3 className="mt-3 font-display text-3xl text-[var(--vermilion)]">Payment Received</h3>
            <p className="mt-4 text-base leading-relaxed">
              Your payment has been received successfully for <strong>{selectedTier}</strong>.
            </p>
            <div className="mx-auto mt-5 max-w-sm rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Membership ID</p>
              <p className="mt-2 font-display text-2xl tracking-[0.12em] text-[var(--vermilion)]">{membershipId}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="btn-vintage mt-7 rounded-sm px-8 py-2.5 text-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

function Field({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] focus:border-[var(--vermilion)] focus:outline-none"
      />
    </label>
  );
}
