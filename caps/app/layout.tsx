import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELIMI | Unified TVET Platform",
  description:
    "ELIMI is a 3-in-1 Technical and Vocational Education and Training platform built on a unified identity model — one user, seamless access across all three modules.",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                (function() {
                  var observer = new MutationObserver(function() {
                    document.querySelectorAll('[bis_skin_checked], [bis_register], [__processed_]').forEach(function(el) {
                      el.removeAttribute('bis_skin_checked');
                      el.removeAttribute('bis_register');
                      Object.keys(el.attributes).forEach(function(key) {
                        var name = el.attributes[key].name;
                        if (name.startsWith('__processed_')) el.removeAttribute(name);
                      });
                    });
                  });
                  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
                })();
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans text-dark">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
