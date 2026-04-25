import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SiteBackground } from "@/components/SiteBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black text-gradient-accent">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">पेज नहीं मिला</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          आप जो पेज ढूंढ रहे हैं वो मौजूद नहीं है।
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary"
          >
            होम पर जाएं
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SparkX Electricals • मोटर, फैन, वायरिंग • Husenpur Musalman" },
      {
        name: "description",
        content:
          "SparkX Electricals — Husenpur Musalman, Ambedkar Nagar में 221+ ओरिजिनल इलेक्ट्रिकल प्रोडक्ट्स, मोटर/पंखा रिपेयर, हाउस वायरिंग और इंस्टॉलेशन।",
      },
      { name: "author", content: "SparkX Electricals" },
      { property: "og:title", content: "SparkX Electricals • Husenpur Musalman" },
      { property: "og:description", content: "TOOFAN, HAVELLS, CROMPTON, ANCHOR — सभी ब्रांड वारंटी के साथ।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
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
  return (
    <>
      <SiteBackground />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

