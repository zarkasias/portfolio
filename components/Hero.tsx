import Image from "next/image";
import { HeroCheckup } from "./HeroCheckup";
import { heroCheckup } from "@/data/heroCheckup";
import { HeroPicker } from "./HeroPicker";
import { heroImages, HERO_SIZES } from "@/lib/heroImages";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-40 pb-12 md:pb-16"
    >
      <div className="hero-photo absolute inset-0">
        {/* One layer per photo. CSS shows the one named by <html data-hero>,
            set before paint from the saved cookie. Hidden layers stay
            display:none, so their lazy images aren't fetched until the
            picker is used. */}
        {heroImages.map(({ photo }, i) => (
          <div key={i} data-hero-layer={i + 1} className="absolute inset-0">
            <Image
              src={photo}
              alt=""
              fill
              placeholder="blur"
              sizes={HERO_SIZES}
              className="object-cover object-[50%_45%]"
            />
          </div>
        ))}
        {/* A soft wash of light where the panel sits, so the glass shows
            colour rather than dark detail. The right side stays clear. */}
        <div className="absolute inset-0 z-[3] bg-white/20 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/30 lg:via-white/15 lg:via-45% lg:to-transparent lg:to-60%" />
      </div>

      <div className="page-width hero-grid relative pt-4 sm:pt-8 lg:min-h-[min(52rem,calc(100svh-7rem))] lg:py-16">
        {/* The wrapper lets the photo picker hang off the panel: its bottom
            edge lines up with the panel's, its right edge with the page's
            content edge. The wrapper has no backdrop-filter of its own, so
            the picker's blur still sees the photo. */}
        <div className="relative">
          <div className="glass-panel rounded-3xl p-6 sm:p-10">
            <h1
              id="hero-heading"
              className="font-heading text-[2.75rem] font-medium leading-[1.04] tracking-[-0.02em] text-foreground [text-wrap:balance] sm:text-6xl xl:text-[4rem]"
            >
              A better website for your small business, without starting over
            </h1>

            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-foreground">
              I&apos;m David Chambers, a website specialist with 27+ years of
              experience. I help small businesses modernize how their sites
              look, fix problems on phones, and make it easier for customers to
              call, book, or get in touch.
            </p>

            <a href="#contact" className="btn-cta mt-8 w-full sm:w-auto">
              Tell me about your site
            </a>

            <ul className="mt-8 space-y-1 border-t border-foreground/15 pt-6 text-foreground">
              <li>I work with your existing site.</li>
              <li>
                Based in Northern Virginia, working with businesses anywhere.
              </li>
            </ul>
          </div>

          {/* The picker sits in the empty right-hand cell. When the checkup
              is approved that cell is taken, so the picker needs a new
              spot before it comes back. */}
          {!heroCheckup.approved && <HeroPicker />}
        </div>

        {/* Until the HOA board approves the checkup, the photo itself is the
            visual on the right. */}
        {heroCheckup.approved && (
          <div className="rounded-3xl bg-white/85 p-4 shadow-panel backdrop-blur-xl sm:p-6">
            <HeroCheckup />
          </div>
        )}
      </div>
    </section>
  );
};
