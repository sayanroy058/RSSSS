import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = Route.useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminAuthenticated", "true");
      navigate({ to: "/admin" });
      return;
    }

    setError("Invalid credentials. Please try again.");
  };

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="ink-card rounded-sm p-8">
          <h1 className="font-display text-4xl text-[var(--vermilion)]">Admin Login</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Use hardcoded credentials to access the admin panel.
          </p>
          <p className="mt-1 text-xs text-[var(--muted-foreground)]">
            Username: <strong>admin</strong> | Password: <strong>admin123</strong>
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <Field label="Username" value={username} onChange={setUsername} required />
            <Field label="Password" type="password" value={password} onChange={setPassword} required />
            {error && <p className="text-sm text-[var(--vermilion)]">{error}</p>}
            <button type="submit" className="btn-vintage w-full rounded-sm py-3 text-sm">
              Login
            </button>
          </form>
        </div>
      </section>
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
