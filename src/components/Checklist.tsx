"use client";

import { useEffect, useMemo, useState } from "react";
import { City } from "@/data/types";

// v0: progress and upvotes live in this browser only (localStorage).
// Next step: move upvotes to a real database so everyone sees the same counts.

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: keep working in memory */
  }
}

export default function Checklist({ city }: { city: City }) {
  const doneKey = `settlein:${city.slug}:done`;
  const votesKey = `settlein:${city.slug}:votes`;

  const [done, setDone] = useState<Record<string, boolean>>({});
  const [votes, setVotes] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    setDone(load(doneKey, {}));
    setVotes(load(votesKey, {}));
  }, [doneKey, votesKey]);

  const allSteps = useMemo(() => city.phases.flatMap((p) => p.steps), [city]);
  const doneCount = allSteps.filter((s) => done[s.id]).length;
  const pct = allSteps.length ? Math.round((doneCount / allSteps.length) * 100) : 0;

  function toggleDone(id: string) {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    save(doneKey, next);
  }

  function toggleVote(id: string) {
    const next = { ...votes, [id]: !votes[id] };
    setVotes(next);
    save(votesKey, next);
  }

  return (
    <div className="mt-8">
      {/* Progress */}
      <div className="rounded-xl border border-line bg-card p-4">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Your progress</span>
          <span className="text-muted">
            {doneCount} of {allSteps.length} done
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-line overflow-hidden">
          <div
            className="h-full bg-done transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Phases */}
      {city.phases.map((phase, i) => (
        <section key={phase.id} className="mt-10">
          <div className="flex items-baseline gap-3">
            <span className="text-accent font-semibold">{i + 1}</span>
            <h2 className="text-xl font-semibold">{phase.title}</h2>
            <span className="text-sm text-muted">{phase.when}</span>
          </div>

          <ul className="mt-4 space-y-3">
            {phase.steps.map((step) => {
              const isOpen = open === step.id;
              const isDone = !!done[step.id];
              const tips = [...step.tips]
                .map((t) => ({ ...t, count: t.upvotes + (votes[t.id] ? 1 : 0) }))
                .sort((a, b) => b.count - a.count);

              return (
                <li
                  key={step.id}
                  className="rounded-xl border border-line bg-card"
                >
                  <div className="flex items-start gap-3 p-4">
                    <button
                      onClick={() => toggleDone(step.id)}
                      aria-label={isDone ? "Mark as not done" : "Mark as done"}
                      className={`mt-0.5 h-6 w-6 shrink-0 rounded-full border-2 flex items-center justify-center text-sm ${
                        isDone
                          ? "bg-done border-done text-white"
                          : "border-line hover:border-done"
                      }`}
                    >
                      {isDone ? "✓" : ""}
                    </button>
                    <button
                      onClick={() => setOpen(isOpen ? null : step.id)}
                      className="flex-1 text-left"
                    >
                      <div
                        className={`font-medium ${isDone ? "line-through text-muted" : ""}`}
                      >
                        {step.title}
                      </div>
                      <div className="text-sm text-muted mt-1">
                        {step.summary}
                      </div>
                      <div className="text-sm text-accent mt-2">
                        {isOpen
                          ? "Hide tips"
                          : `${step.tips.length} tip${step.tips.length === 1 ? "" : "s"} from people who did this`}
                      </div>
                    </button>
                  </div>

                  {isOpen && (
                    <div className="border-t border-line px-4 py-3 space-y-3">
                      {tips.length === 0 && (
                        <p className="text-sm text-muted">
                          No tips yet. Be the first to add one.
                        </p>
                      )}
                      {tips.map((tip) => (
                        <div key={tip.id} className="flex gap-3">
                          <button
                            onClick={() => toggleVote(tip.id)}
                            className={`shrink-0 self-start w-12 rounded-lg border text-sm py-1 ${
                              votes[tip.id]
                                ? "bg-accent-soft border-accent text-accent"
                                : "border-line hover:border-accent"
                            }`}
                            aria-label="Upvote tip"
                          >
                            ▲ {tip.count}
                          </button>
                          <div className="text-sm">
                            <p>{tip.text}</p>
                            <p className="text-muted mt-1">— {tip.author}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
