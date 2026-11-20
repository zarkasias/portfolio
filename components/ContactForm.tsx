"use client";

import { useActionState } from "react";

import {
  sendContactMessage,
  type ContactField,
  type ContactState,
} from "@/app/contact/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactState = { status: "idle" };

const labelClass = "mb-2 block text-sm font-medium text-foreground";
const controlClass = "bg-card aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div role="status">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          Thanks, your message is on its way.
        </h2>
        <p className="mt-3 leading-relaxed text-foreground">
          I&apos;ll reply by email within one business day.
        </p>
      </div>
    );
  }

  const errorProps = (name: ContactField) => {
    const hasError = Boolean(state.fieldErrors?.[name]);
    return {
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? `${name}-error` : undefined,
    };
  };

  const errorText = (name: ContactField) =>
    state.fieldErrors?.[name] ? (
      <p id={`${name}-error`} className="mt-2 text-sm text-destructive">
        {state.fieldErrors[name]}
      </p>
    ) : null;

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="leave_blank">Leave this field blank</label>
        <input
          id="leave_blank"
          name="leave_blank"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            defaultValue={state.values?.name}
            className={`h-11 ${controlClass}`}
            {...errorProps("name")}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={state.values?.email}
            className={`h-11 ${controlClass}`}
            {...errorProps("email")}
          />
          {errorText("email")}
        </div>
      </div>

      <div>
        <label htmlFor="website" className={labelClass}>
          Website address (optional)
        </label>
        <Input
          id="website"
          name="website"
          inputMode="url"
          autoComplete="url"
          maxLength={200}
          defaultValue={state.values?.website}
          className={`h-11 ${controlClass}`}
          {...errorProps("website")}
        />
        {errorText("website")}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What would you like to improve?
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          defaultValue={state.values?.message}
          className={controlClass}
          {...errorProps("message")}
        />
        {errorText("message")}
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="btn-cta w-full disabled:opacity-60 sm:w-auto"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
