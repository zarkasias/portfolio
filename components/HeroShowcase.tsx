"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  LayoutDashboard,
  RefreshCw,
  Sparkles,
  Users,
} from "lucide-react";

const metrics = [
  { label: "Revenue", value: "$48,290", change: "+12.8%" },
  { label: "Orders", value: "1,284", change: "+8.2%" },
  { label: "Customers", value: "3,692", change: "+16.4%" },
];

const chartValues = [35, 58, 42, 75, 56, 88, 72];

export function HeroShowcase() {
  const [modern, setModern] = useState(false);
  const reducedMotion = useReducedMotion();

  const transition = reducedMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 180,
        damping: 24,
      };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl sm:p-5">
        {/* Browser toolbar */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />

          <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Interactive UI Concept
          </span>
        </div>

        {/* Application preview */}
        <motion.div
          layout
          transition={transition}
          className={
            modern
              ? "overflow-hidden rounded-xl bg-slate-50 text-slate-900"
              : "overflow-hidden rounded-sm bg-amber-50 text-stone-800"
          }
        >
          <div className="flex min-h-[330px]">
            {/* Sidebar */}

            <motion.aside
              layout
              transition={transition}
              className={
                modern
                  ? "w-16 shrink-0 bg-slate-800 p-2 sm:w-20"
                  : "w-24 shrink-0 bg-orange-800 p-2 sm:w-28"
              }
            >
              <motion.div
                layout
                transition={transition}
                className={
                  modern
                    ? "mb-8 flex h-9 items-center justify-center rounded-lg bg-sky-400 font-bold text-slate-900"
                    : "mb-8 bg-orange-200 p-2 text-center text-xs font-black text-stone-900"
                }
              >
                {modern ? "C" : "CRM"}
              </motion.div>

              {[
                { label: "Overview", icon: LayoutDashboard },
                { label: "Reports", icon: BarChart3 },
                { label: "Customers", icon: Users },
              ].map(({ label, icon: Icon }, index) => (
                <motion.div
                  layout
                  key={label}
                  transition={transition}
                  className={
                    modern
                      ? `mb-2 flex h-10 items-center justify-center rounded-lg ${
                          index === 0
                            ? "bg-slate-600 text-white"
                            : "text-slate-400"
                        }`
                      : "mb-2 border-b border-orange-300 px-1 py-3 text-[10px] font-bold text-white"
                  }
                >
                  {modern ? <Icon className="h-4 w-4" /> : label}
                </motion.div>
              ))}
            </motion.aside>

            {/* Dashboard content */}
            <motion.main
              layout
              transition={transition}
              className="min-w-0 flex-1 p-3 sm:p-5"
            >
              {/* Header */}
              <motion.div
                layout
                transition={transition}
                className={
                  modern
                    ? "mb-5 flex items-center justify-between gap-2"
                    : "mb-5 space-y-2"
                }
              >
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Business Overview
                  </p>

                  <motion.h3
                    layout
                    className={
                      modern
                        ? "text-xl font-bold tracking-tight"
                        : "text-xl font-black uppercase"
                    }
                  >
                    Dashboard
                  </motion.h3>
                </div>

                <motion.button
                  layout
                  type="button"
                  tabIndex={-1}
                  transition={transition}
                  className={
                    modern
                      ? "pointer-events-none rounded-lg bg-slate-800 px-3 py-2 text-[10px] text-white"
                      : "pointer-events-none border-2 border-red-500 bg-yellow-300 px-2 py-1 text-[10px] font-black"
                  }
                >
                  View Report
                </motion.button>
              </motion.div>

              {/* Metrics */}
              <motion.div
                layout
                transition={transition}
                className={
                  modern ? "grid grid-cols-3 gap-2" : "flex flex-wrap gap-1"
                }
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    layout
                    transition={transition}
                    className={
                      modern
                        ? "min-w-0 rounded-lg border border-slate-200 bg-white p-2 shadow-sm sm:p-3"
                        : `min-w-[65px] flex-1 border-2 border-stone-400 p-1.5 ${
                            ["bg-orange-300", "bg-rose-300", "bg-yellow-300"][
                              index
                            ]
                          }`
                    }
                  >
                    <p className="truncate text-[9px] font-medium">
                      {metric.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-bold sm:text-lg">
                      {metric.value}
                    </p>

                    <p
                      className={
                        modern
                          ? "mt-1 text-[9px] text-emerald-600"
                          : "mt-1 text-[9px] font-bold text-red-700"
                      }
                    >
                      {metric.change}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Charts and recent activity */}
              <motion.div
                layout
                transition={transition}
                className={
                  modern
                    ? "mt-4 grid grid-cols-[1.4fr_1fr] gap-2"
                    : "mt-3 flex flex-col gap-2"
                }
              >
                <motion.div
                  layout
                  transition={transition}
                  className={
                    modern
                      ? "min-w-0 rounded-lg border border-slate-200 bg-white p-3"
                      : "border-2 border-orange-400 bg-orange-100 p-2"
                  }
                >
                  <p className="mb-3 text-[10px] font-semibold">Performance</p>

                  <div className="flex h-20 items-end gap-1.5">
                    {chartValues.map((height, index) => (
                      <motion.div
                        key={index}
                        initial={false}
                        animate={{
                          height: `${
                            modern
                              ? height
                              : chartValues[(index * 3) % chartValues.length]
                          }%`,
                        }}
                        transition={transition}
                        className={
                          modern
                            ? "flex-1 rounded-t bg-sky-500"
                            : "flex-1 bg-orange-500"
                        }
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  layout
                  transition={transition}
                  className={
                    modern
                      ? "min-w-0 rounded-lg border border-slate-200 bg-white p-3"
                      : "border-2 border-rose-300 bg-pink-100 p-2"
                  }
                >
                  <p className="mb-3 text-[10px] font-semibold">
                    Recent Activity
                  </p>

                  {["New inquiry", "Project approved", "Report ready"].map(
                    (item) => (
                      <div
                        key={item}
                        className="mb-2 flex items-center gap-1 text-[9px]"
                      >
                        {modern && (
                          <Check className="h-3 w-3 shrink-0 text-emerald-500" />
                        )}
                        <span className="truncate">{item}</span>
                      </div>
                    ),
                  )}
                </motion.div>
              </motion.div>
            </motion.main>
          </div>
        </motion.div>

        {/* Interactive controls */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={modern ? "modern" : "legacy"}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                {modern ? (
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                ) : (
                  <RefreshCw className="h-4 w-4 text-orange-300" />
                )}

                {modern
                  ? "Clean, cohesive interface"
                  : "Cluttered, inconsistent UI"}
              </motion.p>
            </AnimatePresence>

            <p className="mt-1 text-xs text-slate-400">
              Illustrative front-end redesign
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModern((value) => !value)}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {modern ? "Show Before" : "Transform UI"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
