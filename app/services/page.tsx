import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Stack,
  Recycle,
  Ruler,
  ShieldCheck,
  Truck,
  Leaf,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Pallet Services in Fontana, CA",
  description:
    "Complete pallet manufacturing services in Fontana, California: new GMA pallets, recycled & remanufactured pallets, custom builds, ISPM-15 export heat treatment, and pickup recycling for the Inland Empire.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "new",
    icon: <Stack size={22} weight="duotone" />,
    eyebrow: "01 / Manufacturing",
    title: "New wood pallets",
    lead:
      "Built on the floor in Fontana from kiln-dried lumber, milled to the exact spec your operation runs.",
    bullets: [
      "48×40 GMA, block, stringer, two-way & four-way",
      "Nailed or screwed assembly, branded on request",
      "Load ratings to 4,600 lbs static / 2,800 lbs dynamic",
      "Volume runs from 500 to 50,000+ units",
    ],
  },
  {
    id: "recycled",
    icon: <Recycle size={22} weight="duotone" />,
    eyebrow: "02 / Recycled",
    title: "Recycled & remanufactured pallets",
    lead:
      "A-, B-, and combo-grade pallets sorted, repaired, and re-decked. Every unit is load-tested before it leaves the yard.",
    bullets: [
      "Grade A, B, and economy combo tiers",
      "Re-decked stringers with new top and bottom boards",
      "Inspected for stress fractures, mold, and contamination",
      "Priced to undercut new without sacrificing reliability",
    ],
  },
  {
    id: "custom",
    icon: <Ruler size={22} weight="duotone" />,
    eyebrow: "03 / Custom",
    title: "Custom-built pallets & skids",
    lead:
      "We build to drawing. Send us a CAD file, a load weight, and a destination — we&apos;ll engineer the rest.",
    bullets: [
      "Aerospace, medical, automotive, and industrial skids",
      "Heavy-duty bolted assembly available",
      "Anti-skid surfaces, custom stenciling, and color-coded grading",
      "Prototype turnaround in 3 to 5 business days",
    ],
  },
  {
    id: "export",
    icon: <ShieldCheck size={22} weight="duotone" />,
    eyebrow: "04 / Export",
    title: "Heat-treated ISPM-15 export pallets",
    lead:
      "On-site kilns and a registered IPPC stamp mean export-ready pallets ship from our yard the same week you order.",
    bullets: [
      "ISPM-15 compliant heat treatment (56°C core, 30 min)",
      "IPPC-stamped, audit-ready paperwork included",
      "Compatible with all sea & air freight standards",
      "Bulk treatment for customer-supplied pallets available",
    ],
  },
  {
    id: "delivery",
    icon: <Truck size={22} weight="duotone" />,
    eyebrow: "05 / Logistics",
    title: "Same-day Inland Empire delivery",
    lead:
      "Order before 11 AM PST and our owned fleet drops at your dock the same day, anywhere within a 38-mile radius of Fontana.",
    bullets: [
      "Fontana, Rancho Cucamonga, Ontario, Riverside, San Bernardino",
      "Will-call pickup available 6 AM to 6 PM weekdays",
      "Standing weekly delivery contracts at preferred pricing",
      "Live ETAs and signed BOLs on every drop",
    ],
  },
  {
    id: "recycling",
    icon: <Leaf size={22} weight="duotone" />,
    eyebrow: "06 / Sustainability",
    title: "Pallet pickup & recycling program",
    lead:
      "Got a yard full of broken pallets? We&apos;ll haul them, pay for the salvageable ones, and divert the rest from landfill.",
    bullets: [
      "Free pickup for qualifying volumes",
      "Per-pallet payment on resellable cores",
      "Closed-loop program for repeat shippers",
      "Itemized sustainability reporting for ESG audits",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b hairline bg-stone-50">
        <div className="grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-16 md:grid-cols-12 md:px-8 md:pb-24 md:pt-24">
          <div className="md:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
              Services
            </span>
            <h1 className="mt-4 text-[2.4rem] font-medium leading-[1] tracking-tighter text-zinc-950 md:text-[5rem]">
              The full pallet program
              <br />
              <span className="text-zinc-500">for Inland Empire shippers.</span>
            </h1>
          </div>
          <p className="self-end text-base leading-relaxed text-zinc-700 md:col-span-4">
            New, recycled, custom, export, and recovery — all out of one
            Fontana yard, with one phone number and one team accountable for
            your dock.
          </p>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="space-y-6">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="group grid gap-8 rounded-5xl border hairline bg-stone-50 p-8 transition-all hover:-translate-y-[1px] hover:bg-white md:grid-cols-12 md:p-12"
              >
                <header className="md:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-moss-700 ring-1 ring-zinc-200/70">
                      {s.icon}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-medium tracking-tighter text-zinc-950 md:text-5xl">
                    {s.title}
                  </h2>
                </header>

                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
                    {s.lead}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-zinc-700"
                      >
                        <CheckCircle
                          size={18}
                          weight="duotone"
                          className="mt-0.5 shrink-0 text-moss-600"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-stone-50 transition-transform active:-translate-y-[1px]"
                  >
                    Quote {s.title.toLowerCase()}
                    <ArrowUpRight size={15} weight="bold" />
                  </Link>
                </div>

                <div className="md:col-span-12">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                    /{String(i + 1).padStart(2, "0")} of{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t hairline bg-zinc-950 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-400">
              Service area
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter text-stone-50 md:text-5xl">
              We deliver to your dock,
              <br />
              not a freight terminal.
            </h2>
            <p className="mt-5 max-w-md text-sm text-stone-400">
              From our Fontana yard, our fleet covers the Inland Empire and
              greater LA basin daily. Outside our same-day window? Ask about
              our weekly standing-order program.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-800 md:col-span-7 md:grid-cols-3">
            {[
              "Fontana",
              "Rancho Cucamonga",
              "Ontario",
              "Rialto",
              "Riverside",
              "San Bernardino",
              "Jurupa Valley",
              "Bloomington",
              "Chino",
              "Mira Loma",
              "Pomona",
              "City of Industry",
            ].map((city) => (
              <li
                key={city}
                className="bg-zinc-950 px-6 py-5 text-sm font-medium text-stone-200 transition-transform hover:-translate-y-[1px]"
              >
                {city}
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-500">
                  CA · same-day
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
