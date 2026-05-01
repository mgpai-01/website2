import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Handshake,
  Factory,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About — Pallet Manufacturer in Fontana, CA",
  description:
    "Manufacturing Green Products is a family-run pallet manufacturer in Fontana, CA. Since 2008 we've supplied new, recycled, and custom wood pallets to Inland Empire warehouses, distributors, and exporters.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO — asymmetric */}
      <section className="relative overflow-hidden border-b hairline bg-stone-50">
        <div className="grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-12 md:px-8 md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
              About MGP
            </span>
            <h1 className="mt-4 text-[2.4rem] font-medium leading-[1] tracking-tighter text-zinc-950 md:text-[5rem]">
              A pallet shop
              <br />
              <span className="text-zinc-500">with a sawmill ethic.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Manufacturing Green Products started in 2008 with two trucks, a
              forklift, and a stubborn belief that a pallet shouldn&apos;t end
              its life in a landfill. Seventeen years later we&apos;re one of
              Fontana&apos;s largest pallet manufacturers — and 92% of every
              board we ship still gets a second life.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "2008", v: "Year founded" },
                { k: "120k+", v: "Pallets / month" },
                { k: "38 mi", v: "Same-day radius" },
                { k: "92%", v: "Recycled fiber" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-4xl border hairline bg-white p-6 shadow-diffusion transition-transform hover:-translate-y-[1px]"
                >
                  <div className="font-mono text-3xl tracking-tight text-zinc-950">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b hairline bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
              Our story
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter text-zinc-950 md:text-5xl">
              Built on a yard. Run by family.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-zinc-700 md:col-span-8 md:text-lg">
            <p>
              The Inland Empire is the busiest logistics corridor in the
              country. Every day, millions of pallets move through Fontana,
              Ontario, Rialto, and the warehouses lining the I-10. When we
              opened in 2008, the local pallet supply was a patchwork of
              brokers, middlemen, and yards that didn&apos;t answer the phone
              after 4 PM.
            </p>
            <p>
              We started by buying recovered pallets out of warehouse alleys,
              repairing them in a single bay, and delivering them back the
              next morning at a price that made sense. As volume grew, so did
              the yard — first a kiln, then an assembly line, then a fleet of
              flatbeds.
            </p>
            <p>
              The name was deliberate. &ldquo;Manufacturing Green
              Products&rdquo; isn&apos;t a tagline — it&apos;s an audit. Every
              pallet we ship is measured against the alternative we
              displaced: virgin lumber, a landfill trip, or both.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-700">
                What we stand on
              </span>
              <h2 className="mt-3 text-4xl font-medium tracking-tighter text-zinc-950 md:text-6xl">
                Four principles.
                <br />
                <span className="text-zinc-500">No compromises.</span>
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: <Leaf size={22} weight="duotone" />,
                eyebrow: "Sustainability",
                title: "A board never wasted",
                body: "We sort, repair, and re-deck before we cut anything new. Recycled isn&apos;t a tier — it&apos;s the default.",
              },
              {
                icon: <Factory size={22} weight="duotone" />,
                eyebrow: "Craft",
                title: "Built like it has to last",
                body: "Every pallet leaves the line load-tested. We&apos;d rather lose the order than ship a unit that fails on your dock.",
              },
              {
                icon: <Handshake size={22} weight="duotone" />,
                eyebrow: "Service",
                title: "One yard. One number.",
                body: "Quote, build, deliver, recover — all under one roof. No three-way calls with brokers you&apos;ve never met.",
              },
              {
                icon: <UsersThree size={22} weight="duotone" />,
                eyebrow: "People",
                title: "A local team, paid right",
                body: "Sixty-plus full-time team members in Fontana. We hire from the neighborhoods we ship to.",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-5xl border hairline bg-white p-8 shadow-diffusion transition-transform hover:-translate-y-[1px] md:p-10"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-stone-50 text-moss-700">
                    {p.icon}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    {p.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-zinc-950 md:text-3xl">
                  {p.title}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed text-zinc-700"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline bg-zinc-950 text-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tighter md:text-5xl">
              Tour the yard.
            </h2>
            <p className="mt-3 max-w-md text-stone-400">
              We host warehouse and ops teams every Thursday at 10 AM.
              Coffee&apos;s on us — bring your spec sheet.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-6 py-3.5 text-sm font-medium text-zinc-950 transition-transform active:-translate-y-[1px]"
          >
            Schedule a visit
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
