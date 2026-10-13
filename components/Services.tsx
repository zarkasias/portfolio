"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, Code2, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Website Redesign & Modernization",
    description:
      "Give your existing website a fresh, professional look without unnecessarily rebuilding everything. I'll improve the layout, navigation, typography, and mobile experience so your business makes a stronger impression.",
    icon: Paintbrush,
    features: [
      "Visual refreshes",
      "Layout improvements",
      "Mobile-friendly design",
      "Better usability",
    ],
  },
  {
    title: "Front-End Cleanup & Improvement",
    description:
      "A website can look fine on the surface while still being difficult to update or maintain. I'll identify and address problems in the existing front-end code, improve performance where possible, and make future changes easier.",
    icon: Code2,
    features: [
      "Code cleanup",
      "Performance improvements",
      "Responsive fixes",
      "Accessibility",
    ],
  },
];

export function Services() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const viewport = {
    once: true,
    amount: 0.15,
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 py-14"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mb-12"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            What I Do
          </span>

          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Improve the website you already have.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Whether your website needs a fresh look, a better mobile experience,
            or improvements behind the scenes, I can help you make the most of
            what you've already built.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(
            ({ title, description, icon: Icon, features }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={fadeUp}
                transition={{
                  duration: 0.6,
                  delay: reducedMotion ? 0 : index * 0.15,
                  ease: "easeOut",
                }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg md:p-8 lg:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                <h3 className="mb-4 font-heading text-2xl font-semibold tracking-tight text-card-foreground">
                  {title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>

                <div className="mt-auto border-t border-border pt-6">
                  <ul className="grid gap-3 lg:grid-cols-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ),
          )}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Not sure what your website needs?
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Let's talk about what you'd like to improve.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Discuss Your Website
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
