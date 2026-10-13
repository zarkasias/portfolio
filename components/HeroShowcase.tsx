"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Layers3, Menu } from "lucide-react";

export function HeroShowcase() {
  const target = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const [fitsViewport, setFitsViewport] = useState(false);

  useEffect(() => {
    const element = scene.current;
    if (!element) return;

    // Retain the largest observed scene height at each viewport width.
    // This prevents pinning from switching repeatedly as typography changes.
    let largestHeight = 0;
    let previousWidth = window.innerWidth;
    let frame = 0;

    const measure = () => {
      const width = window.innerWidth;

      if (width !== previousWidth) {
        largestHeight = 0;
        previousWidth = width;
      }

      largestHeight = Math.max(
        largestHeight,
        element.getBoundingClientRect().height,
      );

      const viewportHeight = Math.min(
        window.innerHeight,
        window.visualViewport?.height ?? window.innerHeight,
      );

      // Include the sticky top offset and extra breathing room.
      setFitsViewport(largestHeight + 160 <= viewportHeight);
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(element);

    window.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener("resize", scheduleMeasure);
    scheduleMeasure();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener("resize", scheduleMeasure);
    };
  }, []);

  const canPin = fitsViewport && !reducedMotion;

  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = target.current;
    const sceneElement = scene.current;
    if (!element || !sceneElement) return;

    let frame: number | null = null;

    const updateProgress = () => {
      frame = null;

      if (reducedMotion) {
        scrollYProgress.set(1);
        return;
      }

      const bounds = element.getBoundingClientRect();
      const viewportHeight = Math.min(
        window.innerHeight,
        window.visualViewport?.height ?? window.innerHeight,
      );

      let nextProgress: number;

      if (canPin) {
        // The sticky scene moves through the space remaining below it.
        const sceneHeight = sceneElement.getBoundingClientRect().height;
        const travel = Math.max(1, bounds.height - sceneHeight);

        nextProgress = (80 - bounds.top) / travel;
      } else {
        // Start when the section reaches 80% of the viewport.
        // Finish when it reaches 15%, while its content is still visible.
        const startPosition = viewportHeight * 0.55;
        const travel = Math.max(viewportHeight * 1.4, bounds.height * 1.1);

        nextProgress = (startPosition - bounds.top) / travel;
      }

      scrollYProgress.set(Math.max(0, Math.min(1, nextProgress)));
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(updateProgress);
    };

    // Capture also receives scroll events from nested scrolling elements.
    document.addEventListener("scroll", scheduleUpdate, {
      capture: true,
      passive: true,
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("scroll", scheduleUpdate);

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(element);
    observer.observe(sceneElement);

    scheduleUpdate();

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);

      observer.disconnect();
      document.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("scroll", scheduleUpdate);
    };
  }, [canPin, reducedMotion, scrollYProgress]);

  const progress = useTransform(scrollYProgress, [0.08, 0.86], [0, 1]);

  const pageColor = useTransform(progress, [0, 1], ["#ece3bf", "#ffffff"]);
  const inkColor = useTransform(progress, [0, 1], ["#78275f", "#263c34"]);
  const navColor = useTransform(progress, [0, 1], ["#cecbe4", "#f5f3ee"]);
  const navSize = useTransform(progress, [0, 1], [19, 12]);
  const navGap = useTransform(progress, [0, 1], [5, 24]);
  const logoSize = useTransform(progress, [0, 1], [15, 21]);

  const headingSize = useTransform(
    progress,
    [0, 1],
    ["clamp(18px, 2.1vw, 25px)", "clamp(30px, 4.5vw, 54px)"],
  );
  const headingLineHeight = useTransform(progress, [0, 1], [1.65, 1.04]);
  const headingSpacing = useTransform(
    progress,
    [0, 1],
    ["0.055em", "-0.045em"],
  );
  const headingX = useTransform(progress, [0, 1], [10, 0]);
  const copySize = useTransform(progress, [0, 1], [17, 14]);
  const copyColor = useTransform(progress, [0, 1], ["#713362", "#647168"]);
  const textY = useTransform(progress, [0, 1], [16, 0]);

  const buttonColor = useTransform(progress, [0, 1], ["#8e3475", "#263c34"]);
  const buttonRadius = useTransform(progress, [0, 1], [0, 8]);
  const buttonX = useTransform(progress, [0, 1], [12, 0]);

  const imageScale = useTransform(progress, [0, 1], [0.76, 1]);
  const imageY = useTransform(progress, [0, 1], [16, 0]);
  const imageRadius = useTransform(progress, [0, 1], [0, 16]);
  const imageFilter = useTransform(
    progress,
    [0, 1],
    ["saturate(0.25) contrast(1.3)", "saturate(0.9) contrast(1)"],
  );
  const gutter = useTransform(progress, [0, 1], [10, 28]);

  const originalOpacity = useTransform(progress, [0.3, 0.65], [1, 0]);
  const finishedOpacity = useTransform(progress, [0.3, 0.65], [0, 1]);

  return (
    <section
      ref={target}
      id="approach"
      aria-labelledby="showcase-heading"
      className={
        canPin
          ? "relative h-[260svh] w-full scroll-mt-20 sm:h-[300svh]"
          : "relative w-full scroll-mt-20"
      }
    >
      <div ref={scene} className={canPin ? "sticky top-20 py-4" : "py-4"}>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Layers3 aria-hidden="true" className="h-4 w-4" />
              The Transformation
            </p>

            <h2
              id="showcase-heading"
              className="font-heading text-2xl font-semibold tracking-tight md:text-3xl"
            >
              From outdated to outstanding.
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Thoughtful design. Cleaner structure. A better experience.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            {reducedMotion
              ? "The refined result"
              : "Scroll to redesign · scroll back to reverse"}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_70px_-35px_rgba(30,41,59,0.4)]">
          <div className="flex items-center gap-4 border-b border-border bg-white px-4 py-3">
            <div aria-hidden="true" className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>

            <span className="flex-1 text-center text-[10px] text-slate-500">
              forma.example / illustrative website
            </span>
          </div>

          <motion.div
            aria-hidden="true"
            className="overflow-hidden"
            style={{
              backgroundColor: reducedMotion ? "#f5f3ee" : pageColor,
              color: reducedMotion ? "#263c34" : inkColor,
            }}
          >
            <motion.div
              className="flex min-h-16 items-center justify-between gap-3 border-b border-black/10 px-4 py-3 sm:px-7"
              style={{
                backgroundColor: reducedMotion ? "#f5f3ee" : navColor,
              }}
            >
              <motion.span
                className="font-semibold tracking-tight"
                style={{ fontSize: reducedMotion ? 21 : logoSize }}
              >
                forma<span className="opacity-50">.</span>
              </motion.span>

              <motion.div
                className="hidden items-center sm:flex"
                style={{
                  gap: reducedMotion ? 24 : navGap,
                  fontSize: reducedMotion ? 12 : navSize,
                }}
              >
                <span>Spaces</span>
                <span>Studio</span>
                <span>Contact</span>
              </motion.div>

              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-current/20 sm:hidden">
                <Menu className="h-4 w-4" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 items-center py-5 sm:grid-cols-2 sm:py-10"
              style={{
                paddingLeft: reducedMotion ? 28 : gutter,
                paddingRight: reducedMotion ? 28 : gutter,
                gap: reducedMotion ? 28 : gutter,
              }}
            >
              <motion.div
                className="min-w-0"
                style={{ y: reducedMotion ? 0 : textY }}
              >
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] opacity-70 sm:mb-4">
                  Considered interiors
                </p>

                <motion.p
                  className="max-w-sm font-heading font-medium"
                  style={{
                    fontSize: reducedMotion
                      ? "clamp(30px, 4.5vw, 54px)"
                      : headingSize,
                    lineHeight: reducedMotion ? 1.04 : headingLineHeight,
                    letterSpacing: reducedMotion ? "-0.045em" : headingSpacing,
                    x: reducedMotion ? 0 : headingX,
                  }}
                >
                  Spaces for
                  <br />
                  a slower
                  <br />
                  way of living.
                </motion.p>

                <motion.p
                  className="mt-5 max-w-xs leading-relaxed"
                  style={{
                    fontSize: reducedMotion ? 14 : copySize,
                    color: reducedMotion ? "#647168" : copyColor,
                  }}
                >
                  Natural materials. Thoughtful details. Rooms that feel
                  unmistakably like you.
                </motion.p>

                <motion.div
                  className="mt-6 inline-flex items-center gap-3 px-3 py-3 text-[10px] font-medium text-white sm:px-5 sm:text-xs"
                  style={{
                    backgroundColor: reducedMotion ? "#263c34" : buttonColor,
                    borderRadius: reducedMotion ? 8 : buttonRadius,
                    x: reducedMotion ? 0 : buttonX,
                  }}
                >
                  Explore our spaces
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </motion.div>
              </motion.div>

              <motion.div
                className="relative h-40 overflow-hidden bg-[#d6cebf] sm:h-80 lg:h-96"
                style={{
                  scale: reducedMotion ? 1 : imageScale,
                  y: reducedMotion ? 0 : imageY,
                  borderRadius: reducedMotion ? 16 : imageRadius,
                  filter: reducedMotion
                    ? "saturate(0.9) contrast(1)"
                    : imageFilter,
                }}
              >
                {/* An architectural illustration built entirely with Tailwind. */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e7e0d4] via-[#d6cebf] to-[#bbb2a2]" />

                <div className="absolute left-[12%] top-[10%] h-[58%] w-[45%] overflow-hidden rounded-t-full border-[6px] border-[#eee9df] bg-gradient-to-b from-[#b5c3bd] to-[#e6e9dc]">
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-[#eee9df]" />
                  <div className="absolute inset-x-0 top-1/2 h-1 bg-[#eee9df]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-[#b2a38b] to-[#c3b49d]" />

                <div className="absolute bottom-[17%] right-[8%] h-[25%] w-[66%] rounded-t-2xl rounded-b-lg bg-[#f0ebe0] shadow-[0_16px_22px_-12px_rgba(60,50,35,0.5)]">
                  <div className="absolute left-[8%] top-[12%] h-[48%] w-[38%] rounded-lg bg-[#e0d8ca]" />
                  <div className="absolute right-[8%] top-[12%] h-[48%] w-[38%] rounded-lg bg-[#d4cebf]" />
                  <div className="absolute inset-x-[6%] bottom-[12%] h-[28%] rounded bg-[#e7e0d3]" />
                </div>

                <div className="absolute bottom-[10%] left-[13%] h-[12%] w-[33%] rounded-[50%] bg-[#725c44] shadow-lg" />
                <div className="absolute bottom-[5%] left-[27%] h-[10%] w-[4%] bg-[#725c44]" />
              </motion.div>
            </motion.div>

            <div className="flex justify-between gap-3 border-t border-black/10 px-4 py-4 text-[8px] uppercase tracking-widest opacity-70 sm:px-7 sm:text-[10px]">
              <span>Natural materials</span>
              <span>Lasting design</span>
              <span>Personal spaces</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-between gap-4 border-t border-border bg-white px-4 py-4 sm:px-6">
            <div aria-hidden="true" className="relative h-5 flex-1 text-xs">
              <motion.span
                className="absolute inset-0 text-muted-foreground"
                style={{ opacity: reducedMotion ? 0 : originalOpacity }}
              >
                Inconsistent. Crowded. Unbalanced.
              </motion.span>

              <motion.span
                className="absolute inset-0 font-medium text-primary"
                style={{ opacity: reducedMotion ? 1 : finishedOpacity }}
              >
                Considered. Clear. Cohesive.
              </motion.span>
            </div>

            <span className="hidden text-[10px] text-muted-foreground sm:inline">
              Same content. Better design.
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          An illustrative redesign showing improvements to layout, typography,
          and color.
        </p>
      </div>

      <p className="sr-only">
        A fictional interior-design website transforms from an awkward,
        inconsistent design into a refined layout. Scrolling reverses the
        changes. Reduced motion displays the finished design.
      </p>
    </section>
  );
}
