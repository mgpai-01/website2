"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, Warning } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "submitting" | "success" | "error";

const palletTypes = [
  "48×40 GMA — New",
  "48×40 GMA — Recycled",
  "Custom dimensions",
  "Heat-treated / Export (ISPM-15)",
  "Skids / Heavy-duty",
  "Not sure — help me spec",
];

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      const required = ["name", "company", "email", "type", "quantity"];
      for (const k of required) {
        if (!String(formData.get(k) ?? "").trim()) {
          throw new Error(`Please fill in ${k}.`);
        }
      }
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-5xl border hairline bg-white p-10 text-center shadow-diffusion">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-moss-100 text-moss-700">
          <CheckCircle size={28} weight="duotone" />
        </div>
        <h3 className="mt-6 text-2xl font-medium tracking-tight text-zinc-950 md:text-3xl">
          Quote request received.
        </h3>
        <p className="mt-3 text-zinc-600">
          Our team will reach out within one business day with pricing and lead
          time. Need it sooner? Call us at{" "}
          <a href="tel:+19095550184" className="font-medium text-zinc-950 underline">
            (909) 555-0184
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center gap-2 rounded-full border hairline bg-stone-50 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-transform active:-translate-y-[1px]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-5xl border hairline bg-white p-7 shadow-diffusion md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Diana Rivas" required />
        <Field
          label="Company"
          name="company"
          placeholder="IE Distribution Co."
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="diana@iedistribution.com"
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(909) 555-0118"
        />

        <div className="md:col-span-2">
          <Label>Pallet type</Label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {palletTypes.map((t, i) => (
              <label
                key={t}
                className="flex cursor-pointer items-center gap-3 rounded-2xl border hairline bg-stone-50 px-4 py-3 text-sm text-zinc-800 transition-all hover:bg-white has-[:checked]:border-moss-500 has-[:checked]:bg-moss-50 has-[:checked]:text-moss-900"
              >
                <input
                  type="radio"
                  name="type"
                  value={t}
                  defaultChecked={i === 0}
                  className="h-4 w-4 accent-moss-600"
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        <Field
          label="Quantity"
          name="quantity"
          placeholder="2,400 units"
          required
        />
        <Field
          label="Delivery ZIP"
          name="zip"
          placeholder="92337"
        />

        <div className="md:col-span-2">
          <Label>Tell us about the load</Label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Load weight, destination, frequency, dimensions if custom…"
            className="mt-2 w-full resize-none rounded-2xl border hairline bg-stone-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-moss-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-200"
          />
        </div>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <Warning size={18} weight="duotone" className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-zinc-500">
          We respond within one business day. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-stone-50 transition-all active:-translate-y-[1px] disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-stone-50/30 border-t-stone-50" />
              Sending…
            </>
          ) : (
            <>
              Send quote request
              <ArrowUpRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600">
      {children}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border hairline bg-stone-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-moss-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-200"
      />
    </label>
  );
}
