import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SettleIn — your first 30 days in a new city",
  description:
    "Step-by-step checklists and community-tested tips for settling into a new city.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-line">
          <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              Settle<span className="text-accent">In</span>
            </Link>
            <span className="text-sm text-muted">Moving made less scary</span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-muted">
            Tips come from people who moved before you. Always double-check
            prices and rules.
          </div>
        </footer>
      </body>
    </html>
  );
}
