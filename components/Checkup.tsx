"use client";

import { useActionState } from "react";

import {
  requestCheckup,
  type CheckupField,
  type CheckupState,
} from "@/app/contact/actions";
import { Input } from "@/components/ui/input";

const initialState: CheckupState = { status: "idle" };

const labelClass = "mb-2 block text-sm font-medium text-foreground";
const controlClass = "bg-card aria-[invalid=true]:border-destructive";

export function Checkup() {
  const [state, formAction, isPending] = useActionState(
    requestCheckup,
    initialState,
  );

  const errorProps = (name: CheckupField) => {
    const hasError = Boolean(state.fieldErrors?.[name]);
    return {
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? `checkup-${name}-error` : undefined,
    };
  };

  const errorText = (name: CheckupField) =>
    state.fieldErrors?.[name] ? (
      <p id={`checkup-${name}-error`} className="mt-2 text-sm text-destructive">
        {state.fieldErrors[name]}
      </p>
    ) : null;

  return (
    <section
      id="checkup"
      aria-labelledby="checkup-heading"
      className="scroll-mt-16 bg-secondary/80 py-16 md:py-20"
    >
      <div className="page-width grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-16">
        <div>
          <h2
            id="checkup-heading"
            className="font-heading text-4xl font-medium leading-[1.1] [text-wrap:balance] md:text-5xl"
          >
            Get a free site checkup
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
            Within 2 business days, I&apos;ll send you a short video or report on
            what&apos;s holding your site back and what I&apos;d fix first. No call, no
            obligation.
          </p>
        </div>

        {state.status === "success" ? (
          <div
            role="status"
            className="rounded-2xl border border-border bg-card/80 p-6 shadow-card"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Thanks, I&apos;m on it
            </h3>
            <p className="mt-3 leading-relaxed text-foreground">
              Your checkup will arrive by email within 2 business days.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            className="rounded-2xl border border-border bg-card/80 p-6 shadow-card"
          >
            {/* Honeypot: hidden from people and assistive technology. */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="checkup_leave_blank">Leave this field blank</label>
              <input
                id="checkup_leave_blank"
                name="leave_blank"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="checkup-website" className={labelClass}>
                  Your website address
                </label>
                <Input
                  id="checkup-website"
                  name="website"
                  type="text"
                  inputMode="url"
                  placeholder="yourbusiness.com"
                  autoComplete="url"
                  required
                  maxLength={200}
                  defaultValue={state.values?.website}
                  className={controlClass}
                  {...errorProps("website")}
                />
                {errorText("website")}
              </div>
              <div>
                <label htmlFor="checkup-email" className={labelClass}>
                  Where should I send it?
                </label>
                <Input
                  id="checkup-email"
                  name="email"
                  type="email"
                  placeholder="you@yourbusiness.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  defaultValue={state.values?.email}
                  className={controlClass}
                  {...errorProps("email")}
                />
                {errorText("email")}
              </div>
            </div>

            {state.status === "error" && state.message && (
              <p role="alert" className="mt-4 text-sm text-destructive">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="btn-cta mt-6 w-full sm:w-auto"
            >
              {isPending ? "Sending..." : "Send me my free checkup"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
