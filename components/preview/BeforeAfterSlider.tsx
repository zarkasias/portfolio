"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: {
    beforeDesktop: string;
    beforePhone: string;
    afterDesktop: string;
    afterPhone: string;
  };
  alt: { before: string; after: string };
};

export function BeforeAfterSlider({ images, alt }: Props) {
  const [view, setView] = useState<"desktop" | "phone">("desktop");
  const [pos, setPos] = useState(50);
  const desktop = view === "desktop";
  const before = desktop ? images.beforeDesktop : images.beforePhone;
  const after = desktop ? images.afterDesktop : images.afterPhone;

  return (
    <div>
      <div
        role="group"
        aria-label="Screen size"
        className="mb-4 inline-flex rounded-lg border border-border bg-muted p-1"
      >
        {(["desktop", "phone"] as const).map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={view === v}
            onClick={() => setView(v)}
            className={`min-h-10 rounded-md px-5 text-sm font-semibold capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              view === v
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-background"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <div
        className={`relative mx-auto overflow-hidden rounded-lg border border-border bg-muted ${
          desktop ? "aspect-[16/10] w-full" : "aspect-[9/16] w-full max-w-[320px]"
        }`}
      >
        <Image
          src={after}
          alt={alt.after}
          fill
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover object-top"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={alt.before}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover object-top"
            unoptimized
          />
        </div>

        <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
          Today
        </span>
        <span className="absolute right-3 top-3 rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
          Refreshed
        </span>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare current homepage with the refreshed design"
          aria-valuetext={`${pos}% showing today's site`}
          className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-0 w-1 -translate-x-1/2 bg-white shadow peer-focus-visible:bg-primary peer-focus-visible:ring-4 peer-focus-visible:ring-white"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow">
            &#8596;
          </span>
        </div>
      </div>
    </div>
  );
}
