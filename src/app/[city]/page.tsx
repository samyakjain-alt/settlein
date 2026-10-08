import { notFound } from "next/navigation";
import { cities, getCity } from "@/data/cities";
import Checklist from "@/components/Checklist";

export function generateStaticParams() {
  return cities.filter((c) => c.status === "live").map((c) => ({ city: c.slug }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city || city.status !== "live") notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Moving to {city.name}
      </h1>
      <p className="mt-2 text-muted">{city.tagline}</p>
      <Checklist city={city} />
    </div>
  );
}
