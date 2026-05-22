import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-vintage inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-xs"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-vintage inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-xs"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-vintage inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-xs"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dev Dham Anandashram — Sanatan Dharma Sanctuary" },
      { name: "description", content: "A vintage Sanatan ashram of Maa Dakshina Kali & Maa Bagalamukhi — devotion, donation, meditation and the eternal way of life at Gazol Doba, Jalpaiguri." },
      { property: "og:title", content: "Dev Dham Anandashram — Sanatan Dharma Sanctuary" },
      { property: "og:description", content: "A vintage Sanatan ashram of Maa Dakshina Kali & Maa Bagalamukhi — devotion, donation, meditation and the eternal way of life at Gazol Doba, Jalpaiguri." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Dev Dham Anandashram — Sanatan Dharma Sanctuary" },
      { name: "twitter:description", content: "A vintage Sanatan ashram of Maa Dakshina Kali & Maa Bagalamukhi — devotion, donation, meditation and the eternal way of life at Gazol Doba, Jalpaiguri." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b59f0986-e62e-4ab8-98ee-3649f078a8b6/id-preview-7daf3178--6fc44c05-6d4a-4f67-aa0d-281fee1e9594.lovable.app-1779282039615.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b59f0986-e62e-4ab8-98ee-3649f078a8b6/id-preview-7daf3178--6fc44c05-6d4a-4f67-aa0d-281fee1e9594.lovable.app-1779282039615.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Eczar:wght@400;500;600;700&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
