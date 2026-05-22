import { P as reactExports, H as jsxRuntimeExports } from "./server-Cbs5UW5I.js";
import { L as Layout } from "./Layout-Chwhw_Z3.js";
import { k as kali } from "./maa-kali-Mkn22Yrg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CCsH7_Up.js";
const TIERS = [{
  name: "Patron Member",
  fee: "₹10,000",
  period: "12 Months",
  accent: false,
  benefits: ["Free Entry to the Ashram premises at any time (no limit)", "Free Stay in the Guest House up to 7 days (Single/Double)", "Free Meals & Bhog Prasad for 7 days", "Free Transportation up to 3 times (Airport/Railway/Bus Stop)", "Free Medical Check-up during the 7-day stay"]
}, {
  name: "Special Donor Member",
  fee: "₹25,000",
  period: "12 Months · Group of 4",
  accent: true,
  benefits: ["Includes group package for 4 persons (member + 3)", "Free Entry at any time (no limit)", "Free Stay up to 7 days (Single/Double)", "Free Meals & Bhog Prasad for 7 days", "Free Transportation up to 3 times", "Free Medical Check-up during the 7-day stay"]
}, {
  name: "Life Member",
  fee: "₹7,500",
  period: "12 Months",
  accent: false,
  benefits: ["Free Entry at any time (no limit)", "Free Stay up to 4 days (Single/Double)", "Free Meals & Bhog Prasad for 4 days", "Free Transportation up to 2 times", "Free Medical Check-up during the 4-day stay"]
}, {
  name: "Executive Member",
  fee: "₹5,000",
  period: "12 Months",
  accent: false,
  benefits: ["Free Entry at any time (no limit)", "Free Stay up to 2 days (Double/Triple)", "Free Meals & Bhog Prasad for 2 days", "Free Transportation up to 1 time", "Free Medical Check-up during the 2-day stay"]
}, {
  name: "Ordinary Member",
  fee: "₹500",
  period: "12 Months",
  accent: false,
  benefits: ["Free Entry at any time (no limit)", "50% Concession on stay up to 2 days (Triple)", "Free Meals & Bhog Prasad for 2 days", "Free Medical Check-up during the 2-day stay"]
}];
const QUALIFICATIONS = ["Shall be at least 18 years of age.", "Shall be legally capable of entering into contractual obligation.", "Should be dedicated to the object of the institution.", "Should be willing to work towards attainment of the aims and objects of the institution.", "Shall not have been convicted of an offence involving moral turpitude.", "Shall be physically and mentally capable to work toward the institution's object.", "Shall sign the prescribed application form; the Managing Committee's decision is final and binding."];
function Donate() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    tier: "Patron Member",
    amount: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: kali, alt: "Maa Dakshina Kali", className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.92_0.05_82_/_0.85)] to-[oklch(0.9_0.06_78)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "deva text-2xl text-[var(--vermilion)]", children: "॥ दानं परं धर्मः ॥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl", children: "Donate & Become a Member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl italic leading-relaxed", children: "Walk hand in hand with Rastriya Sanatan Sayang Sevak Sangha — your donation sustains the eternal flame of Sanatan Dharma." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-divider mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "deva text-2xl", children: "॥ सदस्यता ॥" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl text-[var(--vermilion)]", children: "Membership Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-3xl text-center text-lg italic text-[var(--muted-foreground)]", children: "Five paths of devotion — choose the one that calls to your heart." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 md:[grid-auto-rows:1fr] lg:grid-cols-3", children: TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `ink-card relative flex h-full flex-col rounded-sm p-7 ${t.accent ? "ring-2 ring-[var(--vermilion)]" : ""}`, children: [
        t.accent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-[var(--vermilion)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--parchment)]", children: "Most Generous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-[var(--vermilion)]", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]", children: t.period }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-4xl text-[var(--ink)]", children: t.fee }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex-1 space-y-2 text-sm leading-relaxed", children: t.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--vermilion)]", children: "❖" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setForm((f) => ({
          ...f,
          tier: t.name
        })), className: "btn-vintage mt-8 w-full rounded-sm px-5 py-2.5 text-xs", children: [
          "Choose ",
          t.name.split(" ")[0]
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[oklch(0.91_0.05_80_/_0.5)] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-divider mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "deva text-2xl", children: "॥ संकल्प ॥" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl text-[var(--vermilion)]", children: "Take the Sankalpa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center italic text-[var(--muted-foreground)]", children: "Submit your details — our keepers shall reach out with the next steps for payment and registration." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "ink-card mt-10 space-y-5 rounded-sm p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "deva text-3xl text-[var(--vermilion)]", children: "॥ धन्यवादः ॥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl text-[var(--vermilion)]", children: "Sankalpa Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-base", children: [
          "Pranam, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.name || "devotee" }),
          ". Our team will reach you shortly at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.email || form.phone }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setSubmitted(false);
          setForm({
            name: "",
            email: "",
            phone: "",
            tier: "Patron Member",
            amount: "",
            message: ""
          });
        }, className: "btn-vintage mt-6 rounded-sm px-6 py-2.5 text-xs", children: "Submit Another" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", value: form.name, onChange: (v) => setForm({
            ...form,
            name: v
          }), required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", value: form.email, onChange: (v) => setForm({
            ...form,
            email: v
          }), required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", value: form.phone, onChange: (v) => setForm({
            ...form,
            phone: v
          }), required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]", children: "Membership Tier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.tier, onChange: (e) => setForm({
              ...form,
              tier: e.target.value
            }), className: "w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] focus:border-[var(--vermilion)] focus:outline-none", children: [
              TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t.name }, t.name)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "One-time Donation" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contribution Amount (₹)", value: form.amount, onChange: (v) => setForm({
          ...form,
          amount: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]", children: "A Message to the Ashram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), rows: 4, className: "w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] focus:border-[var(--vermilion)] focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-vintage w-full rounded-sm py-3 text-sm", children: "Offer my Donation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-[var(--muted-foreground)]", children: "By submitting, you affirm devotion to the objects of Rastriya Sanatan Sayang Sevak Sangha." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-divider mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "deva text-2xl", children: "॥ अर्हता ॥" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl text-[var(--vermilion)]", children: "Qualification of Members" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 space-y-4", children: QUALIFICATIONS.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "ink-card flex gap-4 rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--vermilion)] font-display text-[var(--parchment)]", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: q })
      ] }, i)) })
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required, value, onChange: (e) => onChange(e.target.value), className: "w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] focus:border-[var(--vermilion)] focus:outline-none" })
  ] });
}
export {
  Donate as component
};
