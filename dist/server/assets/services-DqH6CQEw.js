import { P as reactExports, H as jsxRuntimeExports } from "./server-Cbs5UW5I.js";
import { L as Link } from "./router-CCsH7_Up.js";
import { L as Layout } from "./Layout-Chwhw_Z3.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$i = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$i);
const __iconNode$h = [
  ["path", { d: "M10 10H6", key: "1bsnug" }],
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
      key: "lrkjwd"
    }
  ],
  ["path", { d: "M8 8v4", key: "1fwk8c" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Ambulance = createLucideIcon("ambulance", __iconNode$h);
const __iconNode$g = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
];
const Bus = createLucideIcon("bus", __iconNode$f);
const __iconNode$e = [
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }]
];
const Cog = createLucideIcon("cog", __iconNode$e);
const __iconNode$d = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
];
const Landmark = createLucideIcon("landmark", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Sprout = createLucideIcon("sprout", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
];
const Stethoscope = createLucideIcon("stethoscope", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }],
  [
    "path",
    {
      d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
      key: "o0xfot"
    }
  ],
  ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }]
];
const Store = createLucideIcon("store", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
];
const Trees = createLucideIcon("trees", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const SERVICES = [{
  icon: Users,
  label: "Community Built-up",
  description: "Community building is rooted in the eternal nature of the soul, encouraging compassion, dharma and shared responsibility across generations."
}, {
  icon: House,
  label: "Old Age Home",
  description: "A 500-bedded fully air-conditioned facility with single, double and triple occupancy, plus dining, activity, indoor games and 24x7 security."
}, {
  icon: Pill,
  label: "24x7 Retail Medicine Store",
  description: "A round-the-clock medicine store with qualified pharmacists, prescription and OTC medicines, supplements and first-aid essentials."
}, {
  icon: Stethoscope,
  label: "24x7 Advanced Medical Clinic with Emergency",
  description: "A state-of-the-art clinic operating 24x7 with diagnostics, emergency units and trained medical staff for routine and urgent care."
}, {
  icon: Activity,
  label: "Day Care OPD Facility",
  description: "Comprehensive OPD care without overnight admission, offering expert consultation, treatment and follow-up across specialties."
}, {
  icon: Ambulance,
  label: "24x7 Advanced Cardiac/non Cardiac AC Ambulance",
  description: "Advanced air-conditioned ambulance support for emergency transport and timely access to critical medical care."
}, {
  icon: Truck,
  label: "24x7 AC Dead Body Carrier",
  description: "Dignified and hygienic transport for the deceased with trained staff and compassionate support for families."
}, {
  icon: Flame,
  label: "Ceremony Hall",
  description: "Twin halls for Shraddha, Upanayan, marriage and devotional gatherings with serene ambiance and modern amenities."
}, {
  icon: GraduationCap,
  label: "Vocational Training",
  description: "Skill-development programs for self-help groups in practical fields to build self-reliance and sustainable livelihoods."
}, {
  icon: Bus,
  label: "AC Bus & Car Service",
  description: "Comfortable and reliable transport for daily travel, special events, pilgrimages and group movement."
}, {
  icon: Store,
  label: "Day Time Retail Shop",
  description: "A daytime outlet for Ashram-made products, spiritual items and essentials that support self-reliance initiatives."
}, {
  icon: Landmark,
  label: "Main Temple of Maa Dakshina Kali with Five Co-Temples",
  description: "The spiritual core of the Ashram with the main Maa Dakshina Kali temple and shrines of Shiva, Vishnu, Hanuman, Ganesha and Lakshmi."
}, {
  icon: Sprout,
  label: "Promoting Agriculture & Fisheries",
  description: "Eco-friendly agriculture and fisheries programs combining modern methods and traditional wisdom for sustainability."
}, {
  icon: Sparkles,
  label: "Light & Sound Presenting Vedic Reincarnation",
  description: "An immersive presentation of karma, dharma, birth, death and rebirth through narration, light and sound."
}, {
  icon: Trees,
  label: "Large Landscape",
  description: "A vast, serene landscape with gardens, sacred trees and water features designed for peace and spiritual calm."
}, {
  icon: Lightbulb,
  label: "Adequate Security with Landscape Lighting",
  description: "CCTV, trained security personnel, controlled access and ambient lighting for safe and well-illuminated movement."
}, {
  icon: ShieldAlert,
  label: "24x7 Police Outpost for Security & Safety",
  description: "A dedicated police outpost in coordination with local law enforcement for discipline, safety and quick assistance."
}, {
  icon: Cog,
  label: "Goushala",
  description: "A dedicated cow shelter with Jersey cows, veterinary care and support for ethical dairy and spiritual stewardship."
}, {
  icon: BookOpen,
  label: "Library & Activity Room for Residents",
  description: "Library and activity spaces for reading, learning, workshops, indoor games and balanced personal growth."
}];
const FAQS = [{
  q: "Who manages Dev Dham Anandashram?",
  a: "The Ashram is proposed and managed by Rashtriya Sanatan Sayang Sebak Sangha, a community devoted to preserving and promoting Sanatan Dharma."
}, {
  q: "Which deities are worshipped at the main temple?",
  a: "The main temple is dedicated to Maa Dakshina Kali, with five co-temples for Lord Shiva, Lord Vishnu (Balaji), Lord Bajrangbali, Lord Ganesha and Maa Lakshmi."
}, {
  q: "Can devotees stay overnight at the Ashram?",
  a: "Yes. Accommodation includes modern air-conditioned rooms in different occupancy categories, based on eligibility and availability."
}, {
  q: "What medical facilities are offered?",
  a: "The Ashram provides a 24x7 medical clinic with emergency support, day-care OPD, medicine store, ambulance and dead body carrier services."
}, {
  q: "How can I support the Ashram?",
  a: "By becoming a member or by offering a one-time donation through the Donate & Membership page."
}];
function Services() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.93_0.05_82)] to-[oklch(0.9_0.06_78)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "deva text-2xl text-[var(--vermilion)]", children: "॥ सेवा परमो धर्मः ॥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl text-[var(--vermilion)] md:text-6xl", children: "Our Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl italic", children: "All services and descriptions are aligned with the official project PDF." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-strip", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s) => {
      const Icon2 = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "ink-card rounded-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-[var(--vermilion)] text-[var(--parchment)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5", strokeWidth: 1.6 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl text-[var(--ink)]", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed text-[var(--muted-foreground)]", children: s.description })
      ] }, s.label);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-divider mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "deva text-2xl", children: "॥ प्रश्नोत्तर ॥" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl text-[var(--vermilion)]", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-lg italic text-[var(--muted-foreground)]", children: "Answers from the keepers of the Ashram." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ink-card rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-[var(--ink)]", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-[var(--vermilion)]", children: open === i ? "-" : "+" })
        ] }),
        open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[var(--border)] px-5 py-4 text-base leading-relaxed", children: f.a })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", className: "btn-vintage rounded-sm px-7 py-3 text-sm", children: "Support with Donation" }) })
    ] })
  ] });
}
export {
  Services as component
};
