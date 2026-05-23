import { Link, Outlet, createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const navigate = Route.useNavigate();
  const location = useLocation();
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem("adminAuthenticated") === "true";
    if (!isAuthed) {
      navigate({ to: "/login" });
      return;
    }

    setCheckedAuth(true);
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    navigate({ to: "/login" });
  };

  const navClass = (isActive: boolean) =>
    `block w-full rounded-sm px-4 py-3 text-left text-sm uppercase tracking-[0.14em] ${
      isActive
        ? "bg-[var(--vermilion)] text-[var(--parchment)]"
        : "border border-[var(--border)] text-[var(--ink)] hover:bg-[oklch(0.9_0.05_82)]"
    }`;

  if (!checkedAuth) {
    return null;
  }

  const membershipActive = location.pathname === "/admin" || location.pathname === "/admin/";
  const donationActive = location.pathname === "/admin/donation";

  return (
    <div className="min-h-screen bg-[oklch(0.93_0.05_82)]">
      <section className="flex min-h-screen">
        <aside className="w-full max-w-[18rem] border-r border-[var(--border)] bg-[oklch(0.9_0.05_82)] px-4 py-8 lg:sticky lg:top-0 lg:h-screen">
          <div className="px-2">
            <h1 className="font-display text-3xl text-[var(--vermilion)]">Admin Panel</h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Membership and donation activity</p>
          </div>

          <nav className="mt-8 space-y-2">
            <p className="px-2 py-2 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Sections</p>
            <Link to="/admin" className={navClass(membershipActive)}>
              Membership Page
            </Link>
            <Link to="/admin/donation" className={navClass(donationActive)}>
              Donation Page
            </Link>
          </nav>

          <button type="button" onClick={logout} className="btn-vintage mt-8 w-full rounded-sm px-5 py-2.5 text-xs">
            Logout
          </button>
        </aside>

        <div className="min-w-0 flex-1 px-6 py-10 lg:px-8">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
