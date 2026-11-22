"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { HERO_COOKIE, heroImages } from "@/lib/heroImages";

/* Tweak the picker here. The crossfade length is --hero-crossfade in
   app/globals.css, since the hero and the page frame both use it. */
const PICKER_VARS = {
  // Nudges from the corner the bar sits in: its bottom edge is level with the
  // glass panel's, its right edge on the page's content edge. Positive values
  // move it up / left.
  "--picker-inset-x": "0px",
  "--picker-inset-y": "0px",
  "--picker-height": "28px",
  "--picker-pad": "6px",
  "--picker-hit": "20px", // clickable width of each dot
  "--picker-dot": "8px",
  "--picker-fill": "rgb(15 23 42 / 0.42)",
  "--picker-blur": "8px",
  "--picker-rest": "0.3",
  "--picker-hover": "1",
  "--picker-fade": "250ms", // fade in on hover/focus (also the dot colour change)
  "--picker-fade-out": "900ms", // fade back to rest
  "--picker-dot-on": "#ffffff",
  "--picker-dot-off": "#a1a7b0",
  "--picker-dot-hover": "#d4d8de",
  "--picker-ring": "2px solid #ffffff",
} as CSSProperties;

const ONE_YEAR = 60 * 60 * 24 * 365;

/** The chosen photo lives on <html data-hero>, set before paint. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-hero"],
  });
  return () => observer.disconnect();
}
const getSnapshot = () => Number(document.documentElement.dataset.hero) || 1;
const getServerSnapshot = () => 0;

/** Mount the hidden layers (at opacity 0) so their photos start loading. */
function warm() {
  document.documentElement.dataset.heroWarm = "";
}

export function HeroPicker() {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pending = useRef(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const count = heroImages.length;
  // The dot holding focus while the keyboard is inside the bar; null once
  // focus leaves, so the Tab stop goes back to the selected dot.
  const [focused, setFocused] = useState<number | null>(null);

  async function select(n: number) {
    const html = document.documentElement;
    const current = html.dataset.hero ?? "1";
    if (current === String(n)) return;

    warm();
    const ticket = ++pending.current;

    // Wait for the new photo so the crossfade never fades in a blank layer.
    const img = document.querySelector<HTMLImageElement>(
      `.hero-photo [data-hero-layer="${n}"] img`,
    );
    try {
      await img?.decode();
    } catch {
      // Show it anyway; the blur placeholder covers a failed decode.
    }
    if (ticket !== pending.current) return; // a later click won

    html.dataset.heroPrev = current;
    html.dataset.hero = String(n);

    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${HERO_COOKIE}=${n}; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax${secure}`;
  }

  /* One Tab stop for the whole bar (on the selected dot); arrow keys, Home
     and End move between dots, Enter or Space picks one. */
  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const from = buttons.current.indexOf(e.target as HTMLButtonElement);
    if (from < 0) return;
    const to =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (from + 1) % count
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (from - 1 + count) % count
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? count - 1
              : -1;
    if (to < 0) return;
    e.preventDefault();
    buttons.current[to]?.focus();
  }

  const tabStop = focused ?? (active || 1);

  return (
    <div
      className="hero-picker"
      style={PICKER_VARS}
      role="toolbar"
      aria-label="Hero background"
      onPointerEnter={warm}
      onFocus={warm}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(null);
      }}
      onKeyDown={onKeyDown}
    >
      {heroImages.map((_, i) => {
        const n = i + 1;
        return (
          <button
            key={n}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            tabIndex={n === tabStop ? 0 : -1}
            aria-label={`Show background ${n} of ${count}`}
            aria-pressed={active === n}
            onFocus={() => setFocused(n)}
            onClick={() => select(n)}
          />
        );
      })}
    </div>
  );
}
