import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

type DonationRecord = {
  plan?: string;
  tier?: string;
  membershipId?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  gotro?: string;
  paid?: boolean;
  submittedAt?: string;
  amount?: string;
  paymentMethod?: string;
  transactionNo?: string;
};

const PLAN_AMOUNTS: Record<string, string> = {
  "Patron Member": "10000",
  "Special Donor Member": "25000",
  "Life Member": "7500",
  "Executive Member": "5000",
  "Ordinary Member": "500",
};

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const navigate = Route.useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [records, setRecords] = useState<DonationRecord[]>([]);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem("adminAuthenticated") === "true";
    if (!isAuthed) {
      navigate({ to: "/login" });
      return;
    }

    const submissionsRaw = sessionStorage.getItem("donationMembershipSubmissions");
    const latestRaw = sessionStorage.getItem("donationMembership");
    const normalizedRecords: DonationRecord[] = [];

    if (submissionsRaw) {
      try {
        const parsed = JSON.parse(submissionsRaw);
        if (Array.isArray(parsed)) {
          normalizedRecords.push(...parsed);
        }
      } catch {
        // Ignore malformed session data and continue with other supported keys.
      }
    }

    if (latestRaw) {
      try {
        const parsed = JSON.parse(latestRaw);
        if (parsed && typeof parsed === "object") {
          normalizedRecords.push(parsed);
        }
      } catch {
        // Ignore malformed session data.
      }
    }

    setRecords(normalizedRecords);
    setCheckedAuth(true);
  }, [navigate]);

  const sortedRecords = useMemo(
    () =>
      [...records].sort((a, b) => {
        const aDate = new Date(a.submittedAt || 0).getTime();
        const bDate = new Date(b.submittedAt || 0).getTime();
        return bDate - aDate;
      }),
    [records],
  );

  const logout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    navigate({ to: "/login" });
  };

  const getAmount = (record: DonationRecord) => {
    if (record.amount) {
      return record.amount;
    }
    const planName = record.plan || record.tier || "";
    return PLAN_AMOUNTS[planName] || "";
  };

  if (!checkedAuth) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-[oklch(0.93_0.05_82)]"
      style={{
        // backgroundImage: "url('/pattern-border.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto 28px",
      }}
    >
      <section className="mx-auto max-w-[96rem] px-6 py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-[var(--vermilion)]">Admin Panel</h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Membership and donation activity</p>
          </div>
          <button type="button" onClick={logout} className="btn-vintage rounded-sm px-5 py-2.5 text-xs">
            Logout
          </button>
        </div>

        <div className="ink-card rounded-sm p-4">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)] text-left">
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Membership ID</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Name</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Email</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Phone No.</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Address</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Gotro</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Membership</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Date</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Amount</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Payment Method</th>
                <th className="px-3 py-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Transaction No.</th>
              </tr>
            </thead>
            <tbody>
              {sortedRecords.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-3 py-8 text-center text-sm text-[var(--muted-foreground)]">
                    No membership records found in this session yet.
                  </td>
                </tr>
              ) : (
                sortedRecords.map((record, index) => (
                  <tr key={`${record.email || "entry"}-${index}`} className="border-b border-[var(--border)]/60 align-top">
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.membershipId || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.name || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.email || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.phone || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.address || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.gotro || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.plan || record.tier || "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.submittedAt ? new Date(record.submittedAt).toLocaleString() : "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{getAmount(record) ? `₹ ${getAmount(record)}` : "-"}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.paymentMethod || (record.paid ? "Paid (Session)" : "-")}</td>
                    <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.transactionNo || ""}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
