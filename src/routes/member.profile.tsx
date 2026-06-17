import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type ChangeEvent } from "react";
import { MemberLayout } from "@/components/MemberLayout";
import type { MemberProfile } from "./member.login";

export const Route = createFileRoute("/member/profile")({
  component: MemberProfilePage,
});

function MemberProfilePage() {
  const navigate = Route.useNavigate();

  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ aadhaar: "", pan: "", photo: "" });
  const photoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("memberAuthenticated");
    const memberId = sessionStorage.getItem("currentMemberId");
    if (!auth || !memberId) {
      navigate({ to: "/member/login" });
      return;
    }
    const members = JSON.parse(localStorage.getItem("members") || "{}");
    const member = members[memberId];
    if (!member) {
      navigate({ to: "/member/login" });
      return;
    }
    setProfile(member.profile);
    setForm({
      aadhaar: member.profile.aadhaar || "",
      pan: member.profile.pan || "",
      photo: member.profile.photo || "",
    });
    if (member.isFirstLogin) {
      setIsFirstLogin(true);
      setShowChangePassword(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("memberAuthenticated");
    sessionStorage.removeItem("currentMemberId");
    navigate({ to: "/member/login" });
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = ev.target?.result as string;
      setForm((f) => ({ ...f, photo: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = () => {
    const memberId = sessionStorage.getItem("currentMemberId")!;
    const members = JSON.parse(localStorage.getItem("members") || "{}");
    members[memberId].profile = { ...members[memberId].profile, ...form };
    localStorage.setItem("members", JSON.stringify(members));
    setProfile((p) => (p ? { ...p, ...form } : p));
    setEditMode(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDownloadCard = () => {
    if (!profile) return;
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 560;
    const ctx = canvas.getContext("2d")!;

    const drawCard = (logoImg: HTMLImageElement | null) => {
      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 900, 560);
      grad.addColorStop(0, "#f5e6c8");
      grad.addColorStop(1, "#e8d5a3");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 900, 560);

      // Top band
      ctx.fillStyle = "#8b1a1a";
      ctx.fillRect(0, 0, 900, 100);

      // Bottom band
      ctx.fillStyle = "#8b1a1a";
      ctx.fillRect(0, 460, 900, 100);

      // Logo in top-left of band
      if (logoImg) {
        ctx.drawImage(logoImg, 14, 8, 80, 80);
      }

      // Title text in top band (offset right of logo)
      ctx.fillStyle = "#f5e6c8";
      ctx.font = "bold 20px serif";
      ctx.textAlign = "center";
      ctx.fillText("Rastriya Sanatan Sayang Sebak Sangha", 490, 36);
      ctx.font = "14px serif";
      ctx.fillText("Dev Dham Anandashram  •  Gazol Doba, Jalpaiguri, West Bengal", 490, 62);
      ctx.font = "italic 12px serif";
      ctx.fillText("Maa Dakshina Kali & Maa Bagalamukhi Sanctuary", 490, 84);

      // Gold border line under top band
      ctx.strokeStyle = "#c9a84c";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 100);
      ctx.lineTo(900, 100);
      ctx.stroke();

      // Gold border line above bottom band
      ctx.beginPath();
      ctx.moveTo(0, 460);
      ctx.lineTo(900, 460);
      ctx.stroke();

      // Member photo
      const photoX = 40, photoY = 120, photoW = 150, photoH = 185;
      ctx.strokeStyle = "#c9a84c";
      ctx.lineWidth = 3;
      ctx.strokeRect(photoX, photoY, photoW, photoH);

      const memberImg = new Image();
      memberImg.onload = () => {
        ctx.drawImage(memberImg, photoX, photoY, photoW, photoH);
        drawDetails(ctx, canvas, profile!, form);
      };
      memberImg.onerror = () => drawDetails(ctx, canvas, profile!, form);
      memberImg.src = form.photo;
    };

    const logoImg = new Image();
    logoImg.crossOrigin = "anonymous";
    logoImg.onload = () => drawCard(logoImg);
    logoImg.onerror = () => drawCard(null);
    logoImg.src = "https://www.rssss.in/assets/dev-dham-logo-Djjdsl_J.png";
  };

  if (!profile) return null;

  const completionFields = [profile.aadhaar, profile.pan, form.photo];
  const completionCount = completionFields.filter(Boolean).length;
  const completionPct = Math.round(((completionCount + 6) / 9) * 100);
  const canDownload = !!(profile.aadhaar && profile.pan && form.photo);

  return (
    <MemberLayout>
      {/* Full-screen password gate — renders on top of everything, no scrolling through */}
      {showChangePassword && (
        <ChangePasswordModal
          isFirstLogin={isFirstLogin}
          onClose={() => {
            setShowChangePassword(false);
            if (isFirstLogin) {
              const memberId = sessionStorage.getItem("currentMemberId")!;
              const members = JSON.parse(localStorage.getItem("members") || "{}");
              members[memberId].isFirstLogin = false;
              localStorage.setItem("members", JSON.stringify(members));
              setIsFirstLogin(false);
            }
          }}
        />
      )}

      <section className="mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://www.rssss.in/assets/dev-dham-logo-Djjdsl_J.png"
              alt="Dev Dham Anandashram"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="font-display text-3xl text-[var(--vermilion)]">Member Profile</h1>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Membership ID:{" "}
                <span className="font-semibold text-[var(--ink)]">{profile.membershipId}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowChangePassword(true)}
              className="rounded-sm border border-[var(--vermilion)] px-4 py-2 text-xs text-[var(--vermilion)] transition-colors hover:bg-[var(--vermilion)] hover:text-[var(--parchment)]"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="rounded-sm border border-[var(--border)] px-4 py-2 text-xs text-[var(--muted-foreground)] transition-colors hover:border-[var(--vermilion)] hover:text-[var(--vermilion)]"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Profile Completion Bar */}
        <div className="ink-card mb-8 rounded-sm p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
              Profile Completion
            </span>
            <span className="font-display text-sm text-[var(--vermilion)]">{completionPct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--parchment-dark)]">
            <div
              className="h-2 rounded-full bg-[var(--vermilion)] transition-all duration-700"
              style={{ width: `${completionPct}%` }}
            />
          </div>
          {completionPct < 100 && (
            <p className="mt-2 text-xs text-[var(--muted-foreground)]">
              Add your Aadhaar, PAN and photo to complete your profile.
            </p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Photo & ID Card */}
          <div className="space-y-6">
            {/* Photo Upload */}
            <div className="ink-card rounded-sm p-5 text-center">
              <div
                className="relative mx-auto mb-4 h-36 w-36 cursor-pointer overflow-hidden rounded-sm border-2 border-[var(--gold)] bg-[var(--parchment-dark)]"
                onClick={() => editMode && photoRef.current?.click()}
              >
                {form.photo ? (
                  <img src={form.photo} alt="Member" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-[var(--muted-foreground)]">
                    <span className="text-4xl">👤</span>
                    <span className="mt-1 text-xs">No photo</span>
                  </div>
                )}
                {editMode && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs text-white">
                    Click to upload
                  </div>
                )}
              </div>
              <input
                ref={photoRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <p className="font-display text-base text-[var(--ink)]">{profile.name}</p>
              <p className="mt-1 text-xs text-[var(--vermilion)]">{profile.membershipTier}</p>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                Since {formatDate(profile.joinDate)}
              </p>
              {editMode && (
                <button
                  onClick={() => photoRef.current?.click()}
                  className="mt-3 text-xs text-[var(--vermilion)] underline underline-offset-2"
                >
                  Upload Photo
                </button>
              )}
            </div>

            {/* Download ID Card */}
            <div className="ink-card rounded-sm p-5">
              <h3 className="mb-3 font-display text-sm text-[var(--ink)]">Membership ID Card</h3>
              {!canDownload && (
                <div className="mb-3 space-y-1">
                  <p className="text-xs font-semibold text-[var(--muted-foreground)]">
                    Required to unlock:
                  </p>
                  <p className={`flex items-center gap-1.5 text-xs ${form.photo ? "text-[var(--ink)]" : "text-[var(--vermilion)]"}`}>
                    <span>{form.photo ? "✓" : "○"}</span> Profile photo
                  </p>
                  <p className={`flex items-center gap-1.5 text-xs ${profile.aadhaar ? "text-[var(--ink)]" : "text-[var(--vermilion)]"}`}>
                    <span>{profile.aadhaar ? "✓" : "○"}</span> Aadhaar number
                  </p>
                  <p className={`flex items-center gap-1.5 text-xs ${profile.pan ? "text-[var(--ink)]" : "text-[var(--vermilion)]"}`}>
                    <span>{profile.pan ? "✓" : "○"}</span> PAN number
                  </p>
                </div>
              )}
              {canDownload && (
                <p className="mb-3 text-xs text-[var(--muted-foreground)]">
                  Download your official membership card to present at ashram events.
                </p>
              )}
              <button
                onClick={canDownload ? handleDownloadCard : undefined}
                disabled={!canDownload}
                className={`w-full rounded-sm py-2.5 text-xs transition-opacity ${
                  canDownload
                    ? "btn-vintage cursor-pointer"
                    : "cursor-not-allowed border border-[var(--border)] bg-[var(--parchment-dark)] text-[var(--muted-foreground)] opacity-50"
                }`}
              >
                Download ID Card
              </button>
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6 lg:col-span-2">
            {/* Personal Details */}
            <div className="ink-card rounded-sm p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg text-[var(--vermilion)]">Personal Details</h2>
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-xs text-[var(--vermilion)] underline underline-offset-2"
                  >
                    Edit KYC Details
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditMode(false)}
                      className="text-xs text-[var(--muted-foreground)] underline underline-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="rounded-sm bg-[var(--vermilion)] px-3 py-1 text-xs text-[var(--parchment)]"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>

              {saved && (
                <div className="mb-4 rounded-sm border border-[var(--gold)] bg-[var(--parchment-dark)] px-4 py-2 text-xs text-[var(--ink)]">
                  Profile updated successfully.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoField label="Full Name" value={profile.name} />
                <InfoField label="Gotro" value={profile.gotro} />
                <InfoField label="Father's Name" value={profile.fathersName} />
                <InfoField label="Phone" value={profile.phone} />
                <InfoField label="Email" value={profile.email} />
                <InfoField label="Membership Tier" value={profile.membershipTier} />
                <div className="sm:col-span-2">
                  <InfoField label="Address" value={profile.address} />
                </div>
              </div>
            </div>

            {/* KYC Details */}
            <div className="ink-card rounded-sm p-6">
              <h2 className="mb-4 font-display text-lg text-[var(--vermilion)]">KYC Documents</h2>
              <div className="space-y-5">
                {editMode ? (
                  <>
                    <EditField
                      label="Aadhaar Card Number"
                      value={form.aadhaar}
                      onChange={(v) => setForm((f) => ({ ...f, aadhaar: v }))}
                      placeholder="XXXX XXXX XXXX"
                      maxLength={14}
                      pattern="[0-9 ]{14}"
                      hint="12-digit Aadhaar number (spaces allowed)"
                    />
                    <EditField
                      label="PAN Card Number"
                      value={form.pan}
                      onChange={(v) => setForm((f) => ({ ...f, pan: v.toUpperCase() }))}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      hint="10-character PAN number"
                    />
                  </>
                ) : (
                  <>
                    <InfoField
                      label="Aadhaar Card Number"
                      value={maskAadhaar(profile.aadhaar)}
                      empty="Not provided"
                    />
                    <InfoField
                      label="PAN Card Number"
                      value={maskPan(profile.pan)}
                      empty="Not provided"
                    />
                  </>
                )}
              </div>

              {!editMode && (!profile.aadhaar || !profile.pan) && (
                <button
                  onClick={() => setEditMode(true)}
                  className="mt-4 text-xs text-[var(--vermilion)] underline underline-offset-2"
                >
                  Add KYC details to complete profile
                </button>
              )}
            </div>

            {/* Membership ID */}
            <div className="ink-card rounded-sm border border-[var(--gold)]/50 p-6">
              <h2 className="mb-4 font-display text-lg text-[var(--vermilion)]">
                Membership Information
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                    Unique Membership ID
                  </p>
                  <p className="font-display text-lg text-[var(--ink)]">{profile.membershipId}</p>
                </div>
                <InfoField label="Member Since" value={formatDate(profile.joinDate)} />
                <InfoField label="Membership Category" value={profile.membershipTier} />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                    Status
                  </p>
                  <span className="inline-block rounded-sm bg-[var(--gold)]/20 px-2 py-0.5 text-xs font-semibold text-[var(--ink)]">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MemberLayout>
  );
}

function ChangePasswordModal({
  isFirstLogin,
  onClose,
}: {
  isFirstLogin: boolean;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const memberId = sessionStorage.getItem("currentMemberId")!;
    const members = JSON.parse(localStorage.getItem("members") || "{}");
    const member = members[memberId];

    if (!isFirstLogin && member.password !== current) {
      setError("Current password is incorrect.");
      return;
    }
    if (newPass.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (newPass !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    members[memberId].password = newPass;
    members[memberId].isFirstLogin = false;
    localStorage.setItem("members", JSON.stringify(members));
    setSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4" style={{ background: "var(--background)" }}>
      <div className="mb-8 text-center">
        <img
          src="https://www.rssss.in/assets/dev-dham-logo-Djjdsl_J.png"
          alt="Dev Dham Anandashram"
          className="mx-auto mb-2 h-20 w-auto object-contain"
        />
        <p className="font-display text-sm tracking-widest text-[var(--muted-foreground)]">
          Dev Dham Anandashram
        </p>
      </div>
      <div className="ink-card w-full max-w-md rounded-sm border border-[var(--gold)]/60 p-8 shadow-xl">
        <h2 className="font-display text-2xl text-[var(--vermilion)]">
          {isFirstLogin ? "Set Your Password" : "Change Password"}
        </h2>
        {isFirstLogin && (
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Welcome! Please set a new password for your account before continuing.
          </p>
        )}

        {success ? (
          <p className="mt-6 text-center text-sm text-[var(--ink)]">
            Password changed successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {!isFirstLogin && (
              <ModalField label="Current Password" type="password" value={current} onChange={setCurrent} required />
            )}
            <ModalField label="New Password" type="password" value={newPass} onChange={setNewPass} required />
            <ModalField label="Confirm New Password" type="password" value={confirm} onChange={setConfirm} required />
            {error && <p className="text-sm text-[var(--vermilion)]">{error}</p>}
            <div className="flex gap-3 pt-2">
              <button type="submit" className="btn-vintage flex-1 rounded-sm py-2.5 text-sm">
                {isFirstLogin ? "Set Password" : "Update Password"}
              </button>
              {!isFirstLogin && (
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-sm border border-[var(--border)] py-2.5 text-sm text-[var(--muted-foreground)]"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function ModalField({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
        {label}
      </span>
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

function InfoField({
  label,
  value,
  empty = "—",
}: {
  label: string;
  value: string;
  empty?: string;
}) {
  return (
    <div>
      <p className="mb-1 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
        {label}
      </p>
      <p className={`text-sm ${value ? "text-[var(--ink)]" : "italic text-[var(--muted-foreground)]"}`}>
        {value || empty}
      </p>
    </div>
  );
}

function EditField({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  pattern,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        className="w-full rounded-sm border border-[var(--border)] bg-[var(--parchment)] px-3 py-2.5 font-serif text-base text-[var(--ink)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--vermilion)] focus:outline-none"
      />
      {hint && <p className="mt-1 text-xs text-[var(--muted-foreground)]">{hint}</p>}
    </label>
  );
}

function maskAadhaar(v: string) {
  if (!v) return "";
  const digits = v.replace(/\s/g, "");
  if (digits.length < 12) return v;
  return `XXXX XXXX ${digits.slice(8)}`;
}

function maskPan(v: string) {
  if (!v || v.length < 10) return v;
  return `${v.slice(0, 2)}XXXXXXX${v.slice(9)}`;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function drawDetails(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  profile: MemberProfile,
  form: { aadhaar: string; pan: string; photo: string }
) {
  // Vertical gold divider between photo and details
  ctx.strokeStyle = "#c9a84c";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(210, 115);
  ctx.lineTo(210, 450);
  ctx.stroke();

  // Membership ID section
  ctx.fillStyle = "#8b1a1a";
  ctx.font = "bold 11px monospace";
  ctx.textAlign = "left";
  ctx.fillText("MEMBERSHIP ID", 228, 138);
  ctx.font = "bold 18px monospace";
  ctx.fillStyle = "#2d1a0e";
  ctx.fillText(profile.membershipId, 228, 162);

  // Thin separator
  ctx.strokeStyle = "#c9a84c";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(228, 172);
  ctx.lineTo(870, 172);
  ctx.stroke();

  // Details grid
  const details: [string, string][] = [
    ["NAME", profile.name],
    ["GOTRO", profile.gotro],
    ["FATHER'S NAME", profile.fathersName],
    ["PHONE", profile.phone],
    ["EMAIL", profile.email],
    ["ADDRESS", profile.address],
  ];

  let y = 196;
  for (const [lbl, val] of details) {
    ctx.font = "bold 10px sans-serif";
    ctx.fillStyle = "#8b1a1a";
    ctx.textAlign = "left";
    ctx.fillText(lbl, 228, y);
    ctx.font = "13px serif";
    ctx.fillStyle = "#2d1a0e";
    // Truncate long values
    const maxW = 630;
    let displayVal = val;
    while (ctx.measureText(displayVal).width > maxW && displayVal.length > 0) {
      displayVal = displayVal.slice(0, -1);
    }
    if (displayVal !== val) displayVal += "…";
    ctx.fillText(displayVal, 228, y + 16);
    y += 42;
  }

  // Membership tier badge
  ctx.fillStyle = "#8b1a1a";
  ctx.fillRect(228, 388, 220, 30);
  ctx.fillStyle = "#f5e6c8";
  ctx.font = "bold 13px serif";
  ctx.textAlign = "center";
  ctx.fillText(profile.membershipTier.toUpperCase(), 338, 408);

  // Active status badge
  ctx.fillStyle = "#c9a84c";
  ctx.fillRect(460, 388, 100, 30);
  ctx.fillStyle = "#2d1a0e";
  ctx.font = "bold 12px serif";
  ctx.textAlign = "center";
  ctx.fillText("ACTIVE", 510, 408);

  // Member photo name below photo
  ctx.fillStyle = "#2d1a0e";
  ctx.font = "bold 11px serif";
  ctx.textAlign = "center";
  ctx.fillText("MEMBER", 115, 326);

  // Footer
  ctx.fillStyle = "#f5e6c8";
  ctx.font = "12px serif";
  ctx.textAlign = "center";
  ctx.fillText("Dev Dham Anandashram  •  Gazol Doba, Jalpaiguri  •  West Bengal", 450, 488);

  // OM on the right of footer
  ctx.font = "bold 28px serif";
  ctx.fillStyle = "#c9a84c";
  ctx.textAlign = "right";
  ctx.fillText("ॐ", 878, 492);

  // Download
  const link = document.createElement("a");
  link.download = `${profile.membershipId}-ID-Card.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
