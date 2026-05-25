import { H as jsxRuntimeExports } from "./server-Cbs5UW5I.js";
import { L as Link } from "./router-CCsH7_Up.js";
function Header() {
  const link = "uppercase tracking-[0.2em] text-sm font-semibold text-[var(--ink)] hover:text-[var(--vermilion)] transition-colors";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-20 border-b border-[var(--border)] bg-[oklch(0.95_0.04_85_/_0.85)] backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--vermilion)] bg-[var(--parchment)] text-[var(--vermilion)] deva text-2xl shadow-[inset_0_0_0_2px_var(--gold)]", children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display text-xl tracking-widest text-[var(--vermilion)]", children: "Dev Dham" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]", children: "Anandashram" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: link, activeProps: { className: link + " text-[var(--vermilion)]" }, children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: link, activeProps: { className: link + " text-[var(--vermilion)]" }, children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: link, activeProps: { className: link + " text-[var(--vermilion)]" }, children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", className: link, activeProps: { className: link + " text-[var(--vermilion)]" }, children: "Donate & Membership" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", className: "btn-vintage hidden rounded-sm px-5 py-2.5 text-xs md:inline-block", children: "Donate Now" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-20 border-t border-[var(--border)] bg-[oklch(0.88_0.06_75_/_0.55)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--vermilion)] bg-[var(--parchment)] text-[var(--vermilion)] deva text-2xl", children: "ॐ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-widest text-[var(--vermilion)]", children: "Dev Dham" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]", children: "Anandashram" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]", children: "A sanctuary of Sanatan Dharma devotion, donation and the eternal way of life, nurtured by Rastriya Sanatan Sayang Sebak Sangha." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]", children: "Wander" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[var(--vermilion)]", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-[var(--vermilion)]", children: "About the Ashram" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-[var(--vermilion)]", children: "Our Nineteen Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", className: "hover:text-[var(--vermilion)]", children: "Donate & Membership" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📞 +91 62899 65155" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📞 +91 90731 64234" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✉️ info@rssss.in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🌐 www.rssss.in" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-sm uppercase tracking-[0.25em] text-[var(--vermilion)]", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
          "Gazol Doba, Mouza – Jangal Mohal,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Dodhiya, P.O. Milan Pally,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "P.S. Bharer Alo, Dist. Jalpaiguri,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "West Bengal 735133"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.google.com/maps/place/Dev+Dham+Anandashram/@26.7113061,88.5916827,17z",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--vermilion)] underline-offset-4 hover:underline",
            children: "View on Map →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[oklch(0.45_0.18_30)] py-4 text-center text-xs uppercase tracking-[0.3em] text-[var(--parchment)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "deva mr-3 text-base", children: "ॐ नमः शिवाय" }),
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Dev Dham Anandashram Sanatan Dharma Forever"
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Layout as L
};
