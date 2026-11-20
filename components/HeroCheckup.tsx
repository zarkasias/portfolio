"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, TriangleAlert } from "lucide-react";
import { heroCheckup } from "@/data/heroCheckup";

type View = "checkup" | "redesign";

// Red marks a problem (the red pen), navy marks the fix with the same number.
function Mark({
  n,
  fixed = false,
  className = "",
}: {
  n: number;
  fixed?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums transition-colors ${
        fixed ? "bg-foreground text-background" : "bg-cta text-cta-foreground"
      } ${className}`}
    >
      {n}
    </span>
  );
}

export function HeroCheckup() {
  const [view, setView] = useState<View>("checkup");
  const { site, image, after, caption, notes, fixes } = heroCheckup;
  const isCheckup = view === "checkup";
  const items = isCheckup ? notes.map((note) => note.text) : fixes;

  return (
    <figure>
      <div
        role="group"
        aria-label="Show"
        className="mb-4 inline-flex rounded-lg border border-border bg-card p-1 shadow-card"
      >
        {(
          [
            ["checkup", "Checkup"],
            ["redesign", "Redesign"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={view === value}
            onClick={() => setView(value)}
            className={`rounded-sm px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              view === value
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="flex h-11 items-center gap-2 border-b border-border bg-secondary px-3 text-sm text-muted-foreground">
          {isCheckup ? (
            <>
              <span className="relative inline-flex items-center gap-1.5 rounded border-2 border-cta px-1.5 py-0.5">
                <TriangleAlert aria-hidden="true" className="h-4 w-4" />
                Not Secure
                <Mark n={1} className="absolute -right-3 -top-3" />
              </span>
              <span aria-hidden="true" className="text-foreground/30">
                |
              </span>
              <span>{site}</span>
            </>
          ) : (
            <>
              <Lock aria-hidden="true" className="h-4 w-4" />
              <span>Redesign proposal, in progress</span>
            </>
          )}
        </div>

        {/* Both screenshots share one grid cell and crossfade. */}
        <div className="grid">
          <div
            aria-hidden={!isCheckup}
            className={`relative [grid-area:1/1] transition-opacity duration-200 ${
              isCheckup ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="h-auto w-full"
            />
            {notes.map((note, index) =>
              "box" in note ? (
                <span
                  key={note.text}
                  aria-hidden="true"
                  className="absolute rounded border-2 border-cta"
                  style={{
                    left: `${note.box.left}%`,
                    top: `${note.box.top}%`,
                    width: `${note.box.width}%`,
                    height: `${note.box.height}%`,
                  }}
                >
                  <Mark n={index + 1} className="absolute -right-3 -top-3" />
                </span>
              ) : null,
            )}
          </div>

          <div
            aria-hidden={isCheckup}
            className={`[grid-area:1/1] transition-opacity duration-200 ${
              isCheckup ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={after.src}
              width={image.width}
              height={image.height}
              alt={after.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {isCheckup ? "Showing checkup notes" : "Showing the redesign"}
      </p>

      <ol className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {items.map((text, index) => (
          <li key={text} className="flex gap-3 text-sm leading-snug">
            <Mark n={index + 1} fixed={!isCheckup} />
            <span className="pt-0.5">{text}</span>
          </li>
        ))}
      </ol>

      <figcaption className="mt-4 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
