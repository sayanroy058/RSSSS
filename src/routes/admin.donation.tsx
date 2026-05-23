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

export const Route = createFileRoute("/admin/donation")({
  component: AdminDonationPage,
});

function AdminDonationPage() {
  const [records, setRecords] = useState<DonationRecord[]>([]);

  useEffect(() => {
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
  }, []);

  const sortedRecords = useMemo(
    () =>
      [...records].sort((a, b) => {
        const aDate = new Date(a.submittedAt || 0).getTime();
        const bDate = new Date(b.submittedAt || 0).getTime();
        return bDate - aDate;
      }),
    [records],
  );

  const getAmount = (record: DonationRecord) => {
    if (record.amount) {
      return record.amount;
    }

    const planName = record.plan || record.tier || "";
    return PLAN_AMOUNTS[planName] || "";
  };

  return (
    <div className="ink-card rounded-sm p-4">
      <h2 className="mb-4 font-display text-2xl text-[var(--vermilion)]">Donation Details</h2>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)] text-left">
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Serial No.</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Name</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Email</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Phone No.</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Date</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Amount</th>
            <th className="px-2 py-3 text-[11px] uppercase tracking-[0.12em] whitespace-normal break-words text-[var(--muted-foreground)]">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecords.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-3 py-8 text-center text-sm text-[var(--muted-foreground)]">
                No donation records found in this session yet.
              </td>
            </tr>
          ) : (
            sortedRecords.map((record, index) => (
              <tr key={`${record.email || "entry"}-${index}`} className="border-b border-[var(--border)]/60 align-top">
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{index + 1}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.name || "-"}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.email || "-"}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.phone || "-"}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.submittedAt ? new Date(record.submittedAt).toLocaleString() : "-"}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{getAmount(record) ? `Rs ${getAmount(record)}` : "-"}</td>
                <td className="px-2 py-3 text-sm whitespace-normal break-words">{record.paymentMethod || (record.paid ? "Paid (Session)" : "-")}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
