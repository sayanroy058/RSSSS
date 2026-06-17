import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MemberLayout } from "@/components/MemberLayout";

export const Route = createFileRoute("/member/login")({
  component: MemberLoginPage,
});

function MemberLoginPage() {
  const navigate = Route.useNavigate();
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get stored members from localStorage
    const members: Record<string, { password: string; profile: MemberProfile }> =
      JSON.parse(localStorage.getItem("members") || "{}");

    const member = members[memberId];

    if (!member) {
      setError("Membership ID not found. Please check your ID.");
      return;
    }

    if (member.password !== password) {
      setError("Invalid password. Please try again.");
      return;
    }

    sessionStorage.setItem("memberAuthenticated", "true");
    sessionStorage.setItem("currentMemberId", memberId);
    navigate({ to: "/member/profile" });
  };

  // Seed demo member for testing
  const seedDemo = () => {
    const demoId = "RSSSS-2024-0001";
    const members = JSON.parse(localStorage.getItem("members") || "{}");
    if (!members[demoId]) {
      members[demoId] = {
        password: "Welcome@1",
        isFirstLogin: true,
        profile: {
          membershipId: demoId,
          name: "Ramesh Kumar Sharma",
          gotro: "Kashyap",
          fathersName: "Suresh Kumar Sharma",
          phone: "9876543210",
          email: "ramesh.sharma@example.com",
          address: "12, Durga Nagar, Jalpaiguri, West Bengal - 735101",
          membershipTier: "Life Member",
          joinDate: "2024-01-15",
          aadhaar: "",
          pan: "",
          photo: "",
        },
      };
      localStorage.setItem("members", JSON.stringify(members));
    }
    setMemberId(demoId);
    setPassword("Welcome@1");
  };

  return (
    <MemberLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="ink-card rounded-sm p-8">
          <div className="mb-6 text-center">
            <img
              src="https://www.rssss.in/assets/dev-dham-logo-Djjdsl_J.png"
              alt="Dev Dham Anandashram"
              className="mx-auto mb-3 h-20 w-auto object-contain"
            />
            <h1 className="font-display text-4xl text-[var(--vermilion)]">Member Login</h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Access your membership profile and ID card
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <Field
              label="Membership ID"
              placeholder="e.g. RSSSS-2024-0001"
              value={memberId}
              onChange={setMemberId}
              required
            />
            <Field
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={setPassword}
              required
            />
            {error && <p className="text-sm text-[var(--vermilion)]">{error}</p>}
            <button type="submit" className="btn-vintage w-full rounded-sm py-3 text-sm">
              Login to My Profile
            </button>
          </form>

          <div className="mt-6 border-t border-[var(--border)] pt-6 text-center">
            <p className="text-xs text-[var(--muted-foreground)]">
              New member? Your Membership ID and temporary password are sent after registration.
            </p>
            <button
              type="button"
              onClick={seedDemo}
              className="mt-3 text-xs text-[var(--vermilion)] underline underline-offset-2"
            >
              Load demo member for testing
            </button>
          </div>
        </div>
      </section>
    </MemberLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--vermilion)] focus:outline-none"
      />
    </label>
  );
}

export interface MemberProfile {
  membershipId: string;
  name: string;
  gotro: string;
  fathersName: string;
  phone: string;
  email: string;
  address: string;
  membershipTier: string;
  joinDate: string;
  aadhaar: string;
  pan: string;
  photo: string;
}
