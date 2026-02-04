"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdoqerjg");
  if (state.succeeded) {
    return (
      <p className="rounded-xl bg-accent/10 px-5 py-4 text-base font-semibold text-ink-900">
        Thanks! We will be in touch soon.
      </p>
    );
  }
  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-ink-700">
          Email Address
        </label>
        <input
          className="w-full rounded-xl border border-ink-900/20 bg-[#f8fafb] px-4 py-3 text-base text-ink-900 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent/15"
          id="email"
          type="email"
          name="email"
          placeholder="you@company.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-sm text-[#c5283d]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-ink-700">
          Message
        </label>
        <textarea
          className="min-h-[140px] w-full resize-y rounded-xl border border-ink-900/20 bg-[#f8fafb] px-4 py-3 text-base text-ink-900 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent/15"
          id="message"
          name="message"
          placeholder="Tell us about your line and goals."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-[#c5283d]"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-fit rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Submit
      </button>
    </form>
  );
}
