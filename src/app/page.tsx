import Link from "next/link";
import { cities } from "@/data/cities";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Moving to a new city?
        <br />
        <span className="text-accent">Here&apos;s exactly what to do next.</span>
      </h1>
      <p className="mt-4 text-muted max-w-xl">
        A clear checklist for your first 30 days, from finding a flat to
        getting gas and Wi-Fi, with tips from people who already did it.
      </p>

      <h2 className="mt-10 mb-3 text-sm font-medium uppercase tracking-wide text-muted">
        Pick your city
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {cities.map((city) =>
          city.status === "live" ? (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="rounded-xl border border-line bg-card p-5 hover:border-accent transition-colors"
            >
              <div className="text-lg font-semibold">{city.name} →</div>
              <div className="text-sm text-muted mt-1">{city.tagline}</div>
            </Link>
          ) : (
            <div
              key={city.slug}
              className="rounded-xl border border-dashed border-line p-5 opacity-60"
            >
              <div className="text-lg font-semibold">{city.name}</div>
              <div className="text-sm text-muted mt-1">{city.tagline}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
