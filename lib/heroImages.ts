import { getImageProps, type StaticImageData } from "next/image";
import hero1 from "@/public/images/hero/hero-1.jpg";
import hero2 from "@/public/images/hero/hero-2.jpg";
import hero3 from "@/public/images/hero/hero-3.jpg";
import hero4 from "@/public/images/hero/hero-4.jpg";

/** Cookie that remembers which hero photo the visitor picked (1-based). */
export const HERO_COOKIE = "hero_image";

/** Must match the `sizes` on the hero <Image>, so the preload is reused. */
export const HERO_SIZES = "(min-width: 1024px) calc(100vw - 3rem), 100vw";

export type HeroImage = {
  /** Sharp photo for the hero. */
  photo: StaticImageData;
  /** Pre-blurred copy for the frame behind the page. */
  blur: string;
};

export const heroImages: HeroImage[] = [
  { photo: hero1, blur: "/images/hero/hero-1-blur.jpg" },
  { photo: hero2, blur: "/images/hero/hero-2-blur.jpg" },
  { photo: hero3, blur: "/images/hero/hero-3-blur.jpg" },
  { photo: hero4, blur: "/images/hero/hero-4-blur.jpg" },
];

/**
 * Runs in <head> before first paint: reads the cookie, sets
 * <html data-hero="n">, and preloads that photo and its blur so the right
 * image is the first one fetched. CSS shows only the matching layer.
 */
export function heroBootScript(): string {
  const preloads = heroImages.map(({ photo, blur }) => {
    const { props } = getImageProps({
      src: photo,
      alt: "",
      fill: true,
      sizes: HERO_SIZES,
    });
    return [props.srcSet ?? "", blur];
  });

  return `(function(){try{
var P=${JSON.stringify(preloads)};
var m=document.cookie.match(/(?:^|; )${HERO_COOKIE}=([1-${heroImages.length}])(?:;|$)/);
var n=m?+m[1]:1;
document.documentElement.setAttribute("data-hero",String(n));
var h=document.head,p=P[n-1];
var a=document.createElement("link");a.rel="preload";a.as="image";a.setAttribute("imagesrcset",p[0]);a.setAttribute("imagesizes",${JSON.stringify(HERO_SIZES)});a.setAttribute("fetchpriority","high");h.appendChild(a);
var b=document.createElement("link");b.rel="preload";b.as="image";b.href=p[1];h.appendChild(b);
}catch(e){}})();`;
}
