"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Pause, Play } from "lucide-react";

const bar = "rounded-full";

// One independently moving layer. Depth sets how far it responds to the
// pointer and to scrolling; the rest sets its entrance and its drift.
function Piece({
  className,
  depth,
  delay,
  duration,
  drift,
  tilt,
  from,
  children,
}: {
  className: string;
  depth: number;
  delay: number;
  duration: number;
  drift: number;
  tilt: number;
  from: [number, number];
  children: ReactNode;
}) {
  return (
    <div
      className={`hv-piece ${className}`}
      style={
        {
          "--d": depth,
          "--delay": `${delay}s`,
          "--dur": `${duration}s`,
          "--drift": `${drift}px`,
          "--tilt": `${tilt}deg`,
          "--from-x": `${from[0]}px`,
          "--from-y": `${from[1]}px`,
        } as React.CSSProperties
      }
    >
      <div className="hv-float h-full">{children}</div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground shadow-md">
      <Check className="h-4 w-4 text-primary" strokeWidth={3} />
      {label}
    </span>
  );
}

function Picture({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-card ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/40" />
      <div className="hv-sun absolute right-[14%] top-[16%] h-[26%] w-[20%] rounded-full bg-white/70" />
      <div className="absolute -bottom-[30%] -left-[10%] h-[80%] w-[80%] rounded-full bg-foreground/30" />
      <div className="absolute -bottom-[40%] right-[-20%] h-[85%] w-[80%] rounded-full bg-foreground/50" />
    </div>
  );
}

// A decorative, generic website rather than a made-up client.
export function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = root.current;
    const section = element?.closest("section");
    if (
      !element ||
      !section ||
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let mx = 0;
    let my = 0;

    const render = () => {
      frame = 0;
      element.style.setProperty("--mx", mx.toFixed(3));
      element.style.setProperty("--my", my.toFixed(3));
      element.style.setProperty("--sy", window.scrollY.toFixed(0));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = section.getBoundingClientRect();
      mx = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      my = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      schedule();
    };

    section.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", schedule, { passive: true });

    // No need to keep animating once the hero has scrolled away.
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle("hv-paused", !entry.isIntersecting);
    });
    observer.observe(element);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule);
      observer.disconnect();
      element.classList.remove("hv-paused");
    };
  }, [paused]);

  return (
    <div ref={root} className={`relative ${paused ? "hv-stopped" : ""}`}>
      <div aria-hidden="true">
        <div className="relative aspect-[6/5]">
          <Piece
            className="absolute left-0 top-[7%] h-[66%] w-[80%]"
            depth={5}
            delay={0}
            duration={9}
            drift={5}
            tilt={0.15}
            from={[-24, 16]}
          >
            <div className="h-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className={`ml-3 h-4 w-1/2 bg-card ${bar}`} />
              </div>
              <div className="px-5 py-4">
                <span className={`block h-3 w-16 bg-foreground sm:h-4 sm:w-20 ${bar}`} />
              </div>
              <div className="w-[46%] px-5">
                <div className={`h-3 w-full bg-foreground sm:h-5 ${bar}`} />
                <div className={`mt-2 h-3 w-4/5 bg-foreground sm:mt-2.5 sm:h-5 ${bar}`} />
                <div className={`mt-4 h-2 w-full bg-foreground/25 ${bar}`} />
                <div className={`mt-2 h-2 w-3/5 bg-foreground/25 ${bar}`} />
                <div className="mt-4 hidden h-8 w-24 rounded-md bg-cta lg:block" />
              </div>
            </div>
          </Piece>

          <Piece
            className="absolute left-[41%] top-[21%] w-[46%]"
            depth={14}
            delay={0.25}
            duration={7}
            drift={-8}
            tilt={-0.6}
            from={[30, -18]}
          >
            <Picture className="aspect-[4/3] rounded-lg shadow-xl ring-4 ring-card" />
          </Piece>

          <Piece
            className="absolute bottom-[6%] left-[5%] w-[58%]"
            depth={10}
            delay={0.45}
            duration={8}
            drift={7}
            tilt={0.5}
            from={[-16, 34]}
          >
            <div className="grid grid-cols-3 gap-3 rounded-lg border border-border bg-card p-3 shadow-xl sm:p-5">
              {[0, 1, 2].map((tile) => (
                <div key={tile}>
                  <div className="h-5 w-5 rounded-md bg-primary/25 sm:h-8 sm:w-8" />
                  <div className={`mt-2 h-2 w-4/5 bg-foreground/40 sm:mt-3 ${bar}`} />
                  <div className={`mt-2 h-2 w-full bg-foreground/20 ${bar}`} />
                </div>
              ))}
            </div>
          </Piece>

          <Piece
            className="absolute bottom-0 right-0 w-[27%]"
            depth={20}
            delay={0.65}
            duration={6}
            drift={-10}
            tilt={0.8}
            from={[26, 42]}
          >
            <div className="overflow-hidden rounded-[1.4rem] border-[5px] border-foreground bg-card shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className={`h-2.5 w-8 bg-foreground ${bar}`} />
                <span className="h-3 w-4 rounded-sm bg-foreground/30" />
              </div>
              <Picture className="aspect-[5/3]" />
              <div className="p-3">
                <div className={`h-2.5 w-full bg-foreground ${bar}`} />
                <div className={`mt-2 h-2.5 w-3/4 bg-foreground ${bar}`} />
                <div className="mt-3 h-6 w-full rounded-md bg-cta sm:h-8" />
              </div>
            </div>
          </Piece>

          <Piece
            className="absolute left-[-1%] top-0 hidden sm:block"
            depth={24}
            delay={0.9}
            duration={5}
            drift={-6}
            tilt={-1}
            from={[-20, -14]}
          >
            <Chip label="Looks current" />
          </Piece>
          <Piece
            className="absolute right-[-1%] top-[33%] hidden sm:block"
            depth={28}
            delay={1.1}
            duration={6.5}
            drift={7}
            tilt={1}
            from={[24, 0]}
          >
            <Chip label="Works on phones" />
          </Piece>
          <Piece
            className="absolute bottom-[-1%] left-[34%] hidden sm:block"
            depth={22}
            delay={1.3}
            duration={5.5}
            drift={-5}
            tilt={-0.8}
            from={[0, 22]}
          >
            <Chip label="Easy to contact" />
          </Piece>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
          <Chip label="Looks current" />
          <Chip label="Works on phones" />
          <Chip label="Easy to contact" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play animation" : "Pause animation"}
        title={paused ? "Play animation" : "Pause animation"}
        className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:hidden"
      >
        {paused ? (
          <Play aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Pause aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
